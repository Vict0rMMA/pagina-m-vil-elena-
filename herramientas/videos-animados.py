"""
Videos animados de la página: fondos de sección y el promocional.

Se dibujan cuadro a cuadro con Pillow a partir de las fotos REALES de
assets/productos (y de los dos videos reales de personalizadas) y se
codifican con ffmpeg: H.264, sin audio, +faststart. No hace falta nada
más que Python con Pillow y ffmpeg; no se instala ninguna librería.

Todos llevan la marca de agua: la vela del logo oficial
(assets/logos/elena-marca.png) con el nombre "Velas y Aromas Elena".

Uso (desde la raíz del proyecto):
    python herramientas/videos-animados.py                 # todos
    python herramientas/videos-animados.py portada-taller-9x16 promocional-elena-9x16
    python herramientas/videos-animados.py --salida C:/tmp/pruebas

Salida por defecto: assets/videos/*.mp4 y assets/videos/posters/*.webp
Las letras son de Windows (Palatino Linotype y Segoe UI).
"""
import argparse
import glob
import math
import os
import random
import shutil
import subprocess
import sys
import tempfile
import time

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOTOS = os.path.join(RAIZ, 'assets', 'productos', 'Navidad-2026')
PERSONALIZADAS = os.path.join(RAIZ, 'assets', 'productos', 'Videos-Velas-Personalizadas')
LOGO = os.path.join(RAIZ, 'assets', 'logos', 'elena-logo.png')
MARCA = os.path.join(RAIZ, 'assets', 'logos', 'elena-marca.png')
FPS = 30

FUENTES = 'C:/Windows/Fonts'
SERIF = os.path.join(FUENTES, 'pala.ttf')
SERIF_IT = os.path.join(FUENTES, 'palai.ttf')
SANS = os.path.join(FUENTES, 'segoeui.ttf')
SANS_LIGERA = os.path.join(FUENTES, 'segoeuisl.ttf')

# Colores de theme.css
TINTA = (30, 20, 16)
TINTA_HONDA = (20, 13, 11)
VINO = (110, 27, 39)
VINO_HONDO = (58, 14, 22)
CREMA = (250, 247, 241)
CREMA_TINTA = (255, 252, 246)
ORO = (168, 129, 60)
ORO_HONDO = (124, 86, 28)
ORO_VELO = (217, 192, 138)
AMBAR = (255, 176, 104)


# ----------------------------------------------------------------------
# Utilidades
# ----------------------------------------------------------------------

def lerp(a, b, x):
    return a + (b - a) * x


def recorta(x, a=0.0, b=1.0):
    return a if x < a else b if x > b else x


def suave(x):
    """Entrada y salida suaves (coseno)."""
    x = recorta(x)
    return 0.5 - 0.5 * math.cos(math.pi * x)


def sale(x):
    """Sale rápido y frena (cúbica)."""
    x = recorta(x)
    return 1 - (1 - x) ** 3


def tramo(t, a, b):
    """0 antes de a, 1 después de b, rampa suave en medio."""
    if b <= a:
        return 1.0 if t >= a else 0.0
    return suave((t - a) / (b - a))


_fotos = {}


def foto(nombre):
    if nombre not in _fotos:
        _fotos[nombre] = Image.open(os.path.join(FOTOS, nombre + '.jpg')).convert('RGB')
    return _fotos[nombre]


def preparar(img, W, H, zoom_max=1.15):
    """Reduce la foto a lo justo para cubrir W×H con el zoom máximo:
    la transformación posterior nunca reduce mucho (evita el aliasing)."""
    iw, ih = img.size
    s = max(W / iw, H / ih) * zoom_max
    if s < 1:
        img = img.resize((max(1, round(iw * s)), max(1, round(ih * s))), Image.LANCZOS)
    return img


def encuadre(img, W, H, zoom=1.0, fx=0.5, fy=0.5):
    """Vista W×H que cubre la imagen, con `zoom` y el centro en (fx, fy),
    donde 0..1 recorre el margen libre en cada eje."""
    iw, ih = img.size
    s = max(W / iw, H / ih) * zoom
    x0 = (iw - W / s) * recorta(fx)
    y0 = (ih - H / s) * recorta(fy)
    return img.transform((W, H), Image.AFFINE, (1 / s, 0, x0, 0, 1 / s, y0),
                         resample=Image.BICUBIC)


def radial(W, H, cx=0.5, cy=0.5, rx=0.5, ry=0.5, dentro=0, fuera=255, potencia=2.0, n=128):
    """Máscara L radial, calculada pequeña y ampliada (es un degradado)."""
    w = n
    h = max(2, round(n * H / W))
    m = Image.new('L', (w, h))
    px = m.load()
    for j in range(h):
        for i in range(w):
            dx = ((i + 0.5) / w - cx) / rx
            dy = ((j + 0.5) / h - cy) / ry
            d = min(1.0, math.hypot(dx, dy))
            px[i, j] = int(dentro + (fuera - dentro) * (d ** potencia))
    return m.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(2))


def vertical(W, H, arriba, abajo):
    """Degradado vertical de color."""
    g = Image.linear_gradient('L').resize((1, H)).resize((W, H))
    return Image.composite(Image.new('RGB', (W, H), abajo), Image.new('RGB', (W, H), arriba), g)


def escala(img, k):
    """Multiplica la luminosidad de una imagen RGB (para luces que respiran)."""
    k = max(0.0, k)
    return img.point(lambda v: min(255, int(v * k)))


def ondas(t, T, componentes):
    """Suma de senos periódica en T: [(ciclos, amplitud, fase), ...]."""
    return sum(a * math.sin(2 * math.pi * n * t / T + f) for n, a, f in componentes)


