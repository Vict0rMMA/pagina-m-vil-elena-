import { AbsoluteFill, Composition, Img, staticFile } from "remotion";
import { useFonts } from "../Anuncio/kit";
import { FONT_BODY, FONT_DISPLAY } from "../Anuncio/theme";
import { PALETA as P } from "./coleccion";

/** Imágenes para el Perfil de Negocio de Google. El logo se usa tal cual (sin modificar). */
const foto = (f: string) => staticFile(`navidad/fotos/${f}`);
const Logo: React.FC<{ size: number }> = ({ size }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,.35)", border: `3px solid ${P.champagne}` }}>
    <Img src={staticFile("img/logo.png")} style={{ width: size * 0.82, height: size * 0.82, objectFit: "contain" }} />
  </div>
);

const Portada: React.FC = () => {
  useFonts();
  return (
    <AbsoluteFill style={{ background: P.bosqueProfundo }}>
      <Img src={foto("pesebre-casita.jpg")} style={{ position: "absolute", right: 0, top: 0, width: "62%", height: "100%", objectFit: "cover", objectPosition: "50% 62%" }} />
      <AbsoluteFill style={{ background: `linear-gradient(90deg, ${P.bosqueProfundo} 37%, rgba(18,36,25,.6) 40%, transparent 46%)` }} />
      <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 70, gap: 18 }}>
        <Logo size={170} />
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 64, lineHeight: 1.05, color: P.champagneClaro, maxWidth: 560 }}>Elena Velas y Aromas</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 22, letterSpacing: 5, color: P.blancoCalido }}>VELAS ARTESANALES · MEDELLÍN</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 24, color: P.champagne }}>Hechas a mano para regalar y celebrar</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

type FotoProps = { f: string; titulo: string; sub: string; pos?: string };
const FotoProducto: React.FC<FotoProps> = ({ f, titulo, sub, pos = "50% 50%" }) => {
  useFonts();
  return (
    <AbsoluteFill style={{ background: P.bosqueProfundo }}>
      <Img src={foto(f)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos }} />
      <AbsoluteFill style={{ background: "linear-gradient(0deg, rgba(10,8,5,.85) 0%, rgba(10,8,5,.35) 24%, transparent 40%)" }} />
      <div style={{ position: "absolute", top: 34, right: 34 }}>
        <Logo size={130} />
      </div>
      <div style={{ position: "absolute", left: 50, right: 50, bottom: 48 }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 70, color: P.champagneClaro, lineHeight: 1.05, textShadow: "0 4px 18px rgba(0,0,0,.6)" }}>{titulo}</div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 28, color: P.blancoCalido, marginTop: 10 }}>{sub}</div>
      </div>
    </AbsoluteFill>
  );
};

export const PerfilComps: React.FC = () => (
  <>
    <Composition id="Perfil-Portada" component={Portada} durationInFrames={1} fps={30} width={1600} height={900} />
    <Composition
      id="Perfil-Foto"
      component={FotoProducto}
      durationInFrames={1}
      fps={30}
      width={1080}
      height={1080}
      defaultProps={{ f: "renos-verdes.jpg", titulo: "Familia de Renos", sub: "Velas con lazo dorado y cascabel" } as FotoProps}
    />
  </>
);
