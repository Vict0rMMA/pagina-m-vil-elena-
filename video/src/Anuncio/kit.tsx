import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  continueRender,
  delayRender,
  interpolate,
  random,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, FONTS, FONT_DISPLAY, FPS, OV, RATIO, img } from "./theme";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ease = Easing.inOut(Easing.cubic);

export const useFonts = () => {
  const [handle] = useState(() => delayRender("fuentes"));
  useEffect(() => {
    Promise.all(
      FONTS.map(async (f) => {
        const face = new FontFace(f.family, `url(${staticFile(f.file)})`, {
          weight: f.weight,
          style: f.style,
        });
        document.fonts.add(await face.load());
      }),
    )
      .catch(() => undefined)
      .finally(() => continueRender(handle));
  }, [handle]);
};

/** Unidad de escala independiente del formato (1 = 1080 px del lado corto). */
export const useUnit = () => {
  const { width, height } = useVideoConfig();
  return {
    u: Math.min(width, height) / 1080,
    width,
    height,
    landscape: width > height,
    square: width === height,
  };
};

type Kb = {
  zoom?: [number, number];
  origin?: [number, number]; // % del punto de enfoque
  pan?: [number, number]; // % desplazamiento horizontal
  dur: number;
};

/** Fotografía real con movimiento de cámara y profundidad 2.5D. */
export const Photo: React.FC<{ src: string } & Kb> = ({
  src,
  dur,
  zoom = [1.05, 1.22],
  origin = [50, 50],
  pan = [0, 0],
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const [iw, ih] = RATIO[src];
  const cover = Math.abs(Math.log(iw / ih / (width / height))) < 0.3;
  const t = interpolate(frame, [0, dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const s = interpolate(t, [0, 1], zoom);
  const x = interpolate(t, [0, 1], pan);
  const focus = interpolate(frame, [0, OV + 10], [14, 0], clamp);
  const fg: React.CSSProperties = cover
    ? { width: "100%", height: "100%", objectFit: "cover" }
    : {
        height: "90%",
        maxWidth: "92%",
        objectFit: "contain",
        borderRadius: 26,
        boxShadow: "0 30px 90px rgba(0,0,0,.65)",
      };
  return (
    <AbsoluteFill style={{ background: C.dark, overflow: "hidden" }}>
      {!cover && (
        <AbsoluteFill style={{ transform: `scale(${1.5 + t * 0.08}) translateX(${-x * 0.4}%)` }}>
          <Img
            src={img(src)}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(38px) brightness(.45) saturate(1.2)" }}
          />
        </AbsoluteFill>
      )}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${x}%) scale(${s})`,
          transformOrigin: `${origin[0]}% ${origin[1]}%`,
          filter: `blur(${focus}px)`,
        }}
      >
        <Img src={img(src)} style={fg} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export type Enter = "fade" | "wipeUp" | "slideLeft" | "slideRight" | "iris" | "flash";

/** Toma: entra con transición sobre la anterior. */
export const Shot: React.FC<
  { src: string; from: number; len: number; enter: Enter } & Omit<Kb, "dur">
> = ({ src, from, len, enter, ...kb }) => {
  const start = Math.max(0, from - OV);
  const dur = from + len - start;
  return (
    <Sequence from={start} durationInFrames={dur} layout="none">
      <ShotInner src={src} enter={enter} dur={dur} {...kb} />
    </Sequence>
  );
};

const ShotInner: React.FC<{ src: string; enter: Enter; dur: number } & Omit<Kb, "dur">> = ({
  src,
  enter,
  dur,
  ...kb
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, OV], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const style: React.CSSProperties = {
    fade: { opacity: p },
    flash: { opacity: p },
    wipeUp: { clipPath: `inset(${(1 - p) * 100}% 0 0 0)` },
    slideLeft: { transform: `translateX(${(1 - p) * 100}%)` },
    slideRight: { transform: `translateX(${-(1 - p) * 100}%)` },
    iris: { clipPath: `circle(${p * 80}% at 50% 55%)` },
  }[enter];
  return (
    <AbsoluteFill style={style}>
      <Photo src={src} dur={dur} {...kb} />
    </AbsoluteFill>
  );
};

/** Destello dorado sincronizado con los acentos musicales. */
export const Flash: React.FC<{ at: number }> = ({ at }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [at - 4, at, at + 12], [0, 0.5, 0], clamp);
  return (
    <AbsoluteFill
      style={{
        opacity: o,
        pointerEvents: "none",
        background: "radial-gradient(circle at 50% 50%, #fff3cf 0%, #e8c77a 40%, transparent 75%)",
        mixBlendMode: "screen",
      }}
    />
  );
};

export const Particles: React.FC<{ count?: number; seed?: string; speed?: number }> = ({
  count = 40,
  seed = "p",
  speed = 1,
}) => {
  const frame = useCurrentFrame();
  const { u, width, height } = useUnit();
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "screen" }}>
      {Array.from({ length: count }, (_, i) => {
        const r = (k: string) => random(`${seed}${k}${i}`);
        const size = (3 + r("s") * 9) * u;
        const v = (30 + r("v") * 90) * speed;
        const y = (((r("y") * height - (frame / FPS) * v) % height) + height) % height;
        const x = r("x") * width + Math.sin(frame / (25 + r("w") * 30) + i) * 22 * u;
        const tw = 0.25 + 0.75 * Math.abs(Math.sin(frame / (10 + r("t") * 18) + i));
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
              opacity: tw * 0.85,
              background: "radial-gradient(circle,#fff6d8 0%,#f0c868 45%,transparent 72%)",
              filter: `blur(${size > 8 * u ? 2 : 0.5}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

/** Viñeta + luz cálida con parpadeo de vela. */
export const Grade: React.FC<{ scrim?: boolean }> = ({ scrim = true }) => {
  const frame = useCurrentFrame();
  const flicker = 0.14 + 0.05 * Math.sin(frame / 3.1) + 0.03 * Math.sin(frame / 1.7);
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 30% 70%, rgba(255,170,70,${flicker}) 0%, transparent 60%)`,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(8,4,0,.65) 100%)" }}
      />
      {scrim && (
        <AbsoluteFill
          style={{ background: "linear-gradient(to top, rgba(10,5,0,.82) 0%, rgba(10,5,0,.45) 30%, transparent 55%)" }}
        />
      )}
    </AbsoluteFill>
  );
};

type RevealProps = {
  text: string;
  delay?: number;
  size: number;
  font?: string;
  color?: string;
  weight?: number;
  italic?: boolean;
  spacing?: number;
  align?: "center" | "left";
};

/** Texto que aparece palabra por palabra (desenfoque + ascenso). */
export const Reveal: React.FC<RevealProps> = ({
  text,
  delay = 0,
  size,
  font = FONT_DISPLAY,
  color = C.cream,
  weight = 600,
  italic = false,
  spacing = 0,
  align = "center",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        fontStyle: italic ? "italic" : "normal",
        color,
        letterSpacing: spacing,
        lineHeight: 1.15,
        textAlign: align,
        textShadow: "0 4px 24px rgba(0,0,0,.75), 0 0 40px rgba(232,199,122,.25)",
      }}
    >
      {text.split(" ").map((w, i) => {
        const s = spring({ frame: frame - delay - i * 4, fps, config: { damping: 200 } });
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
              opacity: s,
              transform: `translateY(${(1 - s) * 34}px)`,
              filter: `blur(${(1 - s) * 10}px)`,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

/** Bloque de texto en el tercio inferior con entrada/salida. */
export const Caption: React.FC<{ from: number; to: number; children: React.ReactNode }> = ({
  from,
  to,
  children,
}) => {
  const { height, landscape } = useUnit();
  return (
    <Sequence from={from} durationInFrames={to - from} layout="none">
      <CaptionInner bottom={height * (landscape ? 0.09 : 0.19)} len={to - from}>
        {children}
      </CaptionInner>
    </Sequence>
  );
};

const CaptionInner: React.FC<{ bottom: number; len: number; children: React.ReactNode }> = ({
  bottom,
  len,
  children,
}) => {
  const frame = useCurrentFrame();
  const out = interpolate(frame, [len - 8, len], [1, 0], clamp);
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: bottom,
        paddingLeft: "7%",
        paddingRight: "7%",
        opacity: out,
        transform: `translateY(${(1 - out) * -16}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export { clamp, ease };
