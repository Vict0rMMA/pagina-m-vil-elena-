# -*- coding: utf-8 -*-
"""Genera el CSS de los fondos por categoría del catálogo.

Cada tema es un degradado de color + un azulejo SVG con dibujos de línea
fina (copos, velas, corazones...) a baja opacidad. Todo va dentro del CSS
como data-URI: ninguna imagen extra que descargar.
"""
import io, math, sys
from urllib.parse import quote


def estrella(r=10, puntas=5):
    pts = []
    for i in range(puntas * 2):
        rad = r if i % 2 == 0 else r * 0.45
        a = math.pi / puntas * i - math.pi / 2
        pts.append('%.1f %.1f' % (rad * math.cos(a), rad * math.sin(a)))
    return '<path d="M%sZ"/>' % 'L'.join(pts)


MOTIVOS = {
    'copo': '<path d="M0-12V12M-10.4-6L10.4 6M-10.4 6L10.4-6M-3-9L0-12L3-9M-3 9L0 12L3 9'
            'M-10.9-2.2L-10.4-6L-6.8-7.5M10.9 2.2L10.4 6L6.8 7.5M-6.8 7.5L-10.4 6L-10.9 2.2M6.8-7.5L10.4-6L10.9-2.2"/>',
    'estrella': estrella(),
    'brillo': '<path d="M0-10L2-2L10 0L2 2L0 10L-2 2L-10 0L-2-2Z"/>',
    'vela': '<rect x="-4" y="-3" width="8" height="15" rx="1.5"/><path d="M0-3V-6"/>'
            '<path d="M0-6C-2.5-8.5-1.5-11.5 0-14C1.5-11.5 2.5-8.5 0-6Z"/>',
    'corazon': '<path d="M0 9C-7 4-11 0-11-4C-11-8-8-10-5.5-10C-3-10-1-8.5 0-6.5'
               'C1-8.5 3-10 5.5-10C8-10 11-8 11-4C11 0 7 4 0 9Z"/>',
    'nube': '<path d="M-10 5H9a5 5 0 0 0 0-10a7 7 0 0 0-13-2a6 6 0 0 0-6 12z"/>',
    'cruz': '<path d="M0-12V12M-7-5H7"/>',
    'hostia': '<circle r="8"/><path d="M0-4V4M-3-1H3"/>',
    'caja': '<path d="M-10-4H10V11H-10ZM-11.5-9H11.5V-4H-11.5ZM0-9V11"/>',
    'regalo': '<path d="M-10-4H10V11H-10ZM-11.5-9H11.5V-4H-11.5ZM0-9V11'
              'M0-9C-3-14-8-13-6-9M0-9C3-14 8-13 6-9"/>',
    'arbol': '<path d="M0-13L-9 1H-4L-11 9H11L4 1H9ZM0 9V13"/>',
    'punto': '<circle r="1.6" fill="currentColor" stroke="none"/>',
}


def azulejo(lado, piezas):
    partes = []
    for motivo, x, y, escala, giro, color in piezas:
        partes.append('<g transform="translate(%d %d) rotate(%d) scale(%.2f)" stroke="%s" color="%s">%s</g>'
                      % (x, y, giro, escala, color, color, MOTIVOS[motivo]))
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" fill="none" '
           'stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">%s</svg>' % (lado, lado, ''.join(partes)))
    return 'url("data:image/svg+xml,%s")' % quote(svg, safe=' /=:-.,()')


