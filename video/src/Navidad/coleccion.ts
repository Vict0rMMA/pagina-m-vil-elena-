/**
 * Colección "Noche de Luz" — Navidad 2026.
 * Fuente única de datos para el video y el catálogo.
 * Medidas, costos y precios son ESTIMACIONES pendientes de confirmar con producción.
 */
export type Producto = {
  id: string;
  nombre: string;
  linea: string;
  descripcion: string;
  foto: string; // fotografía real (public/navidad/fotos)
  recorte: string; // misma foto con fondo removido (public/navidad/recortes)
  ratio: number; // ancho/alto de la foto
  recorteRatio: number;
  medidas: string;
  colores: { nombre: string; hex: string }[];
  aroma: string;
  cera: string;
  molde: string;
  dificultad: "Baja" | "Media" | "Alta";
  costo: number; // COP, materiales + empaque (sin mano de obra)
  precio: number; // COP, precio sugerido al público
  publico: string;
  foco?: [number, number]; // punto de interés en la foto (0-1)
};

export const COLECCION = {
  nombre: "Noche de Luz",
  temporada: "Navidad 2026",
  eslogan: "Esta Navidad, regala momentos que iluminan",
  apertura: "Hay momentos que merecen una luz especial",
};

export const MARCA = {
  nombre: "Elena Velas y Aromas",
  web: "pagina-m-vil-elena.vercel.app",
  whatsapp: "+57 300 822 0389",
  instagram: "@velasyaromaselena",
};

export const PALETA = {
  champagne: "#d8bd8a",
  champagneClaro: "#efdfb8",
  blancoCalido: "#fbf6ec",
  beige: "#e9dcc6",
  bosque: "#1f3a2c",
  bosqueProfundo: "#122419",
  vino: "#6e1f2b",
  noche: "#0d0a08",
  tinta: "#2a2420",
};

const c = (nombre: string, hex: string) => ({ nombre, hex });

