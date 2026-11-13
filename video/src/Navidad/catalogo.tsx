import { AbsoluteFill, Composition, Img, staticFile } from "remotion";
import { useFonts } from "../Anuncio/kit";
import { FONT_BODY, FONT_DISPLAY } from "../Anuncio/theme";
import { COLECCION, CONCEPTOS, MARCA, PALETA as P, PRODUCTOS, Producto } from "./coleccion";

/** Catálogo 4:5 (1080 × 1350): sirve como carrusel de Instagram y, unido, como PDF. */
const foto = (f: string) => staticFile(`navidad/fotos/${f}`);
const recorte = (f: string) => staticFile(`navidad/recortes/${f}`);
const gold: React.CSSProperties = {
  backgroundImage: "linear-gradient(180deg, #fff3d2 0%, #efdfb8 30%, #d8bd8a 62%, #a8813f 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};
const caps = (size: number, color: string = P.champagne): React.CSSProperties => ({
  fontFamily: FONT_BODY,
  fontWeight: 700,
  fontSize: size,
  letterSpacing: size * 0.32,
  color,
});
const Rule: React.FC<{ w?: number; color?: string }> = ({ w = 120, color = P.champagne }) => (
  <div style={{ width: w, height: 2, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
);
const Pie: React.FC<{ n: number; dark?: boolean }> = ({ n, dark }) => (
  <div style={{ position: "absolute", left: 70, right: 70, bottom: 40, display: "flex", justifyContent: "space-between", ...caps(14, dark ? P.champagne : "#9a8668") }}>
    <span>ELENA VELAS Y AROMAS</span>
    <span>{COLECCION.nombre.toUpperCase()} · {COLECCION.temporada.toUpperCase()}</span>
    <span>{String(n).padStart(2, "0")}</span>
  </div>
);
const Oscura: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 38%, #2b4a39 0%, ${P.bosque} 35%, ${P.bosqueProfundo} 75%, #08100b 100%)` }}>
    <AbsoluteFill style={{ border: `2px solid rgba(216,189,138,.35)`, margin: 34 }} />
    {children}
  </AbsoluteFill>
);
const Clara: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: P.blancoCalido }}>
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(216,189,138,.18), transparent 55%)" }} />
    {children}
  </AbsoluteFill>
);

const Portada: React.FC = () => {
  const p = PRODUCTOS[0];
  return (
    <Oscura>
      <AbsoluteFill style={{ alignItems: "center", paddingTop: 110 }}>
        <div style={caps(20)}>ELENA VELAS Y AROMAS PRESENTA</div>
        <div style={{ height: 22 }} />
        <Rule w={260} />
        <div style={{ ...gold, fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 150, lineHeight: 1.05, marginTop: 30, textAlign: "center" }}>
          Noche
          <br />
          de Luz
        </div>
        <div style={{ ...caps(30, P.blancoCalido), marginTop: 24 }}>COLECCIÓN NAVIDAD 2026</div>
      </AbsoluteFill>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse 40% 26% at 50% 74%, rgba(255,214,150,.32), transparent 70%)" }} />
      <Img src={recorte(p.recorte)} style={{ position: "absolute", left: 540 - 270, top: 700, width: 540, height: 540 / p.recorteRatio, filter: "drop-shadow(0 30px 40px rgba(0,0,0,.6))" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 64, textAlign: "center", fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 30, color: P.champagneClaro }}>
        “{COLECCION.eslogan}”
      </div>
    </Oscura>
  );
};