def esquinas(img, radio):
    """Devuelve RGBA con esquinas redondeadas."""
    img = img.convert('RGBA')
    m = Image.new('L', img.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, img.width - 1, img.height - 1), radio, fill=255)
    img.putalpha(ImageChops.multiply(img.getchannel('A'), m))
    return img


def con_sombra(sprite, desenfoque, opacidad=0.55, desplazamiento=(0, 6)):
    """Añade sombra suave debajo de un sprite RGBA."""
    pad = int(desenfoque * 3) + max(abs(desplazamiento[0]), abs(desplazamiento[1]))
    lienzo = Image.new('RGBA', (sprite.width + 2 * pad, sprite.height + 2 * pad), (0, 0, 0, 0))
    a = Image.new('L', lienzo.size, 0)
    a.paste(sprite.getchannel('A').point(lambda v: int(v * opacidad)),
            (pad + desplazamiento[0], pad + desplazamiento[1]))
    a = a.filter(ImageFilter.GaussianBlur(desenfoque))
    sombra = Image.new('RGBA', lienzo.size, (0, 0, 0, 0))
    sombra.putalpha(a)
    capa = Image.new('RGBA', lienzo.size, (0, 0, 0, 0))
    capa.paste(sprite, (pad, pad))
    return Image.alpha_composite(sombra, capa), pad


def pegar(lienzo, sprite, x, y, alfa=1.0):
    """Pega un sprite RGBA en un lienzo RGB con opacidad extra."""
    if alfa <= 0.003:
        return
    x, y = round(x), round(y)
    if x >= lienzo.width or y >= lienzo.height or x + sprite.width <= 0 or y + sprite.height <= 0:
        return
    m = sprite.getchannel('A')
    if alfa < 0.997:
        m = m.point(lambda v: int(v * alfa))
    lienzo.paste(sprite.convert('RGB') if sprite.mode != 'RGB' else sprite, (x, y), m)


# ----------------------------------------------------------------------
# Texto
# ----------------------------------------------------------------------

_letras = {}


def letra(ruta, tam):
    k = (ruta, tam)
    if k not in _letras:
        _letras[k] = ImageFont.truetype(ruta, tam)
    return _letras[k]


