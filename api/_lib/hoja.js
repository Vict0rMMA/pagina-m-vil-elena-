/**
 * Convierte la hoja de Google "Catálogo Elena Velas y Aromas" en el objeto
 * `productos` que usa la web.
 *
 * Lo usan la función /api/catalogo (en Vercel) y las pruebas locales.
 * No tiene dependencias: sólo fetch y JavaScript.
 */

const HOJA_ID = '19HhkYRj7lqrT_Hep1nkK7I9FNWUKKVtWE0KJ_sSpbSs';

// Identificador interno de cada pestaña (el "gid" de la URL). Se usa la
// exportación por gid porque la otra vía (gviz) adivina el tipo de cada
// columna y deja vacías las celdas que no encajan.
const PESTANAS = { productos: '1140239801', precios: '1411330394' };

const CATEGORIAS = {
  'amor y amistad': 'amorYAmistad',
  'baby shower': 'celebracion',
  'primera comunion': 'primeraComunion',
  'navidad': 'navidad',
  'kit emprendedor': 'kitEmprendedor',
  'suvenirs': 'suvenirs',
};
const ORDEN = ['amorYAmistad', 'celebracion', 'primeraComunion', 'navidad', 'kitEmprendedor', 'suvenirs'];

// Muestra de color para los nombres que aparecen en las fichas. Un nombre
// nuevo sale con el dorado de la marca hasta que se añada aquí.
const COLORES = {
  blanca: '#F4F1EC', blanco: '#F4F1EC', pastel: '#E8B9BC', neon: '#A8E10C',
  roja: '#B3261E', rojo: '#B3261E', verde: '#2E6B3A', azul: '#2F5D9E', rosa: '#E8A0B4',
  dorada: '#C79B4A', dorado: '#C79B4A', plateada: '#C0C0C0', plateado: '#C0C0C0',
  negra: '#1F1F1F', negro: '#1F1F1F', morada: '#6B4A8F', morado: '#6B4A8F',
  amarilla: '#E8C547', amarillo: '#E8C547', naranja: '#E07B39', fucsia: '#C2185B',
};
const COLOR_DESCONOCIDO = '#D9C08A';

/** Minúsculas y sin acentos: "Primera Comunión" -> "primera comunion". */
function normalizar(texto) {
  return String(texto || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/** CSV de Google: comas, comillas dobles y saltos de línea dentro de celdas. */
function parsearCSV(texto) {
  const filas = [];
  let fila = [];
  let celda = '';
  let comillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') { celda += '"'; i++; } else comillas = false;
      } else celda += c;
    } else if (c === '"') comillas = true;
    else if (c === ',') { fila.push(celda); celda = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++;
      fila.push(celda); filas.push(fila); fila = []; celda = '';
    } else celda += c;
  }
  if (celda !== '' || fila.length) { fila.push(celda); filas.push(fila); }
  return filas;
}

/** Filas a objetos, por el título de la columna (sin acentos ni mayúsculas). */
function aObjetos(filas) {
  const cab = (filas[0] || []).map(normalizar);
  return filas.slice(1)
    .filter(f => f.some(c => c.trim() !== ''))
    .map(f => Object.fromEntries(cab.map((k, i) => [k, (f[i] || '').trim()])));
}

/** "$12.500", "12500", "12.500" -> 12500. Vacío o sin cifras -> null. */
function precio(texto) {
  const d = String(texto || '').replace(/[^\d]/g, '');
  return d ? parseInt(d, 10) : null;
}

/** "Altura: 14 cm; Diámetro: 3.2 cm" -> [{etiqueta, valor}, ...] */
function lista(texto, conEtiqueta) {
  return String(texto || '').split(';').map(s => s.trim()).filter(Boolean).map(parte => {
    if (!conEtiqueta) return parte;
    const i = parte.indexOf(':');
    return i === -1 ? { etiqueta: parte, valor: '' }
                    : { etiqueta: parte.slice(0, i).trim(), valor: parte.slice(i + 1).trim() };
  });
}