const Presentacion: React.FC = () => {
  const grid = ["renos-blancos.jpg", "pesebre-casita.jpg", "esferas-relieve.jpg", "bosque-de-pinos.jpg"];
  return (
    <Clara>
      <div style={{ position: "absolute", left: 90, right: 90, top: 100 }}>
        <div style={caps(18)}>LA COLECCIÓN</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 70, color: P.bosque, lineHeight: 1.1, marginTop: 14 }}>
          {COLECCION.apertura}
        </div>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 25, lineHeight: 1.6, color: P.tinta, marginTop: 26 }}>
          <b>Noche de Luz</b> reúne nueve velas artesanales hechas a mano, una a una, en nuestro taller: pesebres en relieve, renos con cascabel, esferas talladas y pinos escultóricos. Cada pieza decora, perfuma y se convierte en un regalo que se recuerda.
        </div>
      </div>
      <div style={{ position: "absolute", left: 90, right: 90, top: 640, bottom: 110, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {grid.map((g) => (
          <div key={g} style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 14px 30px rgba(60,40,20,.18)" }}>
            <Img src={foto(g)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <Pie n={2} />
    </Clara>
  );
};

const Dato: React.FC<{ k: string; children: React.ReactNode }> = ({ k, children }) => (
  <div>
    <div style={caps(14, "#9a8668")}>{k}</div>
    <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 23, color: P.tinta, marginTop: 6 }}>{children}</div>
  </div>
);

const Ficha: React.FC<{ p: Producto; n: number }> = ({ p, n }) => (
  <Clara>
    <div style={{ position: "absolute", left: 70, right: 70, top: 70, height: 720, borderRadius: 26, overflow: "hidden", boxShadow: "0 24px 50px rgba(60,40,20,.25)" }}>
      <Img src={foto(p.foto)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: `${(p.foco?.[0] ?? 0.5) * 100}% ${(p.foco?.[1] ?? 0.5) * 100}%` }} />
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(10,6,2,.35) 100%)" }} />
      <div style={{ position: "absolute", left: 28, top: 26, ...caps(15, P.blancoCalido), background: "rgba(18,36,25,.72)", padding: "10px 18px", borderRadius: 999 }}>
        {String(n).padStart(2, "0")} / {String(PRODUCTOS.length).padStart(2, "0")}
      </div>
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, top: 830 }}>
      <div style={caps(17)}>{p.linea.toUpperCase()}</div>
      <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 66, color: P.bosque, lineHeight: 1.05, marginTop: 8 }}>{p.nombre}</div>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 22, lineHeight: 1.55, color: P.tinta, marginTop: 14 }}>{p.descripcion}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginTop: 26, paddingTop: 22, borderTop: `1px solid ${P.beige}` }}>
        <Dato k="MEDIDAS">{p.medidas}</Dato>
        <Dato k="AROMA">{p.aroma}</Dato>
        <Dato k="COLORES">
          <span style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {p.colores.map((c) => (
              <span key={c.nombre} title={c.nombre} style={{ width: 26, height: 26, borderRadius: "50%", background: c.hex, border: "2px solid #fff", boxShadow: "0 0 0 1px #d9cbb2" }} />
            ))}
          </span>
        </Dato>
      </div>
      <div style={{ marginTop: 22, ...caps(15, P.vino) }}>PRECIO: CONSULTA POR WHATSAPP · {MARCA.whatsapp}</div>
    </div>
    <Pie n={n + 2} />
  </Clara>
);

const Personaliza: React.FC<{ n: number }> = ({ n }) => (
  <Oscura>
    <div style={{ position: "absolute", left: 70, right: 70, top: 70, height: 700, borderRadius: 26, overflow: "hidden" }}>
      <Img src={foto("sagrada-familia-empacada.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 62%" }} />
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, top: 820 }}>
      <div style={caps(17)}>REGALOS PERSONALIZADOS</div>
      <div style={{ ...gold, fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 64, lineHeight: 1.08, marginTop: 10 }}>Con el nombre de quien más quieres</div>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 23, lineHeight: 1.7, color: P.blancoCalido, marginTop: 18 }}>
        ✦ Nombre en vinilo sobre la base de cera
        <br />✦ Bolsa de celofán, lazo dorado y tarjeta de Feliz Navidad
        <br />✦ Ideal para novenas, empresas, colegios y familias
      </div>
    </div>
    <Pie n={n} dark />
  </Oscura>
);