def texto(cadena, ruta, tam, color, espaciado=0.0):
    """Sprite RGBA ajustado de una línea de texto, con espaciado entre letras."""
    f = letra(ruta, tam)
    asc, desc = f.getmetrics()
    ancho = sum(f.getlength(c) for c in cadena) + espaciado * max(0, len(cadena) - 1)
    pad = max(4, tam // 4)
    img = Image.new('RGBA', (int(math.ceil(ancho)) + 2 * pad, asc + desc + 2 * pad), color + (0,))
    d = ImageDraw.Draw(img)
    x = pad
    for c in cadena:
        d.text((x, pad), c, font=f, fill=color + (255,))
        x += f.getlength(c) + espaciado
    caja = img.getchannel('A').getbbox()
    return img.crop(caja) if caja else img


def fila(*sprites, separacion=0):
    """Une sprites de texto en una línea, alineados por la base."""
    ancho = sum(s.width for s in sprites) + separacion * (len(sprites) - 1)
    alto = max(s.height for s in sprites)
    img = Image.new('RGBA', (ancho, alto), (0, 0, 0, 0))
    x = 0
    for s in sprites:
        img.paste(s, (x, alto - s.height), s)
        x += s.width + separacion
    return img


# ----------------------------------------------------------------------
# Marca de agua: la vela del logo oficial + "Velas y Aromas Elena"
# ----------------------------------------------------------------------

def marca_de_agua(alto, tono='oscuro'):
    """tono='oscuro': placa tinta translúcida y letra crema (fondos oscuros).
    tono='claro': placa crema y letra vino (fondos claros)."""
    vela = Image.open(MARCA).convert('RGBA')
    caja = vela.getchannel('A').getbbox()
    vela = vela.crop(caja)
    hv = round(alto * 0.62)
    vela = vela.resize((round(vela.width * hv / vela.height), hv), Image.LANCZOS)
    color = CREMA_TINTA if tono == 'oscuro' else VINO
    nombre = texto('Velas y Aromas Elena', SERIF_IT, round(alto * 0.36), color, espaciado=alto * 0.012)
    sep = round(alto * 0.22)
    pad_x = round(alto * 0.36)
    ancho = pad_x + vela.width + sep + nombre.width + pad_x
    placa = Image.new('RGBA', (ancho, alto), (0, 0, 0, 0))
    fondo = (20, 13, 11, 105) if tono == 'oscuro' else (250, 247, 241, 200)
    ImageDraw.Draw(placa).rounded_rectangle((0, 0, ancho - 1, alto - 1), alto // 2, fill=fondo)
    borde = (217, 192, 138, 90) if tono == 'oscuro' else (168, 129, 60, 110)
    ImageDraw.Draw(placa).rounded_rectangle((0, 0, ancho - 1, alto - 1), alto // 2, outline=borde, width=1)
    placa.alpha_composite(vela, (pad_x, (alto - vela.height) // 2))
    placa.alpha_composite(nombre, (pad_x + vela.width + sep, (alto - nombre.height) // 2 + round(alto * 0.02)))
    return placa


def lado_marca(W, H):
    """En el celular el botón flotante de WhatsApp va abajo a la derecha y
    taparía la marca: en los verticales va a la izquierda."""
    return 'derecha' if W > H else 'izquierda'


def poner_marca(lienzo, placa, lado='derecha', margen_x=0.07, margen_y=0.07, alfa=0.92, arriba=False):
    """Los márgenes son generosos a propósito: la página muestra los videos
    con object-fit: cover y recorta bordes según la pantalla."""
    W, H = lienzo.size
    y = round(H * margen_y) if arriba else H - round(H * margen_y) - placa.height
    if lado == 'derecha':
        x = W - round(W * margen_x) - placa.width
    elif lado == 'centro':
        x = (W - placa.width) // 2
    else:
        x = round(W * margen_x)
    pegar(lienzo, placa, x, y, alfa)


# ----------------------------------------------------------------------
# Luz: polvo en suspensión, viñeta y resplandor cálido
# ----------------------------------------------------------------------

class Polvo:
    """Motas de luz muy escasas que suben despacio. Periódicas en T."""

    def __init__(self, W, H, T, cantidad, semilla=1, color=(255, 226, 180), tam=(2, 5)):
        rnd = random.Random(semilla)
        self.W, self.H, self.T = W, H, T
        self.motas = []
        for _ in range(cantidad):
            r = rnd.uniform(*tam)
            lado = int(r * 6)
            m = radial(lado, lado, rx=0.5, ry=0.5, dentro=255, fuera=0, potencia=1.6, n=24)
            spr = Image.new('RGBA', (lado, lado), color + (0,))
            spr.putalpha(m)
            self.motas.append(dict(
                spr=spr, x=rnd.uniform(0, W), y=rnd.uniform(0, H + 60),
                vueltas=rnd.choice([1, 1, 2]), vaiven=rnd.uniform(6, 22),
                fase=rnd.uniform(0, 6.28), brillo=rnd.uniform(0.25, 0.6),
                parpadeo=rnd.choice([2, 3, 5]),
            ))

    def dibujar(self, lienzo, t, alfa=1.0):
        tramo_y = self.H + 60
        for m in self.motas:
            y = (m['y'] - m['vueltas'] * tramo_y * t / self.T) % tramo_y - 30
            x = m['x'] + m['vaiven'] * math.sin(2 * math.pi * t / self.T + m['fase'])
            b = m['brillo'] * (0.65 + 0.35 * math.sin(2 * math.pi * m['parpadeo'] * t / self.T + m['fase']))
            pegar(lienzo, m['spr'], x - m['spr'].width / 2, y - m['spr'].height / 2, b * alfa)


class Acabado:
    """Viñeta + resplandor cálido que respira como una llama."""

    def __init__(self, W, H, T, vineta=150, luz=AMBAR, luz_centro=(0.5, 0.7), luz_radio=(0.55, 0.45),
                 luz_fuerza=0.22):
        self.T = T
        self.negro = Image.new('RGB', (W, H), (8, 5, 4))
        self.vineta = radial(W, H, rx=0.72, ry=0.72, dentro=0, fuera=vineta, potencia=2.4)
        m = radial(W, H, cx=luz_centro[0], cy=luz_centro[1], rx=luz_radio[0], ry=luz_radio[1],
                   dentro=255, fuera=0, potencia=1.5)
        self.luz = Image.composite(Image.new('RGB', (W, H), luz), Image.new('RGB', (W, H), (0, 0, 0)), m)
        self.fuerza = luz_fuerza

    def aplicar(self, img, t):
        k = self.fuerza * (1 + ondas(t, self.T, [(3, 0.10, 0.0), (7, 0.06, 1.3), (13, 0.04, 2.1)]))
        img = ImageChops.screen(img, escala(self.luz, k))
        return Image.composite(self.negro, img, self.vineta)


# ----------------------------------------------------------------------
# Cortinilla de luz: la toma nueva entra de abajo arriba con un filo cálido
# ----------------------------------------------------------------------

class Cortinilla:
    def __init__(self, W, H, suavidad=0.18):
        self.W, self.H = W, H
        self.b = max(8, int(H * suavidad))
        self.rampa = Image.linear_gradient('L').resize((1, 2 * self.b))
        tienda = Image.new('L', (1, 2 * self.b))
        for j in range(2 * self.b):
            tienda.putpixel((0, j), int(255 * (1 - abs(j - self.b) / self.b) ** 1.5))
        self.tienda = tienda
        self.ambar = Image.new('RGB', (W, H), AMBAR)
        self.negro = Image.new('RGB', (W, H), (0, 0, 0))

    def mezclar(self, sale_img, entra_img, q, brillo=0.5):
        W, H, b = self.W, self.H, self.b
        borde = round((1 - q) * (H + 2 * b) - b)
        col = Image.new('L', (1, H), 0)
        col.paste(self.rampa, (0, borde - b))
        if borde + b < H:
            col.paste(255, (0, max(0, borde + b), 1, H))
        m = col.resize((W, H), Image.NEAREST)
        img = Image.composite(entra_img, sale_img, m)
        k = brillo * math.sin(math.pi * q)
        if k > 0.01:
            banda = Image.new('L', (1, H), 0)
            banda.paste(self.tienda, (0, borde - b))
            banda = banda.resize((W, H), Image.NEAREST).point(lambda v: int(v * k))
            img = ImageChops.screen(img, Image.composite(self.ambar, self.negro, banda))
        return img


class Secuencia:
    """Fotos que se turnan en un panel: empuje lento de cámara y cortinilla."""

    def __init__(self, nombres, W, H, D=3.5, X=1.1, desfase=0.0):
        self.W, self.H, self.D, self.X = W, H, D, X
        self.fotos = [preparar(foto(n), W, H, 1.16) for n in nombres]
        self.T = D * len(nombres)
        self.desfase = desfase
        self.cortina = Cortinilla(W, H)

    def toma(self, j, p):
        n = len(self.fotos)
        j %= n
        img = self.fotos[j]
        z = lerp(1.03, 1.13, p) if j % 2 == 0 else lerp(1.13, 1.03, p)
        fx = lerp(0.40, 0.60, p) if j % 3 != 1 else lerp(0.60, 0.40, p)
        fy = lerp(0.56, 0.44, p)
        return encuadre(img, self.W, self.H, z, fx, fy)

    def cuadro(self, t):
        D, X, T = self.D, self.X, self.T
        t = (t - self.desfase) % T
        k = int(t // D)
        u = t - k * D
        p = u / (D + X)
        actual = self.toma(k, p)
        if u >= X:
            return actual
        p_prev = (u + D) / (D + X)
        anterior = self.toma(k - 1, p_prev)
        return self.cortina.mezclar(anterior, actual, suave(u / X))


# ----------------------------------------------------------------------
# Escenas
# ----------------------------------------------------------------------

def escena_portada(W, H):
    """Portada: paneles de fotos con empuje lento y cortinilla de luz en
    cascada. Ancho: tres paneles. Vertical: uno."""
    D = 3.5
    if W > H:
        grupos = [
            ['pino-grande', 'pesebre-choza', 'vela-mirella', 'angel'],
            ['bola-navidad', 'muneco-nieve', 'pesebre-arbolito-angel', 'vela-papa-noel'],
            ['pesebre-casa', 'peonia-grande', 'pino-pequeno', 'souvenir-navideno'],
        ]
        hueco = 6
        ancho = (W - 2 * hueco) // 3
        paneles = [Secuencia(g, ancho, H, D=D, desfase=i * 0.45) for i, g in enumerate(grupos)]
        xs = [0, ancho + hueco, W - ancho]
    else:
        paneles = [Secuencia(['pino-grande', 'angel', 'pesebre-casa', 'bola-navidad'], W, H, D=D)]
        xs = [0]
    T = paneles[0].T
    acabado = Acabado(W, H, T, vineta=130, luz_centro=(0.5, 0.78), luz_radio=(0.7, 0.5), luz_fuerza=0.16)
    polvo = Polvo(W, H, T, 14 if W > H else 9, semilla=3)
    placa = marca_de_agua(round(min(W, H) * 0.062), 'oscuro')
    fondo = Image.new('RGB', (W, H), TINTA_HONDA)

    def cuadro(t):
        img = fondo.copy()
        for x, panel in zip(xs, paneles):
            img.paste(panel.cuadro(t), (x, 0))
        img = acabado.aplicar(img, t)
        polvo.dibujar(img, t)
        poner_marca(img, placa, lado_marca(W, H), margen_x=0.08 if W > H else 0.09, margen_y=0.09 if W > H else 0.11)
        return img

    return cuadro, T


def tarjeta(nombre, ancho, giro, desenfoque, luz):
    """Foto en tarjeta: proporción 3:4, esquinas, filo crema, sombra."""
    alto = round(ancho * 4 / 3)
    img = encuadre(preparar(foto(nombre), ancho, alto, 1.0), ancho, alto, 1.0, 0.5, 0.5)
    if luz < 1:
        img = escala(img, luz)
    img = esquinas(img, max(4, ancho // 22))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, ancho - 1, alto - 1), max(4, ancho // 22), outline=(243, 234, 218, 120), width=2)
    img, _ = con_sombra(img, max(4, ancho // 16), 0.6, (0, max(3, ancho // 30)))
    if giro:
        img = img.rotate(giro, resample=Image.BICUBIC, expand=True)
    if desenfoque:
        img = img.filter(ImageFilter.GaussianBlur(desenfoque))
    return img


def escena_navidad(W, H):
    """Vitrina nocturna: tarjetas con las velas de Navidad que flotan hacia
    arriba en tres profundidades (lejos = pequeñas, lentas y desenfocadas)."""
    T = 20.0
    ancho_ref = W if W > H else W * 1.5
    capas = [
        # (ancho relativo, desenfoque, luz, vueltas por ciclo, tramo extra)
        (0.10, 3.0, 0.55, 1, 1.0),
        (0.145, 1.2, 0.78, 1, 1.35),
        (0.20, 0, 1.0, 1, 1.9),
    ]
    nombres = ['pesebre-estrella-arco', 'pesebre-estrella', 'pesebre-arbol', 'pesebre-mini-poli',
               'bola-pesebre', 'muneco-ano-viejo', 'arbol-navidad', 'noche-velitas-3', 'kit-12-deseos',
               'vela-navidad', 'caja-proposito-x6', 'pesebre-choza', 'vela-degrade-pequena', 'muneco-nieve']
    cuantas = [6, 5, 3] if W > H else [4, 3, 2]
    rnd = random.Random(7)
    elementos = []
    i = 0
    for c, (rel, blur, luz, vueltas, extra) in enumerate(capas):
        n = cuantas[c]
        for k in range(n):
            nombre = nombres[i % len(nombres)]
            i += 1
            spr = tarjeta(nombre, round(ancho_ref * rel), rnd.uniform(-5, 5), blur, luz)
            tramo_y = (H + spr.height) * extra
            # Repartidas a lo ancho por franjas, con algo de azar
            x = (k + 0.5) / n * W + rnd.uniform(-0.25, 0.25) * W / n - spr.width / 2
            y0 = (k / n) * tramo_y + rnd.uniform(0, tramo_y / n * 0.5)
            elementos.append(dict(spr=spr, x=x, y0=y0, tramo=tramo_y, vueltas=vueltas,
                                  vaiven=rnd.uniform(4, 10), fase=rnd.uniform(0, 6.28)))
    fondo = vertical(W, H, (22, 15, 13), (40, 17, 22))
    halo = radial(W, H, cx=0.32, cy=0.45, rx=0.6, ry=0.7, dentro=255, fuera=0, potencia=1.4)
    fondo = Image.composite(Image.new('RGB', (W, H), (70, 22, 32)), fondo, halo.point(lambda v: v * 0.55))
    acabado = Acabado(W, H, T, vineta=170, luz_centro=(0.62, 0.62), luz_radio=(0.55, 0.5), luz_fuerza=0.13)
    placa = marca_de_agua(round(min(W, H) * 0.062), 'oscuro')

    def cuadro(t):
        img = fondo.copy()
        for e in elementos:
            alto = e['spr'].height
            y = (e['y0'] - e['vueltas'] * e['tramo'] * t / T) % e['tramo'] - alto
            x = e['x'] + e['vaiven'] * math.sin(2 * math.pi * t / T + e['fase'])
            pegar(img, e['spr'], x, y)
        img = acabado.aplicar(img, t)
        poner_marca(img, placa, lado_marca(W, H), margen_x=0.08, margen_y=0.10)
        return img

    return cuadro, T


class Clip:
    """Fotogramas de un video real, recortados a W×H y guardados en JPG."""

    def __init__(self, ffmpeg, ruta, W, H, foco_y, tmp, nombre):
        self.dir = os.path.join(tmp, nombre)
        os.makedirs(self.dir, exist_ok=True)
        # El recorte va con expresiones de ffmpeg y después de escalar: así
        # vale también para videos de celular con rotación en los metadatos.
        filtro = (f'scale={W}:{H}:force_original_aspect_ratio=increase:flags=lanczos,'
                  f'crop={W}:{H}:(iw-{W})/2:(ih-{H})*{foco_y},eq=contrast=1.04:saturation=1.05')
        subprocess.run([ffmpeg, '-v', 'error', '-y', '-i', ruta, '-vf', filtro,
                        '-q:v', '2', os.path.join(self.dir, '%04d.jpg')], check=True)
        self.rutas = sorted(glob.glob(os.path.join(self.dir, '*.jpg')))
        self.cache = {}

    def _f(self, i):
        i = max(0, min(len(self.rutas) - 1, i))
        if i not in self.cache:
            if len(self.cache) > 12:
                self.cache.clear()
            self.cache[i] = Image.open(self.rutas[i]).convert('RGB')
        return self.cache[i]

    def en(self, segundos):
        """Cuadro en un instante, mezclando los dos vecinos (cámara lenta suave)."""
        f = segundos * FPS
        i = int(f)
        a = f - i
        if a < 0.05 or i + 1 >= len(self.rutas):
            return self._f(i)
        return Image.blend(self._f(i), self._f(i + 1), a)


def escena_personalizadas(W, H, ffmpeg, tmp):
    """Tarjeta partida: dos paneles con los videos REALES de bautizo y quince
    años en cámara lenta, alternando con fotos de velas marcadas. Las
    tomas nuevas entran deslizando, cada panel en sentido contrario."""
    T = 12.0
    mitad = T / 2
    X = 0.9
    ancho_v = W > H
    hueco = 4
    if ancho_v:
        pw, ph = (W - hueco) // 2, H
        pos = [(0, 0), (W - pw, 0)]
    else:
        pw, ph = W, (H - hueco) // 2
        pos = [(0, 0), (0, H - ph)]
    v1 = os.path.join(PERSONALIZADAS, 'WhatsApp Video 2025-11-01 at 8.35.45 PM.mp4')
    v2 = os.path.join(PERSONALIZADAS, 'WhatsApp Video 2025-11-01 at 8.36.22 PM.mp4')
    bautizo = Clip(ffmpeg, v1, pw, ph, 0.78, tmp, f'bautizo-{W}x{H}')
    quince = Clip(ffmpeg, v2, pw, ph, 0.92, tmp, f'quince-{W}x{H}')
    marcada = preparar(foto('vela-marcada'), pw, ph, 1.2)
    dorada = preparar(foto('vela-dorada'), pw, ph, 1.2)

    # Cada panel: dos tramos de 6 s. tau va de -X (entrando) a 6.
    def panel_izq(tramo, tau):
        p = (tau + X) / (mitad + X)
        if tramo == 0:   # bautizo a 0,62x
            return bautizo.en(p * 4.2)
        return encuadre(marcada, pw, ph, lerp(1.06, 1.16, p), lerp(0.15, 0.85, p), 0.5)

    def panel_der(tramo, tau):
        p = (tau + X) / (mitad + X)
        if tramo == 0:
            return encuadre(dorada, pw, ph, lerp(1.16, 1.04, p), 0.5, lerp(0.35, 0.6, p))
        return quince.en(0.8 + p * 5.6)

    def componer(fn, t, sentido):
        k = int(t // mitad)
        tau = t - k * mitad
        actual = fn(k % 2, tau)
        if tau >= X:
            return actual
        anterior = fn((k - 1) % 2, tau + mitad)
        q = sale(tau / X)
        img = Image.new('RGB', (pw, ph))
        if ancho_v:
            d = round(ph * q) * sentido
            img.paste(escala(anterior, 1 - 0.45 * q), (0, -round(d * 0.3)))
            img.paste(actual, (0, sentido * ph - d))
        else:
            d = round(pw * q) * sentido
            img.paste(escala(anterior, 1 - 0.45 * q), (-round(d * 0.3), 0))
            img.paste(actual, (sentido * pw - d, 0))
        return img

    vino = Image.new('RGB', (W, H), VINO)
    fondo = Image.new('RGB', (W, H), VINO_HONDO)
    acabado = Acabado(W, H, T, vineta=150, luz_centro=(0.5, 0.5), luz_radio=(0.6, 0.6), luz_fuerza=0.10)
    placa = marca_de_agua(round(min(W, H) * 0.062), 'oscuro')
    # Divisoria dorada con el rombo del logo
    divisoria = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(divisoria)
    c = ORO_VELO + (200,)
    r = max(5, min(W, H) // 70)
    if ancho_v:
        x = W // 2
        d.line((x, 0, x, H), fill=ORO_VELO + (150,), width=2)
        d.polygon([(x, H // 2 - r), (x + r, H // 2), (x, H // 2 + r), (x - r, H // 2)], fill=c)
    else:
        y = H // 2
        d.line((0, y, W, y), fill=ORO_VELO + (150,), width=2)
        d.polygon([(W // 2, y - r), (W // 2 + r, y), (W // 2, y + r), (W // 2 - r, y)], fill=c)

    def cuadro(t):
        img = fondo.copy()
        img.paste(componer(panel_izq, t, 1), pos[0])
        img.paste(componer(panel_der, t, -1), pos[1])
        img = Image.blend(img, vino, 0.10)
        img = acabado.aplicar(img, t)
        img.paste(divisoria, (0, 0), divisoria)
        poner_marca(img, placa, lado_marca(W, H), margen_x=0.08, margen_y=0.10)
        return img

    return cuadro, T


def escena_contacto(W, H):
    """Contacto: cámara que sube despacio por cada vela y cambia de foco
    a través de un destello cálido."""
    # Sin velas degradé: en el mosaico ya va al lado el video real de ellas.
    nombres = ['poli-mediano', 'vela-huella-mascota', 'noche-velitas-3', 'pesebre-mini-poli']
    D, X = 3.0, 0.9
    T = D * len(nombres)
    fotos = [preparar(foto(n), W, H, 1.14) for n in nombres]
    acabado = Acabado(W, H, T, vineta=140, luz_centro=(0.5, 0.35), luz_radio=(0.7, 0.45), luz_fuerza=0.12)
    destello = Image.composite(Image.new('RGB', (W, H), (255, 196, 140)), Image.new('RGB', (W, H), (0, 0, 0)),
                               radial(W, H, cy=0.45, rx=0.8, ry=0.6, dentro=255, fuera=0, potencia=1.2))
    placa = marca_de_agua(round(min(W, H) * 0.075), 'oscuro')

    def toma(j, p):
        j %= len(fotos)
        return encuadre(fotos[j], W, H, lerp(1.12, 1.02, p), 0.5, lerp(0.75, 0.25, p))

    def cuadro(t):
        t %= T
        k = int(t // D)
        u = t - k * D
        p = u / (D + X)
        img = toma(k, p)
        if u < X:
            q = u / X
            img = img.filter(ImageFilter.GaussianBlur(10 * (1 - suave(q))))
            anterior = toma(k - 1, (u + D) / (D + X)).filter(ImageFilter.GaussianBlur(10 * suave(q)))
            img = Image.blend(anterior, img, suave(q))
            img = ImageChops.screen(img, escala(destello, 0.45 * math.sin(math.pi * q)))
        img = acabado.aplicar(img, t)
        poner_marca(img, placa, 'centro', margen_y=0.08)
        return img

    return cuadro, T


# ----------------------------------------------------------------------
# Promocional vertical (galería de videos)
# ----------------------------------------------------------------------

def arco(ancho, alto):
    """Máscara de ventana en arco (medio punto)."""
    m = Image.new('L', (ancho * 2, alto * 2), 0)
    d = ImageDraw.Draw(m)
    r = ancho
    d.ellipse((0, 0, 2 * r - 1, 2 * r - 1), fill=255)
    d.rectangle((0, r, 2 * ancho - 1, 2 * alto - 1), fill=255)
    return m.resize((ancho, alto), Image.LANCZOS)


def escena_promocional(W, H):
    T = 21.0
    cx = W // 2
    crema = Image.new('RGB', (W, H), CREMA)
    vino_fondo = vertical(W, H, (92, 22, 34), (52, 12, 20))
    placa_clara = marca_de_agua(round(W * 0.062), 'claro')
    placa_oscura = marca_de_agua(round(W * 0.062), 'oscuro')

    logo = Image.open(LOGO).convert('RGBA')
    logo = logo.resize((330, round(logo.height * 330 / logo.width)), Image.LANCZOS)
    logo_fin = logo.resize((280, round(logo.height * 280 / logo.width)), Image.LANCZOS)

    # 1. Apertura
    t1 = texto('HECHAS A MANO EN MEDELLÍN', SANS, 21, ORO_HONDO, espaciado=5)
    # 2. Arco
    aw, ah = 500, 690
    ventana = arco(aw, ah)
    pino = preparar(foto('pino-grande'), aw, ah, 1.12)
    filete = Image.new('RGBA', (aw + 28, ah + 28), (0, 0, 0, 0))
    m2 = arco(aw + 28, ah + 28)
    borde = ImageChops.subtract(m2, m2.filter(ImageFilter.MinFilter(3)))
    filete.paste(ORO + (255,), (0, 0), borde)
    t2a = texto('Velas artesanales', SERIF, 66, TINTA)
    t2b = texto('para regalar y emprender', SERIF_IT, 46, VINO)
    # 3. Rejilla
    t3a = texto('TEMPORADA 2026', SANS, 21, ORO_HONDO, espaciado=5)
    t3b = fila(texto('Navidad hecha', SERIF, 58, TINTA), texto('a mano', SERIF_IT, 58, VINO), separacion=16)
    celdas = [('angel', (48, 330, 344, 820)), ('pesebre-casa', (408, 330, 264, 402)),
              ('bola-navidad', (408, 748, 264, 402))]
    celdas = [(preparar(foto(n), r[2], r[3], 1.12), r) for n, r in celdas]
    radio = 16
    mascaras = []
    for _, (x, y, w, h) in celdas:
        mk = Image.new('L', (w, h), 0)
        ImageDraw.Draw(mk).rounded_rectangle((0, 0, w - 1, h - 1), radio, fill=255)
        mascaras.append(mk)
    # 4. Personalizadas (fondo vino)
    marcada = preparar(foto('vela-marcada'), 640, 430, 1.12)
    marco_m = Image.new('L', (640, 430), 0)
    ImageDraw.Draw(marco_m).rounded_rectangle((0, 0, 639, 429), 14, fill=255)
    t4a = texto('A TU MEDIDA', SANS, 21, ORO_VELO, espaciado=5)
    t4b = texto('Velas', SERIF, 64, CREMA_TINTA)
    t4c = texto('personalizadas', SERIF_IT, 64, ORO_VELO)
    t4d = texto('Bautizos · Primera comunión · Quince años', SANS_LIGERA, 25, (243, 234, 218))
    t4e = texto('Bodas · Baby shower · Empresas', SANS_LIGERA, 25, (243, 234, 218))
    # 5. Confianza
    lineas = [texto(s, SERIF, 50, TINTA) for s in ('Hechas a mano', 'Envíos a toda Colombia', 'Detal y por mayor')]
    rombo = Image.new('RGBA', (18, 18), (0, 0, 0, 0))
    ImageDraw.Draw(rombo).polygon([(9, 0), (18, 9), (9, 18), (0, 9)], fill=ORO + (255,))
    # 6. Cierre
    t6a = texto('Escríbenos por WhatsApp', SERIF_IT, 46, VINO)
    t6b = texto('velasyaromaselena.com', SANS, 23, ORO_HONDO, espaciado=2)

    def centrado(img, spr, y, alfa=1.0, dy=0.0):
        pegar(img, spr, cx - spr.width / 2, y + dy, alfa)

    def entra(t, a, dur=0.7):
        """(opacidad, desplazamiento) de un elemento que entra en a."""
        q = sale((t - a) / dur)
        return q, (1 - q) * 26

    def cuadro(t):
        # Fondo: crema, salvo la escena 4 en vino
        f4 = tramo(t, 10.6, 11.1) * (1 - tramo(t, 14.7, 15.2))
        img = crema.copy() if f4 <= 0 else (vino_fondo.copy() if f4 >= 1 else Image.blend(crema, vino_fondo, f4))

        # 1. Apertura 0-3.2
        if t < 3.4:
            sal = 1 - tramo(t, 2.6, 3.2)
            q = sale(t / 1.1)
            s = lerp(0.94, 1.0, q)
            lg = logo.resize((round(logo.width * s), round(logo.height * s)), Image.BICUBIC) if s < 0.999 else logo
            pegar(img, lg, cx - lg.width / 2, 520 - lg.height / 2 - (1 - sal) * 30, q * sal)
            a, dy = entra(t, 1.0)
            centrado(img, t1, 730, a * sal, dy - (1 - sal) * 30)

        # 2. Arco 3.0-7.2
        if 2.9 < t < 7.4:
            tl = t - 3.0
            sal = 1 - tramo(t, 6.6, 7.2)
            ax, ay = cx - aw // 2, 130 - round((1 - sal) * 60)
            rev = sale(tl / 1.0)
            vista = encuadre(pino, aw, ah, lerp(1.1, 1.0, recorta(tl / 4.2)), 0.5, 0.45)
            mk = ventana.copy()
            corte = round(ah * (1 - rev))
            if corte > 0:
                mk.paste(0, (0, 0, aw, corte))
            if sal < 1:
                mk = mk.point(lambda v: int(v * sal))
            img.paste(vista, (ax, ay), mk)
            pegar(img, filete, ax - 14, ay - 14, tramo(tl, 0.5, 1.3) * sal)
            a, dy = entra(tl, 0.8)
            centrado(img, t2a, 880 - (1 - sal) * 40, a * sal, dy)
            a, dy = entra(tl, 1.1)
            centrado(img, t2b, 972 - (1 - sal) * 40, a * sal, dy)

        # 3. Rejilla 7.0-11.0
        if 6.9 < t < 11.2:
            tl = t - 7.0
            sal = 1 - tramo(t, 10.4, 11.0)
            a, dy = entra(tl, 0.1)
            centrado(img, t3a, 150, a * sal, dy)
            a, dy = entra(tl, 0.3)
            centrado(img, t3b, 196, a * sal, dy)
            for n, ((im, (x, y, w, h)), mk) in enumerate(zip(celdas, mascaras)):
                rev = sale((tl - 0.35 - n * 0.18) / 0.9)
                if rev <= 0:
                    continue
                p = recorta(tl / 4.0)
                vista = encuadre(im, w, h, lerp(1.12, 1.02, p), 0.5, lerp(0.6, 0.4, p) if n else 0.5)
                m = mk.copy()
                corte = round(h * (1 - rev))
                if corte > 0:
                    m.paste(0, (0, 0, w, corte))
                if sal < 1:
                    m = m.point(lambda v: int(v * sal))
                img.paste(vista, (x, y + round((1 - rev) * 30) - round((1 - sal) * 40)), m)

        # 4. Personalizadas 11.0-15.0
        if 10.9 < t < 15.2:
            tl = t - 11.0
            sal = 1 - tramo(t, 14.5, 15.1)
            rev = sale((tl - 0.1) / 0.9)
            if rev > 0:
                vista = encuadre(marcada, 640, 430, 1.08, lerp(0.15, 0.85, recorta(tl / 4.0)), 0.5)
                m = marco_m.point(lambda v: int(v * rev * sal))
                img.paste(vista, (40, 220 + round((1 - rev) * 40)), m)
            a, dy = entra(tl, 0.5)
            centrado(img, t4a, 740, a * sal, dy)
            a, dy = entra(tl, 0.7)
            centrado(img, t4b, 790, a * sal, dy)
            a, dy = entra(tl, 0.85)
            centrado(img, t4c, 868, a * sal, dy)
            a, dy = entra(tl, 1.2)
            centrado(img, t4d, 990, a * sal * 0.9, dy)
            a, dy = entra(tl, 1.35)
            centrado(img, t4e, 1032, a * sal * 0.9, dy)

        # 5. Confianza 15.0-18.2
        if 14.9 < t < 18.4:
            tl = t - 15.0
            sal = 1 - tramo(t, 17.6, 18.2)
            for n, ln in enumerate(lineas):
                a, dy = entra(tl, 0.35 + n * 0.45)
                y = 470 + n * 140
                centrado(img, ln, y, a * sal, dy)
                pegar(img, rombo, cx - 9, y - 52 + dy, a * sal)

        # 6. Cierre 18.0-21.0 (vuelve a crema para enlazar con la apertura)
        if t > 17.9:
            tl = t - 18.0
            sal = 1 - tramo(t, 20.4, 20.95)
            q = sale(tl / 1.0)
            pegar(img, logo_fin, cx - logo_fin.width / 2, 400 + (1 - q) * 20, q * sal)
            a, dy = entra(tl, 0.6)
            centrado(img, t6a, 730, a * sal, dy)
            a, dy = entra(tl, 0.85)
            centrado(img, t6b, 806, a * sal, dy)

        # Marca de agua arriba: abajo están los botones de la galería.
        # Placa clara sobre crema y oscura sobre vino.
        if f4 < 1:
            poner_marca(img, placa_clara, 'centro', margen_y=0.035, alfa=0.95 * (1 - f4), arriba=True)
        if f4 > 0:
            poner_marca(img, placa_oscura, 'centro', margen_y=0.035, alfa=0.95 * f4, arriba=True)
        return img

    return cuadro, T


# ----------------------------------------------------------------------
# Catálogo y render
# ----------------------------------------------------------------------

VIDEOS = {
    # nombre: (escena, W, H, crf, segundo del póster)
    # Los fondos van bajo un velo oscuro del 60-90 %: aguantan más compresión.
    'portada-taller-16x9': ('portada', 1280, 720, 31, 0.0),
    'portada-taller-9x16': ('portada', 720, 1280, 30, 0.0),
    'navidad-vitrina-16x9': ('navidad', 1280, 720, 29, 0.0),
    'navidad-vitrina-9x16': ('navidad', 540, 960, 29, 0.0),
    'personalizadas-16x9': ('personalizadas', 1280, 720, 31, 0.0),
    'personalizadas-9x16': ('personalizadas', 540, 960, 30, 0.0),
    'contacto-luz-9x16': ('contacto', 540, 960, 29, 0.0),
    'promocional-elena-9x16': ('promocional', 720, 1280, 23, 5.2),
}


def buscar_ffmpeg(dado):
    if dado:
        return dado
    en_path = shutil.which('ffmpeg')
    if en_path:
        return en_path
    pat = os.path.expanduser('~/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg*/ffmpeg-*/bin/ffmpeg.exe')
    hallados = sorted(glob.glob(pat))
    if hallados:
        return hallados[-1]
    sys.exit('No encuentro ffmpeg: pásalo con --ffmpeg RUTA')


def render(nombre, salida, ffmpeg, tmp):
    escena, W, H, crf, t_poster = VIDEOS[nombre]
    if escena == 'portada':
        cuadro, T = escena_portada(W, H)
    elif escena == 'navidad':
        cuadro, T = escena_navidad(W, H)
    elif escena == 'personalizadas':
        cuadro, T = escena_personalizadas(W, H, ffmpeg, tmp)
    elif escena == 'contacto':
        cuadro, T = escena_contacto(W, H)
    else:
        cuadro, T = escena_promocional(W, H)

    os.makedirs(os.path.join(salida, 'posters'), exist_ok=True)
    mp4 = os.path.join(salida, nombre + '.mp4')
    poster = os.path.join(salida, 'posters', nombre + '.webp')
    total = round(T * FPS)
    i_poster = min(total - 1, round(t_poster * FPS))
    cmd = [ffmpeg, '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}',
           '-r', str(FPS), '-i', '-', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf),
           '-tune', 'film', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.0',
           '-g', str(FPS * 2), '-movflags', '+faststart', mp4]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    inicio = time.time()
    for i in range(total):
        img = cuadro(i / FPS)
        if img.size != (W, H) or img.mode != 'RGB':
            raise RuntimeError(f'{nombre}: cuadro {i} con tamaño {img.size} {img.mode}')
        proc.stdin.write(img.tobytes())
        if i == i_poster:
            # El póster de la portada es la imagen principal de la página:
            # en los anchos se aprieta más para que pinte rápido.
            img.save(poster, 'WEBP', quality=80 if W * H < 900000 else 66, method=6)
    proc.stdin.close()
    if proc.wait() != 0:
        raise RuntimeError(f'ffmpeg falló con {nombre}')
    kb = os.path.getsize(mp4) / 1024
    print(f'{nombre}: {W}x{H}, {T:.1f} s, {kb:.0f} KB, {time.time() - inicio:.0f} s de render')


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('videos', nargs='*', help='nombres a generar (por defecto, todos)')
    ap.add_argument('--salida', default=os.path.join(RAIZ, 'assets', 'videos'))
    ap.add_argument('--ffmpeg', default=None)
    a = ap.parse_args()
    ffmpeg = buscar_ffmpeg(a.ffmpeg)
    nombres = a.videos or list(VIDEOS)
    for n in nombres:
        if n not in VIDEOS:
            sys.exit(f'No conozco "{n}". Opciones: {", ".join(VIDEOS)}')
    tmp = tempfile.mkdtemp(prefix='videos-elena-')
    try:
        for n in nombres:
            render(n, a.salida, ffmpeg, tmp)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == '__main__':
    main()
