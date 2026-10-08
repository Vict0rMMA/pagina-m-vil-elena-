#!/usr/bin/env node
/**
 * Revisa los precios del catálogo y avisa de lo que no cuadra.
 *
 *     node herramientas/revisar-precios.js
 *
 * Comprueba, presentación por presentación:
 *   - que el mayorista no salga más caro que el detal (ni igual)
 *   - que dentro de un mismo tipo, lo grande no sea más barato que lo pequeño
 *   - que no haya precios en cero ni productos sin precio
 *   - que las dos copias del precio (ficha.precios y precios) digan lo mismo
 *
 * Sale con código 1 si encuentra algo, para poder usarlo antes de publicar.
 */
const fs = require('fs');
const path = require('path');

const RUTA = path.join(__dirname, '..', 'app.js');
const fmt = n => '$' + Number(n).toLocaleString('es-CO');

function leerCatalogo() {
  const s = fs.readFileSync(RUTA, 'utf8');
  const i = s.indexOf('const productos = {');
  if (i < 0) throw new Error('no encuentro `const productos` en app.js');
  let prof = 0, fin = -1;
  for (let k = s.indexOf('{', i); k < s.length; k++) {
    if (s[k] === '{') prof++;
    else if (s[k] === '}') { prof--; if (prof === 0) { fin = k + 1; break; } }
  }
  // eslint-disable-next-line no-eval
  return eval('(' + s.slice(s.indexOf('{', i), fin) + ')');
}

/** Devuelve [{etiqueta, detal, mayorista}] cotejando like con like. */
function paresDePrecio(p) {
  const pares = [];
  const f = p.ficha;

  if (f && f.precios && (f.precios.detal || []).length && (f.precios.mayorista || []).length) {
    const may = new Map(f.precios.mayorista.map(o => [o.nombre.toLowerCase().trim(), o.precio]));
    for (const o of f.precios.detal) {
      const k = o.nombre.toLowerCase().trim();
      if (may.has(k)) pares.push({ etiqueta: o.nombre, detal: o.precio, mayorista: may.get(k) });
    }
  }

  if (p.precios && p.precios.detal && p.precios.mayorista) {
    for (const k of ['bolsa', 'caja']) {
      const d = p.precios.detal[k], m = p.precios.mayorista[k];
      if (d && m) pares.push({ etiqueta: k === 'bolsa' ? 'Bolsa' : 'Caja', detal: d, mayorista: m });
    }
  }
  return pares;
}

const avisos = { invertido: [], igual: [], cero: [], sinPrecio: [], descuadre: [], tamanos: [] };

const catalogo = leerCatalogo();
const todos = Object.values(catalogo).flat();
let paresTotal = 0;

for (const p of todos) {
  const pares = paresDePrecio(p);
  paresTotal += pares.length;

  if (!pares.length && !(p.ficha && (p.ficha.opciones || []).length) && !(p.tamanos || []).length) {
    avisos.sinPrecio.push(`${p.id}  ${p.nombre}`);
  }

  for (const par of pares) {
    const linea = `${p.id.padEnd(7)}${p.nombre.slice(0, 32).padEnd(34)}${par.etiqueta.padEnd(18)}`
      + `detal ${fmt(par.detal).padStart(9)}   mayorista ${fmt(par.mayorista).padStart(9)}`;
    if (par.mayorista > par.detal) avisos.invertido.push(linea + `   (+${fmt(par.mayorista - par.detal)})`);
    else if (par.mayorista === par.detal) avisos.igual.push(linea);
    if (!par.detal || !par.mayorista) avisos.cero.push(linea);
  }

  // Dentro del mismo tipo: lo grande no puede costar menos que lo pequeño.
  const f = p.ficha;
  if (f && f.precios) {
    for (const tipo of ['detal', 'mayorista']) {
      const ops = f.precios[tipo] || [];
      const gr = ops.filter(o => /grande/i.test(o.nombre));
      const pe = ops.filter(o => /peque/i.test(o.nombre));
      for (const g of gr) for (const q of pe) {
        // Sólo se comparan si comparten empaque (bolsita con bolsita).
        const emp = n => (n.match(/bolsit?a|cajita|caja|bolsa/i) || [''])[0].toLowerCase();
        if (emp(g.nombre) !== emp(q.nombre)) continue;
        if (g.precio < q.precio) avisos.tamanos.push(
          `${p.id.padEnd(7)}${p.nombre.slice(0, 32).padEnd(34)}${tipo.padEnd(11)}`
          + `grande ${fmt(g.precio)} < pequeña ${fmt(q.precio)}`);
      }
    }
  }

  // Las dos copias del precio tienen que decir lo mismo.
  if (f && f.precios && p.precios) {
    for (const tipo of ['detal', 'mayorista']) {
      const lista = f.precios[tipo] || [];
      const corta = p.precios[tipo];
      if (!lista.length || !corta) continue;
      const pr = lista.map(o => o.precio);
      const min = Math.min(...pr), max = Math.max(...pr);
      if (corta.bolsa !== min || corta.caja !== max) avisos.descuadre.push(
        `${p.id.padEnd(7)}${p.nombre.slice(0, 32).padEnd(34)}${tipo.padEnd(11)}`
        + `ficha ${min}/${max}  vs  copia corta ${corta.bolsa}/${corta.caja}`);
    }
  }
}

const TITULOS = {
  invertido: 'EL MAYORISTA SALE MAS CARO QUE EL DETAL',
  igual: 'MISMO PRECIO EN DETAL Y MAYORISTA',
  tamanos: 'LO GRANDE CUESTA MENOS QUE LO PEQUENO',
  cero: 'PRECIOS EN CERO',
  sinPrecio: 'PRODUCTOS SIN NINGUN PRECIO',
  descuadre: 'LAS DOS COPIAS DEL PRECIO NO COINCIDEN',
};

console.log(`Catalogo: ${todos.length} productos, ${paresTotal} presentaciones comparadas\n`);
let total = 0;
for (const clave of Object.keys(TITULOS)) {
  const lista = avisos[clave];
  if (!lista.length) continue;
  total += lista.length;
  console.log(`== ${TITULOS[clave]} (${lista.length}) ==`);
  lista.forEach(l => console.log('   ' + l));
  console.log();
}
if (!total) { console.log('Todo cuadra.'); process.exit(0); }
console.log(`${total} cosas que revisar.`);
process.exit(1);