export const PRODUCTOS: Producto[] = [
  {
    id: "arbol-estrella",
    nombre: "Árbol de Belén",
    linea: "Pesebre en relieve",
    descripcion: "Un árbol navideño que guarda el nacimiento completo: ángel, Sagrada Familia y animalitos, coronado por una estrella pintada a mano en dorado.",
    foto: "arbol-pesebre-estrella.jpg",
    recorte: "arbol-pesebre-estrella.png",
    ratio: 1350 / 1800,
    recorteRatio: 1070 / 994,
    medidas: "≈ 11 × 8 × 4 cm",
    colores: [c("Lila", "#b25fd0"), c("Blanco", "#f4f1ea")],
    aroma: "Vainilla y canela",
    cera: "Parafina con 20 % de soya (buen desmolde y detalle)",
    molde: "Silicona árbol-pesebre",
    dificultad: "Media",
    costo: 9000,
    precio: 32000,
    publico: "Familias y regalo para mamá o abuela",
    foco: [0.32, 0.45],
  },
  {
    id: "renos",
    nombre: "Familia de Renos",
    linea: "Set x 3 con cascabel",
    descripcion: "Tres renos en tres tamaños, con lazo de satín y cascabel dorado. Una decoración que se regala en familia.",
    foto: "renos-blancos.jpg",
    recorte: "renos-verdes.png",
    ratio: 1350 / 1800,
    recorteRatio: 1624 / 1024,
    medidas: "≈ 12, 9 y 7 cm de alto",
    colores: [c("Verde bosque", "#3f8f78"), c("Blanco nieve", "#f5f3ee")],
    aroma: "Manzana y canela",
    cera: "Parafina",
    molde: "Silicona reno (3 tamaños)",
    dificultad: "Baja",
    costo: 12000,
    precio: 45000,
    publico: "Decoración de sala y mesa navideña",
    foco: [0.4, 0.5],
  },
  {
    id: "casita",
    nombre: "Pesebre Casita",
    linea: "Natividad tierna",
    descripcion: "La Sagrada Familia, la mula y el buey bajo un techito con estrella. Detalles dorados aplicados uno a uno.",
    foto: "pesebre-casita.jpg",
    recorte: "pesebre-casita.png",
    ratio: 1800 / 1770,
    recorteRatio: 1769 / 547,
    medidas: "≈ 8 × 8 × 4 cm",
    colores: [c("Blanco", "#f4f1ea"), c("Azul", "#2f63c9"), c("Rosa", "#f2a7c3"), c("Verde", "#1f6b4f")],
    aroma: "Vainilla",
    cera: "Parafina con 20 % de soya",
    molde: "Silicona casita-pesebre",
    dificultad: "Media",
    costo: 8000,
    precio: 28000,
    publico: "Detalle para niños, novenas y anchetas",
    foco: [0.5, 0.6],
  },
  {
    id: "arco",
    nombre: "Arco de Belén",
    linea: "Doble mecha",
    descripcion: "José y María abrazan al Niño bajo la estrella de Belén. Acabado con destellos de hoja dorada.",
    foto: "arco-belen.jpg",
    recorte: "arco-belen.png",
    ratio: 1800 / 1654,
    recorteRatio: 1748 / 768,
    medidas: "≈ 9 × 9 × 3 cm",
    colores: [c("Azul", "#3b6fd6"), c("Rojo", "#e0413f"), c("Verde agua", "#4aa395")],
    aroma: "Sándalo suave",
    cera: "Parafina",
    molde: "Silicona arco-natividad",
    dificultad: "Media",
    costo: 7500,
    precio: 26000,
    publico: "Regalo espiritual y decoración del pesebre",
    foco: [0.5, 0.55],
  },
  {
    id: "arbolito",
    nombre: "Arbolito del Pesebre",
    linea: "Natividad infantil",
    descripcion: "Un arbolito redondeado con la Sagrada Familia y estrellitas en relieve. Tierno, colorido y fácil de regalar.",
    foto: "arbolito-pesebre.jpg",
    recorte: "arbolito-pesebre.png",
    ratio: 1350 / 1800,
    recorteRatio: 1216 / 851,
    medidas: "≈ 9 × 7 × 4 cm",
    colores: [c("Verde", "#5c9a7c"), c("Azul", "#4f78d8"), c("Rojo", "#e04848")],
    aroma: "Pino fresco",
    cera: "Parafina",
    molde: "Silicona arbolito-pesebre",
    dificultad: "Baja",
    costo: 7000,
    precio: 25000,
    publico: "Niños y amigo secreto",
    foco: [0.45, 0.6],
  },
  {
    id: "portal",
    nombre: "Portal de Madera",
    linea: "Establo con estrella",
    descripcion: "Un portal con textura de tablas y techo de troncos que enmarca a la Sagrada Familia. Rústico y lleno de detalle.",
    foto: "portal-de-madera.jpg",
    recorte: "portal-de-madera.png",
    ratio: 1350 / 1800,
    recorteRatio: 1253 / 1000,
    medidas: "≈ 10 × 9 × 3 cm",
    colores: [c("Verde agua", "#5aa78f"), c("Azul", "#5b8be0")],
    aroma: "Canela",
    cera: "Parafina con 20 % de soya",
    molde: "Silicona portal",
    dificultad: "Media",
    costo: 8500,
    precio: 30000,
    publico: "Decoración del pesebre y regalo corporativo",
    foco: [0.45, 0.45],
  },
  {
    id: "esferas",
    nombre: "Esferas de Natividad",
    linea: "Relieve 360°",
    descripcion: "Esfera y huevo navideño tallados por completo con escenas del nacimiento. Piezas de colección para el centro de mesa.",
    foto: "esferas-relieve.jpg",
    recorte: "esferas-relieve.png",
    ratio: 1750 / 1800,
    recorteRatio: 1427 / 861,
    medidas: "≈ 8 cm de diámetro",
    colores: [c("Rojo", "#d71f26"), c("Verde", "#2f8f7c")],
    aroma: "Frutos rojos / Pino",
    cera: "Parafina",
    molde: "Silicona esfera y huevo en relieve",
    dificultad: "Alta",
    costo: 10000,
    precio: 35000,
    publico: "Centro de mesa y coleccionistas",
    foco: [0.5, 0.6],
  },
  {
    id: "pinos",
    nombre: "Bosque de Pinos",
    linea: "Árboles escultóricos",
    descripcion: "Pinos de capas plisadas y de ramas en cascada, con cascabel en la punta. Combínalos para crear tu propio bosque.",
    foto: "bosque-de-pinos.jpg",
    recorte: "bosque-de-pinos.png",
    ratio: 1350 / 1800,
    recorteRatio: 466 / 698,
    medidas: "≈ 10 – 12 cm de alto",
    colores: [c("Blanco", "#f6f2ea"), c("Rojo", "#d8202f"), c("Verde", "#2e7d6b"), c("Coral", "#ff7a6b")],
    aroma: "Pino y eucalipto",
    cera: "Soya (acabado mate)",
    molde: "Silicona pino plisado / pino de ramas",
    dificultad: "Baja",
    costo: 7000,
    precio: 24000,
    publico: "Decoración minimalista y regalo de oficina",
    foco: [0.47, 0.62],
  },
  {
    id: "mini-personalizada",
    nombre: "Sagrada Familia Personalizada",
    linea: "Con nombre",
    descripcion: "Mini Sagrada Familia sobre base de cera blanca con el nombre de cada invitado. Llega empacada con lazo dorado y tarjeta de Feliz Navidad.",
    foto: "sagrada-familia-nombres.jpg",
    recorte: "sagrada-familia-empacada.png",
    ratio: 1350 / 1800,
    recorteRatio: 1340 / 660,
    medidas: "≈ 6 cm de alto",
    colores: [c("Verde", "#2f9a6d"), c("Rojo", "#e1262c")],
    aroma: "Sin aroma o vainilla",
    cera: "Parafina (figura) + soya (base)",
    molde: "Silicona mini familia + vaso tealight",
    dificultad: "Baja",
    costo: 4500,
    precio: 12000,
    publico: "Detalles para novenas, empresas y familias numerosas",
    foco: [0.45, 0.55],
  },
];

/** Propuestas nuevas (conceptos). Sus imágenes son referenciales, no fotos de producto fabricado. */
export const CONCEPTOS = [
  {
    nombre: "Vaso Noche de Luz",
    descripcion: "Vela de soya en vaso de vidrio con el nombre en dorado y una mini figura navideña de cera sobre la superficie.",
    precio: "Por definir",
  },
  {
    nombre: "Lata de Regalo Navideña",
    descripcion: "Lata decorada con 4–5 figuras aromáticas de cera (muñeco de jengibre, Papá Noel, regalo, bastón).",
    precio: "Por definir",
  },
  {
    nombre: "Edición Champagne",
    descripcion: "Los moldes de la colección con acabado metalizado champagne, tendencia de decoración navideña 2026.",
    precio: "Por definir",
  },
];

export const cop = (n: number) => "$" + n.toLocaleString("es-CO");
export const margen = (p: Producto) => Math.round(((p.precio - p.costo) / p.precio) * 100);
