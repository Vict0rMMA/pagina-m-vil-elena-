"""Música original cinematográfica con aire exótico (D frigio dominante), 25 s -> public/audio/music.mp3
Incluye: ambiente, encendido de vela, drone, pad, plucks tipo handpan, whooshes en cada corte, impacto y cierre."""
import numpy as np, wave, subprocess, os
from numpy.fft import rfft, irfft, rfftfreq
SR, DUR = 44100, 25.0
N = int(SR * DUR); t = np.arange(N) / SR
rng = np.random.default_rng(11)
L = np.zeros(N); R = np.zeros(N)
CUTS = [120/30, 260/30, 410/30, 575/30]  # 4.0, 8.67, 13.67, 19.17

mid = lambda m: 440 * 2 ** ((m - 69) / 12)
def put(sig, st, pan=.5, g=1.):
    i = int(st * SR)
    if i >= N or i < 0: return
    j = min(N, i + len(sig)); s = sig[:j - i] * g
    L[i:j] += s * (1 - pan) * 1.4; R[i:j] += s * pan * 1.4
def band(x, lo, hi):
    sp = rfft(x); fr = rfftfreq(len(x), 1 / SR); sp *= (fr > lo) * (fr < hi); return irfft(sp, len(x))
def env(n, a, d): 
    tt = np.arange(n) / SR; return np.minimum(1, tt / a) * np.exp(-tt / d)

def pluck(f, d=2.2):            # handpan / kalimba
    tt = np.arange(int(SR * d)) / SR
    s = np.sin(2*np.pi*f*tt) + .45*np.sin(2*np.pi*f*2.0*tt)*np.exp(-tt*3) + .2*np.sin(2*np.pi*f*3.01*tt)*np.exp(-tt*5)
    return s * np.exp(-tt * 2.2) * (1 - np.exp(-tt * 600))
def bell(f, d=3.5):
    tt = np.arange(int(SR * d)) / SR
    s = sum(a*np.sin(2*np.pi*f*m*tt)*np.exp(-tt*k) for m, a, k in [(1,1,1.3),(2.76,.4,2.2),(5.4,.25,3.5),(8.9,.12,5)])
    return s * (1 - np.exp(-tt * 500))
def pad(f, d):
    tt = np.arange(int(SR * d)) / SR
    s = sum(np.sin(2*np.pi*f*(1+k)*tt + k*50) for k in (-.006, -.002, .002, .006)) / 4 + .25*np.sin(2*np.pi*f*.5*tt)
    return s * np.minimum(1, tt/1.8) * np.minimum(1, (d-tt)/2.2)
def swell(d, lo, hi, curve=2.5):  # whoosh / reverse cymbal
    n = int(SR * d); x = band(rng.normal(size=n), lo, hi); tt = np.linspace(0, 1, n)
    return x * tt**curve * (1 - tt)**.3
def hit(f0=70, d=2.2):            # impacto grave
    tt = np.arange(int(SR*d))/SR; fr = f0*(1+2.5*np.exp(-tt*14))
    return np.sin(2*np.pi*np.cumsum(fr)/SR) * np.exp(-tt*2.4)

# --- 0.5 s: encendido de la vela (fósforo + llama)
n = int(SR*.18); sc = band(rng.normal(size=n), 2500, 9000) * np.exp(-np.arange(n)/SR*18)
put(sc, .45, .5, .5)
n = int(SR*1.0); fl = band(rng.normal(size=n), 150, 1800) * np.sin(np.linspace(0, np.pi, n))**2
put(fl, .6, .5, .22)
for _ in range(7):   # crepitar
    k = int(SR*.01); c = rng.normal(size=k) * np.exp(-np.arange(k)/k*6)
    put(c, 1.2 + rng.random()*2.4, rng.random(), .07)
# ambiente: aire suave
amb = band(rng.normal(size=N), 80, 900) * (.5 + .5*np.sin(t*.6))**2 * np.minimum(1, t/3)
put(amb, 0, .5, .09)
# --- drone D2 + A2
dr = (np.sin(2*np.pi*mid(38)*t) + .5*np.sin(2*np.pi*mid(45)*t)) * np.minimum(1, t/4) * (.8 + .2*np.sin(t*.9))
put(dr, 0, .5, .11)
# --- pad: D mayor / Gm / Eb / D (frigio dominante)
chords = [[50,54,57,62],[55,58,62,67],[51,55,58,63],[50,54,57,62]]
for k, ch in enumerate(chords):
    for m in ch: put(pad(mid(m), 7.2), k*6.25 - .4 if k else 0.8, .5, .09)
# --- plucks (escala D frigio dominante) desde 4 s, crecen hasta el clímax
scale = [62,63,66,67,69,70,72,74,75,78,79,81]
patt = [0,2,4,2,5,4,2,1]
bp = .625
st = CUTS[0]; i = 0
while st < 24.2:
    prog = np.clip((st-4)/(CUTS[3]-4), 0, 1)
    g = .05 + .10*prog
    m = scale[patt[i % 8] + (3 if st > CUTS[2] else 0)]
    put(pluck(mid(m), 1.8), st, .25 + .5*((i % 2)), g)
    if st > CUTS[1] and i % 4 == 0: put(bell(mid(m+12), 2.5), st, .7, g*.5)
    st += bp/2 if st > CUTS[2] else bp; i += 1
# --- pulso grave en el clímax (13.67–19.17)
b = CUTS[2]
while b < CUTS[3]:
    put(hit(52, .5), b, .5, .22); b += bp
# --- transiciones: swell antes del corte + impacto + destello de campana
for k, c in enumerate(CUTS):
    put(swell(.9, 1500, 9000), c - .9, .5, .16)
    put(hit(60 if k < 3 else 48, 2.6), c, .5, .38 if k < 3 else .55)
    put(bell(mid(86), 3.2), c, .65, .12); put(bell(mid(74), 3.6), c, .35, .10)
# --- cierre: acorde de campanas D frigio + cola
for m, o in zip((74, 78, 81, 86, 90), (0, .07, .14, .21, .3)):
    put(bell(mid(m), 5.5), CUTS[3] + .25 + o, .5, .13)
# --- reverb, fades, normalizar
def verb(x):
    y = x.copy()
    for d, g in ((.067,.4),(.113,.34),(.179,.3),(.271,.24),(.41,.18),(.62,.12)):
        k = int(d*SR); y[k:] += x[:-k]*g
    return y
L, R = verb(L), verb(R)
fade = np.minimum(1, t/.3) * np.minimum(1, (DUR - t)/2.0)
L *= fade; R *= fade
m = max(abs(L).max(), abs(R).max()); L, R = L/m*.88, R/m*.88
pcm = (np.stack([L, R], 1) * 32767).astype('<i2')
os.makedirs('public/audio', exist_ok=True)
with wave.open('public/audio/music.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','public/audio/music.wav','-b:a','192k','public/audio/music.mp3'], check=True)
os.remove('public/audio/music.wav')
