import { AbsoluteFill, Easing, Img, Sequence, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, OV, RATIO, img } from "./theme";
import { clamp } from "./kit";

/** Punto de cámara: f = punto de interés en la foto (0-1), t = dónde queda en pantalla (0-1), s = zoom. */
export type Key = { f: [number, number]; t: [number, number]; s: number; yaw?: number };
export type Focus = [number, number, number]; // cx, cy (fracción de pantalla) y radio (fracción del ancho)

type CamArgs = { src: string; a: Key; b: Key; dur: number; fit?: "cover" | "contain"; ease?: (t: number) => number };

const camEase = Easing.bezier(0.4, 0.05, 0.2, 1);

export const useCam = ({ src, a, b, dur, fit = "cover", ease = camEase }: CamArgs) => {
  const frame = useCurrentFrame();
  const { width: W, height: H } = useVideoConfig();
  const [iw, ih] = RATIO[src];
  const base = fit === "cover" ? Math.max(W / iw, H / ih) : Math.min(W / iw, H / ih);
  const dw = iw * base;
  const dh = ih * base;
  const p = interpolate(frame, [0, dur], [0, 1], { ...clamp, easing: ease });
  const L = (x: number, y: number) => x + (y - x) * p;
  const s = L(a.s, b.s);
  let X = L(a.t[0], b.t[0]) * W - L(a.f[0], b.f[0]) * dw * s;
  let Y = L(a.t[1], b.t[1]) * H - L(a.f[1], b.f[1]) * dh * s;
  if (dw * s >= W) X = Math.min(0, Math.max(W - dw * s, X));
  if (dh * s >= H) Y = Math.min(0, Math.max(H - dh * s, Y));
  return { src, X, Y, s, dw, dh, p, yaw: L(a.yaw ?? 0, b.yaw ?? 0), fit, W, H, iw, ih };
};
export type Cam = ReturnType<typeof useCam>;

/** Capas: fondo desenfocado (más lejano, con paralaje) + producto nítido con zona de enfoque. */
export const CineLayers: React.FC<{ cam: Cam; focus?: Focus; bgBlur?: number }> = ({ cam, focus, bgBlur = 14 }) => {
  const { src, X, Y, s, dw, dh, yaw, fit, W, H } = cam;
  const cover = Math.max(W / cam.iw, H / cam.ih);
  const bgS = cover * (1.12 + (s - 1) * 0.18);
  const mask = focus
    ? `radial-gradient(ellipse ${focus[2] * W}px ${focus[2] * W * 1.25}px at ${focus[0] * W}px ${focus[1] * H}px, #000 45%, transparent 100%)`
    : undefined;
  return (
    <AbsoluteFill style={{ background: C.dark, overflow: "hidden", perspective: 1800 }}>
      <AbsoluteFill style={{ transform: `rotateY(${yaw}deg)` }}>
        <AbsoluteFill style={{ overflow: "hidden" }}>
          {fit === "cover" ? (
            <Img
              src={img(src)}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: dw,
                height: dh,
                transformOrigin: "0 0",
                transform: `translate(${X - yaw * 2.2}px, ${Y}px) scale(${s * 1.012})`,
                filter: `blur(${bgBlur}px) brightness(.9) saturate(1.12)`,
              }}
            />
          ) : (
            <Img
              src={img(src)}
              style={{
                position: "absolute",
                left: (W - cam.iw * bgS) / 2 - X * 0.05,
                top: (H - cam.ih * bgS) / 2 - Y * 0.04,
                width: cam.iw * bgS,
                height: cam.ih * bgS,
                filter: "blur(34px) brightness(.5) saturate(1.15)",
              }}
            />
          )}
        </AbsoluteFill>
        <AbsoluteFill style={{ WebkitMaskImage: mask, maskImage: mask }}>
          <Img
            src={img(src)}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: dw,
              height: dh,
              transformOrigin: "0 0",
              transform: `translate(${X}px, ${Y}px) scale(${s})`,
              borderRadius: fit === "contain" ? 22 / s : 0,
              boxShadow: fit === "contain" ? "0 30px 90px rgba(0,0,0,.6)" : undefined,
            }}
          />
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

type ShotProps = Omit<CamArgs, "dur"> & { from: number; len: number; focus?: [Focus, Focus]; bgBlur?: number };

/** Toma con cámara animada. Entra con disolvencia desenfocada (cambio de foco), no con plantillas. */
export const Shot: React.FC<ShotProps> = ({ from, len, focus, bgBlur, ...cam }) => {
  const start = Math.max(0, from - OV);
  const dur = from + len - start;
  return (
    <Sequence from={start} durationInFrames={dur} layout="none">
      <ShotInner dur={dur} focus={focus} bgBlur={bgBlur} {...cam} />
    </Sequence>
  );
};

const ShotInner: React.FC<Omit<ShotProps, "from" | "len"> & { dur: number }> = ({ dur, focus, bgBlur, ...cam }) => {
  const frame = useCurrentFrame();
  const c = useCam({ ...cam, dur });
  const op = interpolate(frame, [0, OV], [0, 1], clamp);
  const blur = interpolate(frame, [0, OV + 8], [18, 0], { ...clamp, easing: Easing.out(Easing.cubic) });
  const lift = interpolate(frame, [0, 6, OV + 10], [1.5, 1.35, 1], clamp);
  const fp = c.p;
  const f: Focus | undefined = focus && [
    focus[0][0] + (focus[1][0] - focus[0][0]) * fp,
    focus[0][1] + (focus[1][1] - focus[0][1]) * fp,
    Math.min(1, 1.5 * (focus[0][2] + (focus[1][2] - focus[0][2]) * fp)),
  ];
  return (
    <AbsoluteFill style={{ opacity: op, filter: `blur(${blur}px) brightness(${lift})` }}>
      <CineLayers cam={c} focus={f} bgBlur={bgBlur} />
    </AbsoluteFill>
  );
};
