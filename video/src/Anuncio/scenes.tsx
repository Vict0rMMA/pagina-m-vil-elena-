import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT_BODY, FONT_DISPLAY } from "./theme";
import { CineLayers, useCam } from "./cine";
import { Particles, clamp, useUnit } from "./kit";

const FLAME: [number, number] = [0.034, 0.29]; // llama real de la vela del farol en la foto

/** Escena 1: oscuridad → la llama real aparece y su luz revela el ambiente mientras la cámara avanza. */
export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { width: W, height: H, fps } = useVideoConfig();
  const { u } = useUnit();
  const cam = useCam({
    src: "adj3.jpg",
    a: { f: FLAME, t: [0.17, 0.45], s: 2.8, yaw: -4 },
    b: { f: [0.45, 0.58], t: [0.5, 0.52], s: 1.06, yaw: 3 },
    dur: 132,
    ease: Easing.bezier(0.5, 0, 0.25, 1),
  });
  const fx = cam.X + FLAME[0] * cam.dw * cam.s;
  const fy = cam.Y + FLAME[1] * cam.dh * cam.s;
  const r = interpolate(frame, [12, 100], [0, Math.hypot(W, H) * 0.95], { easing: Easing.inOut(Easing.cubic), ...clamp });
  const mask = `radial-gradient(circle at ${fx}px ${fy}px, #000 ${r * 0.35}px, rgba(0,0,0,.5) ${r * 0.7}px, transparent ${r}px)`;
  const flick = 0.8 + 0.12 * Math.sin(frame / 2.1) + 0.08 * Math.sin(frame / 4.7);
  const bloom = interpolate(frame, [8, 30, 110], [0, 1, 0.45], clamp) * flick;
  const lift = interpolate(frame, [12, 70], [0.55, 1], clamp);
  const sp = spring({ frame: frame - 6, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ background: "#030201" }}>
      <AbsoluteFill style={{ WebkitMaskImage: mask, maskImage: mask, filter: `brightness(${lift})` }}>
        <CineLayers cam={cam} focus={[0.5, 0.55, 0.62]} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          mixBlendMode: "screen",
          opacity: bloom * sp,
          background: `radial-gradient(circle at ${fx}px ${fy}px, rgba(255,205,120,.65) 0px, rgba(255,150,50,.28) ${150 * u}px, transparent ${520 * u}px)`,
        }}
      />
      <Particles count={22} seed="i" speed={0.5} />
    </AbsoluteFill>
  );
};


/** Texto dorado con extrusión 3D sutil. */
const Gold3D: React.FC<{ text: string; size: number; track: number; shine: number }> = ({ text, size, track, shine }) => {
  const depth = Array.from({ length: 7 }, (_, i) => `0 ${i + 1}px 0 hsl(35 55% ${32 - i * 2}%)`).join(",");
  const common: React.CSSProperties = { fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, lineHeight: 1, letterSpacing: `${track}em`, whiteSpace: "nowrap" };
  return (
    <div style={{ position: "relative", ...common }}>
      <span style={{ color: "#6d4713", textShadow: `${depth}, 0 18px 30px rgba(0,0,0,.7)` }}>{text}</span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(105deg, #8a5d1c 0%, ${C.gold} 25%, #fff6d2 ${shine}%, ${C.gold} ${shine + 18}%, ${C.goldDeep} 100%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </span>
    </div>
  );
};

const WaIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-1.8-1.2-2.2-2.2l.8-1-1-2z" />
  </svg>
);

