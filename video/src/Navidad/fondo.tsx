import { AbsoluteFill, Composition, Img, random, staticFile } from "remotion";
import { useFonts } from "../Anuncio/kit";
import { FONT_BODY, FONT_DISPLAY } from "../Anuncio/theme";

/** Portada de marca para el Perfil de Google: solo marca, sin fotos de producto. Logo sin modificar. */
type Tema = "crema" | "verde";
const T = {
  crema: { bg: "radial-gradient(ellipse at 50% 45%, #fffaf0 0%, #f6ecd9 55%, #e9d8b8 100%)", titulo: "#6e4a1c", sub: "#8a6a3a", linea: "#c9a66b", brillo: "rgba(201,166,107,.35)" },
  verde: { bg: "radial-gradient(ellipse at 50% 45%, #2b4f3c 0%, #1a3326 55%, #0c1a12 100%)", titulo: "#efdfb8", sub: "#d8bd8a", linea: "#d8bd8a", brillo: "rgba(232,201,141,.4)" },
};

const Destellos: React.FC<{ color: string }> = ({ color }) => (
  <AbsoluteFill>
    {Array.from({ length: 70 }, (_, i) => {
      const r = (k: string) => random(`d${k}${i}`);
      const s = 2 + r("s") * 7;
      return (
        <div
          key={i}
          style={{ position: "absolute", left: `${r("x") * 100}%`, top: `${r("y") * 100}%`, width: s, height: s, borderRadius: "50%", background: color, opacity: 0.3 + r("o") * 0.7, boxShadow: `0 0 ${s * 2}px ${color}` }}
        />
      );
    })}
    {Array.from({ length: 9 }, (_, i) => {
      const r = (k: string) => random(`b${k}${i}`);
      const s = 120 + r("s") * 220;
      return (
        <div
          key={`b${i}`}
          style={{ position: "absolute", left: `${r("x") * 100}%`, top: `${r("y") * 100}%`, width: s, height: s, marginLeft: -s / 2, marginTop: -s / 2, borderRadius: "50%", background: `radial-gradient(circle, ${color}, transparent 70%)`, opacity: 0.35 }}
        />
      );
    })}
  </AbsoluteFill>
);

const Ramita: React.FC<{ color: string; flip?: boolean }> = ({ color, flip }) => (
  <svg width="260" height="60" viewBox="0 0 260 60" style={{ transform: flip ? "scaleX(-1)" : undefined }}>
    <path d="M10 30 H200" stroke={color} strokeWidth="1.5" />
    {[40, 80, 120, 160].map((x) => (
      <g key={x}>
        <path d={`M${x} 30 q 14 -18 30 -14 q -12 10 -30 14`} fill={color} opacity=".8" />
        <path d={`M${x} 30 q 14 18 30 14 q -12 -10 -30 -14`} fill={color} opacity=".8" />
      </g>
    ))}
    <circle cx="215" cy="30" r="5" fill={color} />
  </svg>
);

const Fondo: React.FC<{ tema: Tema }> = ({ tema }) => {
  useFonts();
  const c = T[tema];
  return (
    <AbsoluteFill style={{ background: c.bg }}>
      <Destellos color={c.brillo} />
      <AbsoluteFill style={{ border: `2px solid ${c.linea}`, margin: 36, opacity: 0.6 }} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ width: 200, height: 200, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 60px ${c.brillo}, 0 14px 40px rgba(0,0,0,.18)`, border: `3px solid ${c.linea}` }}>
          <Img src={staticFile("img/logo.png")} style={{ width: 168, height: 168, objectFit: "contain" }} />
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 104, color: c.titulo, lineHeight: 1.05, textAlign: "center" }}>Velas y Aromas Elena</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Ramita color={c.linea} flip />
          <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 26, letterSpacing: 10, color: c.sub }}>HECHAS A MANO · MEDELLÍN</div>
          <Ramita color={c.linea} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const FondoComps: React.FC = () => (
  <Composition id="Fondo-Marca" component={Fondo} durationInFrames={1} fps={30} width={1600} height={900} defaultProps={{ tema: "crema" as Tema }} />
);
