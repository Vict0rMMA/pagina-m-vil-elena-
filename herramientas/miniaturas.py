"""
Crea las miniaturas de las fotos de productos.

    python herramientas/miniaturas.py

Por cada foto de assets/productos/ deja una copia pequeña en WebP en
assets/mini/ con la misma ruta (assets/productos/Navidad/1.jpg ->
assets/mini/Navidad/1.webp). Las tarjetas del catálogo, las promociones,
"Elige tu deseo" y la cuenta atrás usan la miniatura; la ficha ampliada
sigue usando la foto original.

Una foto original pesa 100-340 KB; su miniatura, unos 20-40 KB.

Sólo rehace las que faltan o cuya foto original cambió después. Si se
sube una foto nueva y no se corre esto, no pasa nada grave: la página
ve que la miniatura no existe y carga la original.
"""
import os
import sys

from PIL import Image

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEN = os.path.join(RAIZ, 'assets', 'productos')
DESTINO = os.path.join(RAIZ, 'assets', 'mini')
LADO = 600        # suficiente para una tarjeta a 3x en el celular
CALIDAD = 72
EXTENSIONES = ('.jpg', '.jpeg', '.png', '.webp')


def main():
    hechas = saltadas = 0
    antes = despues = 0
    for carpeta, _, archivos in os.walk(ORIGEN):
        for nombre in archivos:
            if not nombre.lower().endswith(EXTENSIONES):
                continue
            origen = os.path.join(carpeta, nombre)
            relativa = os.path.relpath(origen, ORIGEN)
            destino = os.path.join(DESTINO, os.path.splitext(relativa)[0] + '.webp')
            if os.path.exists(destino) and os.path.getmtime(destino) >= os.path.getmtime(origen):
                saltadas += 1
                continue
            os.makedirs(os.path.dirname(destino), exist_ok=True)
            with Image.open(origen) as im:
                im = im.convert('RGB')
                im.thumbnail((LADO, LADO), Image.LANCZOS)
                im.save(destino, 'WEBP', quality=CALIDAD, method=6)
            hechas += 1
            antes += os.path.getsize(origen)
            despues += os.path.getsize(destino)
    print(f'{hechas} miniaturas nuevas, {saltadas} ya estaban al día')
    if hechas:
        print(f'{antes / 1024 / 1024:.1f} MB de originales -> {despues / 1024 / 1024:.1f} MB en miniaturas')


if __name__ == '__main__':
    sys.exit(main())