/** Escena 5: la cámara se aleja, el fondo se oscurece y la marca aparece en 3D refinado. */
export const Finale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { u } = useUnit();
  const cam = useCam({
    src: "adj4.jpg",
    a: { f: [0.5, 0.45], t: [0.5, 0.45], s: 1.55, yaw: 5 },
    b: { f: [0.5, 0.5], t: [0.5, 0.265], s: 0.6, yaw: -2 },
    dur: 115,
    fit: "contain",
    ease: Easing.bezier(0.3, 0.05, 0.15, 1),
  });
  const dim = interpolate(frame, [30, 120], [1, 0.42], clamp);
  const spot = interpolate(frame, [30, 110], [0, 1], clamp);
  const ap = (d: number) => spring({ frame: frame - d, fps, config: { damping: 200 } });
  const brand = ap(26);
  const tag = ap(62);
  const call = ap(82);
  const url = ap(98);
  const foot = ap(116);
  const shine = interpolate(frame, [40, 110], [-10, 110], clamp);
  const yaw = Math.sin(frame / 38) * 5;
  const track = 0.02 + brand * 0.07;
  return (
    <AbsoluteFill style={{ background: C.dark }}>
      <AbsoluteFill style={{ filter: `brightness(${dim}) saturate(${0.9 + dim * 0.1})` }}>
        <CineLayers cam={cam} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          mixBlendMode: "screen",
          opacity: spot * 0.55,
          background: "radial-gradient(ellipse 60% 26% at 50% 26%, rgba(255,205,125,.55), transparent 70%)",
        }}
      />
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(8,4,0,.96) 0%, rgba(8,4,0,.78) 38%, transparent 64%)" }} />
      <Particles count={40} seed="f" speed={0.6} />
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 215 * u, perspective: 1300 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 * u, transform: `rotateY(${yaw}deg)` }}>
          <div
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 500,
              fontSize: 40 * u,
              letterSpacing: `${0.28 + (1 - brand) * 0.25}em`,
              color: C.cream,
              opacity: brand,
              transform: `translateY(${(1 - brand) * 24}px)`,
              textShadow: "0 0 26px rgba(232,199,122,.55)",
            }}
          >
            VELAS Y AROMAS
          </div>
          <div style={{ opacity: brand, transform: `translateY(${(1 - brand) * 40}px) scale(${0.94 + brand * 0.06})`, filter: `blur(${(1 - brand) * 8}px)` }}>
            <Gold3D text="ELENA" size={250 * u} track={track} shine={shine} />
          </div>
          <div style={{ width: 460 * u * tag, height: 3 * u, background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }} />
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: 46 * u,
              color: C.cream,
              opacity: tag,
              transform: `translateY(${(1 - tag) * 20}px)`,
              textAlign: "center",
              textShadow: "0 4px 22px rgba(0,0,0,.85)",
              padding: `0 ${50 * u}px`,
            }}
          >
            Detalles únicos para momentos especiales.
          </div>
          <div
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 500,
              fontSize: 36 * u,
              color: C.gold,
              opacity: call,
              transform: `translateY(${(1 - call) * 16}px)`,
              marginTop: 10 * u,
              textAlign: "center",
              textShadow: "0 3px 16px rgba(0,0,0,.8)",
            }}
          >
            Descubre nuestro catálogo y haz tu pedido.
          </div>
          <div
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: 31 * u,
              color: C.dark,
              background: `linear-gradient(100deg, ${C.goldDeep}, ${C.gold} 45%, #fff0bd 60%, ${C.gold})`,
              padding: `${14 * u}px ${34 * u}px`,
              borderRadius: 999,
              opacity: url,
              transform: `scale(${0.92 + url * 0.08})`,
              boxShadow: "0 10px 40px rgba(232,199,122,.4)",
            }}
          >
            https://pagina-m-vil-elena.vercel.app/#inicio
          </div>
          {/* Espacio reservado: logotipo y acceso a WhatsApp (sin números inventados) */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 * u, opacity: foot, marginTop: 8 * u }}>
            <Img src={staticFile("img/logo.png")} style={{ height: 120 * u }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14 * u,
                border: `${2.5 * u}px solid ${C.gold}`,
                borderRadius: 999,
                padding: `${14 * u}px ${34 * u}px`,
                fontFamily: FONT_BODY,
                fontWeight: 700,
                fontSize: 36 * u,
                color: C.gold,
                background: "rgba(10,5,0,.45)",
              }}
            >
              <WaIcon size={46 * u} />
              WhatsApp
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
