import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Easing,
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
import { C, FONTS, FONT_DISPLAY, FPS } from "./theme";

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
