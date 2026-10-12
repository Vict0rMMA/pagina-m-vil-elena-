import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, FONT_BODY, FONT_DISPLAY, SOCIAL, WEB_URL, img } from "./theme";
import { Particles, Photo, Reveal, clamp, ease, useUnit } from "./kit";
import { staticFile } from "remotion";

/** Escena 1: oscuridad → llama → la luz revela el entorno. */
export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, width, height } = useUnit();
  const flameIn = interpolate(frame, [8, 34], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const flameOut = interpolate(frame, [62, 90], [1, 0], clamp);
  const reveal = interpolate(frame, [30, 100], [0, 1], { ...clamp, easing: ease });
  const r = reveal * Math.hypot(width, height) * 0.8;
  const mask = `radial-gradient(circle at 50% 52%, #000 ${r * 0.5}px, transparent ${r}px)`;
  const sway = Math.sin(frame / 2.3) * 3 + Math.sin(frame / 5.1) * 4;
  const sc = 0.9 + 0.1 * Math.sin(frame / 1.9) + 0.06 * Math.sin(frame / 4.3);
  const fs = flameIn * (1 + reveal * 0.3) * u;
  return (
    <AbsoluteFill style={{ background: "#050301" }}>
      <AbsoluteFill style={{ WebkitMaskImage: mask, maskImage: mask }}>
        <Photo
          src="adj3.jpg"
          dur={100}
          zoom={[1.0, 1.32]}
          origin={[18, 42]}
          pan={[0, 0]}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: flameOut,
          alignItems: "center",
          justifyContent: "center",
          top: height * 0.02,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 900 * u * flameIn,
            height: 900 * u * flameIn,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,190,90,${0.55 * sc}) 0%, rgba(255,140,40,.18) 40%, transparent 70%)`,
          }}
        />
        <svg width={220 * fs} height={420 * fs} viewBox="-60 -130 120 190" style={{ overflow: "visible" }}>
          <defs>
            <radialGradient id="fl" cx="50%" cy="72%" r="70%">
              <stop offset="0%" stopColor="#fffbe8" />
              <stop offset="35%" stopColor="#ffd98a" />
              <stop offset="75%" stopColor="#ff9d2e" />
              <stop offset="100%" stopColor="#ff6a00" stopOpacity=".1" />
            </radialGradient>
          </defs>
          <g transform={`translate(0 40) rotate(${sway * 0.6}) scale(${1 - sc * 0.04} ${sc}) translate(0 -40)`}>
            <path d="M0,-120 C34,-60 46,-10 0,42 C-46,-10 -34,-60 0,-120Z" fill="url(#fl)" />
            <ellipse cx="0" cy="22" rx="9" ry="16" fill="#7aa6ff" opacity=".55" />
          </g>
          <rect x="-1.5" y="40" width="3" height="20" fill="#2b1a0c" />
        </svg>
      </AbsoluteFill>
      <Particles count={26} seed="i" speed={0.6} />
    </AbsoluteFill>
  );
};

/** Escena 4: identidad de marca con letras 3D doradas. */
export const Brand: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { u, landscape } = useUnit();
  const word = "ELENA".split("");
  const shine = interpolate(frame, [30, 80], [-30, 130], clamp);
  const sub = spring({ frame: frame - 12, fps, config: { damping: 200 } });
  const tag = spring({ frame: frame - 62, fps, config: { damping: 200 } });
  const lineW = interpolate(frame, [40, 70], [0, 1], { ...clamp, easing: ease });
  const fsz = (landscape ? 250 : 270) * u;
  return (
    <AbsoluteFill style={{ background: C.dark }}>
      <AbsoluteFill style={{ opacity: 0.55, transform: `scale(${1.15 + frame * 0.0012})` }}>
        <Img
          src={img("vela-dorada.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(26px) brightness(.55) saturate(1.3)" }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,199,122,.28), rgba(10,5,0,.9) 70%)" }} />
      <Particles count={48} seed="b" speed={0.9} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: 1400 * u }}>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 500,
            fontSize: 46 * u,
            letterSpacing: 22 * u,
            color: C.cream,
            opacity: sub,
            transform: `translateY(${(1 - sub) * 30}px)`,
            marginBottom: 16 * u,
            textShadow: "0 0 30px rgba(232,199,122,.5)",
          }}
        >
          VELAS Y AROMAS
        </div>
        <div style={{ display: "flex", transformStyle: "preserve-3d" }}>
          {word.map((ch, i) => {
            const s = spring({ frame: frame - 18 - i * 5, fps, config: { damping: 14, stiffness: 90 } });
            return (
              <div
                key={i}
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 600,
                  fontSize: fsz,
                  lineHeight: 1,
                  transform: `rotateX(${(1 - s) * -95}deg) translateZ(${s * 40}px) translateY(${(1 - s) * 60}px)`,
                  opacity: Math.min(1, s * 1.6),
                  transformOrigin: "50% 100%",
                  backgroundImage: `linear-gradient(105deg, #8a5d1c 0%, ${C.gold} 28%, #fff4c9 ${shine - 6}%, ${C.gold} ${shine + 6}%, ${C.goldDeep} 100%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 10px 18px rgba(0,0,0,.7)) drop-shadow(0 0 28px rgba(232,199,122,.35))",
                }}
              >
                {ch}
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: 520 * u * lineW,
            height: 3 * u,
            margin: `${20 * u}px 0`,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }}
        />
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 44 * u,
            color: C.cream,
            opacity: tag,
            transform: `translateY(${(1 - tag) * 24}px)`,
            textAlign: "center",
            padding: `0 ${60 * u}px`,
            textShadow: "0 4px 22px rgba(0,0,0,.8)",
          }}
        >
          Detalles únicos para momentos especiales.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const CARDS: { src: string; rot: number }[] = [
  { src: "adj2.jpg", rot: -3 },
  { src: "adj4.jpg", rot: 2.5 },
  { src: "adj5.jpg", rot: -2 },
  { src: "pesebre-arbolito-angel.jpg", rot: 3 },
];