const Proximamente: React.FC<{ n: number }> = ({ n }) => (
  <Clara>
    <div style={{ position: "absolute", left: 90, right: 90, top: 100 }}>
      <div style={caps(18)}>PRÓXIMAMENTE</div>
      <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 64, color: P.bosque, lineHeight: 1.1, marginTop: 12 }}>Nuevas ideas para regalar</div>
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, top: 330, display: "flex", flexDirection: "column", gap: 22 }}>
      {CONCEPTOS.map((c, i) => (
        <div key={c.nombre} style={{ display: "flex", gap: 24, alignItems: "center", background: "#fff", borderRadius: 20, padding: 26, boxShadow: "0 10px 26px rgba(60,40,20,.10)", border: `1px solid ${P.beige}` }}>
          <div style={{ ...gold, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 60, width: 70, textAlign: "center", backgroundImage: "linear-gradient(180deg,#d8bd8a,#8c6a2e)" }}>{i + 1}</div>
          <div>
            <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 36, color: P.vino }}>{c.nombre}</div>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 21, lineHeight: 1.5, color: P.tinta, marginTop: 6 }}>{c.descripcion}</div>
          </div>
        </div>
      ))}
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, bottom: 110, height: 330, borderRadius: 20, overflow: "hidden" }}>
      <Img src={staticFile("navidad/referencias/ref-latas-navidenas.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }} />
      <div style={{ position: "absolute", right: 14, bottom: 14, ...caps(13, "#fff"), background: "rgba(0,0,0,.6)", padding: "8px 14px", borderRadius: 999 }}>IMAGEN REFERENCIAL · CONCEPTO EN DESARROLLO</div>
    </div>
    <Pie n={n} />
  </Clara>
);

/** Diseño de etiqueta circular y de caja de regalo. */
const Empaques: React.FC<{ n: number }> = ({ n }) => (
  <Clara>
    <div style={{ position: "absolute", left: 90, right: 90, top: 100 }}>
      <div style={caps(18)}>IDENTIDAD Y EMPAQUE</div>
      <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 60, color: P.bosque, lineHeight: 1.1, marginTop: 12 }}>Un regalo listo para entregar</div>
    </div>
    {/* Etiqueta colgante */}
    <div style={{ position: "absolute", left: 110, top: 360, width: 380, height: 380, borderRadius: "50%", background: P.bosque, boxShadow: "0 20px 40px rgba(18,36,25,.35)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `6px solid ${P.champagne}` }}>
      <div style={{ position: "absolute", top: 26, width: 22, height: 22, borderRadius: "50%", background: P.blancoCalido, border: `3px solid ${P.champagne}` }} />
      <div style={{ ...gold, fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 54 }}>Noche de Luz</div>
      <Rule w={180} />
      <div style={{ ...caps(14, P.blancoCalido), marginTop: 14 }}>NAVIDAD 2026</div>
      <div style={{ ...caps(12, P.champagne), marginTop: 30 }}>ELENA VELAS Y AROMAS</div>
    </div>
    {/* Caja */}
    <div style={{ position: "absolute", right: 110, top: 380, width: 360, height: 340 }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 50, bottom: 0, background: `linear-gradient(135deg, ${P.vino}, #4a121b)`, borderRadius: 10, boxShadow: "0 20px 40px rgba(60,20,20,.35)" }} />
      <div style={{ position: "absolute", left: -12, right: -12, top: 26, height: 60, background: `linear-gradient(180deg, #8a2a38, ${P.vino})`, borderRadius: 8 }} />
      <div style={{ position: "absolute", left: 160, width: 40, top: 26, bottom: 0, background: `linear-gradient(90deg, #b8975a, ${P.champagneClaro}, #b8975a)` }} />
      <div style={{ position: "absolute", left: 30, right: 30, top: 150, height: 120, background: P.blancoCalido, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `2px solid ${P.champagne}` }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 34, color: P.bosque }}>Elena</div>
        <div style={caps(11, "#9a8668")}>VELAS Y AROMAS</div>
      </div>
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, top: 800, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
      {[
        ["Paleta", "Dorado champagne, blanco cálido, beige, verde bosque y rojo vino."],
        ["Tipografía", "Playfair Display itálica para títulos; Montserrat para textos y datos."],
        ["Etiqueta", "Círculo verde bosque con borde champagne: colección, producto, aroma y peso."],
        ["Caja de regalo", "Rojo vino con cinta champagne y etiqueta crema con la marca."],
      ].map(([k, v]) => (
        <div key={k}>
          <div style={caps(14, "#9a8668")}>{k.toUpperCase()}</div>
          <div style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: 21, lineHeight: 1.5, color: P.tinta, marginTop: 6 }}>{v}</div>
        </div>
      ))}
    </div>
    <div style={{ position: "absolute", left: 90, right: 90, bottom: 100, display: "flex", gap: 14 }}>
      {[P.champagne, P.blancoCalido, P.beige, P.bosque, P.vino].map((c) => (
        <div key={c} style={{ flex: 1, height: 70, borderRadius: 12, background: c, border: "1px solid #d9cbb2", display: "flex", alignItems: "flex-end", padding: 8, ...caps(11, c === P.bosque || c === P.vino ? "#fff" : P.tinta) }}>
          {c.toUpperCase()}
        </div>
      ))}
    </div>
    <Pie n={n} />
  </Clara>
);

const Contacto: React.FC = () => (
  <Oscura>
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 26, padding: 100, textAlign: "center" }}>
      <div style={{ width: 260, height: 260, borderRadius: "50%", background: P.blancoCalido, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 70px rgba(216,189,138,.4)" }}>
        <Img src={staticFile("img/logo.png")} style={{ height: 215 }} />
      </div>
      <div style={{ ...gold, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 60, letterSpacing: 4 }}>ELENA VELAS Y AROMAS</div>
      <Rule w={300} />
      <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 700, fontSize: 40, color: P.blancoCalido, lineHeight: 1.3 }}>“{COLECCION.eslogan}”</div>
      <div style={{ ...caps(18, P.champagne), marginTop: 20 }}>HAZ TU PEDIDO</div>
      <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 30, lineHeight: 1.8, color: P.blancoCalido }}>
        WhatsApp {MARCA.whatsapp}
        <br />
        {MARCA.web}
        <br />
        Instagram {MARCA.instagram}
      </div>
    </AbsoluteFill>
  </Oscura>
);

export const PAGINAS = 6 + PRODUCTOS.length;
const Pagina: React.FC<{ pagina: number }> = ({ pagina }) => {
  useFonts();
  const n = PRODUCTOS.length;
  if (pagina === 0) return <Portada />;
  if (pagina === 1) return <Presentacion />;
  if (pagina < 2 + n) return <Ficha p={PRODUCTOS[pagina - 2]} n={pagina - 1} />;
  if (pagina === 2 + n) return <Personaliza n={pagina + 1} />;
  if (pagina === 3 + n) return <Proximamente n={pagina + 1} />;
  if (pagina === 4 + n) return <Empaques n={pagina + 1} />;
  return <Contacto />;
};

export const CatalogoComp: React.FC = () => (
  <Composition id="Catalogo-Navidad" component={Pagina} durationInFrames={1} fps={30} width={1080} height={1350} defaultProps={{ pagina: 0 }} />
);
