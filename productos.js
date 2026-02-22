const productos = [
  // ========== IMAGEN 1.png - LEONCITOS ==========
  {
    id: "leoncito",
    nombre: "LEONCITO",
    descripcion: "Vela en forma de león pequeño. Disponible en múltiples colores (rosa, naranja, azul). Disponible en bolsa y caja kraft.",
    imagen: "assets/productos/Baby-Shower/1.png",
    precios: {
      detal: { bolsa: 3500, caja: 5000 },
      mayorista: { bolsa: 3100, caja: 4700 }
    },
    medidas: { altura_cm: 6.0, ancho_cm: 5.0, espesor_cm: 2.5, peso_gr: 25 }
  },
  {
    id: "leoncito-poli-pequeno",
    nombre: "LEONCITO POLI PEQUEÑO",
    descripcion: "Vela en forma de león pequeño con personalización de nombre. Disponible en múltiples colores (rosa, fucsia). Incluye etiqueta con nombre personalizado.",
    imagen: "assets/productos/Baby-Shower/1.png",
    precios: {
      detal: { bolsa: 5500, caja: 6500 },
      mayorista: { bolsa: 5000, caja: 6000 }
    },
    medidas: { altura_cm: 7.5, ancho_cm: 4.5, peso_gr: 44 }
  },
  {
    id: "leoncito-poli-mediano",
    nombre: "LEONCITO POLI MEDIANO",
    descripcion: "Vela en forma de león mediano con personalización de nombre. Disponible en múltiples colores (rosa, blanco). Incluye etiqueta con nombre personalizado.",
    imagen: "assets/productos/Baby-Shower/1.png",
    precios: {
      detal: { bolsa: 6500, caja: 7000 },
      mayorista: { bolsa: 5700, caja: 6400 }
    },
    medidas: { altura_cm: 8.7, ancho_cm: 5.0, peso_gr: 60 }
  },

  // ========== IMAGEN 2.png - LEONCITO NUBE, VIDRIO Y JIRAFA ==========
  {
    id: "leoncito-nube",
    nombre: "LEONCITO NUBE",
    descripcion: "Vela en forma de león sobre base de nube. Disponible en color azul. Disponible en bolsa y caja. Incluye base decorativa tipo nube.",
    imagen: "assets/productos/Baby-Shower/2.png",
    precios: {
      detal: { bolsa: 3500, caja: 5000 },
      mayorista: { bolsa: 3000, caja: 4300 }
    },
    medidas: { altura_cm: 6.5, ancho_cm: 4.5, peso_gr: 30 }
  },
  {
    id: "leoncito-vidrio-tapa-corcho",
    nombre: "LEONCITO VIDRIO TAPA CORCHO",
    descripcion: "Vela en forma de león dentro de frasco de vidrio con tapa de corcho. Incluye etiqueta con nombre personalizado. Presentación única en frasco de vidrio.",
    imagen: "assets/productos/Baby-Shower/2.png",
    precios: {
      detal: 8500,
      mayorista: 7900
    },
    medidas: { altura_cm: 8.0, ancho_cm: 5.5, peso_gr: 60 }
  },
  {
    id: "jirafa",
    nombre: "JIRAFA",
    descripcion: "Vela en forma de jirafa con manchas características. Disponible en color amarillo con manchas negras. Disponible en bolsa y caja kraft con ventana.",
    imagen: "assets/productos/Baby-Shower/2.png",
    precios: {
      detal: { bolsa: 4000, caja: 5500 },
      mayorista: { bolsa: 3500, caja: 4700 }
    },
    medidas: { altura_cm: 10.0, ancho_cm: 4.0, espesor_cm: 2.0, peso_gr: 30 }
  },

  // ========== IMAGEN 3.png - JIRAFA, OSO Y ELEFANTE ==========
  {
    id: "jirafa-poli",
    nombre: "JIRAFA POLI",
    descripcion: "Vela en forma de jirafa con personalización de nombre. Disponible en color rosa con manchas negras. Incluye moño y etiqueta con nombre personalizado. Disponible en bolsa y caja.",
    imagen: "assets/productos/Baby-Shower/3.png",
    precios: {
      detal: { bolsa: 6500, caja: 8000 },
      mayorista: { bolsa: 6000, caja: 7500 }
    },
    medidas: { altura_cm: 11.0, ancho_cm: 4.5, peso_gr: 52 }
  },
  {
    id: "oso-poli-pequeno",
    nombre: "OSO POLI PEQUEÑO",
    descripcion: "Vela en forma de oso pequeño con personalización de nombre. Disponible en color rosa. Incluye moño y etiqueta con nombre personalizado. Disponible en bolsa y caja.",
    imagen: "assets/productos/Baby-Shower/3.png",
    precios: {
      detal: { bolsa: 6000, caja: 7500 },
      mayorista: { bolsa: 5400, caja: 6800 }
    },
    medidas: { altura_cm: 6.0, ancho_cm: 4.5, peso_gr: 40 }
  },
  {
    id: "elefante-elefanta-poli-pequeno",
    nombre: "ELEFANTE Y ELEFANTA POLI PEQUEÑO",
    descripcion: "Vela en forma de elefante pequeño con personalización. Disponible en múltiples colores (azul, rosa). Incluye etiqueta con nombre personalizado. Disponible en bolsa y caja.",
    imagen: "assets/productos/Baby-Shower/3.png",
    precios: {
      detal: { bolsa: 5000, caja: 6000 },
      mayorista: { bolsa: 4500, caja: 5500 }
    },
    medidas: { altura_cm: 4.5, ancho_cm: 4.5, peso_gr: 26 }
  },

  // ========== IMAGEN 4.png - PIESITOS Y COMPOTA ==========
  {
    id: "compota-00",
    nombre: "COMPOTA 00",
    descripcion: "Compota en frasco de vidrio con tapa verde. Disponible en múltiples sabores. Presentación individual. Ideal como detalle para baby shower.",
    imagen: "assets/productos/Baby-Shower/4.png",
    precios: {
      detal: 5500,
      mayorista: 5000
    },
    medidas: { altura_cm: 4.2, ancho_cm: 4.3, peso_gr: 25 }
  },
  {
    id: "piesitos-poli-pequenos",
    nombre: "PIESITOS POLI PEQUEÑOS",
    descripcion: "Vela decorativa con huellas de bebé. Disponible en color blanco con huellas azules. Presentación en bolsa. Ideal como detalle para baby shower.",
    imagen: "assets/productos/Baby-Shower/4.png",
    precios: {
      detal: 3500,
      mayorista: 3100
    },
    medidas: { altura_cm: 2.0, ancho_cm: 4.0, peso_gr: 22 }
  },
  {
    id: "piesitos-hojalata",
    nombre: "PIESITOS HOJALATA",
    descripcion: "Vela decorativa con huellas de bebé en lata. Disponible en lata con vela blanca y huellas rosadas. Presentación en lata. Ideal como detalle para baby shower.",
    imagen: "assets/productos/Baby-Shower/4.png",
    precios: {
      detal: 3300,
      mayorista: 2900
    },
    medidas: { altura_cm: 2.0, ancho_cm: 5.0, peso_gr: 18 }
  },

  // ========== PRIMERA COMUNIÓN - IMAGEN 1.png ==========
  {
    id: "poli-mediano-estrellas",
    nombre: "POLI MEDIANO ESTRELLAS",
    descripcion: "Vela personalizada mediana con decoración de estrellas. Incluye nombre personalizado en script dorado y decoración con estrellas rosadas y flores secas. Disponible en bolsa y caja.",
    imagen: "assets/productos/Primera-Comunion/1.png",
    precios: {
      detal: { bolsa: 5600, caja: 7500 },
      mayorista: { bolsa: 5100, caja: 6300 }
    },
    medidas: { altura_cm: 4.0, ancho_cm: 5.0, peso_gr: 54 }
  }
];

export default productos;
