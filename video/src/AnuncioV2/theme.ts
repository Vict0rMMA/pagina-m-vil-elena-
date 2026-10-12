import { staticFile } from "remotion";

export const FPS = 30;
export const DURATION = 750; // 25 s
export const OV = 12; // frames de solapamiento entre tomas
export const WEB_URL = "pagina-m-vil-elena.vercel.app";
export const SOCIAL = [
  { id: "wa", label: "+57 300 822 0389" },
  { id: "ig", label: "@velasyaromaselena" },
  { id: "tt", label: "@velas.elena" },
  { id: "fb", label: "Velas y Aromas Elena" },
] as const;
export const C = {
  gold: "#E8C77A",
  goldDeep: "#B8893A",
  cream: "#FFF4DC",
  dark: "#120C07",
};
export const FONT_DISPLAY = "'Playfair Display', serif";
export const FONT_BODY = "'Montserrat', sans-serif";

export const img = (name: string) => staticFile(`img/${name}`);

/** Proporción [ancho, alto] real de cada fotografía. */
export const RATIO: Record<string, [number, number]> = {
  "adj1.jpg": [1024, 1536],
  "adj2.jpg": [1024, 1536],
  "adj3.jpg": [1024, 1536],
  "adj4.jpg": [1086, 1448],
  "adj5.jpg": [1254, 1254],
  "adj6.jpg": [1024, 1536],
  "adj7.jpg": [1086, 1448],
  "adj8.jpg": [1024, 1536],
  "adj9.jpg": [1086, 1448],
  "adj10.jpg": [1066, 1280],
  "pesebre-arbolito-angel.jpg": [750, 1000],
  "pino-grande.jpg": [615, 820],
  "noche-velitas-1.jpg": [1000, 913],
  "noche-velitas-2.jpg": [1000, 913],
  "vela-huella-mascota.jpg": [692, 922],
  "bola-navidad.jpg": [672, 896],
  "pesebre-estrella-arco.jpg": [615, 820],
  "vela-dorada.jpg": [750, 1000],
};

export const FONTS = [
  { family: "Playfair Display", file: "fonts/playfair-display-latin-600-normal.woff2", weight: "600", style: "normal" },
  { family: "Playfair Display", file: "fonts/playfair-display-latin-700-italic.woff2", weight: "700", style: "italic" },
  { family: "Montserrat", file: "fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
  { family: "Montserrat", file: "fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
];
