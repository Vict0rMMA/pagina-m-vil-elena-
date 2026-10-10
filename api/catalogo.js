/**
 * GET /api/catalogo -> { productos, avisos, total, actualizado }
 *
 * Lee la hoja de Google y la devuelve en el formato de la web. Vercel guarda
 * la respuesta 5 minutos en su red, así que Google se consulta como mucho
 * una vez cada 5 minutos y la web la recibe al instante.
 */
const { leerHoja } = require('./_lib/hoja');

module.exports = async (req, res) => {
  try {
    const { productos, avisos } = await leerHoja();
    const total = Object.values(productos).reduce((n, l) => n + l.length, 0);
    // Una hoja vacía casi seguro es un error (pestaña renombrada, filas
    // borradas sin querer): mejor que la web use su copia de respaldo.
    if (total === 0) throw new Error('La hoja no devolvió ningún producto');

    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(JSON.stringify({ productos, avisos, total, actualizado: new Date().toISOString() }));
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: e.message });
  }
};
