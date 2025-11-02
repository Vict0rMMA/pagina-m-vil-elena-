// ============================================
// PRODUCTOS - Velas y Aromas Elena
// ============================================
// 
// INSTRUCCIONES:
// 1. Revisa cada imagen en las carpetas de productos
// 2. Completa el nombre y descripción según lo que aparece en cada imagen
// 3. Completa los precios detal/mayorista y bolsa/caja según lo que dice en cada imagen
// 4. Una vez completado, reemplaza la sección de productos en app.js con este contenido
//
// ============================================

const productos = [
  // ========== AMOR Y AMISTAD ==========
  {
    id: "aa1",
    nombre: "COMPLETAR: Nombre según imagen 1.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Amor-y-amistad/1.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "aa2",
    nombre: "Matera Vela Mariposa Mini",
    descripcion: "Vela artesanal con aroma floral y forma de corazón, ideal para ocasiones románticas.",
    imagen: "assets/productos/Amor-y-amistad/2.png",
    precios: {
      detal: { bolsa: 5900, caja: 7000 },
      mayorista: { bolsa: 5200, caja: 6500 }
    }
  },
  {
    id: "aa3",
    nombre: "COMPLETAR: Nombre según imagen 3.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Amor-y-amistad/3.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "aa4",
    nombre: "Peonía Mediana",
    descripcion: "Vela artesanal en forma de peonía con diseño floral elegante. Medidas: 5.5cm x 5.5cm, peso 30gr. Disponible en varios colores (rojo, rosa, verde menta, amarillo).",
    imagen: "assets/productos/Amor-y-amistad/4.png",
    precios: {
      detal: { bolsa: 3300, caja: 4000 },
      mayorista: { bolsa: 2900, caja: 3500 }
    }
  },
  {
    id: "aa5",
    nombre: "Flores con Aroma Empaque Especial",
    descripcion: "Flores aromáticas en empaque especial con domo transparente. Disponible en múltiples colores (rosa, rojo, blanco, morado, azul claro, amarillo). Medidas: 5.5cm x 5.5cm, peso 30gr.",
    imagen: "assets/productos/Amor-y-amistad/5.png",
    precios: {
      detal: 4700,
      mayorista: 4000
    }
  },
  {
    id: "aa6",
    nombre: "Flores con Aroma Empaque Especial",
    descripcion: "Flores aromáticas en empaque especial con domo transparente. Disponible en múltiples colores (rosa, rojo, blanco, morado, azul claro, amarillo). Medidas: 5.5cm x 5.5cm, peso 30gr.",
    imagen: "assets/productos/Amor-y-amistad/6.png",
    precios: {
      detal: 4700,
      mayorista: 4000
    }
  },
  {
    id: "aa7",
    nombre: "Corazón Rosas",
    descripcion: "Vela en forma de corazón decorada con rosas rojas en relieve. Disponible en caja kraft con ventana transparente. Medidas: 6.5cm altura x 8cm ancho, peso 42gr.",
    imagen: "assets/productos/Amor-y-amistad/7.png",
    precios: {
      detal: { bolsa: 3900, caja: 4900 },
      mayorista: { bolsa: 3500, caja: 4300 }
    }
  },
  {
    id: "aa8",
    nombre: "Vela Corazón Grande",
    descripcion: "Vela en forma de corazón grande con mensajes de amor. Disponible en colores blanco y rojo con textos personalizados. Medidas: 11.7cm altura x 5cm ancho x 2.2cm espesor, peso 72gr.",
    imagen: "assets/productos/Amor-y-amistad/8.png",
    precios: {
      detal: { bolsa: 4700, caja: 5900 },
      mayorista: { bolsa: 4400, caja: 5400 }
    }
  },
  {
    id: "aa9",
    nombre: "Mariposa 2 Mechas",
    descripcion: "Vela en forma de mariposa con 2 mechas, decorada con brillo dorado. Disponible en empaque especial. Medidas: 7.5cm altura x 8.5cm ancho x 2.5cm espesor, peso 52gr.",
    imagen: "assets/productos/Amor-y-amistad/9.png",
    precios: {
      detal: { bolsa: 6400, caja: 7600 },
      mayorista: { bolsa: 5600, caja: 6900 }
    }
  },
  {
    id: "aa10",
    nombre: "Poli Mediano Mano Corazón",
    descripcion: "Frasco de vidrio con vela blanca y vela decorativa en forma de mano haciendo corazón. Incluye mensaje 'Feliz Amor y Amistad'. Disponible en empaque especial. Medidas: 7.5cm altura x 5cm ancho, peso 56gr.",
    imagen: "assets/productos/Amor-y-amistad/10.png",
    precios: {
      detal: { bolsa: 7000, caja: 8000 },
      mayorista: { bolsa: 6500, caja: 7400 }
    }
  },
  {
    id: "aa11",
    nombre: "Corazón Rosas",
    descripcion: "Corazones decorados con rosas, disponibles en colores blanco y rosa. Incluyen etiqueta 'Feliz Día!'. Medidas: 2.8cm altura x 5.6cm ancho, peso 24gr.",
    imagen: "assets/productos/Amor-y-amistad/11.png",
    precios: {
      detal: { bolsa: 3400, caja: 4300 },
      mayorista: { bolsa: 3000, caja: 3900 }
    }
  },
  {
    id: "aa12",
    nombre: "Oso Moño",
    descripcion: "Osos decorativos con moño y corazón. Disponibles en colores blanco y rosa. Incluyen moño o corazón decorativo. Medidas: 6.3cm altura x 4.5cm ancho, peso 52gr.",
    imagen: "assets/productos/Amor-y-amistad/12.png",
    precios: {
      detal: { bolsa: 4000, caja: 5500 },
      mayorista: { bolsa: 4500, caja: 6000 }
    }
  },
  {
    id: "aa13",
    nombre: "Copa",
    descripcion: "Copa decorativa con vela blanca y elementos decorativos rojos. Incluye cinta roja en el tallo y mensajes personalizados. Medidas: 17.5cm altura x 7.8cm ancho, peso 120gr.",
    imagen: "assets/productos/Amor-y-amistad/13.png",
    precios: {
      detal: 18500,
      mayorista: 16000
    }
  },
  {
    id: "aa14",
    nombre: "Poli Corazón Mensaje",
    descripcion: "Corazones decorativos con mensajes personalizados (TE AMO). Disponibles en colores rojo y blanco. Medidas: 3cm altura, peso 55gr.",
    imagen: "assets/productos/Amor-y-amistad/14.png",
    precios: {
      detal: { bolsa: 6800, caja: 7900 },
      mayorista: { bolsa: 6500, caja: 7400 }
    }
  },
  {
    id: "aa15",
    nombre: "Peonía Grande",
    descripcion: "Vela artesanal en forma de peonía grande. Disponible en múltiples colores (rojo, rosa, azul). Disponible en caja kraft con ventana transparente. Medidas: 7cm altura x 7cm ancho, peso 45gr.",
    imagen: "assets/productos/Amor-y-amistad/15.png",
    precios: {
      detal: { bolsa: 4200, caja: 5000 },
      mayorista: { bolsa: 3800, caja: 4500 }
    }
  },
  {
    id: "aa16",
    nombre: "Burbuja Vidrio",
    descripcion: "Velas decorativas en frasco de vidrio transparente con diseños florales y corazones. Disponible en múltiples diseños y colores. Medidas: 7cm altura x 7.8cm ancho, peso 90gr.",
    imagen: "assets/productos/Amor-y-amistad/16.png",
    precios: {
      detal: 10800,
      mayorista: 9600
    }
  },
  {
    id: "aa17",
    nombre: "Poli Mediano Rosa",
    descripcion: "Vela de dos niveles con rosa morada en la parte superior y base rosa y blanca. Incluye mensaje 'Feliz Día' en escritura dorada. Disponible en bolsa y caja transparente. Medidas: 6cm altura x 5cm ancho, peso 56gr.",
    imagen: "assets/productos/Amor-y-amistad/17.png",
    precios: {
      detal: { bolsa: 7000, caja: 8000 },
      mayorista: { bolsa: 6500, caja: 7400 }
    }
  },
  {
    id: "aa18",
    nombre: "Vela Corazón Personalizada",
    descripcion: "Velas en forma de corazón personalizadas con letras para formar nombres o mensajes. Disponibles en múltiples colores. Medidas: 9.5cm altura x 2.5cm ancho, peso 30gr.",
    imagen: "assets/productos/Amor-y-amistad/18.png",
    precios: {
      detal: 3600,
      mayorista: 3100
    }
  },
  {
    id: "aa19",
    nombre: "Corazón Rosa",
    descripcion: "Vela en forma de corazón con textura de rosa en tonos rosados. Disponible en bolsa y caja transparente. Medidas: 3.5cm altura x 5.8cm ancho, peso 36gr.",
    imagen: "assets/productos/Amor-y-amistad/19.png",
    precios: {
      detal: { bolsa: 3100, caja: 4100 },
      mayorista: { bolsa: 2800, caja: 3900 }
    }
  },
  {
    id: "aa20",
    nombre: "Vidrio Corcho Estrellas y Corazones",
    descripcion: "Velas decorativas en frasco de vidrio con tapa de corcho. Disponibles con estrellas y corazones de colores. Incluye cordel decorativo. Medidas: 3.5cm altura x 5.8cm ancho, peso 36gr.",
    imagen: "assets/productos/Amor-y-amistad/20.png",
    precios: {
      detal: 8500,
      mayorista: 7900
    }
  },
  {
    id: "aa21",
    nombre: "Rosa Mini",
    descripcion: "Vela en forma de rosa pequeña. Disponible en múltiples colores (rosa, teal, blanco con dorado). Disponible en bolsa y caja. Medidas: 3cm altura x 4cm ancho, peso 18gr.",
    imagen: "assets/productos/Amor-y-amistad/21.png",
    precios: {
      detal: { bolsa: 2500, caja: 3000 },
      mayorista: { bolsa: 2000, caja: 2500 }
    }
  },
  {
    id: "aa22",
    nombre: "Ramo Personalizado",
    descripcion: "Velas personalizadas en forma de oso o flor dentro de taza blanca con texto personalizado. Ideal para regalos. Disponible en caja. Medidas: 12cm altura x 7cm ancho, peso 95gr.",
    imagen: "assets/productos/Amor-y-amistad/22.png",
    precios: {
      detal: 11900,
      mayorista: 9600
    }
  },
  {
    id: "aa23",
    nombre: "Margarita",
    descripcion: "Vela en forma de margarita (daisy). Disponible en múltiples colores (rosa, fucsia, morado). Disponible en bolsa y caja. Medidas: 5cm altura x 5cm ancho, peso 16gr.",
    imagen: "assets/productos/Amor-y-amistad/23.png",
    precios: {
      detal: { bolsa: 2500, caja: 3200 },
      mayorista: { bolsa: 2300, caja: 2800 }
    }
  },
  
  // ========== BABY SHOWER ==========
  {
    id: "bs1",
    nombre: "COMPLETAR: Nombre según imagen 1.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Baby-Shower/1.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "bs2",
    nombre: "COMPLETAR: Nombre según imagen 2.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Baby-Shower/2.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "bs3",
    nombre: "COMPLETAR: Nombre según imagen 3.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Baby-Shower/3.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "bs4",
    nombre: "COMPLETAR: Nombre según imagen 4.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Baby-Shower/4.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  
  // ========== PRIMERA COMUNIÓN ==========
  {
    id: "pc1",
    nombre: "COMPLETAR: Nombre según imagen 1.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/1.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc2",
    nombre: "COMPLETAR: Nombre según imagen 2.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/2.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc3",
    nombre: "COMPLETAR: Nombre según imagen 3.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/3.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc4",
    nombre: "COMPLETAR: Nombre según imagen 4.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/4.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc5",
    nombre: "COMPLETAR: Nombre según imagen 5.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/5.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc6",
    nombre: "COMPLETAR: Nombre según imagen 6.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/6.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc7",
    nombre: "COMPLETAR: Nombre según imagen 7.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/7.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "pc8",
    nombre: "COMPLETAR: Nombre según imagen 8.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Primera-Comunion/8.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  
  // ========== NAVIDAD DETAL ==========
  // NOTA: Hay 31 imágenes (1.jpg a 31.jpg, falta 13.jpg)
  {
    id: "nad1",
    nombre: "COMPLETAR: Nombre según imagen 1.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/1.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad2",
    nombre: "COMPLETAR: Nombre según imagen 2.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/2.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad3",
    nombre: "COMPLETAR: Nombre según imagen 3.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/3.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad4",
    nombre: "COMPLETAR: Nombre según imagen 4.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/4.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad5",
    nombre: "COMPLETAR: Nombre según imagen 5.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/5.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad6",
    nombre: "COMPLETAR: Nombre según imagen 6.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/6.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad7",
    nombre: "COMPLETAR: Nombre según imagen 7.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/7.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad8",
    nombre: "COMPLETAR: Nombre según imagen 8.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/8.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad9",
    nombre: "COMPLETAR: Nombre según imagen 9.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/9.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad10",
    nombre: "COMPLETAR: Nombre según imagen 10.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/10.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad11",
    nombre: "COMPLETAR: Nombre según imagen 11.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/11.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad12",
    nombre: "COMPLETAR: Nombre según imagen 12.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/12.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad14",
    nombre: "COMPLETAR: Nombre según imagen 14.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/14.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad15",
    nombre: "COMPLETAR: Nombre según imagen 15.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/15.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad16",
    nombre: "COMPLETAR: Nombre según imagen 16.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/16.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad17",
    nombre: "COMPLETAR: Nombre según imagen 17.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/17.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad18",
    nombre: "COMPLETAR: Nombre según imagen 18.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/18.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad19",
    nombre: "COMPLETAR: Nombre según imagen 19.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/19.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad20",
    nombre: "COMPLETAR: Nombre según imagen 20.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/20.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad21",
    nombre: "COMPLETAR: Nombre según imagen 21.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/21.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad22",
    nombre: "COMPLETAR: Nombre según imagen 22.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/22.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad23",
    nombre: "COMPLETAR: Nombre según imagen 23.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/23.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad24",
    nombre: "COMPLETAR: Nombre según imagen 24.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/24.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad25",
    nombre: "COMPLETAR: Nombre según imagen 25.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/25.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad26",
    nombre: "COMPLETAR: Nombre según imagen 26.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/26.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad27",
    nombre: "COMPLETAR: Nombre según imagen 27.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/27.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad28",
    nombre: "COMPLETAR: Nombre según imagen 28.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/28.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad29",
    nombre: "COMPLETAR: Nombre según imagen 29.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/29.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad30",
    nombre: "COMPLETAR: Nombre según imagen 30.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/30.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nad31",
    nombre: "COMPLETAR: Nombre según imagen 31.jpg",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Detal/31.jpg",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  
  // ========== NAVIDAD MAYORISTA ==========
  // NOTA: Hay 30 imágenes (1.png a 30.png)
  {
    id: "nam1",
    nombre: "COMPLETAR: Nombre según imagen 1.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/1.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam2",
    nombre: "COMPLETAR: Nombre según imagen 2.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/2.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam3",
    nombre: "COMPLETAR: Nombre según imagen 3.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/3.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam4",
    nombre: "COMPLETAR: Nombre según imagen 4.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/4.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam5",
    nombre: "COMPLETAR: Nombre según imagen 5.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/5.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam6",
    nombre: "COMPLETAR: Nombre según imagen 6.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/6.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam7",
    nombre: "COMPLETAR: Nombre según imagen 7.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/7.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam8",
    nombre: "COMPLETAR: Nombre según imagen 8.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/8.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam9",
    nombre: "COMPLETAR: Nombre según imagen 9.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/9.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam10",
    nombre: "COMPLETAR: Nombre según imagen 10.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/10.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam11",
    nombre: "COMPLETAR: Nombre según imagen 11.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/11.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam12",
    nombre: "COMPLETAR: Nombre según imagen 12.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/12.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam13",
    nombre: "COMPLETAR: Nombre según imagen 13.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/13.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam14",
    nombre: "COMPLETAR: Nombre según imagen 14.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/14.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam15",
    nombre: "COMPLETAR: Nombre según imagen 15.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/15.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam16",
    nombre: "COMPLETAR: Nombre según imagen 16.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/16.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam17",
    nombre: "COMPLETAR: Nombre según imagen 17.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/17.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam18",
    nombre: "COMPLETAR: Nombre según imagen 18.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/18.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam19",
    nombre: "COMPLETAR: Nombre según imagen 19.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/19.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam20",
    nombre: "COMPLETAR: Nombre según imagen 20.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/20.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam21",
    nombre: "COMPLETAR: Nombre según imagen 21.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/21.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam22",
    nombre: "COMPLETAR: Nombre según imagen 22.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/22.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam23",
    nombre: "COMPLETAR: Nombre según imagen 23.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/23.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam24",
    nombre: "COMPLETAR: Nombre según imagen 24.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/24.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam25",
    nombre: "COMPLETAR: Nombre según imagen 25.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/25.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam26",
    nombre: "COMPLETAR: Nombre según imagen 26.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/26.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam27",
    nombre: "COMPLETAR: Nombre según imagen 27.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/27.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam28",
    nombre: "COMPLETAR: Nombre según imagen 28.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/28.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam29",
    nombre: "COMPLETAR: Nombre según imagen 29.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/29.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  },
  {
    id: "nam30",
    nombre: "COMPLETAR: Nombre según imagen 30.png",
    descripcion: "COMPLETAR: Descripción del producto según imagen",
    imagen: "assets/productos/Navidad-Mayorista/30.png",
    precios: {
      detal: { bolsa: 0, caja: 0 },
      mayorista: { bolsa: 0, caja: 0 }
    }
  }
];

