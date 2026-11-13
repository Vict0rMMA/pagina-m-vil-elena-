import { AbsoluteFill, Composition, Img, staticFile } from "remotion";
import { useFonts } from "../Anuncio/kit";
import { FONT_BODY, FONT_DISPLAY } from "../Anuncio/theme";
import { MARCA, PALETA as P } from "./coleccion";

/** Collage con fotos reales de productos y tarjeta de marca al centro. */
const FOTOS = [
  "pesebre-casita.jpg",
  "renos-verdes.jpg",
  "esferas-relieve.jpg",
  "web-noche-velitas-1.jpg",
  "arbol-pesebre-estrella.jpg",
  "bosque-de-pinos.jpg",
  "web-peonia-grande.jpg",
  "arco-belen.jpg",
  "web-kit-12-deseos.jpg",
  "portal-de-madera.jpg",
  "sagrada-familia-nombres.jpg",
  "web-vela-degrade-larga.jpg",
  "renos-blancos.jpg",
  "arbolito-pesebre.jpg",
  "sagrada-familia-empacada.jpg",
  "web-noche-velitas-2.jpg",
];

const Tile: React.FC<{ f: string; style?: React.CSSProperties }> = ({ f, style }) => (
  <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 22px rgba(0,0,0,.35)", border: "4px solid #fffaf0", ...style }}>
    <Img src={staticFile(`navidad/fotos/${f}`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </div>
);

const Marca: React.FC<{ s: number }> = ({ s }) => (
  <div
    style={{
      borderRadius: 18,
      background: `radial-gradient(circle at 50% 35%, #2f5a43, ${P.bosque} 60%, ${P.bosqueProfundo})`,
      border: `4px solid ${P.champagne}`,
      boxShadow: "0 10px 30px rgba(0,0,0,.45)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: 10 * s,
      padding: 14 * s,
    }}
  >
    <div style={{ width: 120 * s, height: 120 * s, borderRadius: "50%", background: P.blancoCalido, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Img src={staticFile("img/logo.png")} style={{ height: 100 * s }} />
    </div>
    <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 40 * s, lineHeight: 1.05, color: P.champagneClaro }}>Elena Velas y Aromas</div>
    <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15 * s, letterSpacing: 3 * s, color: P.blancoCalido }}>VELAS ARTESANALES · MEDELLÍN</div>
    <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 18 * s, color: P.champagne }}>{MARCA.web}</div>
  </div>
);

const Collage: React.FC<{ alto: boolean }> = ({ alto }) => {
  useFonts();
  const cols = 4;
  const rows = alto ? 5 : 4;
  const n = cols * rows - 4; // la marca ocupa 2x2
  const fotos = FOTOS.slice(0, n);
  const s = 1;
  return (
    <AbsoluteFill style={{ background: `linear-gradient(135deg, #7d1220, ${P.vino} 40%, #3e0810)`, padding: 22 }}>
      <AbsoluteFill style={{ border: "14px solid transparent", borderImage: "repeating-linear-gradient(45deg,#c8202e 0 14px,#fffaf0 14px 26px,#1f7a4a 26px 40px,#fffaf0 40px 52px) 1" }} />
      <div
        style={{
          position: "absolute",
          inset: 34,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: 12,
        }}
      >
        {fotos.slice(0, 5).map((f) => (
          <Tile key={f} f={f} />
        ))}
        <div style={{ gridColumn: "2 / span 2", gridRow: "2 / span 2", display: "grid" }}>
          <Marca s={s} />
        </div>
        {fotos.slice(5).map((f) => (
          <Tile key={f} f={f} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const CollageComps: React.FC = () => (
  <>
    <Composition id="Collage-1x1" component={Collage} durationInFrames={1} fps={30} width={1080} height={1080} defaultProps={{ alto: false }} />
    <Composition id="Collage-4x5" component={Collage} durationInFrames={1} fps={30} width={1080} height={1350} defaultProps={{ alto: true }} />
  </>
);