ORO = 'rgba(232,201,132,0.34)'
TEMAS = {
    # tema: (oscuro, fondo, azulejo)
    'navidad': (True,
        'radial-gradient(55% 38% at 88% 6%, rgba(190,38,56,0.55), transparent 72%), '
        'radial-gradient(50% 34% at 6% 92%, rgba(190,38,56,0.42), transparent 72%), '
        'radial-gradient(40% 30% at 50% 0%, rgba(232,201,132,0.18), transparent 70%), '
        'linear-gradient(165deg, #1B4A31 0%, #163E29 48%, #0F2E1E 100%)',
        azulejo(220, [
            ('copo', 30, 34, 1.0, 0, 'rgba(255,248,235,0.30)'), ('vela', 128, 52, 1.15, -8, ORO),
            ('estrella', 190, 120, 0.85, 12, ORO), ('arbol', 62, 150, 1.0, 0, 'rgba(120,200,140,0.30)'),
            ('copo', 160, 192, 0.7, 20, 'rgba(255,248,235,0.24)'), ('brillo', 96, 104, 0.6, 0, 'rgba(240,110,120,0.42)'),
            ('punto', 200, 30, 1, 0, ORO), ('punto', 20, 200, 1, 0, 'rgba(240,110,120,0.5)'),
            ('punto', 110, 196, 1, 0, 'rgba(255,248,235,0.4)')])),
    'amor': (True,
        'radial-gradient(55% 38% at 85% 8%, rgba(232,120,150,0.42), transparent 72%), '
        'radial-gradient(50% 34% at 8% 90%, rgba(232,120,150,0.30), transparent 72%), '
        'linear-gradient(165deg, #6A1C30 0%, #571628 50%, #3E0F1C 100%)',
        azulejo(200, [
            ('corazon', 34, 40, 1.0, -12, 'rgba(255,190,205,0.36)'), ('corazon', 140, 80, 0.7, 14, 'rgba(255,230,236,0.26)'),
            ('vela', 80, 150, 1.0, 0, ORO), ('corazon', 170, 170, 0.85, -6, 'rgba(255,190,205,0.30)'),
            ('brillo', 110, 30, 0.55, 0, ORO), ('punto', 20, 120, 1, 0, 'rgba(255,190,205,0.6)'),
            ('punto', 186, 24, 1, 0, ORO)])),
    'babyshower': (False,
        'radial-gradient(55% 40% at 85% 8%, rgba(246,175,200,0.70), transparent 72%), '
        'radial-gradient(50% 36% at 8% 90%, rgba(150,190,235,0.75), transparent 72%), '
        'linear-gradient(165deg, #E4EEF9 0%, #F9E6EE 55%, #ECE6F7 100%)',
        azulejo(200, [
            ('nube', 40, 40, 1.1, 0, 'rgba(100,140,195,0.46)'), ('estrella', 150, 50, 0.7, 10, 'rgba(210,165,70,0.42)'),
            ('corazon', 160, 150, 0.6, -10, 'rgba(225,120,155,0.48)'), ('nube', 70, 160, 0.8, 0, 'rgba(225,120,155,0.28)'),
            ('brillo', 104, 100, 0.5, 0, 'rgba(210,165,70,0.45)'), ('punto', 190, 100, 1, 0, 'rgba(100,140,195,0.5)'),
            ('punto', 18, 120, 1, 0, 'rgba(225,120,155,0.5)')])),
    'comunion': (False,
        'radial-gradient(55% 40% at 85% 8%, rgba(232,201,132,0.60), transparent 72%), '
        'radial-gradient(50% 36% at 8% 90%, rgba(150,190,235,0.70), transparent 72%), '
        'linear-gradient(165deg, #F3F7FC 0%, #E9F0F8 50%, #DCE7F4 100%)',
        azulejo(200, [
            ('cruz', 36, 40, 1.0, 0, 'rgba(168,129,60,0.55)'), ('hostia', 150, 60, 0.9, 0, 'rgba(168,129,60,0.34)'),
            ('vela', 70, 150, 1.0, 0, 'rgba(110,145,195,0.50)'), ('brillo', 160, 160, 0.6, 0, 'rgba(168,129,60,0.55)'),
            ('estrella', 110, 104, 0.5, 0, 'rgba(110,145,195,0.50)'), ('punto', 190, 120, 1, 0, 'rgba(168,129,60,0.5)'),
            ('punto', 18, 112, 1, 0, 'rgba(110,145,195,0.5)')])),
    'kits': (True,
        'radial-gradient(55% 38% at 85% 8%, rgba(232,201,132,0.30), transparent 72%), '
        'radial-gradient(50% 34% at 8% 92%, rgba(160,110,50,0.40), transparent 72%), '
        'linear-gradient(165deg, #33271A 0%, #2A2016 50%, #1D160F 100%)',
        azulejo(200, [
            ('caja', 38, 42, 1.0, 0, ORO), ('vela', 146, 56, 1.05, 0, 'rgba(255,248,235,0.24)'),
            ('vela', 164, 56, 0.8, 0, 'rgba(255,248,235,0.20)'), ('caja', 140, 160, 0.8, 0, 'rgba(255,248,235,0.20)'),
            ('vela', 56, 150, 1.0, 0, ORO), ('brillo', 100, 104, 0.5, 0, ORO), ('punto', 192, 110, 1, 0, ORO)])),
    'suvenirs': (False,
        'radial-gradient(55% 40% at 85% 8%, rgba(190,60,70,0.28), transparent 72%), '
        'radial-gradient(50% 36% at 8% 90%, rgba(232,190,110,0.60), transparent 72%), '
        'linear-gradient(165deg, #F7E6D0 0%, #F0D8C0 55%, #E9CBB3 100%)',
        azulejo(200, [
            ('regalo', 38, 42, 1.0, -6, 'rgba(150,40,50,0.40)'), ('vela', 150, 58, 1.0, 0, 'rgba(168,129,60,0.52)'),
            ('regalo', 150, 160, 0.75, 8, 'rgba(168,129,60,0.38)'), ('estrella', 66, 150, 0.6, 0, 'rgba(150,40,50,0.28)'),
            ('brillo', 104, 104, 0.5, 0, 'rgba(168,129,60,0.45)'), ('punto', 190, 116, 1, 0, 'rgba(150,40,50,0.4)')])),
}

