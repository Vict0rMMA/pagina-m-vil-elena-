import {
  AbsoluteFill,
  Audio,
  Composition,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { useFonts } from "../Anuncio/kit";
import { FONT_BODY, FONT_DISPLAY } from "../Anuncio/theme";
import { COLECCION, MARCA, PALETA as P, PRODUCTOS } from "./coleccion";
import { CatalogoComp } from "./catalogo";
import { Bokeh, FPS, Flare, GoldDust, Grade, Snow, clamp, useLayout } from "./fx";

const DURATION = 1500; // 50 s
const PRINCIPAL = 120; // las dos fotos principales abren el video
const T = { titulo: 240, productos: 330, porProducto: 84, cierre: 1254 };
const OV = 12;
const foto = (f: string) => staticFile(`navidad/fotos/${f}`);
const recorte = (f: string) => staticFile(`navidad/recortes/${f}`);
const byId = (id: string) => PRODUCTOS.find((p) => p.id === id)!;
type Toma = { foto: string; ratio: number; nombre: string; linea: string; detalle: string; colores?: string[] };
const p2t = (id: string, linea?: string, fotoAlt?: string, ratio?: number): Toma => {
  const p = byId(id);
  return { foto: fotoAlt ?? p.foto, ratio: ratio ?? p.ratio, nombre: p.nombre, linea: linea ?? p.linea, detalle: `Aroma: ${p.aroma}`, colores: p.colores.map((c) => c.hex) };
};
/** Todas las fotografías, completas y sin recortar. Las dos primeras son las principales. */
const TOMAS: Toma[] = [
  { foto: "latas-navidenas.jpg", ratio: 1320 / 1304, nombre: "Latas de Regalo", linea: "Figuras aromáticas", detalle: "Muñeco de jengibre, Papá Noel, regalos y bastones", colores: ["#d8262c", "#2f6b4f"] },
  { foto: "vasos-personalizados.jpg", ratio: 1, nombre: "Vasos Personalizados", linea: "Con el nombre de cada invitado", detalle: "Detalles para novenas, empresas y familias", colores: ["#e2343c", "#2f8f7c", "#d8bd8a"] },
  p2t("arbol-estrella"),
  p2t("renos", "Verde bosque · lazo dorado", "renos-verdes.jpg", 1800 / 1348),
  p2t("renos", "Blanco nieve · lazo rojo", "renos-blancos.jpg", 1350 / 1800),
  p2t("casita"),
  p2t("arco"),
  p2t("arbolito"),
  p2t("portal"),
  p2t("esferas"),
  p2t("pinos"),
  p2t("mini-personalizada"),
  p2t("mini-personalizada", "Empacadas para regalar", "sagrada-familia-empacada.jpg", 1350 / 1800),
];
const inicio = (i: number) => (i < 2 ? i * PRINCIPAL : T.productos + (i - 2) * T.porProducto);
const largo = (i: number) => (i < 2 ? PRINCIPAL : T.porProducto);
const ease = Easing.bezier(0.45, 0, 0.2, 1);

const Fade: React.FC<{ len: number; children: React.ReactNode; out?: boolean }> = ({ len, children, out = true }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, out ? [0, OV, len - OV, len] : [0, OV], out ? [0, 1, 1, 0] : [0, 1], clamp);
  const b = interpolate(f, [0, OV], [6, 0], clamp);
  return <AbsoluteFill style={{ opacity: o, filter: b > 0.1 ? `blur(${b}px)` : undefined }}>{children}</AbsoluteFill>;
};

