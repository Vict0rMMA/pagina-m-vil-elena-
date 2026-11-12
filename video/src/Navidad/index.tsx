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
import { COLECCION, MARCA, PALETA as P, PRODUCTOS, Producto } from "./coleccion";
import { CatalogoComp } from "./catalogo";
import { Bokeh, FPS, Flame, Flare, GoldDust, Grade, Snow, clamp, useLayout } from "./fx";

const DURATION = 1440; // 48 s
const T = { titulo: 180, productos: 276, porProducto: 84, experiencia: 1032, regalo: 1140, cierre: 1230 };
const OV = 12;
const foto = (f: string) => staticFile(`navidad/fotos/${f}`);
const recorte = (f: string) => staticFile(`navidad/recortes/${f}`);
const byId = (id: string) => PRODUCTOS.find((p) => p.id === id)!;
const ORDEN: { id: string; modo: "foto" | "estudio" }[] = [
  { id: "arbol-estrella", modo: "foto" },
  { id: "casita", modo: "estudio" },
  { id: "renos", modo: "foto" },
  { id: "arco", modo: "estudio" },
  { id: "esferas", modo: "foto" },
  { id: "portal", modo: "estudio" },
  { id: "pinos", modo: "foto" },
  { id: "arbolito", modo: "estudio" },
  { id: "mini-personalizada", modo: "foto" },
];
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

// ───────────────────────── Escena 1: la vela se enciende ─────────────────────────
const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const pino = byId("pinos");
  const h = height * (wide ? 0.58 : 0.42);
  const w = h * pino.recorteRatio;
  const zoom = interpolate(f, [0, 190], [1.0, 1.35], { ...clamp, easing: ease });
  const ignite = interpolate(f, [16, 34], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const light = interpolate(f, [20, 90], [0, 1], clamp);
  const cx = wide ? width * 0.62 : width * 0.5;
  const top = height * (wide ? 0.2 : 0.25);
  const wickX = cx - w / 2 + w * 0.473;
  return (
    <AbsoluteFill style={{ background: "#050403" }}>
      <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: `${wickX}px ${top + h * 0.3}px` }}>
        <AbsoluteFill style={{ opacity: light * 0.9 }}>
          <Bokeh seed="intro" count={14} opacity={0.6} />
        </AbsoluteFill>
        <Img
          src={recorte(pino.recorte)}
          style={{
            position: "absolute",
            left: cx - w / 2,
            top,
            width: w,
            height: h,
            filter: `brightness(${0.15 + light * 0.95}) sepia(${0.25 * light}) saturate(1.1) drop-shadow(0 30px 40px rgba(0,0,0,.8))`,
          }}
        />
        <AbsoluteFill
          style={{
            mixBlendMode: "screen",
            opacity: light * 0.8,
            background: `radial-gradient(circle at ${wickX}px ${top}px, rgba(255,190,110,.35) 0px, rgba(255,150,60,.12) ${260 * u}px, transparent ${700 * u}px)`,
          }}
        />
        <div style={{ position: "absolute", left: wickX - 24 * u, top: top - 98 * u, transform: `scale(${ignite})`, transformOrigin: "50% 90%" }}>
          <Flame size={48 * u} intensity={ignite} />
        </div>
      </AbsoluteFill>
      <GoldDust count={30} seed="i" />
      <Snow count={45} seed="i" opacity={light * 0.6} />
      <AbsoluteFill
        style={{
          justifyContent: wide ? "center" : "flex-end",
          alignItems: wide ? "flex-start" : "center",
          padding: wide ? `0 0 0 ${width * 0.07}px` : `0 ${70 * u}px ${height * 0.13}px`,
        }}
      >
        <div style={{ maxWidth: wide ? width * 0.4 : undefined, textAlign: wide ? "left" : "center" }}>
          <Letters
            text={COLECCION.apertura}
            delay={58}
            size={(wide ? 72 : 82) * u}
            style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, color: P.blancoCalido, textShadow: "0 4px 24px rgba(0,0,0,.8)" }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
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

