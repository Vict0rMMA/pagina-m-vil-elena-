import { AbsoluteFill, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const FPS = 30;

/** Escala relativa al lado corto (1 = 1080 px) y orientación. */
export const useLayout = () => {
  const { width, height } = useVideoConfig();
  return { u: Math.min(width, height) / 1080, width, height, wide: width > height };
};

/** Nieve suave en dos planos de profundidad. */
export const Snow: React.FC<{ count?: number; seed?: string; opacity?: number }> = ({ count = 70, seed = "s", opacity = 0.9 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useLayout();
  return (
    <AbsoluteFill style={{ pointerEvents: "none", opacity }}>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`${seed}${k}${i}`);
        const depth = r("d");
        const size = (2 + depth * 7) * u;
        const speed = (25 + depth * 70) * u;
        const y = ((r("y") * height + (f / FPS) * speed) % (height + 20)) - 10;
        const x = r("x") * width + Math.sin(f / (40 + r("w") * 40) + i) * 25 * u;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: "50%",
              background: "rgba(255,255,255,.9)",
              filter: depth > 0.8 ? `blur(${2 * u}px)` : undefined,
              opacity: 0.35 + depth * 0.55,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

/** Partículas doradas que flotan y titilan. */
export const GoldDust: React.FC<{ count?: number; seed?: string }> = ({ count = 40, seed = "g" }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useLayout();
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "screen" }}>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`${seed}${k}${i}`);
        const s = (3 + r("s") * 8) * u;
        const y = (((r("y") * height - (f / FPS) * (12 + r("v") * 30) * u) % height) + height) % height;
        const x = r("x") * width + Math.sin(f / 50 + i) * 18 * u;
        const tw = 0.3 + 0.7 * Math.abs(Math.sin(f / (12 + r("t") * 20) + i));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: s,
              height: s,
              borderRadius: "50%",
              opacity: tw,
              background: "radial-gradient(circle, #fff7df 0%, #e7c98d 45%, transparent 72%)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

/** Bokeh de luces navideñas desenfocadas. */
export const Bokeh: React.FC<{ seed?: string; count?: number; opacity?: number }> = ({ seed = "b", count = 22, opacity = 0.75 }) => {
  const f = useCurrentFrame();
  const { u, width, height } = useLayout();
  const cols = ["255,206,140", "255,180,110", "255,236,200", "190,60,60"];
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "screen", opacity }}>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`${seed}${k}${i}`);
        const s = (50 + r("s") * 150) * u;
        const pulse = 0.55 + 0.45 * Math.sin(f / (25 + r("p") * 30) + i);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: r("x") * width - s / 2 + Math.sin(f / 90 + i) * 12 * u,
              top: r("y") * height * 0.75 - s / 2,
              width: s,
              height: s,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(${cols[i % cols.length]},.55) 0%, rgba(${cols[i % cols.length]},.25) 55%, transparent 70%)`,
              opacity: pulse,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

/** Llama de vela procedural: núcleo azul, cuerpo cálido, parpadeo natural y halo. */
export const Flame: React.FC<{ size: number; intensity?: number }> = ({ size, intensity = 1 }) => {
  const f = useCurrentFrame();
  const n = (a: number, b: number) => Math.sin(f / a) * Math.sin(f / b + 1.3);
  const sway = n(5.3, 11.7) * 4 + n(2.9, 7.1) * 2;
  const stretch = 1 + n(3.7, 9.1) * 0.08 + n(1.9, 5.3) * 0.04;
  const glow = (0.85 + n(2.3, 6.7) * 0.15) * intensity;
  return (
    <div style={{ position: "relative", width: size, height: size * 2.2, opacity: intensity }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "55%",
          width: size * 9,
          height: size * 9,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255,196,110,${0.45 * glow}) 0%, rgba(255,150,60,${0.18 * glow}) 30%, transparent 65%)`,
          mixBlendMode: "screen",
        }}
      />
      <svg width={size} height={size * 2.2} viewBox="-50 -150 100 220" style={{ position: "absolute", inset: 0, overflow: "visible", filter: `blur(${size * 0.02}px)` }}>
        <defs>
          <radialGradient id="flama" cx="50%" cy="75%" r="75%">
            <stop offset="0%" stopColor="#fffdf2" />
            <stop offset="30%" stopColor="#ffe7a8" />
            <stop offset="65%" stopColor="#ffab3d" />
            <stop offset="100%" stopColor="#ff6a10" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g transform={`translate(0 40) rotate(${sway * 0.7}) scale(1 ${stretch}) translate(0 -40)`}>
          <path d="M0,-140 C30,-70 44,-12 0,44 C-44,-12 -30,-70 0,-140Z" fill="url(#flama)" />
          <ellipse cx="0" cy="22" rx="11" ry="20" fill="#5b8cff" opacity=".55" />
          <ellipse cx="0" cy="-5" rx="9" ry="30" fill="#fffef6" opacity=".7" />
        </g>
        <rect x="-2" y="40" width="4" height="22" rx="2" fill="#2b1a0e" />
      </svg>
    </div>
  );
};

/** Viñeta y gradación cálida. */
export const Grade: React.FC<{ strength?: number }> = ({ strength = 1 }) => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(255,170,90,.10), transparent 40%, rgba(25,10,0,.25))", mixBlendMode: "soft-light", opacity: strength }} />
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 48%, rgba(5,3,1,.72) 100%)", opacity: strength }} />
  </AbsoluteFill>
);

/** Destello anamórfico dorado para las transiciones. */
export const Flare: React.FC<{ at: number }> = ({ at }) => {
  const f = useCurrentFrame();
  const { u, height } = useLayout();
  const o = interpolate(f, [at - 6, at, at + 16], [0, 0.9, 0], clamp);
  if (o <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: o, mixBlendMode: "screen", pointerEvents: "none" }}>
      <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,226,170,.5), rgba(255,170,80,.15) 40%, transparent 70%)" }} />
      <div style={{ position: "absolute", left: "-10%", width: "120%", top: height * 0.5, height: 4 * u, background: "linear-gradient(90deg, transparent, #fff1cf 35%, #fff 50%, #fff1cf 65%, transparent)", boxShadow: "0 0 40px 10px rgba(255,200,120,.55)" }} />
    </AbsoluteFill>
  );
};
