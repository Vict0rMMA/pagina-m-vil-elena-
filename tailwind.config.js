/** Réplica exacta del bloque tailwind.config que llevaba el index.html. */
module.exports = {
  content: [
    './index.html',
    './app.js',
    './motion.js'
  ],
  // md:grid-cols-N se arma en tiempo de ejecución (app.js), el escáner no lo ve.
  safelist: [
    'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4',
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  future: { hoverOnlyWhenSupported: true }
};