const Icon: React.FC<{ id: string; size: number }> = ({ id, size }) => {
  const g = { fill: "none", stroke: C.dark, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {id === "wa" && (
        <>
          <path {...g} d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6z" />
          <path {...g} d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-1.8-1.2-2.2-2.2l.8-1-1-2z" />
        </>
      )}
      {id === "ig" && (
        <>
          <rect {...g} x="3" y="3" width="18" height="18" rx="5" />
          <circle {...g} cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.2" fill={C.dark} />
        </>
      )}
      {id === "tt" && <path {...g} d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.1 4.2 5 4.5" />}
      {id === "fb" && <path {...g} d="M14 21v-8h3l.5-3.5H14V7.7c0-1 .4-1.7 1.8-1.7h1.8V3.1C17.2 3 16.2 3 15.2 3 12.8 3 11 4.5 11 7.2v2.3H8V13h3v8" />}
    </svg>
  );
};

/** Escena 5: llamado a la acción. Deja libre el área inferior para el botón de WhatsApp. */
export const Cta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { u, landscape, width } = useUnit();
  const cols = landscape ? 2 : 4;
  const boxW = landscape ? width * 0.4 : width * 0.9;
  const gap = 18 * u;
  const cardW = (boxW - gap * (cols - 1)) / cols;
  const bg = interpolate(frame, [0, 160], [1.05, 1.18], clamp);
  const fadeIn = interpolate(frame, [0, 10], [0, 1], clamp);
  const pill = spring({ frame: frame - 70, fps, config: { damping: 200 } });
  const logo = spring({ frame: frame - 112, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ background: C.dark, opacity: fadeIn }}>
      <AbsoluteFill style={{ transform: `scale(${bg})` }}>
        <Img
          src={img("noche-velitas-1.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(40px) brightness(.38) saturate(1.3)" }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,4,0,.8) 100%)" }} />
      <Particles count={36} seed="c" speed={0.7} />
      <AbsoluteFill
        style={{
          flexDirection: landscape ? "row" : "column",
          alignItems: "center",
          justifyContent: landscape ? "space-around" : "flex-start",
          paddingTop: landscape ? 0 : 150 * u,
          gap: 56 * u,
        }}
      >
        <div style={{ width: boxW, display: "flex", flexWrap: "wrap", gap, justifyContent: "center" }}>
          {CARDS.map((c, i) => {
            const s = spring({ frame: frame - 4 - i * 6, fps, config: { damping: 16, stiffness: 80 } });
            const fl = Math.sin(frame / 22 + i * 1.7) * 6 * u;
            return (
              <div
                key={c.src}
                style={{
                  width: cardW,
                  aspectRatio: "3 / 4",
                  borderRadius: 18 * u,
                  overflow: "hidden",
                  border: `${3 * u}px solid ${C.gold}`,
                  boxShadow: "0 20px 50px rgba(0,0,0,.7), 0 0 30px rgba(232,199,122,.25)",
                  opacity: s,
                  transform: `translateY(${(1 - s) * 200 + fl}px) rotate(${c.rot * s}deg) scale(${0.85 + s * 0.15})`,
                }}
              >
                <Img src={img(c.src)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 * u, padding: `0 ${40 * u}px` }}>
          <Reveal text="Encuentra tu favorita" delay={22} size={(landscape ? 78 : 112) * u} italic weight={700} color={C.gold} />
          <Reveal text="Explora nuestro catálogo y haz tu pedido." delay={36} size={46 * u} font={FONT_BODY} weight={500} />
          <Reveal text="Visita nuestra página web." delay={52} size={42 * u} font={FONT_BODY} weight={500} color={C.gold} />
          <div
            style={{
              opacity: pill,
              transform: `scale(${0.9 + pill * 0.1})`,
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: 42 * u,
              color: C.dark,
              background: `linear-gradient(100deg, ${C.goldDeep}, ${C.gold} 45%, #fff0bd 60%, ${C.gold})`,
              padding: `${14 * u}px ${38 * u}px`,
              borderRadius: 999,
              boxShadow: "0 10px 40px rgba(232,199,122,.45)",
            }}
          >
            {WEB_URL}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: landscape ? "1fr 1fr" : "1fr", columnGap: 40 * u, rowGap: 22 * u, marginTop: 8 * u }}>
            {SOCIAL.map((n, i) => {
              const s = spring({ frame: frame - 84 - i * 8, fps, config: { damping: 200 } });
              return (
                <div
                  key={n.id}
                  style={{ display: "flex", alignItems: "center", gap: 22 * u, opacity: s, transform: `translateX(${(1 - s) * -60}px)` }}
                >
                  <div
                    style={{
                      width: 76 * u,
                      height: 76 * u,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${C.gold}, ${C.goldDeep})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 24px rgba(232,199,122,.45)",
                    }}
                  >
                    <Icon id={n.id} size={44 * u} />
                  </div>
                  <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 46 * u, color: C.cream, textShadow: "0 3px 16px rgba(0,0,0,.8)" }}>
                    {n.label}
                  </span>
                </div>
              );
            })}
          </div>
          <Img src={staticFile("img/logo.png")} style={{ height: 120 * u, opacity: logo, transform: `translateY(${(1 - logo) * 20}px)`, marginTop: 4 * u }} />
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: 50 * u,
              color: C.gold,
              opacity: logo,
              transform: `translateY(${(1 - logo) * 16}px)`,
              textShadow: "0 4px 22px rgba(0,0,0,.8)",
            }}
          >
            Velas y Aromas Elena
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