// ───────────────────────── Escena 3: cada vela tiene su momento ─────────────────────────
/** Foto real con movimiento de cámara y profundidad de campo (fondo desenfocado, foco nítido). */
const FotoCine: React.FC<{ p: Producto; dur: number; dir: number }> = ({ p, dur, dir }) => {
  const f = useCurrentFrame();
  const { width, height, wide } = useLayout();
  const t = interpolate(f, [0, dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const [fx, fy] = p.foco ?? [0.5, 0.5];
  const s = 1.04 + t * 0.14;
  const pan = (t - 0.5) * 3 * dir;
  const cover = Math.max(width / (p.ratio * height), 1) * (wide ? 1 : 1);
  const style: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: `${fx * 100}% ${fy * 100}%`,
    transform: `scale(${s * (cover > 1.6 ? 1 : 1)}) translateX(${pan}%)`,
    transformOrigin: `${fx * 100}% ${fy * 100}%`,
  };
  const mask = `radial-gradient(ellipse 60% ${wide ? 55 : 38}% at 50% ${wide ? 52 : 46}%, #000 55%, transparent 100%)`;
  const capa = (
    <>
      <Img src={foto(p.foto)} style={{ ...style, filter: "brightness(1.06) contrast(1.05) saturate(1.08)" }} />
      <AbsoluteFill style={{ WebkitMaskImage: mask, maskImage: mask }}>
        <Img src={foto(p.foto)} style={{ ...style, filter: "brightness(1.06) contrast(1.05) saturate(1.08)" }} />
      </AbsoluteFill>
    </>
  );
  if (!wide) return <AbsoluteFill style={{ overflow: "hidden", background: P.noche }}>{capa}</AbsoluteFill>;
  // Horizontal: la foto ocupa el panel derecho y se funde con un fondo desenfocado de sí misma.
  const fade = "linear-gradient(90deg, transparent 0%, #000 22%)";
  return (
    <AbsoluteFill style={{ overflow: "hidden", background: P.noche }}>
      <Img src={foto(p.foto)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(40px) brightness(.6)", transform: "scale(1.2)" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: width * 0.34, right: 0, overflow: "hidden", WebkitMaskImage: fade, maskImage: fade }}>{capa}</div>
    </AbsoluteFill>
  );
};

/** Estudio: terciopelo verde bosque, foco dorado, producto recortado con giro sutil y reflejo. */
const Estudio: React.FC<{ p: Producto; dur: number }> = ({ p, dur }) => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const areaW = wide ? width * 0.56 : width * 0.88;
  const maxH = height * (wide ? 0.66 : 0.5);
  let w = areaW;
  let h = w / p.recorteRatio;
  if (h > maxH) {
    h = maxH;
    w = h * p.recorteRatio;
  }
  const cx = wide ? width * 0.64 : width * 0.5;
  const floor = height * (wide ? 0.8 : 0.6);
  const e = spring({ frame: f - 4, fps: FPS, config: { damping: 18, stiffness: 60 } });
  const rot = interpolate(f, [0, dur], [-9, 7], clamp);
  const zoom = interpolate(f, [0, dur], [0.94, 1.04], clamp);
  const sheen = interpolate(f, [10, dur], [-30, 130], clamp);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 70% 60% at ${(cx / width) * 100}% 45%, #3d6650 0%, ${P.bosque} 55%, #0d1a12 100%)` }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: floor, bottom: 0, background: "linear-gradient(180deg, rgba(216,189,138,.10), rgba(0,0,0,.5))", borderTop: `1px solid rgba(216,189,138,.25)` }} />
      <Bokeh seed={p.id} count={12} opacity={0.4} />
      <AbsoluteFill style={{ mixBlendMode: "screen", background: `radial-gradient(ellipse ${w * 0.9}px ${h * 0.9}px at ${cx}px ${floor - h * 0.55}px, rgba(255,220,160,.42), transparent 70%)` }} />
      <div style={{ position: "absolute", left: cx - w / 2, top: floor - h, width: w, height: h * 2, perspective: 1600 }}>
        <div style={{ transform: `rotateY(${rot}deg) scale(${zoom * (0.9 + e * 0.1)})`, transformOrigin: "50% 50%", opacity: e }}>
          <div style={{ position: "relative", width: w, height: h }}>
            <Img src={recorte(p.recorte)} style={{ width: w, height: h, filter: "drop-shadow(0 24px 26px rgba(0,0,0,.6)) contrast(1.04)" }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(110deg, transparent ${sheen - 14}%, rgba(255,246,220,.4) ${sheen}%, transparent ${sheen + 14}%)`,
                WebkitMaskImage: `url(${recorte(p.recorte)})`,
                maskImage: `url(${recorte(p.recorte)})`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                mixBlendMode: "screen",
              }}
            />
          </div>
          <Img
            src={recorte(p.recorte)}
            style={{
              width: w,
              height: h,
              transform: "scaleY(-1)",
              marginTop: 6 * u,
              opacity: 0.18,
              filter: "blur(3px)",
              WebkitMaskImage: "linear-gradient(to top, #000, transparent 40%)",
              maskImage: "linear-gradient(to top, #000, transparent 40%)",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Ficha: React.FC<{ p: Producto; n: number }> = ({ p, n }) => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const a = (d: number) => interpolate(f, [d, d + 16], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill
      style={{
        justifyContent: wide ? "center" : "flex-end",
        padding: wide ? `0 0 0 ${width * 0.06}px` : `0 ${60 * u}px ${height * 0.09}px`,
        background: wide
          ? "linear-gradient(90deg, rgba(8,6,4,.85) 0%, rgba(8,6,4,.4) 28%, transparent 42%)"
          : "linear-gradient(0deg, rgba(8,6,4,.85) 0%, rgba(8,6,4,.4) 20%, transparent 32%)",
      }}
    >
      <div style={{ maxWidth: wide ? width * 0.36 : undefined }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 * u, opacity: a(6) }}>
          <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 24 * u, letterSpacing: 6 * u, color: P.champagne }}>
            {String(n).padStart(2, "0")} / {String(ORDEN.length).padStart(2, "0")}
          </span>
          <span style={{ width: 70 * u * a(6), height: 1.5 * u, background: P.champagne }} />
          <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 24 * u, letterSpacing: 5 * u, color: P.beige }}>{p.linea.toUpperCase()}</span>
        </div>
        <Letters text={p.nombre} delay={10} stagger={0.9} size={(wide ? 86 : 92) * u} gold style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, marginTop: 10 * u }} />
        <div style={{ display: "flex", gap: 12 * u, marginTop: 18 * u, alignItems: "center", opacity: a(26) }}>
          {p.colores.map((c, i) => (
            <span
              key={c.nombre}
              style={{
                width: 30 * u,
                height: 30 * u,
                borderRadius: "50%",
                background: c.hex,
                border: `${2 * u}px solid rgba(255,255,255,.75)`,
                boxShadow: "0 2px 8px rgba(0,0,0,.4)",
                transform: `scale(${interpolate(f, [26 + i * 3, 36 + i * 3], [0, 1], clamp)})`,
              }}
            />
          ))}
          <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 26 * u, color: P.blancoCalido, marginLeft: 8 * u }}>Aroma: {p.aroma}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Momento: React.FC<{ i: number }> = ({ i }) => {
  const { id, modo } = ORDEN[i];
  const p = byId(id);
  const len = T.porProducto + OV;
  return (
    <Fade len={len}>
      {modo === "foto" ? <FotoCine p={p} dur={len} dir={i % 4 === 0 ? 1 : -1} /> : <Estudio p={p} dur={len} />}
      <GoldDust count={22} seed={`m${i}`} />
      <Grade strength={0.55} />
      <Ficha p={p} n={i + 1} />
    </Fade>
  );
};

// ───────────────────────── Escena 4: experiencia navideña ─────────────────────────
const Regalo: React.FC<{ x: number; y: number; s: number; c: string; lazo: string; d: number }> = ({ x, y, s, c, lazo, d }) => {
  const f = useCurrentFrame();
  const e = spring({ frame: f - d, fps: FPS, config: { damping: 14 } });
  return (
    <div style={{ position: "absolute", left: x, top: y - s, width: s, height: s, transform: `translateY(${(1 - e) * 60}px)`, opacity: e }}>
      <div style={{ position: "absolute", inset: 0, top: s * 0.18, background: `linear-gradient(135deg, ${c}, rgba(0,0,0,.35)), ${c}`, borderRadius: s * 0.04, boxShadow: "0 18px 30px rgba(0,0,0,.5)" }} />
      <div style={{ position: "absolute", left: -s * 0.04, right: -s * 0.04, top: s * 0.1, height: s * 0.16, background: `linear-gradient(180deg, ${c}, rgba(0,0,0,.25)), ${c}`, borderRadius: s * 0.03 }} />
      <div style={{ position: "absolute", left: s * 0.44, width: s * 0.12, top: s * 0.1, bottom: 0, background: lazo }} />
      <div style={{ position: "absolute", left: s * 0.25, top: -s * 0.08, width: s * 0.22, height: s * 0.2, border: `${s * 0.05}px solid ${lazo}`, borderRadius: "50% 50% 50% 0", transform: "rotate(-20deg)" }} />
      <div style={{ position: "absolute", left: s * 0.52, top: -s * 0.08, width: s * 0.22, height: s * 0.2, border: `${s * 0.05}px solid ${lazo}`, borderRadius: "50% 50% 0 50%", transform: "rotate(20deg)" }} />
    </div>
  );
};

const Mesa: React.FC = () => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const len = T.regalo - T.experiencia + OV;
  const cam = interpolate(f, [0, len], [1.08, 1.0], { ...clamp, easing: ease });
  const panX = interpolate(f, [0, len], [30, -30], clamp) * u;
  const floor = height * (wide ? 0.78 : 0.66);
  const items = [
    { p: byId("renos"), x: wide ? 0.24 : 0.2, h: wide ? 0.3 : 0.2, d: 6 },
    { p: byId("arbol-estrella"), x: 0.5, h: wide ? 0.44 : 0.3, d: 0 },
    { p: byId("esferas"), x: wide ? 0.77 : 0.8, h: wide ? 0.26 : 0.18, d: 10 },
  ];
  return (
    <Fade len={len}>
      <AbsoluteFill style={{ background: `linear-gradient(180deg, #1a0e0a 0%, #2b1510 ${(floor / height) * 100 - 20}%, #3a2216 ${(floor / height) * 100}%, #20120b 100%)` }}>
        <AbsoluteFill style={{ transform: `scale(${cam}) translateX(${panX}px)` }}>
          <Bokeh seed="mesa" count={30} opacity={0.9} />
          <div style={{ position: "absolute", left: 0, right: 0, top: floor, bottom: 0, background: "linear-gradient(180deg, rgba(110,60,30,.6), rgba(30,14,8,.9))", borderTop: "1px solid rgba(216,189,138,.3)" }} />
          <Regalo x={width * (wide ? 0.04 : 0.02)} y={floor + 10 * u} s={(wide ? 200 : 170) * u} c={P.vino} lazo={P.champagne} d={14} />
          <Regalo x={width * (wide ? 0.86 : 0.74)} y={floor + 14 * u} s={(wide ? 170 : 150) * u} c={P.bosque} lazo={P.champagneClaro} d={20} />
          {items.map(({ p, x, h, d }) => {
            const maxW = width * (wide ? 0.32 : 0.42);
            const hh = Math.min(height * h, maxW / p.recorteRatio);
            const ww = hh * p.recorteRatio;
            const e = spring({ frame: f - d, fps: FPS, config: { damping: 16 } });
            return (
              <Img
                key={p.id}
                src={recorte(p.recorte)}
                style={{
                  position: "absolute",
                  left: width * x - ww / 2,
                  top: floor - hh + 8 * u,
                  width: ww,
                  height: hh,
                  opacity: e,
                  transform: `translateY(${(1 - e) * 40}px)`,
                  filter: "drop-shadow(0 22px 22px rgba(0,0,0,.65)) brightness(1.02) sepia(.08)",
                }}
              />
            );
          })}
          <AbsoluteFill style={{ mixBlendMode: "screen", background: "radial-gradient(ellipse 60% 40% at 50% 55%, rgba(255,190,110,.18), transparent 70%)" }} />
        </AbsoluteFill>
        <Snow count={40} seed="mesa" opacity={0.45} />
        <Grade />
        <AbsoluteFill style={{ alignItems: "center", paddingTop: height * (wide ? 0.07 : 0.1) }}>
          <Letters text="Luz para cada mesa, cada hogar, cada regalo" delay={14} size={(wide ? 64 : 64) * u} style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, color: P.blancoCalido, textAlign: "center", padding: `0 ${60 * u}px`, textShadow: "0 4px 22px rgba(0,0,0,.8)" }} />
        </AbsoluteFill>
      </AbsoluteFill>
    </Fade>
  );
};