/** Texto que aparece letra a letra con desenfoque (tipografía cinematográfica). */
const Letters: React.FC<{ text: string; delay?: number; size: number; style?: React.CSSProperties; stagger?: number; gold?: boolean }> = ({
  text,
  delay = 0,
  size,
  style,
  stagger = 1.2,
  gold = false,
}) => {
  const f = useCurrentFrame();
  return (
    <div style={{ fontSize: size, lineHeight: 1.12, ...style }}>
      {text.split(" ").map((w, wi, arr) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {w.split("").map((ch, ci) => {
            const idx = arr.slice(0, wi).join(" ").length + ci;
            const p = interpolate(f - delay - idx * stagger, [0, 18], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
            return (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  opacity: p,
                  transform: `translateY(${(1 - p) * 0.35}em)`,
                  ...(gold ? goldLetter : {}),
                  filter: `blur(${(1 - p) * 8}px)${gold ? " drop-shadow(0 4px 10px rgba(0,0,0,.6))" : ""}`,
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < arr.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
};

const goldLetter: React.CSSProperties = {
  backgroundImage: "linear-gradient(180deg, #fff3d2 0%, #efdfb8 30%, #d8bd8a 62%, #a8813f 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};


// ───────────────────────── Escena 2: Navidad 2026 ─────────────────────────
const Titulo: React.FC = () => {
  const f = useCurrentFrame();
  const { u, wide } = useLayout();
  const line = interpolate(f, [18, 50], [0, 1], { ...clamp, easing: ease });
  const year = spring({ frame: f - 30, fps: FPS, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 45%, ${P.bosque} 0%, ${P.bosqueProfundo} 55%, #070d09 100%)` }}>
      <Bokeh seed="t" count={20} opacity={0.55} />
      <GoldDust count={50} seed="t" />
      <Snow count={60} seed="t" opacity={0.5} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 18 * u, perspective: 1200 }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 500, letterSpacing: 16 * u, fontSize: 30 * u, color: P.champagneClaro, opacity: interpolate(f, [4, 24], [0, 1], clamp) }}>
          ELENA VELAS Y AROMAS PRESENTA
        </div>
        <div style={{ width: 520 * u * line, height: 2 * u, background: `linear-gradient(90deg, transparent, ${P.champagne}, transparent)` }} />
        <Letters text={`Colección ${COLECCION.nombre}`} delay={12} size={(wide ? 110 : 96) * u} gold style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, textAlign: "center" }} />
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 600,
            fontSize: 70 * u,
            letterSpacing: 14 * u,
            color: P.blancoCalido,
            opacity: year,
            transform: `rotateX(${(1 - year) * 70}deg) translateY(${(1 - year) * 20}px)`,
            textShadow: "0 6px 30px rgba(0,0,0,.6)",
          }}
        >
          NAVIDAD 2026
        </div>
      </AbsoluteFill>
      <Grade />
    </AbsoluteFill>
  );
};


// ───────────────────────── Fondo navideño ─────────────────────────
const Festivo: React.FC<{ rojo: boolean }> = ({ rojo }) => (
  <AbsoluteFill
    style={{
      background: rojo
        ? "radial-gradient(ellipse at 50% 35%, #b3202e 0%, #7d1220 45%, #3e0810 100%)"
        : "radial-gradient(ellipse at 50% 35%, #2f7a52 0%, #1d5236 45%, #0b2617 100%)",
    }}
  >
    <Bokeh seed={rojo ? "r" : "v"} count={18} opacity={0.5} />
    <Snow count={55} seed={rojo ? "r" : "v"} opacity={0.75} />
  </AbsoluteFill>
);

/** Borde de bastón de caramelo (rojo, blanco y verde) con luces doradas. */
const Guirnalda: React.FC = () => {
  const f = useCurrentFrame();
  const { u, width, height } = useLayout();
  const b = 16 * u;
  const rayas = "repeating-linear-gradient(45deg, #c8202e 0 14px, #fffaf0 14px 26px, #1f7a4a 26px 40px, #fffaf0 40px 52px)";
  const luces = Array.from({ length: 18 }, (_, i) => i);
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill style={{ border: `${b}px solid transparent`, borderImage: `${rayas} 1`, boxSizing: "border-box" }} />
      {luces.map((i) => {
        const top = i < 9;
        const x = ((i % 9) + 0.5) / 9;
        const on = 0.55 + 0.45 * Math.sin(f / 8 + i * 1.7);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x * width - 7 * u,
              top: top ? b + 4 * u : height - b - 18 * u,
              width: 14 * u,
              height: 14 * u,
              borderRadius: "50%",
              background: ["#ffd36b", "#ff5a5a", "#7dffb0"][i % 3],
              boxShadow: `0 0 ${18 * u}px ${6 * u}px rgba(255,210,120,${0.5 * on})`,
              opacity: on,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ───────────────────────── Fotos completas (sin recorte) ─────────────────────────
/** La foto entera dentro de un marco, sobre una versión desenfocada de sí misma; cámara lenta sobre el marco. */
const FotoCompleta: React.FC<{ t: Toma; i: number; n: number; dur: number; intro?: string }> = ({ t, i, n, dur, intro }) => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const p = interpolate(f, [0, dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.sin) });
  // área disponible para la foto (vertical: arriba, dejando abajo la zona de texto y la interfaz de Instagram)
  const area = wide ? { x: width * 0.33, y: height * 0.06, w: width * 0.64, h: height * 0.88 } : { x: width * 0.035, y: height * 0.045, w: width * 0.93, h: height * 0.67 };
  let w = area.w;
  let h = w / t.ratio;
  if (h > area.h) {
    h = area.h;
    w = h * t.ratio;
  }
  const left = area.x + (area.w - w) / 2;
  const top = area.y + (area.h - h) / 2;
  const s = 0.97 + p * 0.05;
  const drift = (p - 0.5) * 14 * u * (i % 2 ? 1 : -1);
  const a = (d: number) => interpolate(f, [d, d + 16], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill style={{ background: P.noche, overflow: "hidden" }}>
      <Festivo rojo={i % 2 === 0} />
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: w,
          height: h,
          transform: `translateX(${drift}px) scale(${s})`,
          borderRadius: 18 * u,
          overflow: "hidden",
          border: `${10 * u}px solid #fffaf0`,
          boxShadow: `0 30px 70px rgba(0,0,0,.55), 0 0 0 ${3 * u}px ${P.champagne}`,
          boxSizing: "content-box",
        }}
      >
        <Img src={foto(t.foto)} style={{ width: "100%", height: "100%", filter: "brightness(1.04) contrast(1.04) saturate(1.06)" }} />
      </div>
      <GoldDust count={20} seed={`f${i}`} />
      <AbsoluteFill
        style={{
          justifyContent: wide ? "center" : "flex-start",
          padding: wide ? `0 ${width * 0.64}px 0 ${width * 0.05}px` : `${height * 0.742}px ${50 * u}px 0`,
          textAlign: wide ? "left" : "center",
          alignItems: wide ? "flex-start" : "center",
        }}
      >
        {intro ? (
          <Letters text={intro} delay={8} stagger={0.8} size={(wide ? 58 : 62) * u} style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, color: P.blancoCalido, marginBottom: 18 * u, textShadow: "0 4px 18px rgba(0,0,0,.8)" }} />
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 14 * u, opacity: a(4), fontFamily: FONT_BODY, fontWeight: 700, fontSize: 22 * u, letterSpacing: 5 * u, color: P.champagne }}>
            {String(n).padStart(2, "0")} / {String(TOMAS.length).padStart(2, "0")} · {t.linea.toUpperCase()}
          </div>
        )}
        <Letters text={t.nombre} delay={intro ? 40 : 8} stagger={0.9} size={(wide ? 78 : 84) * u} gold style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, marginTop: 8 * u }} />
        <div style={{ display: "flex", gap: 10 * u, marginTop: 14 * u, alignItems: "center", opacity: a(intro ? 56 : 22), justifyContent: wide ? "flex-start" : "center", flexWrap: "wrap" }}>
          {t.colores?.map((c) => (
            <span key={c} style={{ width: 26 * u, height: 26 * u, borderRadius: "50%", background: c, border: `${2 * u}px solid rgba(255,255,255,.8)` }} />
          ))}
          <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 27 * u, color: P.blancoCalido, marginLeft: 6 * u }}>{t.detalle}</span>
        </div>
      </AbsoluteFill>
      <Guirnalda />
    </AbsoluteFill>
  );
};


