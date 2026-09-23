# -*- coding: utf-8 -*-
"""
Genera la imagen que sale al compartir el enlace (WhatsApp, Facebook...).

    python herramientas/imagen-compartir.py

Mide 1200x630, que es lo que piden todas las redes. Se ve pequeña en el
chat, asi que manda el contraste: nombre grande y una sola foto.
"""
import io, os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ANCHO, ALTO = 1200, 630
CREMA = (250, 247, 241)
TINTA = (23, 22, 21)
TINTA2 = (87, 81, 74)
ORO = (124, 86, 28)

FUENTES = os.environ.get('FUENTES', '.')
TITULAR = os.path.join(FUENTES, 'nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiukDQ.ttf')  # Playfair Bold
CUERPO = os.path.join(FUENTES, 'JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-.ttf')           # Montserrat Medium

FOTO = 'assets/productos/Videos/posters/vel.jpg'
MARCA = 'assets/logos/elena-marca.png'
SALIDA = 'assets/compartir.jpg'


def recorta_barras(im, tol=18):
    """La foto viene de un video y trae franjas lisas arriba y abajo."""
    g = im.convert('L')
    an, al = g.size
    def lisa(y):
        fila = [g.getpixel((x, y)) for x in range(0, an, max(1, an // 40))]
        return max(fila) - min(fila) < tol
    arriba = 0
    while arriba < al // 3 and lisa(arriba): arriba += 1
    abajo = al - 1
    while abajo > al * 2 // 3 and lisa(abajo): abajo -= 1
    return im.crop((0, arriba, an, abajo + 1)) if abajo > arriba else im


def encaja(im, ancho, alto):
    """Rellena la caja recortando por el centro, sin deformar."""
    o = im.width / im.height
    d = ancho / float(alto)
    if o > d:
        nueva = int(im.height * d)
        im = im.crop(((im.width - nueva) // 2, 0, (im.width + nueva) // 2, im.height))
    else:
        nueva = int(im.width / d)
        im = im.crop((0, (im.height - nueva) // 2, im.width, (im.height + nueva) // 2))
    return im.resize((ancho, alto), Image.LANCZOS)


def main():
    lienzo = Image.new('RGB', (ANCHO, ALTO), CREMA)

    # --- Foto a la derecha ---
    corte = 560
    foto = encaja(recorta_barras(Image.open(FOTO).convert('RGB')), ANCHO - corte, ALTO)
    lienzo.paste(foto, (corte, 0))

    # El borde recto entre foto y crema se nota mucho: se difumina.
    mascara = Image.new('L', (ANCHO, ALTO), 0)
    ImageDraw.Draw(mascara).rectangle([corte, 0, ANCHO, ALTO], fill=255)
    mascara = mascara.filter(ImageFilter.GaussianBlur(26))
    base = Image.new('RGB', (ANCHO, ALTO), CREMA)
    foto_completa = Image.new('RGB', (ANCHO, ALTO), CREMA)
    foto_completa.paste(foto, (corte, 0))
    lienzo = Image.composite(foto_completa, base, mascara)

    # --- Resplandor cálido detrás del texto, como en la web ---
    brillo = Image.new('RGB', (ANCHO, ALTO), CREMA)
    d = ImageDraw.Draw(brillo)
    d.ellipse([-180, 40, 620, 600], fill=(247, 238, 220))
    brillo = brillo.filter(ImageFilter.GaussianBlur(90))
    izq = Image.new('L', (ANCHO, ALTO), 0)
    ImageDraw.Draw(izq).rectangle([0, 0, corte - 40, ALTO], fill=255)
    izq = izq.filter(ImageFilter.GaussianBlur(40))
    lienzo = Image.composite(brillo, lienzo, izq)

    dib = ImageDraw.Draw(lienzo)

    # --- Marca ---
    marca = Image.open(MARCA).convert('RGBA')
    marca = marca.crop(marca.getbbox())
    lado = 116
    esc = min(lado / marca.width, lado / marca.height)
    marca = marca.resize((int(marca.width * esc), int(marca.height * esc)), Image.LANCZOS)
    lienzo.paste(marca, (86, 96), marca)

    # --- Textos ---
    f_nombre = ImageFont.truetype(TITULAR, 76)
    f_sub = ImageFont.truetype(CUERPO, 27)
    f_pie = ImageFont.truetype(CUERPO, 23)

    dib.text((86, 252), 'Elena', font=f_nombre, fill=TINTA)
    dib.text((86, 338), 'Velas y Aromas', font=f_nombre, fill=TINTA)

    dib.text((90, 448), 'V E L A S   A R T E S A N A L E S', font=f_pie, fill=ORO)
    dib.text((86, 492), 'Hechas a mano en Medellín', font=f_sub, fill=TINTA2)
    dib.text((86, 530), 'Detal y por mayor · Envíos a todo Colombia', font=f_pie, fill=TINTA2)

    lienzo.save(SALIDA, 'JPEG', quality=86, optimize=True, progressive=True)
    print('  %s  %dx%d  %.0f KB' % (SALIDA, ANCHO, ALTO, os.path.getsize(SALIDA) / 1024.0))


if __name__ == '__main__':
    main()
