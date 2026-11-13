import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";
import { FPS } from "./theme";
import { clamp, useUnit } from "./kit";

/** Máscara que deja libre el centro (el producto) y deja actuar el efecto en los bordes. */
const edgeMask =
  "radial-gradient(ellipse at 50% 55%, transparent 26%, rgba(0,0,0,.55) 52%, #000 85%)";

/** Telas vaporosas moviéndose lentamente con el viento. */
export const Veil: React.FC<{ opacity?: number; seed?: number }> = ({ opacity = 0.5, seed = 0 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useUnit();
  const t = f / FPS;
  const Sheet = (i: number) => {
    const sw = Math.sin(t * 0.55 + i * 2 + seed) * 0.5 + 0.5;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: -height * 0.1,
          left: i === 0 ? -width * 0.25 : width * 0.55,
          width: width * 0.7,
          height: height * 1.2,
          background: `linear-gradient(${95 + i * 20}deg, transparent 0%, rgba(255,236,205,.55) ${28 + sw * 14}%, rgba(255,200,140,.2) ${62 + sw * 8}%, transparent 100%)`,
          filter: `blur(${26 * u}px)`,
          transform: `translateX(${(sw - 0.5) * 140 * u * (i ? -1 : 1)}px) skewX(${(sw - 0.5) * 14}deg) scaleY(${1 + sw * 0.06})`,
          opacity: 0.8,
        }}
      />
    );
  };
  return (
    <AbsoluteFill style={{ opacity, mixBlendMode: "screen", WebkitMaskImage: edgeMask, maskImage: edgeMask, pointerEvents: "none" }}>
      {[0, 1].map(Sheet)}
    </AbsoluteFill>
  );
};

/** Humo ambiental delicado. */
export const Smoke: React.FC<{ opacity?: number; seed?: number }> = ({ opacity = 0.22, seed = 1 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useUnit();
  return (
    <AbsoluteFill style={{ opacity, mixBlendMode: "screen", WebkitMaskImage: edgeMask, maskImage: edgeMask, pointerEvents: "none" }}>
      {Array.from({ length: 6 }, (_, i) => {
        const r = (k: string) => random(`sm${seed}${k}${i}`);
        const life = 9 + r("l") * 6; // segundos por ciclo
        const ph = (((f / FPS) / life + r("p")) % 1 + 1) % 1;
        const x = (0.08 + r("x") * 0.84) * width + Math.sin(ph * 6 + i) * 90 * u;
        const y = height * (1.05 - ph * 1.25);
        const sc = 0.7 + ph * 1.2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x - 160 * u,
              top: y,
              width: 320 * u,
              height: 620 * u,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(255,240,220,.7) 0%, rgba(255,230,200,.25) 45%, transparent 72%)",
              filter: `blur(${34 * u}px)`,
              opacity: Math.sin(ph * Math.PI) * 0.9,
              transform: `scale(${sc}) rotate(${Math.sin(ph * 5 + i) * 18}deg)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

const PETAL = "M0,-30 C26,-26 34,10 0,34 C-34,10 -26,-26 0,-30Z";

/** Pétalos naturales que caen por los bordes (nunca sobre el producto). */
export const Petals: React.FC<{ count?: number; seed?: number }> = ({ count = 11, seed = 0 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useUnit();
  const t = f / FPS;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`pt${seed}${k}${i}`);
        const depth = r("d"); // 0 lejos, 1 cerca
        const size = (0.55 + depth * 1.1) * u;
        const speed = 55 + depth * 110;
        const y = (((r("y") * (height + 200) + t * speed) % (height + 200)) + height + 200) % (height + 200) - 100;
        const side = i % 2;
        const x = (side ? 0.8 + r("x") * 0.18 : 0.02 + r("x") * 0.18) * width + Math.sin(t * 0.9 + i * 1.7) * 38 * u;
        const col = ["#f6c8c0", "#f9e2c4", "#e9b872", "#f3b5ad"][i % 4];
        return (
          <svg
            key={i}
            width={70 * size}
            height={80 * size}
            viewBox="-40 -40 80 80"
            style={{
              position: "absolute",
              left: x,
              top: y,
              filter: `blur(${depth > 0.78 ? 5 * u : depth < 0.2 ? 2 * u : 0}px) drop-shadow(0 6px 10px rgba(0,0,0,.35))`,
              opacity: 0.55 + depth * 0.4,
              transform: `rotateX(${t * 70 + i * 40}deg) rotateY(${t * 55 + i * 25}deg) rotateZ(${Math.sin(t + i) * 50 + i * 30}deg)`,
            }}
          >
            <defs>
              <linearGradient id={`pg${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff4ea" />
                <stop offset="1" stopColor={col} />
              </linearGradient>
            </defs>
            <path d={PETAL} fill={`url(#pg${i})`} />
          </svg>
        );
      })}
    </AbsoluteFill>
  );
};