// ───────────────────────── Escena 5: cierre de marca ─────────────────────────
const Cierre: React.FC = () => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const filas = wide ? [["casita", "arco", "pinos", "portal", "renos"]] : [["arco", "pinos", "portal"], ["casita", "renos"]];
  const pullBack = interpolate(f, [0, 120], [1.18, 1.0], { ...clamp, easing: ease });
  const dim = interpolate(f, [60, 130], [1.05, 0.85], clamp);
  const logo = spring({ frame: f - 70, fps: FPS, config: { damping: 18 } });
  const a = (d: number) => interpolate(f, [d, d + 18], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const gap = 24 * u;
  const shelves = filas.map((ids, r) => {
    const ps = ids.map(byId);
    const rowH = height * (wide ? 0.26 : 0.17);
    const y = height * (wide ? 0.5 : 0.27 + r * 0.21);
    const ws = ps.map((p) => rowH * p.recorteRatio);
    const total = ws.reduce((m, n) => m + n, 0) + gap * (ps.length - 1);
    const fit = Math.min(1, (width * 0.92) / total);
    let x = (width - total * fit) / 2;
    return { y, items: ps.map((p, i) => { const it = { p, left: x, w: ws[i] * fit, h: rowH * fit }; x += ws[i] * fit + gap * fit; return it; }) };
  });
  return (
    <Fade len={DURATION - T.cierre} out={false}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 40%, ${P.bosque} 0%, ${P.bosqueProfundo} 50%, #050906 100%)` }}>
        <AbsoluteFill style={{ transform: `scale(${pullBack})`, filter: `brightness(${dim})` }}>
          <Bokeh seed="c" count={24} opacity={0.6} />
          {shelves.map((sh, r) => (
            <div key={r}>
              <div style={{ position: "absolute", left: 0, right: 0, top: sh.y, height: 3 * u, background: `linear-gradient(90deg, transparent, ${P.champagne}, transparent)`, opacity: 0.6 }} />
              {sh.items.map(({ p, left, w, h }, i) => {
                const e = spring({ frame: f - (r * 3 + i) * 5, fps: FPS, config: { damping: 16 } });
                return (
                  <Img
                    key={p.id}
                    src={recorte(p.recorte)}
                    style={{ position: "absolute", left, top: sh.y - h, width: w, height: h, opacity: e, transform: `translateY(${(1 - e) * 50}px)`, filter: "drop-shadow(0 16px 18px rgba(0,0,0,.6))" }}
                  />
                );
              })}
            </div>
          ))}
        </AbsoluteFill>
        <AbsoluteFill style={{ mixBlendMode: "screen", opacity: a(60), background: `radial-gradient(ellipse 45% 35% at 50% ${wide ? 62 : 60}%, rgba(255,214,150,.25), transparent 70%)` }} />
        <GoldDust count={50} seed="cf" />
        <Snow count={50} seed="cf" opacity={0.5} />
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: height * (wide ? 0.06 : 0.17), gap: 14 * u }}>
          <div style={{ width: 180 * u, height: 180 * u, borderRadius: "50%", background: P.blancoCalido, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(216,189,138,.45)", transform: `scale(${logo}) rotateY(${(1 - logo) * 90}deg)` }}>
            <Img src={staticFile("img/logo.png")} style={{ height: 150 * u }} />
          </div>
          <Letters text="ELENA VELAS Y AROMAS" delay={84} stagger={0.8} size={(wide ? 64 : 66) * u} gold style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, letterSpacing: 6 * u, textAlign: "center" }} />
          <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: (wide ? 44 : 46) * u, color: P.blancoCalido, opacity: a(112), textAlign: "center", padding: `0 ${50 * u}px`, textShadow: "0 3px 18px rgba(0,0,0,.7)" }}>
            “{COLECCION.eslogan}”
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: `${10 * u}px ${30 * u}px`, marginTop: 10 * u, opacity: a(140), fontFamily: FONT_BODY, fontWeight: 600, fontSize: 28 * u, color: P.champagneClaro }}>
            <span>{MARCA.web}</span>
            <span>WhatsApp {MARCA.whatsapp}</span>
            <span>{MARCA.instagram}</span>
          </div>
        </AbsoluteFill>
        <Grade />
      </AbsoluteFill>
    </Fade>
  );
};


