"""Genera la música original (pad + campanitas, 120 bpm, 20 s) -> public/audio/music.mp3"""
import numpy as np, wave, subprocess, os
SR, DUR = 44100, 20.0
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N)

def note(f): return 440 * 2 ** ((f - 69) / 12)
def add(sig, start, pan=0.5, gain=1.0):
    i = int(start * SR); j = min(N, i + len(sig))
    if i >= N: return
    L[i:j] += sig[:j-i] * gain * (1 - pan) * 2 * 0.5
    R[i:j] += sig[:j-i] * gain * pan * 2 * 0.5

def bell(f, d=2.5):
    tt = np.arange(int(SR * d)) / SR
    s = sum(a * np.sin(2*np.pi*f*m*tt) * np.exp(-tt * dec) for m, a, dec in [(1,1,1.8),(2.01,.35,2.8),(3.98,.2,4.5),(5.4,.1,6)])
    return s * (1 - np.exp(-tt * 400))

def pad(f, d):
    tt = np.arange(int(SR * d)) / SR
    s = sum(np.sin(2*np.pi*f*(1+dt)*tt) for dt in (-0.004, 0, 0.004)) + .4*np.sin(2*np.pi*f*2*tt)
    env = np.minimum(1, tt/1.2) * np.minimum(1, (d-tt)/1.2)
    return s * env / 3

# acordes (cada 4 s = 8 beats): Am, F, C, G, Am
chords = [[57,60,64],[53,57,60],[48,55,64],[55,59,62],[57,60,64]]
for k, ch in enumerate(chords):
    for n in ch:
        add(pad(note(n), 4.4), k*4, pan=.5, gain=.16)
    add(pad(note(ch[0]-12), 4.4), k*4, gain=.22)
# arpegio de campanitas en corcheas desde 3 s
arp = [[69,72,76,72],[65,69,72,69],[72,76,79,76],[67,71,74,71],[69,72,76,81]]
for k, a in enumerate(arp):
    for b in range(8):
        st = k*4 + b*.5
        if st < 3 or st > 19.2: continue
        add(bell(note(a[b % 4]), 1.8), st, pan=.3 + .4*((b%2)), gain=.11 if st < 15 else .13)
# riser inicial (0-3 s) y llama
tt = np.arange(int(SR*3)) / SR
noise = rng.normal(size=len(tt)); 
from numpy.fft import rfft, irfft
sp = rfft(noise); fr = np.fft.rfftfreq(len(tt), 1/SR); sp *= (fr > 2500) * (fr < 9000)
ris = irfft(sp, len(tt)) * (tt/3)**2.5 * 0.5
add(ris, 0, gain=.5)
add(bell(note(81), 3.5), 0.2, gain=.2)
# acentos en transiciones (3,7,11,15 s)
for s_ in (3, 7, 11, 15):
    add(bell(note(93), 2.2), s_, gain=.16); add(bell(note(81), 2.5), s_, gain=.14)
    k_ = int(SR*.5); sw = rng.normal(size=int(SR*.5)); sw = np.convolve(sw, np.ones(12)/12, 'same') * np.linspace(1,0,int(SR*.5))**2
    add(sw*.25, s_-.15, gain=.4)
# final: acorde de campanas
for n, o in zip((81, 84, 88, 93), (0, .06, .12, .18)):
    add(bell(note(n), 4.5), 15.0 + o, gain=.2)
# fade in/out + normalizar
fade = np.minimum(1, t/.6) * np.minimum(1, (DUR - t)/1.5)
L *= fade; R *= fade
# reverb sencillo
def verb(x):
    y = x.copy()
    for d, g in ((0.083,.35),(0.141,.28),(0.213,.22),(0.31,.15)):
        k = int(d*SR); y[k:] += x[:-k]*g
    return y
L, R = verb(L), verb(R)
m = max(abs(L).max(), abs(R).max()); L, R = L/m*.85, R/m*.85
pcm = (np.stack([L, R], 1) * 32767).astype('<i2')
os.makedirs('public/audio', exist_ok=True)
with wave.open('public/audio/music.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','public/audio/music.wav','-b:a','192k','public/audio/music.mp3'], check=True)
os.remove('public/audio/music.wav')