/** Luz volumétrica dorada de atardecer. */
export const Rays: React.FC<{ opacity?: number }> = ({ opacity = 0.35 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useUnit();
  const sw = Math.sin(f / 70);
  return (
    <AbsoluteFill style={{ opacity, mixBlendMode: "screen", pointerEvents: "none", overflow: "hidden" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: -height * 0.3,
            left: width * (0.15 + i * 0.28) + sw * 60 * u * (i - 1),
            width: (170 + i * 70) * u,
            height: height * 1.8,
            background: "linear-gradient(to bottom, rgba(255,214,140,.55), rgba(255,190,100,.08) 70%, transparent)",
            filter: `blur(${22 * u}px)`,
            transform: "rotate(-20deg)",
            opacity: 0.55 + 0.45 * Math.sin(f / 50 + i * 2),
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

/** Destello anamórfico sincronizado con la música en cada corte. */
export const Flare: React.FC<{ at: number }> = ({ at }) => {
  const f = useCurrentFrame();
  const { u, height } = useUnit();
  const o = interpolate(f, [at - 5, at, at + 16], [0, 1, 0], clamp);
  const sx = interpolate(f, [at - 5, at + 16], [0.4, 1.2], clamp);
  return (
    <AbsoluteFill style={{ opacity: o, mixBlendMode: "screen", pointerEvents: "none" }}>
      <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 48%, rgba(255,226,160,.55), rgba(255,170,70,.18) 42%, transparent 72%)" }} />
      <div
        style={{
          position: "absolute",
          left: "-10%",
          width: "120%",
          top: height * 0.48,
          height: 5 * u,
          background: "linear-gradient(90deg, transparent, #fff3d0 30%, #fff 50%, #fff3d0 70%, transparent)",
          filter: `blur(${2 * u}px)`,
          transform: `scaleX(${sx})`,
          boxShadow: "0 0 40px 10px rgba(255,200,110,.6)",
        }}
      />
    </AbsoluteFill>
  );
};

/** Etalonaje cinematográfico: calidez, viñeta y grano de película. */
export const Grade: React.FC<{ scrim?: number }> = ({ scrim = 0 }) => {
  const f = useCurrentFrame();
  const flick = 0.1 + 0.04 * Math.sin(f / 3.1) + 0.025 * Math.sin(f / 1.7);
  const j = (f % 3) * 37;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(255,150,60,.14), transparent 38%, rgba(40,12,0,.28))", mixBlendMode: "soft-light" }} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse at 30% 70%, rgba(255,170,70,${flick}), transparent 60%)`, mixBlendMode: "screen" }} />
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(6,3,0,.7) 100%)" }} />
      {scrim > 0 && (
        <AbsoluteFill style={{ opacity: scrim, background: "linear-gradient(to top, rgba(8,4,0,.92) 0%, rgba(8,4,0,.6) 36%, transparent 62%)" }} />
      )}
      <AbsoluteFill
        style={{
          opacity: 0.09,
          mixBlendMode: "overlay",
          transform: `translate(${j}px, ${j * 0.6}px) scale(1.3)`,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 1.4 -.2'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>\")",
        }}
      />
    </AbsoluteFill>
  );
};
