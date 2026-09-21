# -*- coding: utf-8 -*-
"""
Regenera iconos.css y las fuentes reducidas de Font Awesome.

Ejecútalo desde la raíz del proyecto cuando añadas un icono nuevo:

    pip install "fonttools[woff]"
    python herramientas/regenerar-iconos.py

Busca todas las clases fa-* del proyecto, se queda sólo con esos glifos y
reescribe iconos.css + assets/fonts/. Font Awesome completo son 251 KB de
fuentes; el sitio usa ~50 iconos, que caben en menos de 6 KB.
"""
import io, os, re, sys, subprocess, tempfile
try:
    from urllib.request import urlopen
except ImportError:
    from urllib2 import urlopen

VERSION = '6.4.0'
CDN = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/%s' % VERSION
FUENTES = [('fa-solid-900', 'Font Awesome 6 Free', 900),
           ('fa-brands-400', 'Font Awesome 6 Brands', 400)]
ARCHIVOS = ['index.html', 'app.js', 'motion.js', 'theme.css', 'styles.css']
BS = chr(92)


def bajar(url):
    sys.stdout.write('  bajando %s\n' % url.rsplit('/', 1)[-1])
    return urlopen(url).read()


def clases_usadas():
    usadas = set()
    for f in ARCHIVOS:
        if os.path.exists(f):
            usadas |= set(re.findall(r'fa-[a-z0-9-]+',
                                     io.open(f, encoding='utf-8').read()))
    # El propio nombre de los .woff2 empieza por "fa-" y no es una clase.
    return set(c for c in usadas if not c.endswith('-subset')
               and not re.match(r'fa-(solid|brands|regular)-\d+$', c))


def mapa_glifos(css):
    """FA agrupa alias: .fa-xmark:before,.fa-times:before{content:"\f00d"}"""
    regla = re.compile(r'((?:\.fa-[a-z0-9-]+:before,?)+)\{content:"'
                       + BS + BS + r'([0-9a-fA-F]+)"\}')
    mapa = {}
    for m in regla.finditer(css):
        for sel in re.findall(r'\.(fa-[a-z0-9-]+):before', m.group(1)):
            mapa.setdefault(sel, m.group(2))
    return mapa


def main():
    if not os.path.exists('index.html'):
        sys.exit('ejecuta esto desde la raíz del proyecto')

    css = bajar(CDN + '/css/all.min.css').decode('utf-8')
    mapa = mapa_glifos(css)
    usadas = clases_usadas()

    iconos = sorted((k, mapa[k]) for k in usadas if k in mapa)
    huerfanas = sorted(u for u in usadas if u not in mapa)
    print('  iconos usados: %d' % len(iconos))
    if huerfanas:
        # Suelen ser modificadores (fa-2x, fa-fw) o iconos sólo de FA Pro.
        print('  sin glifo en FA Free: %s' % ', '.join(huerfanas))

    puntos = ','.join(sorted(set('U+%s' % v.upper() for _, v in iconos)))
    if not os.path.isdir('assets/fonts'):
        os.makedirs('assets/fonts')

    tmp = tempfile.mkdtemp()
    for nombre, _, _ in FUENTES:
        origen = os.path.join(tmp, nombre + '.woff2')
        with open(origen, 'wb') as fh:
            fh.write(bajar(CDN + '/webfonts/' + nombre + '.woff2'))
        destino = 'assets/fonts/%s-subset.woff2' % nombre
        subprocess.check_call([
            sys.executable, '-m', 'fontTools.subset', origen,
            '--unicodes=' + puntos, '--flavor=woff2', '--layout-features=',
            '--no-hinting', '--desubroutinize', '--output-file=' + destino,
        ])
        print('  %-16s %6.1f KB -> %5.1f KB' % (
            nombre, os.path.getsize(origen) / 1024.0,
            os.path.getsize(destino) / 1024.0))

    cara = u'\n'.join(
        u'@font-face {\n'
        u'  font-family: "%s";\n'
        u'  font-style: normal;\n'
        u'  font-weight: %d;\n'
        u'  font-display: block;\n'
        u'  src: url("assets/fonts/%s-subset.woff2") format("woff2");\n'
        u'}' % (familia, peso, nombre)
        for nombre, familia, peso in FUENTES)

    salida = [
        u'/* Font Awesome %s reducido a los %d iconos que usa este sitio.\n'
        u' * Generado por herramientas/regenerar-iconos.py — no editar a mano.\n'
        u' */' % (VERSION, len(iconos)),
        cara,
        u'',
        u'.fa, .fas, .fa-solid, .fab, .fa-brands {\n'
        u'  -moz-osx-font-smoothing: grayscale;\n'
        u'  -webkit-font-smoothing: antialiased;\n'
        u'  display: var(--fa-display, inline-block);\n'
        u'  font-style: normal;\n'
        u'  font-variant: normal;\n'
        u'  line-height: 1;\n'
        u'  text-rendering: auto;\n'
        u'}',
        u'',
        u'.fas, .fa-solid, .fa { font-family: "Font Awesome 6 Free"; font-weight: 900; }',
        u'.fab, .fa-brands     { font-family: "Font Awesome 6 Brands"; font-weight: 400; }',
        u'',
    ]
    for nombre, punto in iconos:
        salida.append(u'.%s:before { content: "%s%s"; }' % (nombre, BS, punto))

    io.open('iconos.css', 'w', encoding='utf-8').write(u'\n'.join(salida) + u'\n')
    print('  iconos.css: %.1f KB' % (os.path.getsize('iconos.css') / 1024.0))


if __name__ == '__main__':
    main()