function construir(csvProductos, csvPrecios) {
  const avisos = [];
  const filasProd = aObjetos(parsearCSV(csvProductos));
  const filasPrec = aObjetos(parsearCSV(csvPrecios));

  // Precios agrupados por ID, en el orden de la hoja
  const porId = new Map();
  for (const r of filasPrec) {
    if (!r.id) continue;
    const d = precio(r.detal);
    const m = precio(r.mayorista);
    if (d === null && m === null) { avisos.push(`${r.id} / ${r.presentacion}: sin precio, se ignora`); continue; }
    if (!porId.has(r.id)) porId.set(r.id, []);
    porId.get(r.id).push({ nombre: r.presentacion || 'Unidad', detalle: r.detalle || null, detal: d, mayorista: m });
  }

  const productos = Object.fromEntries(ORDEN.map(k => [k, []]));
  const vistos = new Set();

  for (const p of filasProd) {
    if (!p.id || !p.nombre) continue;
    if (vistos.has(p.id)) { avisos.push(`${p.id}: ID repetido, se usa la primera fila`); continue; }
    vistos.add(p.id);
    if (normalizar(p.visible).startsWith('n')) continue;

    const categoria = CATEGORIAS[normalizar(p.categoria)];
    if (!categoria) { avisos.push(`${p.id}: categoría "${p.categoria}" desconocida, se omite`); continue; }

    const ops = porId.get(p.id) || [];
    if (!ops.length) { avisos.push(`${p.id}: sin precios, se omite`); continue; }

    const producto = {
      id: p.id, categoria, nombre: p.nombre, descripcion: p.descripcion || '',
      imagen: p.foto ? 'assets/productos/' + p.foto.replace(/^\/+/, '') : '',
    };

    const detal = ops.filter(o => o.detal !== null);
    const may = ops.filter(o => o.mayorista !== null);
    const medidas = lista(p.medidas, true);
    const colores = lista(p.colores, false)
      .map(n => ({ nombre: n, hex: COLORES[normalizar(n)] || COLOR_DESCONOCIDO }));
    const extras = medidas.length || p.empaque || p.disponible || colores.length || p.nota;
    const soloBolsaCaja = ops.every(o => /^(bolsa|caja)$/i.test(o.nombre));
    const rango = l => l.length ? { bolsa: Math.min(...l), caja: Math.max(...l) } : { bolsa: 0, caja: 0 };

    if (soloBolsaCaja && !extras && detal.length) {
      // Formato clásico: bolsa y caja, con su propio modal.
      const de = n => ops.find(o => o.nombre.toLowerCase() === n) || {};
      producto.precios = {
        detal: { bolsa: de('bolsa').detal || 0, caja: de('caja').detal || 0 },
        mayorista: { bolsa: de('bolsa').mayorista || 0, caja: de('caja').mayorista || 0 },
      };
    } else {
      const ficha = {};
      if (medidas.length) ficha.medidas = medidas;
      if (p.empaque) ficha.empaque = p.empaque;
      if (p.disponible) ficha.lote = p.disponible;
      if (colores.length) ficha.colores = colores;
      if (p.nota) ficha.nota = p.nota;
      const opcion = (o, campo) => ({ nombre: o.nombre, detalle: o.detalle, precio: o[campo] });

      if (!detal.length) {
        // Sólo mayorista: kits y suvenirs.
        ficha.opciones = may.map(o => opcion(o, 'mayorista'));
        producto.precios = { detal: { bolsa: 0, caja: 0 }, mayorista: rango(may.map(o => o.mayorista)) };
      } else {
        ficha.precios = { detal: detal.map(o => opcion(o, 'detal')), mayorista: may.map(o => opcion(o, 'mayorista')) };
        producto.precios = { detal: rango(detal.map(o => o.detal)), mayorista: rango(may.map(o => o.mayorista)) };
      }
      producto.ficha = ficha;
    }
    productos[categoria].push(producto);
  }

  for (const id of porId.keys()) {
    if (!vistos.has(id)) avisos.push(`${id}: tiene precios pero no está en Productos`);
  }
  return { productos, avisos };
}

async function descargar(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${HOJA_ID}/export?format=csv&gid=${gid}`;
  const r = await fetch(url, { redirect: 'follow' });
  if (!r.ok) throw new Error(`Google respondió ${r.status} para la pestaña ${gid}`);
  const texto = await r.text();
  // Si la hoja deja de ser pública, Google devuelve una página de acceso, no CSV.
  if (/^\s*<(!doctype|html)/i.test(texto)) throw new Error('La hoja no es pública');
  return texto;
}

async function leerHoja() {
  const [prod, prec] = await Promise.all([descargar(PESTANAS.productos), descargar(PESTANAS.precios)]);
  return construir(prod, prec);
}

module.exports = { leerHoja, construir, parsearCSV, precio };
