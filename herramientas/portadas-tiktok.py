# -*- coding: utf-8 -*-
"""
Descarga la portada de cada video de TikTok y la guarda optimizada.

Las URL que devuelve TikTok van firmadas y caducan, asi que hay que alojar
las imagenes. Ejecutar desde la raiz del proyecto cuando se añada un video:

    python herramientas/portadas-tiktok.py
"""
import io, json, os, sys, re
try:
    from urllib.request import urlopen, Request
except ImportError:
    from urllib2 import urlopen, Request
from PIL import Image

DESTINO = 'assets/productos/Videos/tiktok'
UA = {'User-Agent': 'Mozilla/5.0 (compatible; elena-velas/1.0)'}


def urls_del_codigo():
    """Saca las URL de los videos del array `videos` de app.js."""
    s = io.open('app.js', encoding='utf-8').read()
    i = s.index('const videos = [')
    j = s.index('\n];', i)
    vistas, orden = set(), []
    for m in re.finditer(r'https://www\.tiktok\.com/@[\w.]+/video/(\d+)', s[i:j]):
        if m.group(1) not in vistas:
            vistas.add(m.group(1))
            orden.append((m.group(1), m.group(0)))
    return orden


def bajar(url):
    return urlopen(Request(url, headers=UA), timeout=30).read()


def main():
    if not os.path.exists('app.js'):
        sys.exit('ejecuta esto desde la raíz del proyecto')
    if not os.path.isdir(DESTINO):
        os.makedirs(DESTINO)

    for vid, url in urls_del_codigo():
        datos = json.loads(bajar('https://www.tiktok.com/oembed?url=' + url).decode('utf-8'))
        img = Image.open(io.BytesIO(bajar(datos['thumbnail_url']))).convert('RGB')

        # Se recorta a 9:16 desde el centro: TikTok devuelve 576x1024, pero
        # alguna sale con otra proporción y la rejilla las quiere iguales.
        objetivo = 9.0 / 16.0
        w, h = img.size
        if abs(w / float(h) - objetivo) > 0.01:
            if w / float(h) > objetivo:
                nuevo = int(h * objetivo)
                img = img.crop(((w - nuevo) // 2, 0, (w + nuevo) // 2, h))
            else:
                nuevo = int(w / objetivo)
                img = img.crop((0, (h - nuevo) // 2, w, (h + nuevo) // 2))

        # 405x720 cubre una tarjeta de 2 columnas a 3x sin pasarse de peso.
        img = img.resize((405, 720), Image.LANCZOS)
        ruta = '%s/%s.jpg' % (DESTINO, vid)
        img.save(ruta, 'JPEG', quality=78, optimize=True, progressive=True)
        # La consola de Windows no traga los emojis de los titulos.
        titulo = datos.get('title', '')[:42].encode('ascii', 'replace').decode('ascii')
        print('  %s  %5.1f KB  %s' % (vid, os.path.getsize(ruta) / 1024.0, titulo))


if __name__ == '__main__':
    main()