const Personalizadas: React.FC = () => {
  const f = useCurrentFrame();
  const { u, width, height, wide } = useLayout();
  const len = T.cierre - T.regalo + OV;
  const s = interpolate(f, [0, len], [1.05, 1.18], { ...clamp, easing: ease });
  return (
    <Fade len={len}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img src={foto("sagrada-familia-empacada.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 62%", transform: `scale(${s})`, transformOrigin: "50% 62%", filter: "saturate(1.08) brightness(1.05)" }} />
      </AbsoluteFill>
      <GoldDust count={26} seed="pz" />
      <Grade />
      <AbsoluteFill
        style={{
          justifyContent: wide ? "center" : "flex-end",
          padding: wide ? `0 0 0 ${width * 0.06}px` : `0 ${60 * u}px ${height * 0.09}px`,
          background: wide ? "linear-gradient(90deg, rgba(8,6,4,.85), transparent 50%)" : "linear-gradient(0deg, rgba(8,6,4,.85), transparent 32%)",
        }}
      >
        <div style={{ maxWidth: wide ? width * 0.4 : undefined }}>
          <div style={{ fontFamily: FONT_BODY, fontWeight: 700, letterSpacing: 6 * u, fontSize: 24 * u, color: P.champagne, opacity: interpolate(f, [6, 20], [0, 1], clamp) }}>REGALOS PERSONALIZADOS</div>
          <Letters text="Con el nombre de quien más quieres" delay={10} stagger={0.8} size={(wide ? 76 : 80) * u} gold style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, marginTop: 10 * u }} />
          <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 28 * u, color: P.blancoCalido, marginTop: 14 * u, opacity: interpolate(f, [34, 50], [0, 1], clamp) }}>
            Empacadas con lazo dorado y tarjeta de Feliz Navidad
          </div>
        </div>
      </AbsoluteFill>
    </Fade>
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
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: height * (wide ? 0.06 : 0.1), gap: 14 * u }}>
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
  const cortes = [T.titulo, T.productos, ...ORDEN.map((_, i) => T.productos + i * T.porProducto).slice(1), T.experiencia, T.regalo, T.cierre];
  return (
    <AbsoluteFill style={{ background: P.noche }}>
      <Sequence durationInFrames={T.titulo + OV} layout="none">
        <Fade len={T.titulo + OV}>
          <Intro />
        </Fade>
      </Sequence>
      <Sequence from={T.titulo} durationInFrames={T.productos - T.titulo + OV} layout="none">
        <Fade len={T.productos - T.titulo + OV}>
          <Titulo />
        </Fade>
      </Sequence>
      {ORDEN.map((_, i) => (
        <Sequence key={i} from={T.productos + i * T.porProducto} durationInFrames={T.porProducto + OV} layout="none">
          <Momento i={i} />
        </Sequence>
      ))}
      <Sequence from={T.experiencia} durationInFrames={T.regalo - T.experiencia + OV} layout="none">
        <Mesa />
      </Sequence>
      <Sequence from={T.regalo} durationInFrames={T.cierre - T.regalo + OV} layout="none">
        <Personalizadas />
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
