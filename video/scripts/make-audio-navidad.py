"""Música original para la campaña Navidad 2026: arreglo instrumental de "Noche de paz"
(F. X. Gruber, 1818 — dominio público). Celesta + cuerdas + campanas, 50 s.
Compás de 3/4 a 95 bpm a 30 fps (sincronizado con el video).
Salida: public/audio/navidad.mp3"""
import numpy as np, wave, subprocess, os
from numpy.fft import rfft, irfft, rfftfreq
SR, DUR = 44100, 50.0
N = int(SR * DUR); t = np.arange(N) / SR
rng = np.random.default_rng(26)
L = np.zeros(N); R = np.zeros(N)
BEAT = 60 / 95
START = 2.4  # la melodía entra en el fotograma 72
mid = lambda m: 440 * 2 ** ((m - 69) / 12)

def put(s, st, pan=.5, g=1.):
    i = int(st * SR)
    if i >= N or i < 0: return
    j = min(N, i + len(s)); s = s[:j - i] * g
    L[i:j] += s * (1 - pan) * 1.4; R[i:j] += s * pan * 1.4
def band(x, lo, hi):
    sp = rfft(x); f = rfftfreq(len(x), 1 / SR); sp *= (f > lo) * (f < hi); return irfft(sp, len(x))
def celesta(f, d=2.4):
    tt = np.arange(int(SR * d)) / SR
    s = np.sin(2*np.pi*f*tt) + .35*np.sin(2*np.pi*f*4*tt)*np.exp(-tt*6) + .15*np.sin(2*np.pi*f*2*tt)*np.exp(-tt*3)
    return s * np.exp(-tt * 1.9) * (1 - np.exp(-tt * 900))
def bell(f, d=4.0):
    tt = np.arange(int(SR * d)) / SR
    s = sum(a*np.sin(2*np.pi*f*m*tt)*np.exp(-tt*k) for m, a, k in [(1,1,1.1),(2.76,.35,2),(5.4,.2,3.2),(8.9,.1,5)])
    return s * (1 - np.exp(-tt * 600))
def strings(f, d):
    tt = np.arange(int(SR * d)) / SR
    vib = 1 + .003 * np.sin(2*np.pi*5*tt)
    s = sum(np.sin(2*np.pi*f*(1+k)*vib*tt + k*80) for k in (-.005, -.0015, .0015, .005)) / 4
    s += .3 * np.sin(2*np.pi*f*2*tt)
    return s * np.minimum(1, tt/.5) * np.minimum(1, (d-tt)/.6)
def piano(f, d=2.0):
    tt = np.arange(int(SR * d)) / SR
    s = np.sin(2*np.pi*f*tt) + .4*np.sin(2*np.pi*f*2*tt)*np.exp(-tt*3) + .15*np.sin(2*np.pi*f*3*tt)*np.exp(-tt*5)
    return s * np.exp(-tt * 2.2) * np.minimum(1, tt * 300)

# Melodía (nota MIDI, tiempos) — tonalidad de Do
G, A, B, C5, D5, E5, F5, E, D, C, F = 67, 69, 71, 72, 74, 76, 77, 64, 62, 60, 65
mel = [(G,1.5),(A,.5),(G,1),(E,3),(G,1.5),(A,.5),(G,1),(E,3),
       (D5,2),(D5,1),(B,3),(C5,2),(C5,1),(G,3),
       (A,2),(A,1),(C5,1.5),(B,.5),(A,1),(G,1.5),(A,.5),(G,1),(E,3),
       (A,2),(A,1),(C5,1.5),(B,.5),(A,1),(G,1.5),(A,.5),(G,1),(E,3),
       (D5,2),(D5,1),(F5,1.5),(D5,.5),(B,1),(C5,3),(E5,3),
       (C5,1.5),(G,.5),(E,1),(G,1.5),(F,.5),(D,1),(C,6)]
chords = "C C C C G G C C F F C C F F C C G G C C C G C C".split()
CH = {"C": [48, 52, 55], "G": [43, 47, 50, 53], "F": [41, 45, 48]}

st = START
for i, (m, d) in enumerate(mel):
    put(celesta(mid(m + 12), 2.6), st, .45, .32)
    put(piano(mid(m), 1.8), st, .55, .22 if st > START + 12.8 else .12)
    st += d * BEAT
melody_end = st
for k, c in enumerate(chords):
    bs = START + k * 3 * BEAT
    ch = CH[c]
    for n in ch: put(strings(mid(n + 12), 3 * BEAT + .7), bs, .5, .06 + .04 * min(1, k / 8))
    put(strings(mid(ch[0]), 3 * BEAT + .7), bs, .5, .09)
    if k >= 8:  # pulso suave de vals a partir del 2.º verso
        for beat in (1, 2):
            for n in ch[1:]: put(piano(mid(n + 12), .6), bs + beat * BEAT, .6, .035)

# Intro: aire + encendido de fósforo + llama + destello de campanas
amb = band(rng.normal(size=N), 120, 1500) * np.minimum(1, t / 2.5) * (.6 + .4*np.sin(t*.7))**2
put(amb, 0, .5, .05)
n = int(SR * .16); put(band(rng.normal(size=n), 2500, 9500) * np.exp(-np.arange(n)/SR*20), .55, .5, .45)
n = int(SR * 1.4); put(band(rng.normal(size=n), 150, 1600) * np.sin(np.linspace(0, np.pi, n))**2, .65, .5, .18)
for i, m in enumerate([84, 88, 91, 96]): put(bell(mid(m), 3.5), .9 + i * .09, .3 + i*.13, .09)
# acentos en los cambios de escena (fotogramas 168, 264, 858, 1050)
for fr in (120, 240, 330, 1254):
    s0 = fr / 30
    n = int(SR * .8); x = band(rng.normal(size=n), 2000, 9000); tt = np.linspace(0, 1, n)
    put(x * tt**3 * (1 - tt)**.3, s0 - .8, .5, .1)
    put(bell(mid(88), 3), s0, .65, .09); put(bell(mid(79), 3.5), s0, .35, .08)
# cierre
for i, m in enumerate([72, 76, 79, 84, 88]): put(bell(mid(m), 5.5), melody_end - 4.6 + i*.08, .5, .1)

def verb(x):
    y = x.copy()
    for d, g in ((.061,.42),(.097,.36),(.151,.3),(.233,.24),(.353,.18),(.53,.12),(.79,.07)):
        k = int(d*SR); y[k:] += x[:-k]*g
    return y
L, R = verb(L), verb(R)
fade = np.minimum(1, t / .2) * np.minimum(1, (DUR - t) / 1.8)
L *= fade; R *= fade
m = max(abs(L).max(), abs(R).max()); L, R = L/m*.88, R/m*.88
os.makedirs("public/audio", exist_ok=True)
with wave.open("public/audio/navidad.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((np.stack([L, R], 1) * 32767).astype("<i2").tobytes())
subprocess.run(["ffmpeg","-y","-loglevel","error","-i","public/audio/navidad.wav","-b:a","192k","public/audio/navidad.mp3"], check=True)
os.remove("public/audio/navidad.wav")
print(f"melodía termina en {melody_end:.2f}s")