css = [u'''
/* ============================================================
   42. Fondo del catálogo según la categoría
   ------------------------------------------------------------
   Al elegir una categoría, el catálogo se viste de ella: Navidad en
   verde y rojo con copos, estrellas y velas; Amor y Amistad en vino con
   corazones; Baby Shower en pastel con nubes; Primera Comunión en
   marfil con cruces; Kit Emprendedor en café con cajas y velas;
   Suvenirs en champán con regalos. "Todas" se queda como siempre.

   Los dibujos son SVG de línea fina dentro del propio CSS: no se
   descarga ninguna imagen. Generado con herramientas/temas.py.
   ============================================================ */

.tema-fondo {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--dur-slow, 480ms) var(--ease-suave);
}

#productos[data-tema]:not([data-tema="todas"]) .tema-fondo { opacity: 1; }

/* Al cambiar de una categoría a otra el fondo entra con un fundido. */
.tema-fondo.cambio { animation: tema-entra 520ms var(--ease-suave); }
@keyframes tema-entra { from { opacity: 0; } to { opacity: 1; } }
''']

for tema, (oscuro, fondo, dibujo) in TEMAS.items():
    # Un tamaño por capa: si la lista es más corta que las capas, CSS la
    # repite y los degradados acabarían en mosaico del tamaño del dibujo.
    lado = 220 if tema == 'navidad' else 200
    capas = fondo.count('gradient(')
    tamanos = ', '.join(['%dpx %dpx' % (lado, lado)] + ['100% 100%'] * capas)
    css.append(u'#productos[data-tema="%s"] .tema-fondo {\n  background: %s, %s;\n'
               u'  background-size: %s;\n}\n' % (tema, dibujo, fondo, tamanos))

oscuros = ', '.join('#productos[data-tema="%s"]' % t for t, v in TEMAS.items() if v[0])
css.append(u'''/* En los temas oscuros la cabecera del catálogo pasa a tinta clara.
   Las tarjetas son blancas y no cambian. */
:is(%(o)s) .section-title { color: #FFFCF6; }
:is(%(o)s) .section-subtitle { color: rgba(255, 252, 246, 0.84); }
:is(%(o)s) .section-eyebrow { color: #E8C984; }
:is(%(o)s) #no-results,
:is(%(o)s) #no-results p { color: rgba(255, 252, 246, 0.86); }

/* En el champán de Suvenirs el dorado del antetítulo quedaba en 4,3:1. */
#productos[data-tema="suvenirs"] .section-eyebrow { color: #6B4714; }
''' % {'o': oscuros})

io.open(sys.argv[1], 'w', encoding='utf-8').write(u'\n'.join(css))
print('temas: %s' % ', '.join('%s (%s)' % (t, 'oscuro' if v[0] else 'claro') for t, v in TEMAS.items()))
