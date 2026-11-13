/**
 * GET /api/catalogo -> { productos, avisos, total, actualizado }
 *
 * Lee la hoja de Google y la devuelve en el formato de la web. Vercel guarda
 * la respuesta 5 minutos en su red, así que Google se consulta como mucho
 * una vez cada 5 minutos y la web la recibe al instante.
 */
const { leerHoja } = require('./_lib/hoja');

// La web pinta estos textos dentro del HTML. Si alguien llegara a editar
// la hoja, no podría colar etiquetas ni romper las comillas de un atributo:
// se quitan < y > y las comillas pasan a ser tipográficas.
function limpiar(valor, clave) {
  if (typeof valor === 'string') {
    // Las rutas de imagen sólo pueden ser archivos de la propia web.
    if (clave === 'imagen') return /^[\w\-./ áéíóúñÁÉÍÓÚÑ]*$/.test(valor) && !valor.includes('..') ? valor : '';
    return valor.replace(/[<>]/g, '').replace(/"/g, '\u201D').replace(/'/g, '\u2019').replace(/`/g, '\u2019');
  }
  if (Array.isArray(valor)) return valor.map(v => limpiar(v));
  if (valor && typeof valor === 'object') {
    const limpio = {};
    for (const k of Object.keys(valor)) limpio[k] = limpiar(valor[k], k);
    return limpio;
  }
  return valor;
}

module.exports = async (req, res) => {
  try {
    const hoja = await leerHoja();
    const productos = limpiar(hoja.productos);
    const avisos = limpiar(hoja.avisos);
    const total = Object.values(productos).reduce((n, l) => n + l.length, 0);
    // Una hoja vacía casi seguro es un error (pestaña renombrada, filas
    // borradas sin querer): mejor que la web use su copia de respaldo.
    if (total === 0) throw new Error('La hoja no devolvió ningún producto');

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(JSON.stringify({ productos, avisos, total, actualizado: new Date().toISOString() }));
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    // El detalle queda en el registro de Vercel, no a la vista de cualquiera.
    console.error(e);
    res.status(502).json({ error: 'No se pudo leer el catálogo' });
  }
};