// ───────────────────────── Montaje ─────────────────────────
const Comercial: React.FC = () => {
  useFonts();
  const cortes = [...TOMAS.map((_, i) => inicio(i)).slice(1), T.titulo, T.cierre];
  return (
    <AbsoluteFill style={{ background: P.noche }}>
      {TOMAS.map((t, i) => (
        <Sequence key={i} from={inicio(i)} durationInFrames={largo(i) + OV} layout="none">
          <Fade len={largo(i) + OV}>
            <FotoCompleta t={t} i={i} n={i + 1} dur={largo(i) + OV} intro={i === 0 ? COLECCION.apertura : undefined} />
          </Fade>
        </Sequence>
      ))}
      <Sequence from={T.titulo} durationInFrames={T.productos - T.titulo + OV} layout="none">
        <Fade len={T.productos - T.titulo + OV}>
          <Titulo />
        </Fade>
      </Sequence>
      <Sequence from={T.cierre} layout="none">
        <Cierre />
      </Sequence>
      {cortes.map((c) => (
        <Flare key={c} at={c} />
      ))}
      <Audio src={staticFile("audio/navidad.mp3")} volume={(fr) => interpolate(fr, [0, 6, DURATION - 40, DURATION], [0, 1, 1, 0], clamp)} />
    </AbsoluteFill>
  );
};

export const NavidadComps: React.FC = () => (
  <>
    <Composition id="Navidad2026-16x9" component={Comercial} durationInFrames={DURATION} fps={FPS} width={1920} height={1080} />
    <Composition id="Navidad2026-9x16" component={Comercial} durationInFrames={DURATION} fps={FPS} width={1080} height={1920} />
    <CatalogoComp />
  </>
);

