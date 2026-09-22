// Elena Velas y Aromas - App Principal
// ======================================
// Versión: 1.0.4 - Última actualización - Placeholders mejorados

// Configuración
const WHATSAPP_PHONE = '573008220389';
const WHATSAPP_API = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=`;

// Base de datos de productos
const productos = {
  amorYAmistad: [
    {
      id: "aa2",
      categoria: "amorYAmistad",
      nombre: "Matera Vela Mariposa Mini",
      descripcion: "Vela artesanal con aroma floral y forma de corazón, ideal para ocasiones románticas.",
      imagen: "assets/productos/Amor-y-amistad/2.jpg",
      precios: {
        detal: { bolsa: 5900, caja: 7000 },
        mayorista: { bolsa: 5200, caja: 6500 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 15000 },
        { nombre: "Mediana", precio: 25000 },
        { nombre: "Grande", precio: 35000 }
      ],
      fragancias: ["Vainilla", "Canela", "Manzana Verde", "Coco"]
    },
    {
      id: "aa4",
      categoria: "amorYAmistad",
      nombre: "Peonía Mediana",
      descripcion: "Vela artesanal en forma de peonía con diseño floral elegante. Medidas: 5.5cm x 5.5cm, peso 30gr. Disponible en varios colores (rojo, rosa, verde menta, amarillo).",
      imagen: "assets/productos/Amor-y-amistad/4.jpg",
      precios: {
        detal: { bolsa: 3300, caja: 4000 },
        mayorista: { bolsa: 2900, caja: 3500 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 16000 },
        { nombre: "Mediana", precio: 26000 },
        { nombre: "Grande", precio: 36000 }
      ],
      fragancias: ["Vainilla", "Rosa", "Jazmín", "Coco"]
    },
    {
      id: "aa5",
      categoria: "amorYAmistad",
      nombre: "Flores con Aroma Empaque Especial",
      descripcion: "Vela en forma de corazón rojo con base blanca texturizada. Diseño elegante y romántico ideal para ocasiones especiales. Disponible en múltiples colores. Medidas: 7.5cm altura x 7.8cm ancho, peso 100gr.",
      imagen: "assets/productos/Amor-y-amistad/5.jpg",
      precios: {
        detal: {
          bolsa: 4700,
          caja: 0
        },
        mayorista: {
          bolsa: 4000,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 17000 },
        { nombre: "Mediana", precio: 27000 },
        { nombre: "Grande", precio: 37000 }
      ],
      fragancias: ["Lavanda", "Rosa", "Vainilla", "Melocotón"]
    },
    {
      id: "aa6",
      categoria: "amorYAmistad",
      nombre: "Matera Vela Corazón Rosas",
      descripcion: "Flores aromáticas en empaque especial con domo transparente. Disponible en múltiples colores (rosa, rojo, blanco, morado, azul claro, amarillo). Medidas: 5.5cm altura x 5.5cm ancho, peso 30gr.",
      imagen: "assets/productos/Amor-y-amistad/6.jpg",
      precios: {
        detal: {
          bolsa: 8900,
          caja: 10500
        },
        mayorista: {
          bolsa: 8000,
          caja: 9300
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 40000 },
        { nombre: "Extra Grande", precio: 55000 }
      ],
      fragancias: ["Rosa", "Sándalo", "Vainilla", "Ámbar"]
    },
    {
      id: "aa7",
      categoria: "amorYAmistad",
      nombre: "Corazón Rosas",
      descripcion: "Vela en forma de corazón decorada con rosas rojas en relieve. Disponible en caja kraft con ventana transparente. Medidas: 6.5cm altura x 8cm ancho, peso 42gr.",
      imagen: "assets/productos/Amor-y-amistad/7.jpg",
      precios: {
        detal: { bolsa: 3900, caja: 4900 },
        mayorista: { bolsa: 3500, caja: 4300 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 15000 },
        { nombre: "Mediana", precio: 25000 },
        { nombre: "Grande", precio: 35000 }
      ],
      fragancias: ["Rosa", "Vainilla", "Lavanda", "Canela"]
    },
    {
      id: "aa8",
      categoria: "amorYAmistad",
      nombre: "Vela Corazón Grande",
      descripcion: "Vela en forma de corazón grande con mensajes de amor. Disponible en colores blanco y rojo con textos personalizados. Medidas: 11.7cm altura x 5cm ancho x 2.2cm espesor, peso 72gr.",
      imagen: "assets/productos/Amor-y-amistad/8.jpg",
      precios: {
        detal: { bolsa: 4700, caja: 5900 },
        mayorista: { bolsa: 4400, caja: 5400 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 16000 },
        { nombre: "Mediana", precio: 26000 },
        { nombre: "Grande", precio: 36000 }
      ],
      fragancias: ["Canela", "Vainilla", "Manzana Verde", "Miel"]
    },
    {
      id: "aa9",
      categoria: "amorYAmistad",
      nombre: "Mariposa 2 Mechas",
      descripcion: "Vela en forma de mariposa con 2 mechas, decorada con brillo dorado. Disponible en empaque especial. Medidas: 7.5cm altura x 8.5cm ancho x 2.5cm espesor, peso 52gr.",
      imagen: "assets/productos/Amor-y-amistad/9.jpg",
      precios: {
        detal: { bolsa: 6400, caja: 7600 },
        mayorista: { bolsa: 5600, caja: 6900 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 17000 },
        { nombre: "Mediana", precio: 27000 },
        { nombre: "Grande", precio: 37000 }
      ],
      fragancias: ["Lavanda", "Rosa", "Jazmín", "Vainilla"]
    },
    {
      id: "aa10",
      categoria: "amorYAmistad",
      nombre: "Poli Mediano Mano Corazón",
      descripcion: "Frasco de vidrio con vela blanca y vela decorativa en forma de mano haciendo corazón. Incluye mensaje 'Feliz Amor y Amistad'. Disponible en empaque especial. Medidas: 7.5cm altura x 5cm ancho, peso 56gr.",
      imagen: "assets/productos/Amor-y-amistad/10.jpg",
      precios: {
        detal: { bolsa: 7000, caja: 8000 },
        mayorista: { bolsa: 6500, caja: 7400 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 15000 },
        { nombre: "Mediana", precio: 25000 },
        { nombre: "Grande", precio: 35000 }
      ],
      fragancias: ["Rosa", "Vainilla", "Fresas", "Chocolate"]
    },
    {
      id: "aa11",
      categoria: "amorYAmistad",
      nombre: "Corazón Rosas",
      descripcion: "Corazones decorados con rosas, disponibles en colores blanco y rosa. Incluyen etiqueta 'Feliz Día!'. Medidas: 2.8cm altura x 5.6cm ancho, peso 24gr.",
      imagen: "assets/productos/Amor-y-amistad/11.jpg",
      precios: {
        detal: { bolsa: 3400, caja: 4300 },
        mayorista: { bolsa: 3000, caja: 3900 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 18000 },
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 38000 }
      ],
      fragancias: ["Citrus", "Rosa", "Vainilla", "Bergamota"]
    },
    {
      id: "aa12",
      categoria: "amorYAmistad",
      nombre: "Oso Moño",
      descripcion: "Osos decorativos con moño y corazón. Disponibles en colores blanco y rosa. Incluyen moño o corazón decorativo. Medidas: 6.3cm altura x 4.5cm ancho, peso 52gr.",
      imagen: "assets/productos/Amor-y-amistad/12.jpg",
      precios: {
        detal: { bolsa: 4000, caja: 5500 },
        mayorista: { bolsa: 4500, caja: 6000 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 16000 },
        { nombre: "Mediana", precio: 26000 },
        { nombre: "Grande", precio: 36000 }
      ],
      fragancias: ["Rosa", "Vainilla", "Jazmín", "Miel"]
    },
    {
      id: "aa13",
      categoria: "amorYAmistad",
      nombre: "Copa",
      descripcion: "Copa decorativa con vela blanca y elementos decorativos rojos. Incluye cinta roja en el tallo y mensajes personalizados. Medidas: 17.5cm altura x 7.8cm ancho, peso 120gr.",
      imagen: "assets/productos/Amor-y-amistad/13.jpg",
      precios: {
        detal: {
          bolsa: 18500,
          caja: 0
        },
        mayorista: {
          bolsa: 16000,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 40000 }
      ],
      fragancias: ["Ámbar", "Vainilla", "Rosa Antigua", "Sándalo"]
    },
    {
      id: "aa14",
      categoria: "amorYAmistad",
      nombre: "Poli Corazón Mensaje",
      descripcion: "Corazones decorativos con mensajes personalizados (TE AMO). Disponibles en colores rojo y blanco. Medidas: 3cm altura, peso 55gr.",
      imagen: "assets/productos/Amor-y-amistad/14.jpg",
      precios: {
        detal: { bolsa: 6800, caja: 7900 },
        mayorista: { bolsa: 6500, caja: 7400 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 17000 },
        { nombre: "Mediana", precio: 27000 },
        { nombre: "Grande", precio: 37000 }
      ],
      fragancias: ["Fresas", "Vainilla", "Caramelo", "Chocolate"]
    },
    {
      id: "aa15",
      categoria: "amorYAmistad",
      nombre: "Peonía Grande",
      descripcion: "Vela artesanal en forma de peonía grande. Disponible en múltiples colores (rojo, rosa, azul). Disponible en caja kraft con ventana transparente. Medidas: 7cm altura x 7cm ancho, peso 45gr.",
      imagen: "assets/productos/Amor-y-amistad/15.jpg",
      precios: {
        detal: { bolsa: 4200, caja: 5000 },
        mayorista: { bolsa: 3800, caja: 4500 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 32000 },
        { nombre: "Grande", precio: 42000 },
        { nombre: "Extra Grande", precio: 60000 }
      ],
      fragancias: ["Rosa de Bulgaria", "Sándalo", "Ámbar", "Oud"]
    },
    {
      id: "aa16",
      categoria: "amorYAmistad",
      nombre: "Burbuja Vidrio",
      descripcion: "Velas decorativas en frasco de vidrio transparente con diseños florales y corazones. Disponible en múltiples diseños y colores. Medidas: 7cm altura x 7.8cm ancho, peso 90gr.",
      imagen: "assets/productos/Amor-y-amistad/16.jpg",
      precios: {
        detal: {
          bolsa: 10800,
          caja: 0
        },
        mayorista: {
          bolsa: 9600,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 40000 },
        { nombre: "Extra Grande", precio: 55000 }
      ],
      fragancias: ["Rosa", "Vainilla", "Jazmín", "Lavanda"]
    },
    {
      id: "aa17",
      categoria: "amorYAmistad",
      nombre: "Poli Mediano Rosa",
      descripcion: "Vela de dos niveles con rosa morada en la parte superior y base rosa y blanca. Incluye mensaje 'Feliz Día' en escritura dorada. Disponible en bolsa y caja transparente. Medidas: 6cm altura x 5cm ancho, peso 56gr.",
      imagen: "assets/productos/Amor-y-amistad/17.jpg",
      precios: {
        detal: { bolsa: 7000, caja: 8000 },
        mayorista: { bolsa: 6500, caja: 7400 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 16000 },
        { nombre: "Mediana", precio: 26000 },
        { nombre: "Grande", precio: 36000 }
      ],
      fragancias: ["Lavanda", "Rosa", "Vainilla", "Jazmín"]
    },
    {
      id: "aa18",
      categoria: "amorYAmistad",
      nombre: "Vela Corazón Personalizada",
      descripcion: "Velas en forma de corazón personalizadas con letras para formar nombres o mensajes. Disponibles en múltiples colores. Medidas: 9.5cm altura x 2.5cm ancho, peso 30gr.",
      imagen: "assets/productos/Amor-y-amistad/18.jpg",
      precios: {
        detal: {
          bolsa: 3600,
          caja: 0
        },
        mayorista: {
          bolsa: 3100,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 38000 }
      ],
      fragancias: ["Rosa", "Sándalo", "Vainilla", "Jazmín"]
    },
    {
      id: "aa19",
      categoria: "amorYAmistad",
      nombre: "Corazón Rosa",
      descripcion: "Vela en forma de corazón con textura de rosa en tonos rosados. Disponible en bolsa y caja transparente. Medidas: 3.5cm altura x 5.8cm ancho, peso 36gr.",
      imagen: "assets/productos/Amor-y-amistad/19.jpg",
      precios: {
        detal: { bolsa: 3100, caja: 4100 },
        mayorista: { bolsa: 2800, caja: 3900 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Ámbar", "Rosa", "Incienso", "Vainilla"]
    },
    {
      id: "aa20",
      categoria: "amorYAmistad",
      nombre: "Vidrio Corcho Estrellas y Corazones",
      descripcion: "Velas decorativas en frasco de vidrio con tapa de corcho. Disponibles con estrellas y corazones de colores. Incluye cordel decorativo. Medidas: 3.5cm altura x 5.8cm ancho, peso 36gr.",
      imagen: "assets/productos/Amor-y-amistad/20.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 8500
        },
        mayorista: {
          bolsa: 0,
          caja: 7900
        }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 15000 },
        { nombre: "Mediana", precio: 25000 },
        { nombre: "Grande", precio: 35000 }
      ],
      fragancias: ["Rosa", "Vainilla", "Lavanda", "Canela"]
    },
    {
      id: "aa21",
      categoria: "amorYAmistad",
      nombre: "Rosa Mini",
      descripcion: "Vela en forma de rosa pequeña. Disponible en múltiples colores (rosa, teal, blanco con dorado). Disponible en bolsa y caja. Medidas: 3cm altura x 4cm ancho, peso 18gr.",
      imagen: "assets/productos/Amor-y-amistad/21.jpg",
      precios: {
        detal: { bolsa: 2500, caja: 3000 },
        mayorista: { bolsa: 2000, caja: 2500 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 18000 },
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 38000 }
      ],
      fragancias: ["Bergamota", "Rosa", "Vainilla", "Citrus"]
    },
    {
      id: "aa22",
      categoria: "amorYAmistad",
      nombre: "Ramo Personalizado",
      descripcion: "Velas personalizadas en forma de oso o flor dentro de taza blanca con texto personalizado. Ideal para regalos. Disponible en caja. Medidas: 12cm altura x 7cm ancho, peso 95gr.",
      imagen: "assets/productos/Amor-y-amistad/22.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 11900
        },
        mayorista: {
          bolsa: 0,
          caja: 9600
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 40000 },
        { nombre: "Extra Grande", precio: 55000 }
      ],
      fragancias: ["Rosa Premium", "Sándalo", "Ámbar", "Oud"]
    },
    {
      id: "aa23",
      categoria: "amorYAmistad",
      nombre: "Margarita",
      descripcion: "Vela en forma de margarita (daisy). Disponible en múltiples colores (rosa, fucsia, morado). Disponible en bolsa y caja. Medidas: 5cm altura x 5cm ancho, peso 16gr.",
      imagen: "assets/productos/Amor-y-amistad/23.jpg",
      precios: {
        detal: { bolsa: 2500, caja: 3200 },
        mayorista: { bolsa: 2300, caja: 2800 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 32000 },
        { nombre: "Grande", precio: 45000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Oud", "Rosa de Bulgaria", "Ámbar", "Sándalo Exótico"]
    }
  ],
  celebracion: [
    {
      id: "bs1",
      categoria: "celebracion",
      nombre: "LEONCITO",
      descripcion: "Vela en forma de león pequeño. Disponible en múltiples colores (rosa, naranja, azul). Disponible en bolsa y caja kraft. Medidas: 6cm altura x 5cm ancho x 2.5cm espesor, peso 25gr.",
      imagen: "assets/productos/Baby-Shower/1.jpg",
      precios: {
        detal: { bolsa: 3500, caja: 5000 },
        mayorista: { bolsa: 3100, caja: 4700 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 18000 },
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 42000 }
      ],
      fragancias: ["Vainilla", "Lavanda", "Algodón", "Bebé"]
    },
    {
      id: "bs2",
      categoria: "celebracion",
      nombre: "LEONCITO POLI PEQUEÑO",
      descripcion: "Vela en forma de león pequeño con personalización de nombre. Disponible en múltiples colores (rosa, fucsia). Incluye etiqueta con nombre personalizado. Medidas: 7.5cm altura x 4.5cm ancho, peso 44gr.",
      imagen: "assets/productos/Baby-Shower/1.jpg",
      precios: {
        detal: { bolsa: 5500, caja: 6500 },
        mayorista: { bolsa: 5000, caja: 6000 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 32000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Lavanda", "Vainilla", "Bebé"]
    },
    {
      id: "bs3",
      categoria: "celebracion",
      nombre: "LEONCITO POLI MEDIANO",
      descripcion: "Vela en forma de león mediano con personalización de nombre. Disponible en múltiples colores (rosa, blanco). Incluye etiqueta con nombre personalizado. Medidas: 8.7cm altura x 5cm ancho, peso 60gr.",
      imagen: "assets/productos/Baby-Shower/1.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7000 },
        mayorista: { bolsa: 5700, caja: 6400 }
      },
      tamanos: [
        { nombre: "Pequeña", precio: 20000 },
        { nombre: "Mediana", precio: 35000 },
        { nombre: "Grande", precio: 48000 }
      ],
      fragancias: ["Vainilla", "Lavanda", "Algodón", "Fresas"]
    },
    {
      id: "bs4",
      categoria: "celebracion",
      nombre: "LEONCITO NUBE",
      descripcion: "Vela en forma de león sobre base de nube. Disponible en color azul. Disponible en bolsa y caja. Incluye base decorativa tipo nube. Medidas: 6.5cm altura x 4.5cm ancho, peso 30gr.",
      imagen: "assets/productos/Baby-Shower/2.jpg",
      precios: {
        detal: { bolsa: 3500, caja: 5000 },
        mayorista: { bolsa: 3000, caja: 4300 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs5",
      categoria: "celebracion",
      nombre: "LEONCITO VIDRIO TAPA CORCHO",
      descripcion: "Vela en forma de león dentro de frasco de vidrio con tapa de corcho. Incluye etiqueta con nombre personalizado. Presentación única en frasco de vidrio. Medidas: 8cm altura x 5.5cm ancho, peso 60gr.",
      imagen: "assets/productos/Baby-Shower/2.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 8500
        },
        mayorista: {
          bolsa: 0,
          caja: 7900
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs9",
      categoria: "celebracion",
      nombre: "JIRAFA",
      descripcion: "Vela en forma de jirafa con manchas características. Disponible en color amarillo con manchas negras. Disponible en bolsa y caja kraft con ventana. Medidas: 10cm altura x 4cm ancho x 2cm espesor, peso 30gr.",
      imagen: "assets/productos/Baby-Shower/2.jpg",
      precios: {
        detal: { bolsa: 4000, caja: 5500 },
        mayorista: { bolsa: 3500, caja: 4700 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs6",
      categoria: "celebracion",
      nombre: "JIRAFA POLI",
      descripcion: "Vela en forma de jirafa con personalización de nombre. Disponible en color rosa con manchas negras. Incluye moño y etiqueta con nombre personalizado. Disponible en bolsa y caja. Medidas: 11cm altura x 4.5cm ancho, peso 52gr.",
      imagen: "assets/productos/Baby-Shower/3.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 8000 },
        mayorista: { bolsa: 6000, caja: 7500 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs7",
      categoria: "celebracion",
      nombre: "OSO POLI PEQUEÑO",
      descripcion: "Vela en forma de oso pequeño con personalización de nombre. Disponible en color rosa. Incluye moño y etiqueta con nombre personalizado. Disponible en bolsa y caja. Medidas: 6cm altura x 4.5cm ancho, peso 40gr.",
      imagen: "assets/productos/Baby-Shower/3.jpg",
      precios: {
        detal: { bolsa: 6000, caja: 7500 },
        mayorista: { bolsa: 5400, caja: 6800 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs8",
      categoria: "celebracion",
      nombre: "ELEFANTE Y ELEFANTA POLI PEQUEÑO",
      descripcion: "Vela en forma de elefante pequeño con personalización. Disponible en múltiples colores (azul, rosa). Incluye etiqueta con nombre personalizado. Disponible en bolsa y caja. Medidas: 4.5cm altura x 4.5cm ancho, peso 26gr.",
      imagen: "assets/productos/Baby-Shower/3.jpg",
      precios: {
        detal: { bolsa: 5000, caja: 6000 },
        mayorista: { bolsa: 4500, caja: 5500 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs12",
      categoria: "celebracion",
      nombre: "COMPOTA 00",
      descripcion: "Compota en frasco de vidrio con tapa verde. Disponible en múltiples sabores. Presentación individual. Ideal como detalle para baby shower. Medidas: 4.2cm altura x 4.3cm ancho, peso 25gr.",
      imagen: "assets/productos/Baby-Shower/4.jpg",
      precios: {
        detal: {
          bolsa: 5500,
          caja: 0
        },
        mayorista: {
          bolsa: 5000,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs10",
      categoria: "celebracion",
      nombre: "PIESITOS POLI PEQUEÑOS",
      descripcion: "Vela decorativa con huellas de bebé. Disponible en color blanco con huellas azules. Presentación en bolsa. Ideal como detalle para baby shower. Medidas: 2cm altura x 4cm ancho, peso 22gr.",
      imagen: "assets/productos/Baby-Shower/4.jpg",
      precios: {
        detal: {
          bolsa: 3500,
          caja: 0
        },
        mayorista: {
          bolsa: 3100,
          caja: 0
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    },
    {
      id: "bs11",
      categoria: "celebracion",
      nombre: "PIESITOS HOJALATA",
      descripcion: "Vela decorativa con huellas de bebé en lata. Disponible en lata con vela blanca y huellas rosadas. Presentación en lata. Ideal como detalle para baby shower. Medidas: 2cm altura x 5cm ancho, peso 18gr.",
      imagen: "assets/productos/Baby-Shower/4.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 3300
        },
        mayorista: {
          bolsa: 0,
          caja: 2900
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Algodón", "Vainilla", "Bebé", "Lavanda"]
    }
  ],
  primeraComunion: [
    {
      id: "pc1",
      categoria: "primeraComunion",
      nombre: "POLI MEDIANO ESTRELLAS",
      descripcion: "Vela personalizada mediana con decoración de estrellas. Incluye nombre personalizado en script dorado y decoración con estrellas rosadas y flores secas. Disponible en bolsa y caja. Medidas: 4cm altura x 5cm ancho, peso 54gr.",
      imagen: "assets/productos/Primera-Comunion/1.jpg",
      precios: {
        detal: { bolsa: 5600, caja: 7500 },
        mayorista: { bolsa: 5100, caja: 6300 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 40000 },
        { nombre: "Extra Grande", precio: 55000 }
      ],
      fragancias: ["Incienso", "Rosa", "Vainilla", "Sándalo"]
    },
    {
      id: "pc2",
      categoria: "primeraComunion",
      nombre: "CRUZ NIÑO Y NIÑA",
      descripcion: "Vela en forma de cruz con figura de niño o niña arrodillada. Disponible en color blanco con figura azul (niño) o rosa (niña). Disponible en bolsa y caja. Medidas: 10cm altura x 7cm ancho x 2cm espesor, peso 48gr.",
      imagen: "assets/productos/Primera-Comunion/2.jpg",
      precios: {
        detal: { bolsa: 6000, caja: 7500 },
        mayorista: { bolsa: 5200, caja: 6500 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 42000 }
      ],
      fragancias: ["Incienso", "Vainilla", "Rosa", "Jazmín"]
    },
    {
      id: "pc3",
      categoria: "primeraComunion",
      nombre: "ENVASE CORCHO ESTRELLAS",
      descripcion: "Vela decorativa con estrellas en frasco de vidrio con tapa de corcho. Incluye mensaje 'Mi primera comunión' y cinta decorativa. Presentación única en frasco de vidrio. Medidas: 7cm altura x 6cm ancho, peso 74gr.",
      imagen: "assets/productos/Primera-Comunion/2.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 8500
        },
        mayorista: {
          bolsa: 0,
          caja: 7700
        }
      },
      tamanos: [
        { nombre: "Mediana", precio: 32000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Sándalo", "Incienso", "Rosa", "Vainilla"]
    },
    {
      id: "pc4",
      categoria: "primeraComunion",
      nombre: "MARIPOSA",
      descripcion: "Vela en forma de mariposa decorativa. Disponible en color blanco con brillo. Disponible en bolsa y caja. Medidas: 7.5cm altura x 8.5cm ancho x 2.5cm espesor, peso 52gr.",
      imagen: "assets/productos/Primera-Comunion/2.jpg",
      precios: {
        detal: { bolsa: 6400, caja: 7600 },
        mayorista: { bolsa: 5600, caja: 6900 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Incienso", "Sándalo", "Ámbar", "Rosa"]
    },
    {
      id: "pc5",
      categoria: "primeraComunion",
      nombre: "CRUZ PALOMA",
      descripcion: "Vela en forma de cruz decorada con paloma azul. Disponible en color blanco con paloma azul decorativa y cordón dorado. Disponible en bolsa y caja kraft con ventana. Medidas: 8.5cm altura x 6cm ancho x 2.5cm espesor, peso 54gr.",
      imagen: "assets/productos/Primera-Comunion/3.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7500 },
        mayorista: { bolsa: 5800, caja: 7000 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 42000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Rosa", "Jazmín"]
    },
    {
      id: "pc6",
      categoria: "primeraComunion",
      nombre: "CALIZ",
      descripcion: "Vela en forma de cáliz de comunión decorada con detalles dorados. Disponible en color blanco con cruces y líneas doradas. Disponible en bolsa y caja. Medidas: 9.5cm altura x 5.5cm ancho x 2cm espesor, peso 48gr.",
      imagen: "assets/productos/Primera-Comunion/4.jpg",
      precios: {
        detal: { bolsa: 7000, caja: 8500 },
        mayorista: { bolsa: 6500, caja: 7900 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 40000 }
      ],
      fragancias: ["Incienso", "Sándalo", "Rosa", "Vainilla"]
    },
    {
      id: "pc7",
      categoria: "primeraComunion",
      nombre: "BURBUJA MINI",
      descripcion: "Vela esférica pequeña decorada con cinta y flores secas. Disponible en tonos blanco y rosa. Presentación en domo transparente con base dorada. Medidas: 3.7cm altura x 4cm ancho, peso 38gr.",
      imagen: "assets/productos/Primera-Comunion/4.jpg",
      precios: {
        detal: { bolsa: 4500, caja: 5900 },
        mayorista: { bolsa: 4200, caja: 5200 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 32000 },
        { nombre: "Grande", precio: 45000 }
      ],
      fragancias: ["Ámbar", "Incienso", "Sándalo", "Rosa"]
    },
    {
      id: "pc8",
      categoria: "primeraComunion",
      nombre: "OSO MOÑO",
      descripcion: "Vela en forma de oso con moño decorativo. Disponible en colores azul oscuro y azul claro. Disponible en bolsa y caja. Medidas: 6.3cm altura x 4.5cm ancho, peso 52gr.",
      imagen: "assets/productos/Primera-Comunion/4.jpg",
      precios: {
        detal: { bolsa: 4500, caja: 6000 },
        mayorista: { bolsa: 4000, caja: 5500 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Incienso", "Vainilla", "Sándalo", "Ámbar"]
    },
    {
      id: "pc9",
      categoria: "primeraComunion",
      nombre: "VIRGEN GUADALUPE CORAZÓN MEDIANA",
      descripcion: "Vela en forma de corazón con la imagen de la Virgen de Guadalupe. Disponible en colores rosa y verde menta. Disponible en bolsa y caja kraft con ventana. Medidas: 8cm altura x 5cm ancho x 2.5cm espesor, peso 38gr.",
      imagen: "assets/productos/Primera-Comunion/5.jpg",
      precios: {
        detal: { bolsa: 5000, caja: 6500 },
        mayorista: { bolsa: 4500, caja: 5900 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 30000 },
        { nombre: "Grande", precio: 42000 }
      ],
      fragancias: ["Vainilla", "Rosa", "Jazmín", "Incienso"]
    },
    {
      id: "pc10",
      categoria: "primeraComunion",
      nombre: "VIRGEN GUADALUPE CORAZÓN PEQUEÑO",
      descripcion: "Vela pequeña en forma de corazón con la imagen de la Virgen de Guadalupe. Disponible en color azul. Disponible en bolsa y caja. Medidas: 6cm altura x 4cm ancho x 2cm espesor, peso 32gr.",
      imagen: "assets/productos/Primera-Comunion/5.jpg",
      precios: {
        detal: { bolsa: 4300, caja: 5300 },
        mayorista: { bolsa: 3900, caja: 4900 }
      },
      tamanos: [
        { nombre: "Mediana", precio: 28000 },
        { nombre: "Grande", precio: 40000 }
      ],
      fragancias: ["Vainilla", "Rosa", "Jazmín", "Incienso"]
    },
    {
      id: "pc11",
      categoria: "primeraComunion",
      nombre: "ANGEL CORONA NIÑO NIÑA",
      descripcion: "Vela en forma de ángel con corona, personalizable con nombre. Disponible en color azul. Disponible en bolsa y caja. Medidas: 10cm altura x 6cm ancho, peso 58gr.",
      imagen: "assets/productos/Primera-Comunion/5.jpg",
      precios: {
        detal: { bolsa: 6200, caja: 7200 },
        mayorista: { bolsa: 5800, caja: 6900 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    },
    {
      id: "pc12",
      categoria: "primeraComunion",
      nombre: "COMPOTA 1",
      descripcion: "Compota en frasco de vidrio con tapa dorada. Disponible en múltiples sabores. Presentación individual. Ideal como detalle para primera comunión. Medidas: 5.1cm altura x 5.9cm ancho, peso 100gr.",
      imagen: "assets/productos/Primera-Comunion/6.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 7500
        },
        mayorista: {
          bolsa: 0,
          caja: 6900
        }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    },
    {
      id: "pc13",
      categoria: "primeraComunion",
      nombre: "COMPOTA 00",
      descripcion: "Compota pequeña en frasco redondo con tapa dorada-rosa. Disponible en múltiples sabores. Presentación individual. Ideal como detalle para primera comunión. Medidas: 4.2cm altura x 4.3cm ancho, peso 25gr.",
      imagen: "assets/productos/Primera-Comunion/6.jpg",
      precios: {
        detal: {
          bolsa: 0,
          caja: 6500
        },
        mayorista: {
          bolsa: 0,
          caja: 6000
        }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    },
    {
      id: "pc14",
      categoria: "primeraComunion",
      nombre: "ANGEL CORONA NIÑO NIÑA",
      descripcion: "Vela en forma de ángel con corona, disponible en colores azul (niño) y rosa (niña). Disponible en bolsa y caja. Medidas: 7.5cm altura x 4.5cm ancho, peso 42gr.",
      imagen: "assets/productos/Primera-Comunion/6.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 8500 },
        mayorista: { bolsa: 5800, caja: 7400 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    },
    {
      id: "pc15",
      categoria: "primeraComunion",
      nombre: "ANGELITO Y ANGELITA PEQUEÑO POLI",
      descripcion: "Velas pequeñas en forma de ángel y angelita con personalización de nombre. Disponibles en colores azul (niño) y rosa (niña). Disponible en bolsa y caja. Medidas: 8cm altura x 4.5cm ancho, peso 35gr.",
      imagen: "assets/productos/Primera-Comunion/7.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 8300 },
        mayorista: { bolsa: 6000, caja: 7500 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    },
    {
      id: "pc16",
      categoria: "primeraComunion",
      nombre: "ROSA MINI",
      descripcion: "Vela pequeña en forma de rosa. Disponible en múltiples colores (rosa, fucsia, morado). Disponible en bolsa y caja. Medidas: 3cm altura x 4cm ancho, peso 18gr.",
      imagen: "assets/productos/Primera-Comunion/8.jpg",
      precios: {
        detal: { bolsa: 2500, caja: 3900 },
        mayorista: { bolsa: 2000, caja: 3300 }
      },
      tamanos: [
        { nombre: "Grande", precio: 48000 },
        { nombre: "Extra Grande", precio: 65000 }
      ],
      fragancias: ["Vainilla", "Incienso", "Jazmín", "Sándalo"]
    }
  ],
  navidad: [
    {
      id: "nad1",
      categoria: "navidad",
      nombre: "Vela Papá Noel",
      descripcion: "Vela Papá Noel.",
      imagen: "assets/productos/Navidad-2026/vela-papa-noel.jpg",
      precios: {
        detal: { bolsa: 12500, caja: 14500 },
        mayorista: { bolsa: 11000, caja: 12500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "3.2 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 12500 },
            { nombre: "Empaque cajita", detalle: null, precio: 14500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 11000 },
          { nombre: "Empaque cajita", detalle: null, precio: 12500 }
        ]
        }
      }
    },
    {
      id: "nad3",
      categoria: "navidad",
      nombre: "Vela Degradé Larga Marcada",
      descripcion: "Vela Degradé Larga Marcada.",
      imagen: "assets/productos/Navidad-2026/vela-degrade-larga.jpg",
      precios: {
        detal: { bolsa: 17500, caja: 18500 },
        mayorista: { bolsa: 14500, caja: 15900 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "17 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 17500 },
            { nombre: "Empaque cajita", detalle: null, precio: 18500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 14500 },
          { nombre: "Empaque cajita", detalle: null, precio: 15900 }
        ]
        }
      }
    },
    {
      id: "nad4",
      categoria: "navidad",
      nombre: "Vela Marcada",
      descripcion: "Vela Marcada.",
      imagen: "assets/productos/Navidad-2026/vela-marcada.jpg",
      precios: {
        detal: { bolsa: 10500, caja: 12500 },
        mayorista: { bolsa: 10500, caja: 12000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Grande", valor: "17 cm de alto · 1.5 cm de diámetro" }, { etiqueta: "Pequeña", valor: "14 cm de alto · 1.5 cm de diámetro" }],
        precios: {
          detal: [
            { nombre: "Grande, bolsita", detalle: null, precio: 10800 },
            { nombre: "Pequeña, bolsita", detalle: null, precio: 10500 },
            { nombre: "Grande, cajita", detalle: null, precio: 12500 },
            { nombre: "Pequeña, cajita", detalle: null, precio: 11500 }
          ],
          mayorista: [
          { nombre: "Grande, bolsita", detalle: null, precio: 10500 },
          { nombre: "Pequeña, bolsita", detalle: null, precio: 11000 },
          { nombre: "Grande, cajita", detalle: null, precio: 11500 },
          { nombre: "Pequeña, cajita", detalle: null, precio: 12000 }
        ]
        },
        nota: "Los precios son los del catálogo: en esta referencia la pequeña cuesta más que la grande."
      }
    },
    {
      id: "nad28",
      categoria: "navidad",
      nombre: "Vela Degradé Pequeña",
      descripcion: "Vela Degradé Pequeña.",
      imagen: "assets/productos/Navidad-2026/vela-degrade-pequena.jpg",
      precios: {
        detal: { bolsa: 15500, caja: 17000 },
        mayorista: { bolsa: 13000, caja: 14500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 15500 },
            { nombre: "Empaque cajita", detalle: null, precio: 17000 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 13000 },
          { nombre: "Empaque cajita", detalle: null, precio: 14500 }
        ]
        }
      }
    },
    {
      id: "nad5",
      categoria: "navidad",
      nombre: "Vela Mirella",
      descripcion: "Vela Mirella.",
      imagen: "assets/productos/Navidad-2026/vela-mirella.jpg",
      precios: {
        detal: { bolsa: 16900, caja: 17500 },
        mayorista: { bolsa: 14500, caja: 15800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 16900 },
            { nombre: "Empaque cajita", detalle: null, precio: 17500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 14500 },
          { nombre: "Empaque cajita", detalle: null, precio: 15800 }
        ]
        }
      }
    },
    {
      id: "nad29",
      categoria: "navidad",
      nombre: "Kit 12 Deseos Estrellas",
      descripcion: "Kit 12 Deseos Estrellas.",
      imagen: "assets/productos/Navidad-2026/kit-12-deseos.jpg",
      precios: {
        detal: { bolsa: 13500, caja: 13500 },
        mayorista: { bolsa: 11000, caja: 11000 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Empaque cajita", detalle: null, precio: 13500 }
          ],
          mayorista: [
          { nombre: "Empaque cajita", detalle: null, precio: 11000 }
        ]
        }
      }
    },
    {
      id: "nad6",
      categoria: "navidad",
      nombre: "Vela Blanca Larga Marcada",
      descripcion: "Vela Blanca Larga Marcada.",
      imagen: "assets/productos/Navidad-2026/vela-blanca-larga.jpg",
      precios: {
        detal: { bolsa: 10800, caja: 10800 },
        mayorista: { bolsa: 9800, caja: 9800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "17 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 10800 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 9800 }
        ]
        }
      }
    },
    {
      id: "nad7",
      categoria: "navidad",
      nombre: "Vela Dorada",
      descripcion: "Vela Dorada.",
      imagen: "assets/productos/Navidad-2026/vela-dorada.jpg",
      precios: {
        detal: { bolsa: 16900, caja: 17500 },
        mayorista: { bolsa: 14500, caja: 15800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 16900 },
            { nombre: "Empaque cajita", detalle: null, precio: 17500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 14500 },
          { nombre: "Empaque cajita", detalle: null, precio: 15800 }
        ]
        }
      }
    },
    {
      id: "nad8",
      categoria: "navidad",
      nombre: "Vela Navidad",
      descripcion: "Vela Navidad.",
      imagen: "assets/productos/Navidad-2026/vela-navidad.jpg",
      precios: {
        detal: { bolsa: 18500, caja: 19000 },
        mayorista: { bolsa: 14800, caja: 15800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "15 cm" }, { etiqueta: "Diámetro", valor: "3 cm" }, { etiqueta: "Espesor", valor: "1.7 cm" }],
        empaque: "6 unidades",
        precios: {
          detal: [
            { nombre: "Bolsa de tul x6", detalle: null, precio: 18500 },
            { nombre: "Caja x6", detalle: null, precio: 19000 }
          ],
          mayorista: [
          { nombre: "Bolsa de tul x6", detalle: null, precio: 14800 },
          { nombre: "Caja x6", detalle: null, precio: 15800 }
        ]
        }
      }
    },
    {
      id: "nad9",
      categoria: "navidad",
      nombre: "Caja Vela Propósito x6 Unidades",
      descripcion: "Caja Vela Propósito x6 Unidades.",
      imagen: "assets/productos/Navidad-2026/caja-proposito-x6.jpg",
      precios: {
        detal: { bolsa: 18500, caja: 19000 },
        mayorista: { bolsa: 15500, caja: 16800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "3.5 cm" }, { etiqueta: "Espesor", valor: "1.8 cm" }],
        empaque: "6 unidades",
        precios: {
          detal: [
            { nombre: "Bolsa de tul x6", detalle: null, precio: 18500 },
            { nombre: "Caja x6", detalle: null, precio: 19000 }
          ],
          mayorista: [
          { nombre: "Bolsa de tul x6", detalle: null, precio: 15500 },
          { nombre: "Caja x6", detalle: null, precio: 16800 }
        ]
        }
      }
    },
    {
      id: "nad10",
      categoria: "navidad",
      nombre: "Vela Propósito Individual",
      descripcion: "Vela Propósito Individual.",
      imagen: "assets/productos/Navidad-2026/vela-proposito.jpg",
      precios: {
        detal: { bolsa: 3400, caja: 3400 },
        mayorista: { bolsa: 3300, caja: 3300 }
      },
      ficha: {
        empaque: "Unidad suelta",
        precios: {
          detal: [
            { nombre: "Precio por unidad", detalle: null, precio: 3400 }
          ],
          mayorista: [
          { nombre: "Precio por unidad", detalle: null, precio: 3300 }
        ]
        }
      }
    },
    {
      id: "nad12",
      categoria: "navidad",
      nombre: "Árbol Navidad",
      descripcion: "Árbol Navidad.",
      imagen: "assets/productos/Navidad-2026/arbol-navidad.jpg",
      precios: {
        detal: { bolsa: 9700, caja: 11500 },
        mayorista: { bolsa: 8000, caja: 10500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "12 cm" }, { etiqueta: "Diámetro", valor: "7.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 9700 },
            { nombre: "Empaque cajita", detalle: null, precio: 11500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 8000 },
          { nombre: "Empaque cajita", detalle: null, precio: 10500 }
        ]
        }
      }
    },
    {
      id: "nad13",
      categoria: "navidad",
      nombre: "Árbol Navidad Pino Pequeño",
      descripcion: "Árbol Navidad Pino Pequeño.",
      imagen: "assets/productos/Navidad-2026/pino-pequeno.jpg",
      precios: {
        detal: { bolsa: 5600, caja: 6500 },
        mayorista: { bolsa: 4500, caja: 6000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "8 cm" }, { etiqueta: "Diámetro", valor: "8 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 5600 },
            { nombre: "Empaque cajita", detalle: null, precio: 6500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 4500 },
          { nombre: "Empaque cajita", detalle: null, precio: 6000 }
        ]
        }
      }
    },
    {
      id: "nad14",
      categoria: "navidad",
      nombre: "Árbol Navidad Pino Grande",
      descripcion: "Árbol Navidad Pino Grande.",
      imagen: "assets/productos/Navidad-2026/pino-grande.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 8500 },
        mayorista: { bolsa: 6500, caja: 8000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "10 cm" }, { etiqueta: "Diámetro", valor: "8 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
            { nombre: "Empaque cajita", detalle: null, precio: 8500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
          { nombre: "Empaque cajita", detalle: null, precio: 8000 }
        ]
        }
      }
    },
    {
      id: "nad30",
      categoria: "navidad",
      nombre: "Vela Huella y Cara de Perro y Gato",
      descripcion: "Vela Huella y Cara de Perro y Gato.",
      imagen: "assets/productos/Navidad-2026/vela-huella-mascota.jpg",
      precios: {
        detal: { bolsa: 4000, caja: 4000 },
        mayorista: { bolsa: 3500, caja: 3500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "11.5 cm" }, { etiqueta: "Diámetro", valor: "3.5 cm" }, { etiqueta: "Espesor", valor: "1.5 cm" }],
        precios: {
          detal: [
            { nombre: "Bolsita por unidad", detalle: null, precio: 4000 }
          ],
          mayorista: [
          { nombre: "Bolsita por unidad", detalle: null, precio: 3500 }
        ]
        }
      }
    },
    {
      id: "nad31",
      categoria: "navidad",
      nombre: "Pesebre Arbolito Ángel",
      descripcion: "Pesebre Arbolito Ángel.",
      imagen: "assets/productos/Navidad-2026/pesebre-arbolito-angel.jpg",
      precios: {
        detal: { bolsa: 7500, caja: 8900 },
        mayorista: { bolsa: 6800, caja: 7500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "8 cm" }, { etiqueta: "Ancho", valor: "8 cm" }, { etiqueta: "Espesor", valor: "13 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 7500 },
            { nombre: "Empaque cajita", detalle: null, precio: 8900 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 6800 },
          { nombre: "Empaque cajita", detalle: null, precio: 7500 }
        ]
        }
      }
    },
    {
      id: "nad15",
      categoria: "navidad",
      nombre: "Pesebre Estrella Arco",
      descripcion: "Pesebre Estrella Arco.",
      imagen: "assets/productos/Navidad-2026/pesebre-estrella-arco.jpg",
      precios: {
        detal: { bolsa: 7500, caja: 8900 },
        mayorista: { bolsa: 6100, caja: 7900 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "10 cm" }, { etiqueta: "Diámetro", valor: "9 cm" }, { etiqueta: "Espesor", valor: "3 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 7500 },
            { nombre: "Empaque cajita", detalle: null, precio: 8900 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 6100 },
          { nombre: "Empaque cajita", detalle: null, precio: 7900 }
        ]
        }
      }
    },
    {
      id: "nad16",
      categoria: "navidad",
      nombre: "Pesebre Estrella Navidad",
      descripcion: "Pesebre Estrella Navidad.",
      imagen: "assets/productos/Navidad-2026/pesebre-estrella.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7900 },
        mayorista: { bolsa: 5500, caja: 7200 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "9 cm" }, { etiqueta: "Diámetro", valor: "9 cm" }, { etiqueta: "Espesor", valor: "3.5 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
            { nombre: "Empaque cajita", detalle: null, precio: 7900 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 5500 },
          { nombre: "Empaque cajita", detalle: null, precio: 7200 }
        ]
        }
      }
    },
    {
      id: "nad17",
      categoria: "navidad",
      nombre: "Pesebre Árbol Navidad",
      descripcion: "Pesebre Árbol Navidad.",
      imagen: "assets/productos/Navidad-2026/pesebre-arbol.jpg",
      precios: {
        detal: { bolsa: 6900, caja: 8400 },
        mayorista: { bolsa: 6500, caja: 7900 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "10 cm" }, { etiqueta: "Diámetro", valor: "7.5 cm" }, { etiqueta: "Espesor", valor: "3 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6900 },
            { nombre: "Empaque cajita", detalle: null, precio: 8400 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
          { nombre: "Empaque cajita", detalle: null, precio: 7900 }
        ]
        }
      }
    },
    {
      id: "nad18",
      categoria: "navidad",
      nombre: "Pesebre Casa Navidad",
      descripcion: "Pesebre Casa Navidad.",
      imagen: "assets/productos/Navidad-2026/pesebre-casa.jpg",
      precios: {
        detal: { bolsa: 7500, caja: 9500 },
        mayorista: { bolsa: 6800, caja: 8800 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "10 cm" }, { etiqueta: "Diámetro", valor: "8.5 cm" }, { etiqueta: "Espesor", valor: "3 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 7500 },
            { nombre: "Empaque cajita", detalle: null, precio: 9500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 6800 },
          { nombre: "Empaque cajita", detalle: null, precio: 8800 }
        ]
        }
      }
    },
    {
      id: "nad19",
      categoria: "navidad",
      nombre: "Pesebre Choza",
      descripcion: "Pesebre Choza.",
      imagen: "assets/productos/Navidad-2026/pesebre-choza.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7500 },
        mayorista: { bolsa: 5600, caja: 6900 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
            { nombre: "Empaque cajita", detalle: null, precio: 7500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 5600 },
          { nombre: "Empaque cajita", detalle: null, precio: 6900 }
        ]
        }
      }
    },
    {
      id: "nad20",
      categoria: "navidad",
      nombre: "Bola Navidad Pesebre",
      descripcion: "Bola Navidad Pesebre.",
      imagen: "assets/productos/Navidad-2026/bola-pesebre.jpg",
      precios: {
        detal: { bolsa: 9000, caja: 10500 },
        mayorista: { bolsa: 8500, caja: 9900 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "6.5 cm" }, { etiqueta: "Diámetro", valor: "7.2 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 9000 },
            { nombre: "Empaque cajita", detalle: null, precio: 10500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 8500 },
          { nombre: "Empaque cajita", detalle: null, precio: 9900 }
        ]
        }
      }
    },
    {
      id: "nad21",
      categoria: "navidad",
      nombre: "Bola Navidad",
      descripcion: "Bola Navidad.",
      imagen: "assets/productos/Navidad-2026/bola-navidad.jpg",
      precios: {
        detal: { bolsa: 8000, caja: 9700 },
        mayorista: { bolsa: 8000, caja: 9700 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "7.2 cm" }, { etiqueta: "Diámetro", valor: "6.7 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 8000 },
            { nombre: "Empaque cajita", detalle: null, precio: 9700 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 8000 },
          { nombre: "Empaque cajita", detalle: null, precio: 9700 }
        ]
        }
      }
    },
    {
      id: "nad22",
      categoria: "navidad",
      nombre: "Muñeco de Nieve",
      descripcion: "Muñeco de Nieve.",
      imagen: "assets/productos/Navidad-2026/muneco-nieve.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7500 },
        mayorista: { bolsa: 5000, caja: 6500 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
            { nombre: "Empaque cajita", detalle: null, precio: 7500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 5000 },
          { nombre: "Empaque cajita", detalle: null, precio: 6500 }
        ]
        }
      }
    },
    {
      id: "nad23",
      categoria: "navidad",
      nombre: "Ángel Grande y Pequeño",
      descripcion: "Ángel Grande y Pequeño.",
      imagen: "assets/productos/Navidad-2026/angel.jpg",
      precios: {
        detal: { bolsa: 4500, caja: 5500 },
        mayorista: { bolsa: 4000, caja: 4500 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Grande, bolsita", detalle: null, precio: 5500 },
            { nombre: "Pequeño, bolsita", detalle: null, precio: 4500 }
          ],
          mayorista: [
          { nombre: "Grande, bolsita", detalle: null, precio: 4500 },
          { nombre: "Pequeño, bolsita", detalle: null, precio: 4000 }
        ]
        }
      }
    },
    {
      id: "nad24",
      categoria: "navidad",
      nombre: "Pesebre Mini Poli",
      descripcion: "Pesebre Mini Poli.",
      imagen: "assets/productos/Navidad-2026/pesebre-mini-poli.jpg",
      precios: {
        detal: { bolsa: 5500, caja: 6700 },
        mayorista: { bolsa: 4900, caja: 5500 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 5500 },
            { nombre: "Empaque cajita", detalle: null, precio: 6700 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 4900 },
          { nombre: "Empaque cajita", detalle: null, precio: 5500 }
        ]
        }
      }
    },
    {
      id: "nad25",
      categoria: "navidad",
      nombre: "Peonía Grande",
      descripcion: "Peonía Grande.",
      imagen: "assets/productos/Navidad-2026/peonia-grande.jpg",
      precios: {
        detal: { bolsa: 4200, caja: 5000 },
        mayorista: { bolsa: 4000, caja: 5000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "7 cm" }, { etiqueta: "Ancho", valor: "7 cm" }],
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 4200 },
            { nombre: "Empaque cajita", detalle: null, precio: 5000 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 4000 },
          { nombre: "Empaque cajita", detalle: null, precio: 5000 }
        ]
        }
      }
    },
    {
      id: "nad26",
      categoria: "navidad",
      nombre: "Poli Mediano Navidad",
      descripcion: "Poli Mediano Navidad.",
      imagen: "assets/productos/Navidad-2026/poli-mediano.jpg",
      precios: {
        detal: { bolsa: 6500, caja: 7500 },
        mayorista: { bolsa: 5500, caja: 6800 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Empaque bolsita", detalle: null, precio: 6500 },
            { nombre: "Empaque cajita", detalle: null, precio: 7500 }
          ],
          mayorista: [
          { nombre: "Empaque bolsita", detalle: null, precio: 5500 },
          { nombre: "Empaque cajita", detalle: null, precio: 6800 }
        ]
        }
      }
    },
    {
      id: "nad27",
      categoria: "navidad",
      nombre: "Muñeco Año Viejo",
      descripcion: "Muñeco Año Viejo.",
      imagen: "assets/productos/Navidad-2026/muneco-ano-viejo.jpg",
      precios: {
        detal: { bolsa: 16000, caja: 18500 },
        mayorista: { bolsa: 15000, caja: 17500 }
      },
      ficha: {
        precios: {
          detal: [
            { nombre: "Bolsa de tul", detalle: null, precio: 16000 },
            { nombre: "Caja", detalle: null, precio: 18500 }
          ],
          mayorista: [
          { nombre: "Bolsa de tul", detalle: null, precio: 15000 },
          { nombre: "Caja", detalle: null, precio: 17500 }
        ]
        }
      }
    }
  ],
  kitEmprendedor: [
    {
      id: "kit1",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 1",
      descripcion: "Kit Emprendedor 1.",
      imagen: "assets/productos/Kit-Emprendedor/kit01.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 10000, caja: 250000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "15 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        empaque: "Caja x10 unidades",
        lote: "25 cajas",
        colores: [{ nombre: "Blanca", hex: "#F4F1EA" }, { nombre: "Pastel", hex: "#E3AEB4" }, { nombre: "Neón", hex: "#C6F04A" }],
        opciones: [
          { nombre: "Caja completa", detalle: "10 unidades", precio: 250000 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 10000 }
        ]
      }
    },
    {
      id: "kit2",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 2",
      descripcion: "Kit Emprendedor 2.",
      imagen: "assets/productos/Kit-Emprendedor/kit02.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 12500, caja: 312500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "15 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        empaque: "Caja x10 unidades",
        lote: "25 cajas",
        colores: [{ nombre: "Blanca", hex: "#F4F1EA" }, { nombre: "Pastel", hex: "#E3AEB4" }, { nombre: "Neón", hex: "#C6F04A" }],
        opciones: [
          { nombre: "Caja completa", detalle: "10 unidades", precio: 312500 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 12500 }
        ]
      }
    },
    {
      id: "kit3",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 3",
      descripcion: "Kit Emprendedor 3.",
      imagen: "assets/productos/Kit-Emprendedor/kit03.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 13500, caja: 337500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "15 cm" }, { etiqueta: "Diámetro", valor: "1.5 cm" }],
        empaque: "Caja x10 unidades",
        lote: "25 cajas",
        colores: [{ nombre: "Blanca", hex: "#F4F1EA" }, { nombre: "Pastel", hex: "#E3AEB4" }, { nombre: "Neón", hex: "#C6F04A" }],
        opciones: [
          { nombre: "Caja completa", detalle: "10 unidades", precio: 337500 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 13500 }
        ]
      }
    },
    {
      id: "kit4",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 4",
      descripcion: "Kit Emprendedor 4.",
      imagen: "assets/productos/Kit-Emprendedor/kit04.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 6700, caja: 6700 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "Variada" }, { etiqueta: "Color", valor: "Variado" }],
        empaque: "Venta por unidad",
        lote: "Más de 12 unidades",
        colores: [{ nombre: "Verde", hex: "#1E6B3A" }, { nombre: "Azul", hex: "#1F4FA8" }, { nombre: "Rojo", hex: "#B32027" }, { nombre: "Blanco", hex: "#F4F1EA" }, { nombre: "Multicolor", hex: "#C9A961" }],
        opciones: [
          { nombre: "Oferta mayorista por unidad", detalle: null, precio: 6700 }
        ],
        nota: "Producto exclusivo de velas artesanales."
      }
    },
    {
      id: "kit5",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 5 · Vela Árbol Navidad",
      descripcion: "Kit Emprendedor 5 · Vela Árbol Navidad.",
      imagen: "assets/productos/Kit-Emprendedor/kit05.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 19500, caja: 390000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Ancho", valor: "4.5 cm" }],
        empaque: "Caja x6 unidades",
        lote: "20 cajas",
        opciones: [
          { nombre: "Caja completa", detalle: "6 unidades", precio: 390000 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 19500 }
        ]
      }
    },
    {
      id: "kit6",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 6 · Vela Papá Noel 1",
      descripcion: "Kit Emprendedor 6 · Vela Papá Noel 1.",
      imagen: "assets/productos/Kit-Emprendedor/kit06.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 12500, caja: 312500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "16 cm" }, { etiqueta: "Diámetro", valor: "2.0 cm" }],
        empaque: "Bolsa x6 unidades",
        lote: "25 bolsas",
        opciones: [
          { nombre: "Bolsa completa", detalle: "6 unidades", precio: 312500 },
          { nombre: "Unidad suelta", detalle: "dentro de la bolsa", precio: 12500 }
        ]
      }
    },
    {
      id: "kit7",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 6 · Vela Papá Noel 2",
      descripcion: "Kit Emprendedor 6 · Vela Papá Noel 2.",
      imagen: "assets/productos/Kit-Emprendedor/kit07.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 12500, caja: 312500 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "3.0 cm" }],
        empaque: "Bolsa x6 unidades",
        lote: "25 bolsas",
        opciones: [
          { nombre: "Bolsa completa", detalle: "6 unidades", precio: 312500 },
          { nombre: "Unidad suelta", detalle: "dentro de la bolsa", precio: 12500 }
        ]
      }
    },
    {
      id: "kit8",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 7 · Vela Propósito",
      descripcion: "Kit Emprendedor 7 · Vela Propósito.",
      imagen: "assets/productos/Kit-Emprendedor/kit08.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 18100, caja: 362000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "14 cm" }, { etiqueta: "Diámetro", valor: "3.5 cm" }],
        empaque: "Caja x6 unidades",
        lote: "20 cajas",
        opciones: [
          { nombre: "Caja completa", detalle: "6 unidades", precio: 362000 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 18100 }
        ]
      }
    },
    {
      id: "kit9",
      categoria: "kitEmprendedor",
      nombre: "Kit Emprendedor 8 · Vela Navidad",
      descripcion: "Kit Emprendedor 8 · Vela Navidad.",
      imagen: "assets/productos/Kit-Emprendedor/kit09.jpg",
      precios: {
        detal: { bolsa: 0, caja: 0 },
        mayorista: { bolsa: 16800, caja: 336000 }
      },
      ficha: {
        medidas: [{ etiqueta: "Altura", valor: "15 cm" }, { etiqueta: "Diámetro", valor: "3.0 cm" }],
        empaque: "Caja x6 unidades",
        lote: "20 cajas",
        opciones: [
          { nombre: "Caja completa", detalle: "6 unidades", precio: 336000 },
          { nombre: "Unidad suelta", detalle: "dentro de la caja", precio: 16800 }
        ]
      }
    }
  ]
};

// Estado de la aplicación
const state = {
  carrito: [],
  categoriaActual: 'todas',
  busqueda: '',
  currentPromoSlide: 0,
  promoInterval: null,
  
  // Navegación por secciones
  seccionActual: 'inicio' // 'inicio', 'productos', 'personalizadas', 'contacto', 'videos'
};

// Promociones
const promociones = [
  {
    titulo: "Velas Personalizadas",
    subtitulo: "Crea tu diseño único",
    descripcion: "Haz tu vela única con tu nombre, logo o diseño especial. ¡Consulta nuestros precios!",
    imagen: "https://via.placeholder.com/800x400?text=Velas+Personalizadas",
    color: "from-purple-600 via-pink-600 to-purple-700",
    icon: "fas fa-magic",
    iconBg: "from-purple-400 to-pink-500"
  },
  {
    titulo: "Envío GRATIS",
    subtitulo: "En compras superiores a $400 mil",
    descripcion: "Aprovecha esta oferta y ahorra en tus compras de velas artesanales",
    imagen: "https://via.placeholder.com/800x400?text=Envío+Gratis",
    color: "from-green-500 via-emerald-500 to-green-600",
    icon: "fas fa-gift",
    iconBg: "from-green-300 to-emerald-400"
  },
  {
    titulo: "Nuevas Colecciones Navideñas",
    subtitulo: "Disponibles ahora",
    descripcion: "Descubre muñecos de año viejo, velas decorativas y más productos exclusivos",
    imagen: "https://via.placeholder.com/800x400?text=Navidad",
    color: "from-red-600 via-orange-600 to-red-700",
    icon: "fas fa-tree",
    iconBg: "from-red-400 to-orange-500"
  },
  {
    titulo: "Perfectas para Regalos Especiales",
    subtitulo: "Para cada ocasión",
    descripcion: "Velas para cumpleaños, aniversarios, San Valentín, Baby Shower y más ocasiones",
    imagen: "https://via.placeholder.com/800x400?text=Regalos",
    color: "from-pink-500 via-rose-500 to-pink-600",
    icon: "fas fa-heart",
    iconBg: "from-pink-300 to-rose-400"
  },
  {
    titulo: "Precios Mayoristas",
    subtitulo: "Disponibles",
    descripcion: "Compra al por mayor y obtén mejores precios. Ideal para eventos y negocios",
    imagen: "https://via.placeholder.com/800x400?text=Mayorista",
    color: "from-blue-600 via-indigo-600 to-blue-700",
    icon: "fas fa-tags",
    iconBg: "from-blue-400 to-indigo-500"
  },
  {
    titulo: "Las Mejores Fragancias",
    subtitulo: "Elige tu favorita",
    descripcion: "Vainilla, canela, coco, rosa y más. Elige tu aroma favorito",
    imagen: "https://via.placeholder.com/800x400?text=Fragancias",
    color: "from-amber-500 via-yellow-500 to-amber-600",
    icon: "fas fa-spray-can",
    iconBg: "from-amber-300 to-yellow-400"
  }
];

// Videos de TikTok e Instagram
// Los videos de la portada. Los de TikTok ya no traen el <blockquote> de
// su widget: cada uno pesaba lo suyo en este archivo, cargaba un script
// ajeno, montaba un iframe y llegaba con su propia botonera (me gusta,
// comentarios, "Watch now"), que ni se puede maquetar ni pega con el
// resto. Ahora es una portada alojada aquí que abre el video en TikTok.
// Las portadas se regeneran con herramientas/portadas-tiktok.py
const videos = [
  { plataforma: "local", titulo: "Nuestras velas", videoSrc: "assets/productos/Videos/velas.mp4" },
  { plataforma: "local", titulo: "Aromas y fragancias", videoSrc: "assets/productos/Videos/aro.mp4" },
  { plataforma: "local", titulo: "Colección especial", videoSrc: "assets/productos/Videos/al.mp4" },
  { plataforma: "local", titulo: "Velas artesanales", videoSrc: "assets/productos/Videos/vel.mp4" },
  { plataforma: "tiktok", titulo: "Pregunta ya por nuestro kit", url: "https://www.tiktok.com/@velas.elena/video/7684359342010748180",
    portada: "assets/productos/Videos/tiktok/7684359342010748180.jpg" },
  { plataforma: "tiktok", titulo: "Somos mayoristas, emprende con nosotros", url: "https://www.tiktok.com/@velas.elena/video/7685743973889035538",
    portada: "assets/productos/Videos/tiktok/7685743973889035538.jpg" },
  { plataforma: "tiktok", titulo: "Nuestras velas navideñas", url: "https://www.tiktok.com/@velas.elena/video/7685605024013012231",
    portada: "assets/productos/Videos/tiktok/7685605024013012231.jpg" },
  { plataforma: "tiktok", titulo: "Vela árbol de Navidad", url: "https://www.tiktok.com/@velas.elena/video/7680630648012573972",
    portada: "assets/productos/Videos/tiktok/7680630648012573972.jpg" },
  { plataforma: "tiktok", titulo: "Pregunta por nuestros kits de emprendedor", url: "https://www.tiktok.com/@velas.elena/video/7663227063792389396",
    portada: "assets/productos/Videos/tiktok/7663227063792389396.jpg" },
  { plataforma: "tiktok", titulo: "Velas para toda la familia", url: "https://www.tiktok.com/@velas.elena/video/7566441246244211988",
    portada: "assets/productos/Videos/tiktok/7566441246244211988.jpg" },
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar partículas laterales
  initSideParticles();
  
  // Mostrar elementos de fondo después de que cargue la página
  setTimeout(() => {
    const catalogParticles = document.getElementById('catalog-particles-container');
    const sideParticlesLeft = document.getElementById('side-particles-left');
    const sideParticlesRight = document.getElementById('side-particles-right');
    
    if (catalogParticles) catalogParticles.classList.add('loaded');
    if (sideParticlesLeft) sideParticlesLeft.classList.add('loaded');
    if (sideParticlesRight) sideParticlesRight.classList.add('loaded');
  }, 300);
  
  // Manejar redimensionamiento de ventana
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const leftContainer = document.getElementById('side-particles-left');
      const rightContainer = document.getElementById('side-particles-right');
      if (leftContainer && rightContainer) {
        leftContainer.innerHTML = '';
        rightContainer.innerHTML = '';
        initSideParticles();
      }
    }, 250);
  });
  initDarkMode();
  initMobileMenu();
  initCarrito();
  initProductos();
  initPromociones();
  initVideos();
  initMouseWheelScroll();
  initSearch();
  initAnimations();
  initBottomDock();
  initWhatsApp();
  initPersonalizadas();
  initScrollToTop();
  initLazyVideosPersonalizadas();
  initNavegacionSecciones();
  
});

// Algunos navegadores y vistas embebidas no entregan la rueda al documento.
// Este puente mantiene el desplazamiento inmediato, sin smooth ni animaciones.
function initMouseWheelScroll() {
  document.addEventListener('wheel', (event) => {
    if (!event.deltaY || event.ctrlKey) return;
    if (event.target.closest('.product-modal-sheet, .cart-sheet, #mobile-menu')) return;

    const modalAbierto = [...document.querySelectorAll('#product-modal, #cart-modal, #confirm-modal')]
      .some(modal => !modal.classList.contains('hidden'));
    if (modalAbierto) return;

    window.scrollBy(0, event.deltaY);
    event.preventDefault();
  }, { capture: true, passive: false });
}

// Lazy loading para videos de personalizadas
function initLazyVideosPersonalizadas() {
  const videoContainers = document.querySelectorAll('#personalizadas .video-container-lazy');
  
  videoContainers.forEach(container => {
    const placeholder = container.querySelector('.video-placeholder');
    const video = container.querySelector('video');
    const videoSrc = container.getAttribute('data-video-src');
    
    if (placeholder && video && videoSrc) {
      placeholder.addEventListener('click', () => {
        video.src = videoSrc;
        video.load();
        placeholder.classList.add('hidden');
        video.classList.remove('hidden');
        video.play().catch(() => {
          // Auto-play puede fallar, está bien
        });
      }, { once: true });
    }
  });
}

// La identidad de marca es la crema del logo: el sitio es claro siempre.
function initDarkMode() {
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('dark');
  localStorage.removeItem('theme');
}

// Mobile Menu
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (overlay) overlay.classList.toggle('hidden');
      
      // Animación del ícono
      const icon = menuButton.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    
    // Cerrar al hacer click en overlay
    if (overlay) {
      overlay.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        overlay.classList.add('hidden');
        const icon = menuButton.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    }
    
    // Cerrar al hacer click en enlaces
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (overlay) overlay.classList.add('hidden');
        const icon = menuButton.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

// Carrito
function initCarrito() {
  cargarCarrito();
  actualizarContadorCarrito();
  
  // Botones de abrir carrito
  const cartButtons = ['cart-button', 'cart-button-dock'];
  cartButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', abrirCarrito);
    }
  });
  
  // Botón cerrar carrito
  const cartClose = document.getElementById('cart-close');
  const cartOverlay = document.getElementById('cart-overlay');
  
  if (cartClose) {
    cartClose.addEventListener('click', cerrarCarrito);
  }
  
  if (cartOverlay) {
    cartOverlay.addEventListener('click', cerrarCarrito);
  }
  
  // Botón checkout WhatsApp
  const checkoutBtn = document.getElementById('checkout-whatsapp');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', comprarPorWhatsApp);
  }
}

function abrirCarrito() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCarrito();
  }
}

function cerrarCarrito() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('elena-velas-carrito');
  if (carritoGuardado) {
    try {
      state.carrito = JSON.parse(carritoGuardado);
    } catch (e) {
      console.error('Error al cargar carrito:', e);
      state.carrito = [];
    }
  }
}

function guardarCarrito() {
  localStorage.setItem('elena-velas-carrito', JSON.stringify(state.carrito));
}

function actualizarContadorCarrito() {
  // Actualizar contadores del carrito
  const total = state.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const cartCounts = document.querySelectorAll('#cart-count, #cart-count-dock');
  
  cartCounts.forEach(count => {
    if (total > 0) {
      count.textContent = total;
      count.classList.remove('hidden');
    } else {
      count.classList.add('hidden');
    }
  });
  
}

function generarMensajeWhatsApp() {
  if (state.carrito.length === 0) {
    return 'Hola, me interesa conocer más sobre sus productos';
  }
  
  let mensaje = 'Hola, me interesa comprar los siguientes productos:\n\n';
  state.carrito.forEach((item, index) => {
    mensaje += `${index + 1}. ${item.nombre}`;
    if (item.tamano) mensaje += ` - Tamaño: ${item.tamano}`;
    if (item.presentacion) mensaje += ` - Presentación: ${item.presentacion}`;
    if (item.cantidad > 1) mensaje += ` (x${item.cantidad})`;
    mensaje += `\n`;
  });
  mensaje += `\nTotal: $${state.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0).toLocaleString()}`;
  
  return mensaje;
}

function agregarAlCarrito(productoId, tipoCompra, presentacion, precio) {
  const producto = buscarProducto(productoId);
  if (!producto) {
    console.error('Producto no encontrado:', productoId);
    if (typeof mostrarNotificacion === 'function') {
      mostrarNotificacion('Error: Producto no encontrado', 'error');
    }
    return;
  }
  
  if (!precio || precio <= 0) {
    console.error('Precio inválido:', precio);
    if (typeof mostrarNotificacion === 'function') {
      mostrarNotificacion('Error: Precio inválido', 'error');
    }
    return;
  }
  
  // Verificar si presentacion contiene tamaño y presentación (ej: "Grande Bolsa")
  let tamano = null;
  let presentacionFinal = null;
  
  if (presentacion) {
    // Buscar si alguno de los tamaños coincide con el inicio del string
    if (producto.tamanos && producto.tamanos.length > 0) {
      const tamanoEncontrado = producto.tamanos.find(t => presentacion.startsWith(t.nombre));
      if (tamanoEncontrado) {
        tamano = tamanoEncontrado.nombre;
        // Extraer la presentación del resto del string
        const resto = presentacion.replace(tamano, '').trim().toLowerCase();
        if (resto === 'bolsa' || resto === 'caja') {
          presentacionFinal = resto;
        }
      } else {
        // Si no coincide con ningún tamaño, verificar si es solo un tamaño
        const esTamanoSolo = producto.tamanos.some(t => t.nombre === presentacion);
        if (esTamanoSolo) {
          tamano = presentacion;
        } else {
          // Si no es tamaño, asumir que es presentación
          presentacionFinal = presentacion.toLowerCase();
        }
      }
    } else {
      // Si no tiene tamaños, asumir que es presentación
      presentacionFinal = presentacion.toLowerCase();
    }
  }
  
  // Crear identificador único basado en tipo de compra, tamaño y presentación
  const identificador = `${tipoCompra}-${tamano || ''}-${presentacionFinal || ''}`.replace(/-+$/, '').replace(/^-+/, '');
  
  // Buscar si ya existe en el carrito
  const itemExistente = state.carrito.find(
    item => item.id === productoId && item.identificador === identificador
  );
  
  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    state.carrito.push({
      id: productoId,
      nombre: producto.nombre,
      tipoCompra: tipoCompra,
      presentacion: presentacionFinal,
      tamano: tamano,
      identificador: identificador,
      precio: precio,
      cantidad: 1,
      imagen: producto.imagen
    });
  }
  
  try {
    guardarCarrito();
    actualizarContadorCarrito();
    
    // Forzar re-render del carrito después de un pequeño delay
    setTimeout(() => {
      renderCarrito();
    }, 50);
    
    // Animación del icono del carrito
    const cartIcons = document.querySelectorAll('#cart-icon, #cart-icon-dock');
    cartIcons.forEach(icon => {
      icon.classList.add('cart-icon-bounce');
      setTimeout(() => {
        icon.classList.remove('cart-icon-bounce');
      }, 500);
    });
    
    // Animación de vibración (si está disponible)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Mostrar feedback visual mejorado con toast mejorado
    setTimeout(() => {
      if (typeof mostrarToastProducto === 'function') {
        mostrarToastProducto(producto);
      } else if (typeof mostrarNotificacion === 'function') {
        // Fallback si la función no existe
        mostrarNotificacion(`${producto.nombre} agregado al carrito`, 'success');
      }
    }, 100);
  } catch (error) {
    console.error('Error al guardar en carrito:', error);
    if (typeof mostrarNotificacion === 'function') {
      mostrarNotificacion('Error al guardar en el carrito', 'error');
    }
  }
}

function eliminarDelCarrito(index) {
  const item = state.carrito[index];
  state.carrito.splice(index, 1);
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
  
  // Feedback visual
  mostrarNotificacion(`${item.nombre} eliminado del carrito`, 'info');
  
  // Vibración si está disponible
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function vaciarCarrito() {
  if (state.carrito.length === 0) return;
  
  mostrarConfirmacion(
    '¿Estás seguro de que quieres vaciar el carrito?',
    () => {
      state.carrito = [];
      guardarCarrito();
      actualizarContadorCarrito();
      renderCarrito();
      mostrarNotificacion('Carrito vaciado', 'info');
    }
  );
}

// Función para mostrar modal de confirmación personalizado
function mostrarConfirmacion(mensaje, onConfirm) {
  const modal = document.getElementById('confirm-modal');
  const messageElement = document.getElementById('confirm-message');
  const okButton = document.getElementById('confirm-ok');
  const cancelButton = document.getElementById('confirm-cancel');
  const overlay = document.getElementById('confirm-overlay');
  
  if (!modal || !messageElement || !okButton || !cancelButton) {
    console.error('Elementos del modal de confirmación no encontrados');
    return;
  }
  
  // Limpiar listeners anteriores
  const newOkButton = okButton.cloneNode(true);
  okButton.parentNode.replaceChild(newOkButton, okButton);
  const newCancelButton = cancelButton.cloneNode(true);
  cancelButton.parentNode.replaceChild(newCancelButton, cancelButton);
  
  // Establecer mensaje
  messageElement.textContent = mensaje;
  
  // Mostrar modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Forzar reflow para que la animación funcione
  void modal.offsetWidth;
  
  // Animación de entrada
  requestAnimationFrame(() => {
    const modalContent = modal.querySelector('.rounded-3xl');
    if (modalContent) {
      modalContent.style.transform = 'scale(1)';
      modalContent.style.opacity = '1';
    }
  });
  
  // Función para cerrar
  const cerrar = () => {
    const modalContent = modal.querySelector('.rounded-3xl');
    if (modalContent) {
      modalContent.style.transform = 'scale(0.9)';
      modalContent.style.opacity = '0';
    }
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  };
  
  // Event listeners
  const handleConfirm = () => {
    cerrar();
    if (onConfirm) onConfirm();
  };
  
  newOkButton.addEventListener('click', handleConfirm);
  newCancelButton.addEventListener('click', cerrar);
  if (overlay) {
    overlay.addEventListener('click', cerrar);
  }
  
  // Cerrar con ESC
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      cerrar();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}

function actualizarCantidad(index, nuevaCantidad) {
  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(index);
    return;
  }
  
  // Limitar a máximo 99 unidades
  if (nuevaCantidad > 99) {
    mostrarNotificacion('Máximo 99 unidades por producto', 'warning');
    nuevaCantidad = 99;
  }
  
  const cambio = nuevaCantidad - state.carrito[index].cantidad;
  state.carrito[index].cantidad = nuevaCantidad;
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
  
  // Vibración sutil si está disponible
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }
}

function renderCarrito() {
  const container = document.getElementById('cart-items');
  if (!container) {
    console.error('Contenedor del carrito no encontrado');
    return;
  }
  
  // Forzar actualización del estado
  const carritoGuardado = localStorage.getItem('elena-velas-carrito');
  if (carritoGuardado) {
    try {
      state.carrito = JSON.parse(carritoGuardado);
    } catch (e) {
      console.error('Error al cargar carrito en renderCarrito:', e);
      state.carrito = [];
    }
  }
  
  if (state.carrito.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <div class="inline-block p-6 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
          <i class="fas fa-shopping-cart text-6xl text-gray-300 dark:text-gray-600"></i>
        </div>
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Tu carrito está vacío</p>
        <p class="text-gray-500 dark:text-gray-400 mb-6">Agrega productos para comenzar</p>
        <button onclick="cerrarCarrito(); document.getElementById('productos')?.scrollIntoView({behavior: 'smooth'})" class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
          Ver Productos
        </button>
      </div>
    `;
    
    // Ocultar botón de vaciar carrito si existe
    const vaciarBtn = document.getElementById('vaciar-carrito');
    if (vaciarBtn) vaciarBtn.classList.add('hidden');
    
    // Actualizar total a 0
    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
      totalElement.textContent = '$0';
    }
    return;
  }
  
  // Mostrar botón de vaciar carrito
  const vaciarBtn = document.getElementById('vaciar-carrito');
  if (vaciarBtn) vaciarBtn.classList.remove('hidden');
  
  container.innerHTML = state.carrito.map((item, index) => {
    const tipoTexto = item.tipoCompra ? item.tipoCompra.charAt(0).toUpperCase() + item.tipoCompra.slice(1) : '';
    const presentacionTexto = item.presentacion ? item.presentacion.charAt(0).toUpperCase() + item.presentacion.slice(1) : '';
    const tamanoTexto = item.tamano ? item.tamano : '';
    
    // Construir texto de detalles
    let detallesTexto = '';
    if (tipoTexto) detallesTexto += tipoTexto;
    if (tamanoTexto) detallesTexto += (detallesTexto ? ' • ' : '') + tamanoTexto;
    if (presentacionTexto) detallesTexto += (detallesTexto ? ' • ' : '') + presentacionTexto;
    
    const subtotal = item.precio * item.cantidad;
    
    return `
    <div class="group bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4 border-2 border-gray-100 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 transition-all shadow-sm hover:shadow-md">
      <div class="flex gap-4">
        <!-- Imagen del producto -->
        <div class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-xl p-2 border-2 border-gray-200 dark:border-gray-700 group-hover:border-yellow-400 transition-colors">
          <img src="${item.imagen}" alt="${item.nombre}" 
               class="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg" 
               onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'112\' height=\'112\'%3E%3Crect fill=\'%23f3f4f6\' width=\'112\' height=\'112\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\'%3EVela%3C/text%3E%3C/svg%3E';">
        </div>
        
        <!-- Información del producto -->
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-gray-800 dark:text-white mb-1 text-base md:text-lg line-clamp-2">${item.nombre}</h4>
          ${detallesTexto ? `<p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
            <i class="fas fa-info-circle text-yellow-500"></i>
            ${detallesTexto}
          </p>` : ''}
          
          <!-- Controles de cantidad y precio -->
          <div class="flex items-center justify-between flex-wrap gap-3">
            <!-- Controles de cantidad -->
            <div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-1">
              <button onclick="actualizarCantidad(${index}, ${item.cantidad - 1})" 
                      class="w-10 h-10 rounded-lg bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center transition-all font-bold shadow-sm" 
                      aria-label="Disminuir cantidad">
                <i class="fas fa-minus text-sm"></i>
              </button>
              <span class="w-12 text-center font-bold text-lg text-gray-800 dark:text-white">${item.cantidad}</span>
              <button onclick="actualizarCantidad(${index}, ${item.cantidad + 1})" 
                      class="w-10 h-10 rounded-lg bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 flex items-center justify-center transition-all font-bold shadow-sm" 
                      aria-label="Aumentar cantidad">
                <i class="fas fa-plus text-sm"></i>
              </button>
            </div>
            
            <!-- Precio y eliminar -->
            <div class="flex items-center gap-4">
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">Precio unitario</p>
                <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">$${item.precio.toLocaleString()}</p>
                <p class="text-lg md:text-xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">$${subtotal.toLocaleString()}</p>
              </div>
              <button onclick="eliminarDelCarrito(${index})" 
                      class="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 flex items-center justify-center transition-all shadow-sm" 
                      aria-label="Eliminar producto">
                <i class="fas fa-trash text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }).join('');
  
  // Calcular totales
  const total = state.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const subtotal = total; // Por ahora subtotal = total (se puede agregar descuentos después)
  
  // Actualizar total
  const totalElement = document.getElementById('cart-total');
  if (totalElement) {
    totalElement.textContent = `$${total.toLocaleString()}`;
  }
  
  // Actualizar subtotal
  const subtotalElement = document.getElementById('cart-subtotal');
  if (subtotalElement) {
    subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
  }
  
  // Actualizar cantidad total de items
  const totalItems = state.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const totalItemsElement = document.getElementById('cart-items-count');
  if (totalItemsElement) {
    totalItemsElement.textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`;
  }
}

// Exponer funciones globalmente para acceso desde HTML
window.vaciarCarrito = vaciarCarrito;
window.abrirCarrito = abrirCarrito;
window.cerrarCarrito = cerrarCarrito;
window.actualizarCantidad = actualizarCantidad;
window.eliminarDelCarrito = eliminarDelCarrito;

// Productos
function initProductos() {
  renderCategorias();
  renderProductos();
  
  // Configurar listener único para los botones de filtro usando delegación de eventos
  const container = document.getElementById('category-filters');
  if (container) {
    // Usar delegación de eventos - se configura una vez, funciona con elementos dinámicos
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      
      const filterSeleccionado = btn.dataset.filter;
      if (!filterSeleccionado) return;
      
      // Convertir filtro a categoría real
      const categoriaReal = categoryMap[filterSeleccionado] || filterSeleccionado;
      state.categoriaActual = categoriaReal;
      
      // Actualizar botones (solo actualiza el HTML, el listener sigue activo)
      renderCategorias();
      
      // Siempre re-renderizar productos cuando se cambia de categoría
      // para asegurar que los productos correctos estén en el DOM
      renderProductos();
      
      // Scroll a productos si no está visible
      const productsSection = document.getElementById('productos');
      if (productsSection) {
        setTimeout(() => {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  }
}

function buscarProducto(id) {
  for (const categoria in productos) {
    const producto = productos[categoria].find(p => p.id === id);
    if (producto) return producto;
  }
  return null;
}

function obtenerTodosLosProductos() {
  return Object.values(productos).flat();
}

// Mapeo de filtros a categorías reales
const categoryMap = {
  'todas': 'todas',
  'amor': 'amorYAmistad',
  'babyshower': 'celebracion',
  'comunion': 'primeraComunion',
  'navidad': 'navidad',
  'kits': 'kitEmprendedor'
};

// Mapeo inverso: categoría real a filtro
const categoryToFilter = {
  'amorYAmistad': 'amor',
  'celebracion': 'babyshower',
  'primeraComunion': 'comunion',
  'navidad': 'navidad',
  'kitEmprendedor': 'kits'
};

function renderCategorias() {
  const container = document.getElementById('category-filters');
  if (!container) return;
  
  const categorias = [
    { filter: 'todas', nombre: 'Todas', icon: 'fas fa-th' },
    { filter: 'amor', nombre: 'Amor y Amistad', icon: 'fas fa-heart' },
    { filter: 'babyshower', nombre: 'Baby Shower', icon: 'fas fa-baby' },
    { filter: 'comunion', nombre: 'Primera Comunión', icon: 'fas fa-cross' },
    { filter: 'navidad', nombre: 'Navidad', icon: 'fas fa-tree' },
    { filter: 'kits', nombre: 'Kit Emprendedor', icon: 'fas fa-box-open' }
  ];
  
  // Determinar el filtro activo actual
  const filterActual = state.categoriaActual === 'todas' ? 'todas' : 
                      (categoryToFilter[state.categoriaActual] || 'todas');
  
  container.innerHTML = categorias.map(cat => {
    const activo = filterActual === cat.filter;
    return `
    <button 
      type="button"
      role="tab"
      data-filter="${cat.filter}"
      aria-selected="${activo}"
      class="filter-btn${activo ? ' active' : ''}"
    >
      <i class="${cat.icon}"></i>
      <span>${cat.nombre}</span>
    </button>
  `;
  }).join('');
}

function filtrarProductos() {
  let productosFiltrados = obtenerTodosLosProductos();
  
  // Si no hay productos, retornar array vacío
  if (!productosFiltrados || productosFiltrados.length === 0) {
    return [];
  }
  
  // Filtro por categoría
  if (state.categoriaActual && state.categoriaActual !== 'todas') {
    productosFiltrados = productosFiltrados.filter(p => {
      if (!p || !p.categoria) return false;
      return p.categoria === state.categoriaActual;
    });
  }
  
  // Filtro por búsqueda
  if (state.busqueda && state.busqueda.trim() !== '') {
    const busquedaLower = state.busqueda.toLowerCase().trim();
    productosFiltrados = productosFiltrados.filter(p => {
      if (!p) return false;
      return (p.nombre && p.nombre.toLowerCase().includes(busquedaLower)) ||
             (p.descripcion && p.descripcion.toLowerCase().includes(busquedaLower)) ||
             (p.fragancias && Array.isArray(p.fragancias) && p.fragancias.some(f => f && f.toLowerCase().includes(busquedaLower)));
    });
  }
  
  return productosFiltrados;
}

// Función para obtener el data-category del producto
function getProductCategory(producto) {
  if (!producto || !producto.categoria) return '';
  
  const categoriaReal = producto.categoria;
  // Convertir categoría real a filtro para data-category
  if (categoriaReal === 'amorYAmistad') return 'amor';
  if (categoriaReal === 'celebracion') return 'babyshower';
  if (categoriaReal === 'primeraComunion') return 'comunion';
  if (categoriaReal === 'navidad') return 'navidad';
  if (categoriaReal === 'kitEmprendedor') return 'kits';
  return categoriaReal.toLowerCase();
}

function renderProductos() {
  const container = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  
  if (!container) return;
  
  const todosLosProductos = obtenerTodosLosProductos();
  
  // Para Navidad, mostrar cada producto individualmente sin agrupar
  // Para otras categorías, agrupar por imagen
  const esNavidad = state.categoriaActual === 'navidad';
  const esTodas = state.categoriaActual === 'todas';
  
  // Inicializar variables para HTML
  let htmlNavidad = '';
  
  if (esNavidad || esTodas) {
    // Si es Navidad o "todas", renderizar productos de Navidad individualmente
    const productosNavidad = todosLosProductos.filter(p => {
      if (!p || !p.id || !p.nombre || !p.imagen) return false;
      if (p.imagen.includes('placeholder') || p.imagen.includes('via.placeholder')) return false;
      return p.categoria === 'navidad';
    });
    
    htmlNavidad = productosNavidad.map(producto => {
      const dataCategory = getProductCategory(producto);
      
      return `
    <div class="producto producto-item" data-category="${dataCategory}" data-imagen="${producto.imagen}" data-nombre="${producto.nombre.toLowerCase()}" data-descripcion="${producto.descripcion ? producto.descripcion.toLowerCase() : ''}">
      <div class="producto-media">
        <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="event.stopPropagation(); ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')"><i class="fas fa-expand"></i></button>
        <div class="skeleton-image absolute inset-0"></div>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
          data-src="${producto.imagen}"
          alt="${producto.nombre}"
          class="producto-img"
          decoding="async"
          >
        
      </div>
      <div class="producto-body">
        <h3>
          ${producto.nombre}
        </h3>
        <button 
          onclick="abrirModalProducto('${producto.id}')"
          class="btn btn-primary ripple-effect"
        >
          Ver Precios
        </button>
      </div>
    </div>
    `;
    }).filter(html => html !== '').join('');
    
    if (esNavidad) {
      // Si es solo Navidad, mostrar solo esos productos
      container.innerHTML = htmlNavidad;
      setTimeout(() => {
        filtrarYMostrarProductos();
        if (typeof refrescarMovimiento === 'function') refrescarMovimiento(container);
      }, 100);
      return;
    }
  }
  
  // Para otras categorías, agrupar productos por imagen (excluyendo Navidad)
  const productosPorImagen = {};
  
  todosLosProductos
    .filter(producto => {
      if (!producto || !producto.id || !producto.nombre) return false;
      if (!producto.imagen || 
          producto.imagen.includes('placeholder') || 
          producto.imagen.includes('via.placeholder')) {
        return false;
      }
      // Excluir productos de Navidad del agrupamiento
      if (producto.categoria === 'navidad') return false;
      return true;
    })
    .forEach(producto => {
      const imagen = producto.imagen;
      if (!productosPorImagen[imagen]) {
        productosPorImagen[imagen] = [];
      }
      productosPorImagen[imagen].push(producto);
    });
  
  // Renderizar productos agrupados (para categorías que no son Navidad)
  const htmlAgrupados = Object.keys(productosPorImagen).map(imagen => {
    const productosGrupo = productosPorImagen[imagen];
    const productoPrincipal = productosGrupo[0];
    const dataCategory = getProductCategory(productoPrincipal);
    
      // Si hay múltiples productos con la misma imagen, mostrar tarjeta agrupada
      if (productosGrupo.length > 1) {
        const nombresProductos = productosGrupo.map(p => p.nombre).join(', ');
        // Crear título más descriptivo basado en la categoría
        let tituloTarjeta = productoPrincipal.nombre;
        // Si todos tienen nombres similares, usar el primero
        const primerNombre = productosGrupo[0].nombre;
        if (productosGrupo.every(p => p.nombre.includes(primerNombre.split(' ')[0]))) {
          tituloTarjeta = primerNombre.split(' ').slice(0, -1).join(' ') + ' (Variedades)';
        } else {
          tituloTarjeta = productosGrupo[0].nombre + ' y más';
        }
        
        return `
    <div class="producto producto-item" data-category="${dataCategory}" data-imagen="${imagen}" data-nombre="${tituloTarjeta.toLowerCase()}" data-descripcion="${productoPrincipal.descripcion ? productoPrincipal.descripcion.toLowerCase() : ''}">
      <div class="producto-media">
        <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="event.stopPropagation(); ampliarImagenProducto('${imagen}', '${tituloTarjeta}')"><i class="fas fa-expand"></i></button>
        <div class="skeleton-image absolute inset-0"></div>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
          data-src="${imagen}"
          alt="${nombresProductos}"
          class="producto-img"
          decoding="async"
          >
        
      </div>
      <div class="producto-body">
        <h3>
          ${tituloTarjeta}
        </h3>
        <button 
          onclick="abrirModalProductoGrupo('${imagen}')"
          class="btn btn-primary ripple-effect"
        >
          Ver Precios
        </button>
      </div>
    </div>
    `;
    } else {
      // Producto único - mostrar normalmente
      return `
    <div class="producto producto-item" data-category="${dataCategory}" data-imagen="${imagen}" data-nombre="${productoPrincipal.nombre.toLowerCase()}" data-descripcion="${productoPrincipal.descripcion ? productoPrincipal.descripcion.toLowerCase() : ''}">
      <div class="producto-media">
        <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="event.stopPropagation(); ampliarImagenProducto('${imagen}', '${productoPrincipal.nombre}')"><i class="fas fa-expand"></i></button>
        <div class="skeleton-image absolute inset-0"></div>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
          data-src="${imagen}"
          alt="${productoPrincipal.nombre}"
          class="producto-img"
          decoding="async"
          >
        
      </div>
      <div class="producto-body">
        <h3>
          ${productoPrincipal.nombre}
        </h3>
        <button 
          onclick="abrirModalProducto('${productoPrincipal.id}')"
          class="btn btn-primary ripple-effect"
        >
          Ver Precios
        </button>
      </div>
    </div>
    `;
    }
  }).filter(html => html !== '').join('');
  
  // Combinar productos según la categoría seleccionada
  if (esTodas) {
    // Combinar productos de Navidad (individuales) con productos agrupados (otras categorías)
    container.innerHTML = htmlNavidad + htmlAgrupados;
  } else if (esNavidad) {
    // Ya se manejó arriba con return, pero por si acaso
    container.innerHTML = htmlNavidad || '';
  } else {
    // Otras categorías: solo productos agrupados (el filtro por categoría se hace en filtrarYMostrarProductos)
    container.innerHTML = htmlAgrupados || '';
  }
  
  // Aplicar filtro inicial después de que el DOM esté actualizado
  setTimeout(() => {
    filtrarYMostrarProductos();
    // Las tarjetas son nuevas: hay que volver a observarlas para que
    // aparezcan al entrar en pantalla.
    if (typeof refrescarMovimiento === 'function') refrescarMovimiento(container);
  }, 100);
}

// Función para abrir modal con múltiples productos de la misma imagen
function abrirModalProductoGrupo(imagen) {
  const todosLosProductos = obtenerTodosLosProductos();
  const productosGrupo = todosLosProductos.filter(p => p.imagen === imagen && (p.precios || p.tamanos));
  
  if (productosGrupo.length === 0) return;
  
  // Si solo hay un producto, abrir su modal normal
  if (productosGrupo.length === 1) {
    abrirModalProducto(productosGrupo[0].id);
    return;
  }
  
  // Si hay múltiples productos, mostrar modal con todos los productos
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');
  
  if (!modal || !content) return;
  
  // Crear HTML con todos los productos
  let htmlProductos = productosGrupo.map((prod, index) => {
    // Si tiene precios definidos, usarlos
    let tienePres = false;
    let preciosDetal = { bolsa: 0, caja: 0 };
    let preciosMayorista = { bolsa: 0, caja: 0 };
    let muestraTamanos = false;
    let tamanosDetal = [];
    let tamanosMayorista = [];
    
    if (prod.precios) {
      tienePres = prod.precios.detal && typeof prod.precios.detal === 'object';
      if (tienePres) {
        preciosDetal = prod.precios.detal;
        preciosMayorista = prod.precios.mayorista || { bolsa: 0, caja: 0 };
      } else {
        preciosDetal = { bolsa: prod.precios.detal || 0, caja: 0 };
        preciosMayorista = { bolsa: prod.precios.mayorista || 0, caja: 0 };
      }
    } else if (prod.tamanos && prod.tamanos.length > 0) {
      // Si tiene tamanos, mostrar los tamanos disponibles
      muestraTamanos = true;
      tamanosDetal = prod.tamanos;
      // Buscar si hay un producto mayorista correspondiente
      const productoMayorista = todosLosProductos.find(p => 
        p.imagen === imagen && 
        p.id !== prod.id && 
        p.nombre.toLowerCase().includes('mayorista')
      );
      tamanosMayorista = productoMayorista?.tamanos || [];
    }
    
    return `
      <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mb-4 border-2 border-transparent hover:border-yellow-500 transition-all cursor-pointer" onclick="abrirModalProducto('${prod.id}')">
        <h4 class="font-bold text-lg text-gray-800 dark:text-[#D4AF37] mb-3">${prod.nombre}</h4>
        ${muestraTamanos ? `
          <div class="text-sm">
            ${tamanosDetal.length > 0 ? `
              <div class="mb-3">
                <div class="font-semibold text-blue-600 dark:text-blue-400 mb-2">Detal:</div>
                ${tamanosDetal.map(t => `
                  <div class="text-gray-700 dark:text-gray-300 ml-3">${t.nombre}: $${t.precio.toLocaleString()}</div>
                `).join('')}
              </div>
            ` : ''}
            ${tamanosMayorista.length > 0 ? `
              <div>
                <div class="font-semibold text-purple-600 dark:text-purple-400 mb-2">Mayorista:</div>
                ${tamanosMayorista.map(t => `
                  <div class="text-gray-700 dark:text-gray-300 ml-3">${t.nombre}: $${t.precio.toLocaleString()}</div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        ` : `
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div class="font-semibold text-blue-600 dark:text-blue-400 mb-1">Detal</div>
            ${tienePres ? `
              <div class="text-gray-700 dark:text-gray-300">Bolsa: $${preciosDetal.bolsa.toLocaleString()}</div>
              <div class="text-gray-700 dark:text-gray-300">Caja: $${preciosDetal.caja.toLocaleString()}</div>
            ` : `
              <div class="text-gray-700 dark:text-gray-300">Precio: $${preciosDetal.bolsa.toLocaleString()}</div>
            `}
          </div>
          <div>
            <div class="font-semibold text-purple-600 dark:text-purple-400 mb-1">Mayorista</div>
            ${tienePres ? `
              <div class="text-gray-700 dark:text-gray-300">Bolsa: $${preciosMayorista.bolsa.toLocaleString()}</div>
              <div class="text-gray-700 dark:text-gray-300">Caja: $${preciosMayorista.caja.toLocaleString()}</div>
            ` : `
              <div class="text-gray-700 dark:text-gray-300">Precio: $${preciosMayorista.bolsa.toLocaleString()}</div>
            `}
          </div>
        </div>
        `}
        <div class="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
          Click para ver detalles y agregar al carrito
        </div>
      </div>
    `;
  }).join('');
  
  content.innerHTML = `
    <div class="text-center mb-6 relative">
      <h3 class="font-playfair text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Productos Disponibles
      </h3>
      <button onclick="cerrarModalProducto()" class="absolute top-0 right-0 p-2 rounded-full transition" aria-label="Cerrar">
        <i class="fas fa-times text-xl text-gray-600 dark:text-gray-400"></i>
      </button>
    </div>
    
    <div class="mb-6 flex justify-center px-2">
      <div class="modal-media modal-media-2xl" id="product-image-container-grupo">
          <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="ampliarImagenProducto('${imagen}', 'Productos Disponibles')"><i class="fas fa-expand"></i></button>
        <img 
          src="${imagen}" 
          alt="Productos"
          class="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          style=""
          onerror="this.style.filter='grayscale(100%) opacity(0.5)'; this.style.padding='20px';"
        >
        
      </div>
    </div>
    
    <div class="max-h-[400px] overflow-y-auto">
      ${htmlProductos}
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

window.abrirModalProductoGrupo = abrirModalProductoGrupo;

// Función para filtrar y mostrar productos con animación
function filtrarYMostrarProductos() {
  const container = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  
  if (!container) return;
  
  // Determinar el filtro activo
  const filterActual = state.categoriaActual === 'todas' ? 'todas' : 
                      (categoryToFilter[state.categoriaActual] || 'todas');
  
  // Obtener búsqueda actual
  const busquedaLower = state.busqueda ? state.busqueda.toLowerCase().trim() : '';
  
  // Obtener todos los productos
  const productos = container.querySelectorAll('.producto');
  
  let productosVisibles = 0;
  
  productos.forEach(producto => {
    const productCategory = producto.dataset.category || '';
    const productNombre = producto.dataset.nombre || '';
    const productDescripcion = producto.dataset.descripcion || '';
    
    // Verificar filtro de categoría
    const pasaCategoria = filterActual === 'todas' || productCategory === filterActual;
    
    // Verificar filtro de búsqueda
    const pasaBusqueda = !busquedaLower || 
                         productNombre.includes(busquedaLower) || 
                         productDescripcion.includes(busquedaLower);
    
    // Debe mostrarse si pasa ambos filtros
    const debeMostrarse = pasaCategoria && pasaBusqueda;
    
    if (debeMostrarse) {
      productosVisibles++;
      // Mostrar con animación fade-in
      producto.style.display = '';
      producto.style.opacity = '0';
      producto.style.transition = 'opacity 0.3s ease-in-out';
      
      // Trigger reflow para iniciar animación
      void producto.offsetWidth;
      
      setTimeout(() => {
        producto.style.opacity = '1';
      }, 10);
    } else {
      // Ocultar con animación fade-out
      producto.style.transition = 'opacity 0.3s ease-in-out';
      producto.style.opacity = '0';
      
      setTimeout(() => {
        producto.style.display = 'none';
      }, 300);
    }
  });
  
  // Mostrar/ocultar mensaje de no resultados
  if (productosVisibles === 0) {
    container.classList.add('hidden');
    if (noResults) {
      noResults.classList.remove('hidden');
      noResults.innerHTML = `
        <div class="text-center py-12">
          <i class="fas fa-search text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-2">No se encontraron productos</p>
          <p class="text-gray-500 dark:text-gray-500">Intenta con otros términos de búsqueda</p>
        </div>
      `;
    }
  } else {
    container.classList.remove('hidden');
    if (noResults) noResults.classList.add('hidden');
  }
}

// ============================================
// FICHA DE PRODUCTO (catálogos mayoristas en PDF)
// ============================================
// Los productos de los catálogos Navidad Mayorista y Kit Emprendedor traen
// una ficha con medidas, empaque, colores y las formas de venta con su
// precio. Se venden solo al por mayor, así que no llevan el selector
// Detal/Mayorista: se elige directamente la presentación.

function formatearPesos(valor) {
  return '$' + Number(valor).toLocaleString('es-CO');
}

/** Devuelve las dos listas de precios, venga la ficha en formato nuevo o viejo. */
function preciosDeFicha(f) {
  if (f.precios) {
    return {
      detal: f.precios.detal || [],
      mayorista: f.precios.mayorista || []
    };
  }
  // Fichas antiguas: una sola lista, que era mayorista.
  return { detal: [], mayorista: f.opciones || [] };
}

function renderFichaProducto(producto) {
  const f = producto.ficha;
  const grupos = preciosDeFicha(f);
  const hayDetal = grupos.detal.length > 0;
  const hayMayorista = grupos.mayorista.length > 0;
  const ambos = hayDetal && hayMayorista;
  // Se abre en detal: es lo que busca la mayoría de quien entra.
  const tipoInicial = hayDetal ? 'detal' : 'mayorista';

  const filas = [];
  (f.medidas || []).forEach(m => filas.push({ etiqueta: m.etiqueta, valor: m.valor }));
  if (f.empaque) filas.push({ etiqueta: 'Empaque', valor: f.empaque });
  if (f.lote) filas.push({ etiqueta: 'Disponible', valor: f.lote });

  const especificaciones = filas.length ? `
      <div class="ficha-specs">
        ${filas.map(r => `
        <div class="ficha-spec">
          <dt>${r.etiqueta}</dt>
          <dd>${r.valor}</dd>
        </div>`).join('')}
      </div>` : '';

  const colores = (f.colores && f.colores.length) ? `
      <div class="ficha-bloque">
        <h4 class="ficha-titulo">Colores disponibles</h4>
        <ul class="ficha-colores">
          ${f.colores.map(c => `
          <li><span class="ficha-muestra" style="background:${c.hex}"></span>${c.nombre}</li>`).join('')}
        </ul>
      </div>` : '';

  // Selector detal/mayorista, sólo si el producto tiene ambos.
  const selectorTipo = ambos ? `
      <div class="ficha-bloque">
        <h4 class="ficha-titulo">Tipo de compra</h4>
        <div class="ficha-tipos" role="radiogroup" aria-label="Tipo de compra">
          <button type="button" class="ficha-tipo active" data-tipo="detal" role="radio" aria-checked="true">
            <span class="ficha-tipo-nombre">Detal</span>
            <span class="ficha-tipo-detalle">Compra por unidad</span>
          </button>
          <button type="button" class="ficha-tipo" data-tipo="mayorista" role="radio" aria-checked="false">
            <span class="ficha-tipo-nombre">Mayorista</span>
            <span class="ficha-tipo-detalle">Precio por volumen</span>
          </button>
        </div>
      </div>` : '';

  function listaOpciones(tipo) {
    const ops = grupos[tipo];
    const unaSola = ops.length === 1;
    return `
        <div class="ficha-opciones" data-grupo="${tipo}" role="radiogroup"
             aria-label="Presentación"${tipo === tipoInicial ? '' : ' hidden'}>
          ${ops.map((o, i) => `
          <button type="button"
                  class="ficha-opcion${unaSola ? ' active' : ''}"
                  role="radio" aria-checked="${unaSola}"
                  data-tipo="${tipo}" data-indice="${i}"
                  data-precio="${o.precio}" data-nombre="${o.nombre}">
            <span class="ficha-opcion-nombre">${o.nombre}</span>
            ${o.detalle ? `<span class="ficha-opcion-detalle">${o.detalle}</span>` : ''}
            <span class="ficha-opcion-precio">${formatearPesos(o.precio)}</span>
          </button>`).join('')}
        </div>`;
  }

  const bloqueOpciones = `
      <div class="ficha-bloque">
        <h4 class="ficha-titulo">Elige la presentación</h4>
        ${hayDetal ? listaOpciones('detal') : ''}
        ${hayMayorista ? listaOpciones('mayorista') : ''}
      </div>`;

  const nota = f.nota ? `<p class="ficha-nota"><i class="fas fa-circle-info"></i>${f.nota}</p>` : '';

  // Con una sola presentación ya viene elegida; el total sale directo.
  const inicial = grupos[tipoInicial];
  const arranca = inicial.length === 1;

  return `
    <div class="ficha">
      <div class="ficha-cabecera">
        <h3 class="ficha-nombre">${producto.nombre}</h3>
        <button onclick="cerrarModalProducto()" class="ficha-cerrar" aria-label="Cerrar">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-media modal-media-lg" id="product-image-container">
        <button type="button" class="producto-zoom" aria-label="Ampliar imagen"
                onclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre.replace(/'/g, "\\'")}')">
          <i class="fas fa-expand"></i>
        </button>
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" decoding="async">
      </div>

      ${ambos ? '' : `<span class="ficha-etiqueta">${hayDetal ? 'Venta al detal' : 'Venta al por mayor'}</span>`}
      ${especificaciones}
      ${colores}
      ${selectorTipo}
      ${bloqueOpciones}
      ${nota}

      <div class="ficha-total">
        <span class="ficha-total-etiqueta">Total</span>
        <span class="ficha-total-valor" id="ficha-total">${arranca ? formatearPesos(inicial[0].precio) : '—'}</span>
      </div>

      <button type="button" id="ficha-agregar" class="btn btn-primary btn-block"${arranca ? '' : ' disabled'}>
        ${arranca ? 'Agregar al carrito' : 'Elige una presentación'}
      </button>
    </div>`;
}

function abrirModalFicha(producto, modal, content) {
  content.innerHTML = renderFichaProducto(producto);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const grupos = preciosDeFicha(producto.ficha);
  const total = content.querySelector('#ficha-total');
  const agregar = content.querySelector('#ficha-agregar');

  let tipo = grupos.detal.length ? 'detal' : 'mayorista';
  let elegida = grupos[tipo].length === 1 ? 0 : null;

  function refrescar() {
    const ops = grupos[tipo];
    if (elegida === null || !ops[elegida]) {
      total.textContent = '—';
      agregar.disabled = true;
      agregar.textContent = 'Elige una presentación';
      return;
    }
    total.textContent = formatearPesos(ops[elegida].precio);
    agregar.disabled = false;
    agregar.textContent = 'Agregar al carrito';
  }

  // Cambio de tipo de compra: se muestra su lista y se reinicia la elección.
  content.querySelectorAll('.ficha-tipo').forEach(function (b) {
    b.addEventListener('click', function () {
      content.querySelectorAll('.ficha-tipo').forEach(function (o) {
        o.classList.remove('active');
        o.setAttribute('aria-checked', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-checked', 'true');

      tipo = b.dataset.tipo;
      content.querySelectorAll('.ficha-opciones').forEach(function (g) {
        g.hidden = g.dataset.grupo !== tipo;
      });

      const ops = grupos[tipo];
      elegida = ops.length === 1 ? 0 : null;
      content.querySelectorAll('.ficha-opcion').forEach(function (o) {
        const suya = o.dataset.tipo === tipo;
        const activa = suya && ops.length === 1;
        o.classList.toggle('active', activa);
        o.setAttribute('aria-checked', String(activa));
      });
      refrescar();
    });
  });

  content.querySelectorAll('.ficha-opcion').forEach(function (b) {
    b.addEventListener('click', function () {
      content.querySelectorAll('.ficha-opcion[data-tipo="' + b.dataset.tipo + '"]')
        .forEach(function (o) {
          o.classList.remove('active');
          o.setAttribute('aria-checked', 'false');
        });
      b.classList.add('active');
      b.setAttribute('aria-checked', 'true');
      tipo = b.dataset.tipo;
      elegida = parseInt(b.dataset.indice, 10);
      refrescar();
    });
  });

  agregar.addEventListener('click', function () {
    const o = grupos[tipo][elegida];
    if (!o) return;
    agregarAlCarrito(producto.id, tipo, o.nombre, o.precio);
    cerrarModalProducto();
  });

  refrescar();
}

function abrirModalProducto(productoId) {
  const producto = buscarProducto(productoId);
  if (!producto) return;
  
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');
  
  if (!modal || !content) return;
  
  // Los productos de los catálogos PDF traen ficha propia.
  const tieneFicha = producto.ficha &&
    ((producto.ficha.precios &&
      ((producto.ficha.precios.detal || []).length ||
       (producto.ficha.precios.mayorista || []).length)) ||
     (producto.ficha.opciones || []).length);
  if (tieneFicha) {
    abrirModalFicha(producto, modal, content);
    return;
  }
  
  // Si el producto tiene tamanos pero no precios, mostrar modal con tamaños
  if (producto.tamanos && producto.tamanos.length > 0 && !producto.precios) {
    const tamanos = producto.tamanos;
    const esMayorista = producto.nombre.toLowerCase().includes('mayorista');
    
    // Verificar si los tamaños tienen precios detal/mayorista incorporados
    const tamanosConPreciosMultiples = tamanos.some(t => t.detal && t.mayorista);
    const tamanosConPreciosYPresentacion = tamanos.some(t => {
      return t.detal && typeof t.detal === 'object' && t.detal.bolsa !== undefined;
    });
    
    let tamanosDetal, tamanosMayorista, tieneAmbos, tienePresentacionEnTamanos = false;
    
    if (tamanosConPreciosYPresentacion) {
      // Los tamaños tienen precios detal/mayorista con presentación (bolsa/caja)
      tienePresentacionEnTamanos = true;
      tieneAmbos = true;
      // Mantener la estructura completa para procesarla después
      tamanosDetal = tamanos;
      tamanosMayorista = tamanos;
    } else if (tamanosConPreciosMultiples) {
      // Los tamaños tienen precios detal/mayorista simples (sin presentación)
      tamanosDetal = tamanos.map(t => ({
        nombre: t.nombre,
        precio: typeof t.detal === 'object' ? t.detal.bolsa : t.detal
      }));
      tamanosMayorista = tamanos.map(t => ({
        nombre: t.nombre,
        precio: typeof t.mayorista === 'object' ? t.mayorista.bolsa : t.mayorista
      }));
      tieneAmbos = true;
    } else {
      // Buscar si hay un producto correspondiente (Detal/Mayorista) con la misma imagen
      const todosLosProductos = obtenerTodosLosProductos();
      const productoCorrespondiente = todosLosProductos.find(p => 
        p.imagen === producto.imagen && 
        p.id !== producto.id && 
        p.tamanos && 
        p.tamanos.length > 0 &&
        ((esMayorista && !p.nombre.toLowerCase().includes('mayorista')) ||
         (!esMayorista && p.nombre.toLowerCase().includes('mayorista')))
      );
      
      tamanosDetal = esMayorista ? (productoCorrespondiente?.tamanos || []) : tamanos;
      tamanosMayorista = esMayorista ? tamanos : (productoCorrespondiente?.tamanos || []);
      tieneAmbos = tamanosDetal.length > 0 && tamanosMayorista.length > 0;
    }
    
    content.innerHTML = `
      <!-- Título centrado -->
      <div class="text-center mb-6 relative">
        <h3 class="font-playfair text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
          ${producto.nombre.replace(' Mayorista', '').replace('Detal', '').trim()}
        </h3>
        <button onclick="cerrarModalProducto()" class="absolute top-0 right-0 p-2 rounded-full transition" aria-label="Cerrar">
          <i class="fas fa-times text-xl text-gray-600 dark:text-gray-400"></i>
        </button>
      </div>
      
      <!-- Imagen del producto -->
      <div class="mb-6 flex justify-center px-2">
        <div class="modal-media modal-media-lg" id="product-image-container">
          <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')"><i class="fas fa-expand"></i></button>
          <img 
            src="${producto.imagen}" 
            alt="${producto.nombre}"
            class="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            id="product-image-${producto.id}"
            onerror="this.style.filter='grayscale(100%) opacity(0.5)'; this.style.padding='20px';"
            style=""
          >
          
        </div>
      </div>
      
      <!-- Descripción -->
      <p class="text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
        ${producto.descripcion}
      </p>
      
      ${tieneAmbos ? `
      <!-- Primera sección: Selección de tipo de compra -->
      <div class="mb-6">
        <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
          Selecciona tipo de compra:
        </label>
        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <button 
            data-tipo="detal"
            class="tipo-compra-btn-tamanos px-6 py-4 border-2 rounded-xl transition-all min-h-[70px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
          >
            <div class="font-bold text-lg">Detal</div>
            <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Venta al detal</div>
          </button>
          <button 
            data-tipo="mayorista"
            class="tipo-compra-btn-tamanos px-6 py-4 border-2 rounded-xl transition-all min-h-[70px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30"
          >
            <div class="font-bold text-lg">Mayorista</div>
            <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Venta por volumen</div>
          </button>
        </div>
      </div>
      ` : ''}
      
      ${tienePresentacionEnTamanos ? `
      <!-- Sección de tamaños disponibles (con presentación) -->
      <div class="mb-6" id="tamanos-section" ${tieneAmbos ? 'style="display: none;"' : ''}>
        <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
          Selecciona el tamaño:
        </label>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto" id="tamanos-grid">
          ${tamanos.map((tamano, index) => `
            <button 
              data-tamano="${tamano.nombre}"
              class="tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[90px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
            >
              <div class="font-bold text-lg">${tamano.nombre}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Selecciona presentación</div>
            </button>
          `).join('')}
        </div>
      </div>
      
      <!-- Sección de presentación (bolsa/caja) -->
      <div class="mb-6" id="presentacion-tamanos-section" style="display: none;">
        <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
          Selecciona presentación:
        </label>
        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto" id="presentacion-tamanos-grid">
          <button 
            data-presentacion="bolsa"
            class="presentacion-tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[100px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 flex flex-col items-center justify-center"
          >
            <div class="font-bold text-lg mb-1">Bolsa</div>
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">Presentación individual</div>
            <div class="text-yellow-600 dark:text-yellow-400 font-bold text-xl" id="precio-bolsa-tamano-display">-</div>
          </button>
          <button 
            data-presentacion="caja"
            class="presentacion-tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[100px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 flex flex-col items-center justify-center"
          >
            <div class="font-bold text-lg mb-1">Caja</div>
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">Presentación completa</div>
            <div class="text-yellow-600 dark:text-yellow-400 font-bold text-xl" id="precio-caja-tamano-display">-</div>
          </button>
        </div>
      </div>
      ` : `
      <!-- Sección de tamaños disponibles (sin presentación) -->
      <div class="mb-6" id="tamanos-section" ${tieneAmbos ? 'style="display: none;"' : ''}>
        <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
          Selecciona el tamaño:
        </label>
        <div class="grid grid-cols-1 md:grid-cols-${(tieneAmbos ? tamanosDetal : tamanos).length > 2 ? '2' : (tieneAmbos ? tamanosDetal : tamanos).length} gap-4 max-w-2xl mx-auto" id="tamanos-grid">
          ${(tieneAmbos ? tamanosDetal : tamanos).map((tamano, index) => `
            <button 
              data-tamano="${tamano.nombre}"
              data-precio="${tamano.precio}"
              class="tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[90px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
            >
              <div class="font-bold text-lg">${tamano.nombre}</div>
              <div class="text-yellow-600 dark:text-yellow-400 font-semibold mt-2">$${tamano.precio.toLocaleString()}</div>
            </button>
          `).join('')}
        </div>
      </div>
      `}
      
      <!-- Precio dinámico -->
      <div class="mb-6 text-center" id="precio-tamano-container" style="display: none;">
        <div id="precio-tamano-display" class="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 opacity-0 transition-opacity duration-300">
          <span class="text-xl">💛</span> Precio: <span id="precio-tamano-valor">-</span>
        </div>
      </div>
      
      <!-- Botón agregar al carrito -->
      <div class="text-center mt-8">
        <button 
          id="btn-agregar-carrito"
          disabled
          class="px-8 py-4 bg-gray-400 dark:bg-gray-600 text-white rounded-full font-bold text-lg transition-all duration-300 cursor-not-allowed"
        >
          ${tienePresentacionEnTamanos ? 'Selecciona tipo de compra, tamaño y presentación' : (tieneAmbos ? 'Selecciona tipo de compra y tamaño' : 'Selecciona un tamaño')}
        </button>
      </div>
    `;
    
    // Event listeners para selección de tamaño
    let tamanoSeleccionado = null;
    let precioSeleccionado = null;
    let presentacionSeleccionada = null;
    let tipoCompraSeleccionado = tieneAmbos ? null : (esMayorista ? 'mayorista' : 'detal');
    
    // Función para obtener el botón actualizado del DOM cada vez
    function obtenerBtnAgregar() {
      return document.getElementById('btn-agregar-carrito');
    }
    
    // Función para actualizar el botón de agregar al carrito
    function actualizarBotónAgregar() {
      const btnAgregar = obtenerBtnAgregar();
      if (!btnAgregar) {
        console.error('No se encontró el botón btn-agregar-carrito');
        return;
      }
      
      if (tienePresentacionEnTamanos) {
        // Verificar cada condición individualmente para debug
        const tieneTipoCompra = !!tipoCompraSeleccionado;
        const tieneTamano = !!tamanoSeleccionado;
        const tienePresentacion = !!presentacionSeleccionada;
        const tienePrecio = precioSeleccionado && typeof precioSeleccionado === 'number' && precioSeleccionado > 0;
        
        const todasSeleccionesCompletas = tieneTipoCompra && tieneTamano && tienePresentacion && tienePrecio;
        
        // Debug temporal
        console.log('Actualizando botón - Tiene presentación:', {
          tipoCompraSeleccionado,
          tamanoSeleccionado,
          presentacionSeleccionada,
          precioSeleccionado,
          tieneTipoCompra,
          tieneTamano,
          tienePresentacion,
          tienePrecio,
          todasSeleccionesCompletas
        });
        
        if (todasSeleccionesCompletas) {
          btnAgregar.disabled = false;
          btnAgregar.removeAttribute('disabled');
          btnAgregar.classList.remove('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.add('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = `Agregar al Carrito - $${precioSeleccionado.toLocaleString()}`;
          console.log('✅ Botón habilitado correctamente');
        } else {
          btnAgregar.disabled = true;
          btnAgregar.setAttribute('disabled', 'disabled');
          btnAgregar.classList.add('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.remove('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = 'Selecciona tipo de compra, tamaño y presentación';
        }
      } else {
        const seleccionesCompletas = tipoCompraSeleccionado && tamanoSeleccionado && precioSeleccionado && typeof precioSeleccionado === 'number' && precioSeleccionado > 0;
        
        if (seleccionesCompletas) {
          btnAgregar.disabled = false;
          btnAgregar.removeAttribute('disabled');
          btnAgregar.classList.remove('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.add('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = `Agregar al Carrito - $${precioSeleccionado.toLocaleString()}`;
        } else {
          btnAgregar.disabled = true;
          btnAgregar.setAttribute('disabled', 'disabled');
          btnAgregar.classList.add('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.remove('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = tieneAmbos ? 'Selecciona tipo de compra y tamaño' : 'Selecciona un tamaño';
        }
      }
    }
    
    // Si tiene ambos tipos, agregar listeners para selección de tipo
    if (tieneAmbos) {
      const tipoBtns = content.querySelectorAll('.tipo-compra-btn-tamanos');
      const tamanosSection = document.getElementById('tamanos-section');
      const tamanosGrid = document.getElementById('tamanos-grid');
      const presentacionSection = document.getElementById('presentacion-tamanos-section');
      
      tipoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remover selección anterior
          tipoBtns.forEach(b => {
            b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
            // Restaurar gradientes originales
            if (b.dataset.tipo === 'detal') {
              b.classList.add('bg-gradient-to-br', 'from-blue-50', 'to-blue-100', 'dark:from-blue-900/30', 'dark:to-blue-800/30');
            } else if (b.dataset.tipo === 'mayorista') {
              b.classList.add('bg-gradient-to-br', 'from-purple-50', 'to-purple-100', 'dark:from-purple-900/30', 'dark:to-purple-800/30');
            }
          });
          
          // Agregar selección actual
          btn.classList.add('border-yellow-500', 'active');
          // Remover gradientes originales cuando está activo
          btn.classList.remove('bg-gradient-to-br', 'from-blue-50', 'to-blue-100', 'dark:from-blue-900/30', 'dark:to-blue-800/30', 'from-purple-50', 'to-purple-100', 'dark:from-purple-900/30', 'dark:to-purple-800/30');
          tipoCompraSeleccionado = btn.dataset.tipo;
          
          if (tienePresentacionEnTamanos) {
            // Mostrar tamaños sin precios (se mostrarán al seleccionar)
            tamanosGrid.innerHTML = tamanos.map(tamano => `
              <button 
                data-tamano="${tamano.nombre}"
                class="tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[90px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
              >
                <div class="font-bold text-lg">${tamano.nombre}</div>
                <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Selecciona presentación</div>
              </button>
            `).join('');
          } else {
            // Mostrar tamaños con precios
            const tamanosAMostrar = tipoCompraSeleccionado === 'detal' ? tamanosDetal : tamanosMayorista;
            tamanosGrid.innerHTML = tamanosAMostrar.map(tamano => `
              <button 
                data-tamano="${tamano.nombre}"
                data-precio="${tamano.precio}"
                class="tamano-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[90px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
              >
                <div class="font-bold text-lg">${tamano.nombre}</div>
                <div class="text-yellow-600 dark:text-yellow-400 font-semibold mt-2">$${tamano.precio.toLocaleString()}</div>
              </button>
            `).join('');
          }
          
          // Resetear selecciones
          tamanoSeleccionado = null;
          precioSeleccionado = null;
          presentacionSeleccionada = null;
          
          // Ocultar sección de presentación si existe
          if (presentacionSection) {
            presentacionSection.style.display = 'none';
          }
          
          // Ocultar precio
          const precioContainer = document.getElementById('precio-tamano-container');
          if (precioContainer) {
            precioContainer.style.display = 'none';
          }
          
          // Mostrar sección de tamaños
          if (tamanosSection) {
            tamanosSection.style.display = 'block';
          }
          
          actualizarBotónAgregar();
        });
      });
    }
    
    // Listeners para botones de tamaño usando delegación de eventos
    const tamanosSection = content.querySelector('#tamanos-section');
    if (tamanosSection) {
      tamanosSection.addEventListener('click', (e) => {
        const tamanoBtn = e.target.closest('.tamano-btn');
        if (!tamanoBtn) return;
        
        // Remover selección anterior
        const tamanoBtns = tamanosSection.querySelectorAll('.tamano-btn');
        tamanoBtns.forEach(b => {
          b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
          b.classList.add('border-gray-300', 'dark:border-gray-600');
        });
        
        // Agregar selección actual
        tamanoBtn.classList.add('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
        tamanoBtn.classList.remove('border-gray-300', 'dark:border-gray-600');
        
        tamanoSeleccionado = tamanoBtn.dataset.tamano;
        
        if (tienePresentacionEnTamanos) {
          // Si tiene presentación, mostrar sección de presentación
          const presentacionSection = document.getElementById('presentacion-tamanos-section');
          const precioBolsaDisplay = document.getElementById('precio-bolsa-tamano-display');
          const precioCajaDisplay = document.getElementById('precio-caja-tamano-display');
          
          // Buscar el tamaño seleccionado en el array
          const tamanoData = tamanos.find(t => t.nombre === tamanoSeleccionado);
          if (tamanoData && tipoCompraSeleccionado) {
            const preciosTamano = tamanoData[tipoCompraSeleccionado];
            if (preciosTamano) {
              if (precioBolsaDisplay) precioBolsaDisplay.textContent = `$${preciosTamano.bolsa.toLocaleString()}`;
              if (precioCajaDisplay) precioCajaDisplay.textContent = `$${preciosTamano.caja.toLocaleString()}`;
            }
          }
          
          // Mostrar sección de presentación
          if (presentacionSection) {
            presentacionSection.style.display = 'block';
          }
          
          // Resetear presentación seleccionada
          presentacionSeleccionada = null;
          precioSeleccionado = null;
          
          // Ocultar precio hasta seleccionar presentación
          const precioContainer = document.getElementById('precio-tamano-container');
          if (precioContainer) {
            precioContainer.style.display = 'none';
          }
        } else {
          // Si no tiene presentación, usar precio directo
          precioSeleccionado = Number(tamanoBtn.dataset.precio);
          
          // Validar que el precio sea un número válido
          if (isNaN(precioSeleccionado) || precioSeleccionado <= 0) {
            console.error('Precio inválido:', tamanoBtn.dataset.precio);
            precioSeleccionado = null;
          }
          
          // Ocultar sección de presentación si existe
          const presentacionSection = document.getElementById('presentacion-tamanos-section');
          if (presentacionSection) {
            presentacionSection.style.display = 'none';
          }
        }
        
        actualizarBotónAgregar();
      });
    }
    
    // Listeners para botones de presentación (solo si tiene presentación en tamaños)
    if (tienePresentacionEnTamanos) {
      const presentacionSection = document.getElementById('presentacion-tamanos-section');
      if (presentacionSection) {
        presentacionSection.addEventListener('click', (e) => {
          const presentacionBtn = e.target.closest('.presentacion-tamano-btn');
          if (!presentacionBtn || !tipoCompraSeleccionado || !tamanoSeleccionado) return;
          
          // Remover selección anterior
          const presentacionBtns = presentacionSection.querySelectorAll('.presentacion-tamano-btn');
          presentacionBtns.forEach(b => {
            b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
          });
          
          // Agregar selección actual
          presentacionBtn.classList.add('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
          presentacionSeleccionada = presentacionBtn.dataset.presentacion;
          
          console.log('Presentación seleccionada:', {
            presentacionSeleccionada,
            tipoCompraSeleccionado,
            tamanoSeleccionado
          });
          
          // Buscar el tamaño seleccionado y obtener el precio
          const tamanoData = tamanos.find(t => t.nombre === tamanoSeleccionado);
          if (tamanoData && tamanoData[tipoCompraSeleccionado]) {
            const preciosDelTamano = tamanoData[tipoCompraSeleccionado];
            if (preciosDelTamano && preciosDelTamano[presentacionSeleccionada] !== undefined) {
              precioSeleccionado = Number(preciosDelTamano[presentacionSeleccionada]);
              
              // Validar que el precio sea un número válido
              if (isNaN(precioSeleccionado) || precioSeleccionado <= 0) {
                console.error('Precio inválido:', preciosDelTamano[presentacionSeleccionada]);
                precioSeleccionado = null;
              } else {
                // Mostrar precio
                const precioContainer = document.getElementById('precio-tamano-container');
                const precioValor = document.getElementById('precio-tamano-valor');
                if (precioContainer && precioValor) {
                  precioValor.textContent = `$${precioSeleccionado.toLocaleString()}`;
                  precioContainer.style.display = 'block';
                  setTimeout(() => {
                    const precioDisplay = document.getElementById('precio-tamano-display');
                    if (precioDisplay) precioDisplay.style.opacity = '1';
                  }, 10);
                }
              }
            } else {
              console.error('No se encontró el precio para la presentación:', presentacionSeleccionada);
              precioSeleccionado = null;
            }
          } else {
            console.error('No se encontraron datos del tamaño o tipo de compra');
            precioSeleccionado = null;
          }
          
          // Actualizar botón inmediatamente
          actualizarBotónAgregar();
          
          // También actualizar después de un pequeño delay para asegurar que el DOM esté completamente actualizado
          setTimeout(() => {
            actualizarBotónAgregar();
          }, 100);
        });
      }
    }
    
    // Event listener para agregar al carrito
    const btnAgregarFinal = obtenerBtnAgregar();
    if (btnAgregarFinal) {
      // Remover todos los listeners anteriores agregando uno nuevo
      const nuevoBtnAgregar = btnAgregarFinal.cloneNode(true);
      btnAgregarFinal.parentNode.replaceChild(nuevoBtnAgregar, btnAgregarFinal);
      
      nuevoBtnAgregar.addEventListener('click', () => {
        if (!tamanoSeleccionado || !precioSeleccionado) {
          if (typeof mostrarNotificacion === 'function') {
            mostrarNotificacion('Por favor completa todas las selecciones', 'error');
          }
          return;
        }
        
        // Validar que si tiene presentación, esté seleccionada
        if (tienePresentacionEnTamanos && !presentacionSeleccionada) {
          if (typeof mostrarNotificacion === 'function') {
            mostrarNotificacion('Por favor selecciona una presentación', 'error');
          }
          return;
        }
        
        const tipoCompra = tipoCompraSeleccionado || (esMayorista ? 'mayorista' : 'detal');
        // Si tiene presentación, combinarla con el tamaño
        const presentacionOTamano = tienePresentacionEnTamanos && presentacionSeleccionada 
          ? `${tamanoSeleccionado} ${presentacionSeleccionada.charAt(0).toUpperCase() + presentacionSeleccionada.slice(1)}`
          : tamanoSeleccionado;
        
        try {
          agregarAlCarrito(producto.id, tipoCompra, presentacionOTamano, precioSeleccionado);
          cerrarModalProducto();
        } catch (error) {
          console.error('Error al agregar al carrito:', error);
          if (typeof mostrarNotificacion === 'function') {
            mostrarNotificacion('Error al agregar el producto. Intenta nuevamente.', 'error');
          }
        }
      });
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    return;
  }
  
  // Detectar si el producto tiene precios simples (sin bolsa/caja) o con presentación
  let tienePresentacion = false;
  let precios;
  
  if (producto.precios) {
    // Si tiene precios definidos, verificar si son simples o con presentación
    if (typeof producto.precios.detal === 'number' && typeof producto.precios.mayorista === 'number') {
      // Precios simples (solo detal y mayorista)
      tienePresentacion = false;
      precios = producto.precios;
    } else if (producto.precios.detal && typeof producto.precios.detal === 'object') {
      // Precios con presentación (bolsa/caja)
      // Verificar si tiene caja disponible (no es 0 o null)
      const tieneCaja = producto.precios.detal.caja && producto.precios.detal.caja > 0;
      tienePresentacion = tieneCaja;
      precios = producto.precios;
    } else {
      // Formato desconocido, calcular desde tamanos
      tienePresentacion = true;
      const precioBaseDetal = Math.min(...producto.tamanos.map(t => t.precio));
      precios = {
        detal: { 
          bolsa: precioBaseDetal, 
          caja: Math.round(precioBaseDetal * 1.2) 
        },
        mayorista: { 
          bolsa: Math.round(precioBaseDetal * 0.6), 
          caja: Math.round(precioBaseDetal * 0.75) 
        }
      };
    }
  } else {
    // Calcular desde tamanos (por defecto con presentación)
    tienePresentacion = true;
    const precioBaseDetal = Math.min(...producto.tamanos.map(t => t.precio));
    precios = {
      detal: { 
        bolsa: precioBaseDetal, 
        caja: Math.round(precioBaseDetal * 1.2) 
      },
      mayorista: { 
        bolsa: Math.round(precioBaseDetal * 0.6), 
        caja: Math.round(precioBaseDetal * 0.75) 
      }
    };
  }
  
  content.innerHTML = `
    <!-- Título centrado -->
    <div class="text-center mb-6 relative">
      <h3 class="font-playfair text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
        ${producto.nombre}
      </h3>
      <button onclick="cerrarModalProducto()" class="absolute top-0 right-0 p-2 rounded-full transition" aria-label="Cerrar">
        <i class="fas fa-times text-xl text-gray-600 dark:text-gray-400"></i>
      </button>
    </div>
    
    <!-- Imagen del producto centrada y bien formateada -->
    <div class="mb-6 flex justify-center px-2">
      <div class="modal-media modal-media-lg" id="product-image-container">
          <button type="button" class="producto-zoom" aria-label="Ampliar imagen" onclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')"><i class="fas fa-expand"></i></button>
        <img 
          src="${producto.imagen}" 
          alt="${producto.nombre} - ${producto.descripcion ? producto.descripcion.substring(0, 100) : 'Vela artesanal'}"
          class="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          id="product-image-${producto.id}"
          loading="lazy"
          decoding="async"
          onerror="this.style.filter='grayscale(100%) opacity(0.5)'; this.style.padding='20px';"
          style=""
        >
        
      </div>
    </div>
    
    <!-- Descripción centrada -->
    <p class="text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
      ${producto.descripcion}
    </p>
    
    <!-- Primera sección: Selección de tipo de compra -->
    <div class="mb-6">
      <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
        Selecciona tipo de compra:
      </label>
      <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <button 
          data-tipo="detal"
          class="tipo-compra-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[70px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
        >
          <div class="font-bold text-lg">Detal</div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Venta al detal</div>
        </button>
        <button 
          data-tipo="mayorista"
          class="tipo-compra-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[70px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30"
        >
          <div class="font-bold text-lg">Mayorista</div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Venta por volumen</div>
        </button>
      </div>
    </div>
    
    <!-- Segunda sección: Selección de presentación (solo si tiene presentación) -->
    ${tienePresentacion ? `
    <div class="mb-6" id="presentacion-section" style="display: none;">
      <label class="block text-center text-sm font-semibold text-gray-800 dark:text-white mb-4">
        Selecciona presentación:
      </label>
      <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <button 
          data-presentacion="bolsa"
          class="presentacion-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[100px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 flex flex-col items-center justify-center"
        >
          <div class="font-bold text-lg mb-1">Bolsa</div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">Presentación individual</div>
          <div class="text-yellow-600 dark:text-yellow-400 font-bold text-xl" id="precio-bolsa-display">-</div>
        </button>
        <button 
          data-presentacion="caja"
          class="presentacion-btn px-6 py-4 border-2 rounded-xl transition-all min-h-[100px] border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-500 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 flex flex-col items-center justify-center"
        >
          <div class="font-bold text-lg mb-1">Caja</div>
          <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">Presentación completa</div>
          <div class="text-yellow-600 dark:text-yellow-400 font-bold text-xl" id="precio-caja-display">-</div>
        </button>
      </div>
    </div>
    ` : ''}
    
    <!-- Precio dinámico -->
    <div class="mb-8 text-center" id="precio-container">
      <div id="precio-display" class="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400 opacity-0 transition-opacity duration-300">
        <span class="text-2xl">💛</span> Precio: <span id="precio-valor">-</span>
      </div>
    </div>
    
    <!-- Botón agregar al carrito -->
    <button 
      id="add-to-cart-btn"
      disabled
      class="w-full max-w-md mx-auto block py-4 bg-gray-400 text-white rounded-full font-semibold transition-all duration-300 min-h-[48px] flex items-center justify-center opacity-50 cursor-not-allowed"
    >
      ${tienePresentacion ? 'Selecciona tipo de compra y presentación' : 'Selecciona tipo de compra'}
    </button>
  `;
  
  modal.classList.remove('hidden');
  
  // Variables de selección
  let tipoCompraSeleccionado = null;
  let presentacionSeleccionada = null;
  let precioActual = null;
  
  const tipoBtns = content.querySelectorAll('.tipo-compra-btn');
  const presentacionSection = document.getElementById('presentacion-section');
  const presentacionBtns = content.querySelectorAll('.presentacion-btn');
  const precioDisplay = document.getElementById('precio-display');
  const precioValor = document.getElementById('precio-valor');
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  
  // Event listeners para botones de tipo de compra
  tipoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase active de todos los botones de tipo
      tipoBtns.forEach(b => {
        b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
        // Restaurar gradientes originales
        if (b.dataset.tipo === 'detal') {
          b.classList.add('bg-gradient-to-br', 'from-blue-50', 'to-blue-100', 'dark:from-blue-900/30', 'dark:to-blue-800/30');
        } else if (b.dataset.tipo === 'mayorista') {
          b.classList.add('bg-gradient-to-br', 'from-purple-50', 'to-purple-100', 'dark:from-purple-900/30', 'dark:to-purple-800/30');
        }
      });
      
      // Agregar clase active al botón seleccionado
      btn.classList.add('border-yellow-500', 'active');
      // Remover gradientes originales cuando está activo
      btn.classList.remove('bg-gradient-to-br', 'from-blue-50', 'to-blue-100', 'dark:from-blue-900/30', 'dark:to-blue-800/30', 'from-purple-50', 'to-purple-100', 'dark:from-purple-900/30', 'dark:to-purple-800/30');
      tipoCompraSeleccionado = btn.dataset.tipo;
      
      if (tienePresentacion) {
        // Mostrar sección de presentación solo si tiene presentación
        if (presentacionSection) {
          presentacionSection.style.display = 'block';
        }
        
        // Actualizar precios en los botones de presentación
        const precioBolsaDisplay = document.getElementById('precio-bolsa-display');
        const precioCajaDisplay = document.getElementById('precio-caja-display');
        
        if (precioBolsaDisplay && precios[tipoCompraSeleccionado].bolsa) {
          precioBolsaDisplay.textContent = `$${precios[tipoCompraSeleccionado].bolsa.toLocaleString()}`;
        }
        if (precioCajaDisplay && precios[tipoCompraSeleccionado].caja) {
          precioCajaDisplay.textContent = `$${precios[tipoCompraSeleccionado].caja.toLocaleString()}`;
        }
        
        // Resetear selección de presentación cuando cambia el tipo
        presentacionSeleccionada = null;
        presentacionBtns.forEach(b => {
          b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
        });
        
        // Ocultar precio hasta que se seleccione presentación
        precioDisplay.style.opacity = '0';
        precioValor.textContent = '-';
      } else {
        // Si no tiene presentación, mostrar precio directamente
        // Si tiene estructura de objeto con bolsa, usar bolsa; si no, usar el valor directo
        if (typeof precios[tipoCompraSeleccionado] === 'object' && precios[tipoCompraSeleccionado].bolsa) {
          precioActual = precios[tipoCompraSeleccionado].bolsa;
          presentacionSeleccionada = 'bolsa'; // Establecer bolsa por defecto
        } else {
          precioActual = precios[tipoCompraSeleccionado];
          presentacionSeleccionada = null;
        }
        precioValor.textContent = `$${precioActual.toLocaleString()}`;
        precioDisplay.style.opacity = '1';
      }
      
      actualizarBotónCarrito();
    });
  });
  
  // Event listeners para botones de presentación (solo si tiene presentación)
  if (tienePresentacion) {
    presentacionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!tipoCompraSeleccionado) return;
        
        // Remover clase active de todos los botones de presentación
        presentacionBtns.forEach(b => {
          b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
        });
        
        // Agregar clase active al botón seleccionado
        btn.classList.add('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
        presentacionSeleccionada = btn.dataset.presentacion;
        
        // Calcular y mostrar precio
        precioActual = precios[tipoCompraSeleccionado][presentacionSeleccionada];
        
        // Mostrar precio con animación
        precioValor.textContent = `$${precioActual.toLocaleString()}`;
        precioDisplay.style.opacity = '1';
        
        actualizarBotónCarrito();
      });
    });
  }
  
  function actualizarBotónCarrito() {
    if (tienePresentacion) {
      // Con presentación: necesita tipo y presentación
      if (tipoCompraSeleccionado && presentacionSeleccionada && precioActual) {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove('bg-gray-400', 'opacity-50', 'cursor-not-allowed');
        addToCartBtn.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
        addToCartBtn.textContent = 'Agregar al Carrito';
        addToCartBtn.onclick = () => {
          agregarAlCarrito(
            producto.id, 
            tipoCompraSeleccionado,
            presentacionSeleccionada,
            precioActual
          );
          cerrarModalProducto();
        };
      } else {
        addToCartBtn.disabled = true;
        addToCartBtn.classList.add('bg-gray-400', 'opacity-50', 'cursor-not-allowed');
        addToCartBtn.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
        
        if (!tipoCompraSeleccionado) {
          addToCartBtn.textContent = 'Selecciona tipo de compra y presentación';
        } else if (!presentacionSeleccionada) {
          addToCartBtn.textContent = 'Selecciona presentación';
        }
        
        addToCartBtn.onclick = null;
      }
    } else {
      // Sin presentación: solo necesita tipo
      // Si tiene estructura de objeto con bolsa, usar bolsa automáticamente
      if (tipoCompraSeleccionado && precioActual) {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove('bg-gray-400', 'opacity-50', 'cursor-not-allowed');
        addToCartBtn.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
        addToCartBtn.textContent = 'Agregar al Carrito';
        addToCartBtn.onclick = () => {
          agregarAlCarrito(
            producto.id, 
            tipoCompraSeleccionado,
            presentacionSeleccionada || null, // Usar 'bolsa' si está disponible, si no null
            precioActual
          );
          cerrarModalProducto();
        };
      } else {
        addToCartBtn.disabled = true;
        addToCartBtn.classList.add('bg-gray-400', 'opacity-50', 'cursor-not-allowed');
        addToCartBtn.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
        addToCartBtn.textContent = 'Selecciona tipo de compra';
        addToCartBtn.onclick = null;
      }
    }
  }
}

function cerrarModalProducto() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
  
  // Limpiar el contenido del modal para evitar acumulación de listeners
  const content = document.getElementById('product-modal-content');
  if (content) {
    content.innerHTML = '';
  }
}

// Función para ampliar imagen del producto
function ampliarImagenProducto(imagenSrc, nombreProducto) {
  // Crear modal de imagen ampliada si no existe
  let imageModal = document.getElementById('image-zoom-modal');
  if (!imageModal) {
    imageModal = document.createElement('div');
    imageModal.id = 'image-zoom-modal';
    imageModal.className = 'visor hidden';
    imageModal.setAttribute('role', 'dialog');
    imageModal.setAttribute('aria-modal', 'true');
    imageModal.setAttribute('aria-label', 'Imagen ampliada');
    // El botón de cerrar iba en blanco al 10% sobre fondo casi negro:
    // apenas se veía y el cliente se quedaba sin saber cómo salir.
    imageModal.innerHTML = `
      <button type="button" onclick="cerrarImagenAmpliada()" class="visor-cerrar" aria-label="Cerrar imagen">
        <i class="fas fa-times" aria-hidden="true"></i>
        <span>Cerrar</span>
      </button>
      <div class="visor-cuerpo">
        <img
          src="${imagenSrc}"
          alt="${nombreProducto} - Vista ampliada"
          class="visor-img"
          id="zoomed-image"
          loading="eager"
          decoding="async"
        >
        <p class="visor-nombre">${nombreProducto}</p>
      </div>
      <p class="visor-ayuda">Toca fuera de la imagen o pulsa Esc para volver</p>
    `;
    document.body.appendChild(imageModal);
    
    // Cerrar al hacer clic fuera de la imagen
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal || e.target.closest('button')) {
        cerrarImagenAmpliada();
      }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
        cerrarImagenAmpliada();
      }
    });
  }
  
  // Actualizar imagen y mostrar modal
  const zoomedImg = document.getElementById('zoomed-image');
  if (zoomedImg) {
    zoomedImg.src = imagenSrc;
    zoomedImg.alt = nombreProducto;
  }
  
  const productName = imageModal.querySelector('p');
  if (productName) {
    productName.textContent = nombreProducto;
  }
  
  imageModal.classList.remove('hidden');
}

function cerrarImagenAmpliada() {
  const imageModal = document.getElementById('image-zoom-modal');
  if (imageModal) {
    imageModal.classList.add('hidden');
  }
}

// Exportar funciones globalmente
window.ampliarImagenProducto = ampliarImagenProducto;
window.cerrarImagenAmpliada = cerrarImagenAmpliada;

window.abrirModalProducto = abrirModalProducto;
window.cerrarModalProducto = cerrarModalProducto;

// Cerrar modal al hacer click en overlay
const productOverlay = document.getElementById('product-overlay');
if (productOverlay) {
  productOverlay.addEventListener('click', cerrarModalProducto);
}

// Promociones
function initPromociones() {
  renderPromociones();
  iniciarCarrusel();
}

function renderPromociones() {
  const container = document.getElementById('promo-slides');
  if (!container) return;

  container.innerHTML = promociones.map((promo, index) => `
    <article class="promo-slide" role="group" aria-roledescription="diapositiva"
             aria-label="${index + 1} de ${promociones.length}">
      <div class="promo-cuerpo">
        <span class="promo-icono" aria-hidden="true">
          <i class="${promo.icon || 'fas fa-gift'}"></i>
        </span>
        ${promo.subtitulo ? `<span class="promo-eyebrow">${promo.subtitulo}</span>` : ''}
        <h3 class="promo-titulo">${promo.titulo}</h3>
        ${promo.descripcion ? `<p class="promo-texto">${promo.descripcion}</p>` : ''}
        <a href="#productos" class="btn btn-secondary promo-accion">Ver catálogo</a>
      </div>
    </article>
  `).join('');

  renderPromoPuntos();
  if (typeof refrescarMovimiento === 'function') refrescarMovimiento(container.parentElement);
}

// Los puntos son además el control: se puede saltar a una promo concreta.
function renderPromoPuntos() {
  const cont = document.getElementById('promo-puntos');
  if (!cont) return;
  cont.innerHTML = promociones.map((p, i) => `
    <button type="button" class="promo-punto${i === (state.currentPromoSlide || 0) ? ' active' : ''}"
            data-slide="${i}" aria-label="Ir a ${p.titulo}"></button>
  `).join('');
}

function actualizarPromoPuntos() {
  const cont = document.getElementById('promo-puntos');
  if (!cont) return;
  const actual = state.currentPromoSlide || 0;
  const puntos = cont.querySelectorAll('.promo-punto');
  // Se quita .active de todos y se vuelve a poner tras forzar un reflujo:
  // es lo que reinicia la barra de progreso, que vive en el ::after.
  puntos.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  const elegido = puntos[actual];
  if (elegido) {
    void elegido.offsetWidth;
    elegido.classList.add('active');
    elegido.setAttribute('aria-selected', 'true');
  }
}

// --- Carrusel de promociones -------------------------------------------
// Avanza solo. Un único par arrancar/parar: antes el mousedown paraba el
// temporizador y el mouseleave no lo reanudaba, así que bastaba pulsar y
// sacar el ratón para que se quedara clavado.

const PROMO_PAUSA = 4000;

let carruselCableado = false;

function iniciarCarrusel() {
  const pista = document.getElementById('promo-slides');
  const carrusel = document.getElementById('promo-carousel');
  if (!pista || !carrusel) return;

  const total = promociones.length;
  if (total < 2) return;

  if (carruselCableado) { actualizarCarrusel(); return; }
  carruselCableado = true;

  // Un único temporizador que NUNCA se cancela. Antes se paraba y se
  // arrancaba según varios "frenos", y bastaba que uno se quedara puesto
  // (por ejemplo, el carrusel visible sólo al 12%) para dejarlo clavado
  // para siempre. Ahora el estado se consulta al disparar: no hay forma
  // de que se quede bloqueado.
  let enPantalla = true;     // si no hay IntersectionObserver, se asume visible
  let arrastrando = false;
  let sobreControles = false;
  let ultimoToque = 0;       // instante del último gesto del usuario

  function debeAvanzar() {
    if (arrastrando || sobreControles) return false;
    if (document.hidden || !enPantalla) return false;
    // Tras tocarlo, se respeta una vuelta entera antes de seguir solo.
    if (Date.now() - ultimoToque < PROMO_PAUSA) return false;
    return true;
  }

  setInterval(() => {
    if (debeAvanzar()) irA(state.currentPromoSlide + 1);
    carrusel.classList.toggle('corriendo', debeAvanzar());
  }, PROMO_PAUSA);

  function irA(indice, porElUsuario) {
    state.currentPromoSlide = ((indice % total) + total) % total;
    actualizarCarrusel();
    if (porElUsuario) ultimoToque = Date.now();
  }

  /* --- Visibilidad --- */

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((e) => {
      // threshold 0: basta con que asome. Con 0.2 no llegaba a activarse
      // en pantallas donde el carrusel queda a medias.
      enPantalla = e[0].isIntersecting;
      carrusel.classList.toggle('corriendo', debeAvanzar());
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' }).observe(carrusel);
  }

  document.addEventListener('visibilitychange', () => {
    carrusel.classList.toggle('corriendo', debeAvanzar());
  });

  /* --- Arrastre y deslizamiento --- */

  const UMBRAL = 45;
  let inicioX = 0, inicioY = 0, eje = null;

  function agarrar(x, y) { inicioX = x; inicioY = y; arrastrando = true; eje = null; }

  function soltar(x) {
    if (!arrastrando) return;
    arrastrando = false;
    if (typeof x === 'number' && eje === 'x') {
      const dx = x - inicioX;
      if (Math.abs(dx) > UMBRAL) irA(state.currentPromoSlide + (dx < 0 ? 1 : -1), true);
    }
  }

  carrusel.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    agarrar(t.screenX, t.screenY);
  }, { passive: true });

  carrusel.addEventListener('touchmove', (e) => {
    if (!arrastrando) return;
    const t = e.changedTouches[0];
    if (eje === null) {
      // Se decide una vez si el dedo va en horizontal o en vertical; si va
      // en vertical, se deja pasar el scroll de la página.
      eje = Math.abs(t.screenX - inicioX) > Math.abs(t.screenY - inicioY) ? 'x' : 'y';
    }
    if (eje === 'x' && e.cancelable) e.preventDefault();
  }, { passive: false });

  carrusel.addEventListener('touchend', (e) => soltar(e.changedTouches[0].screenX), { passive: true });
  carrusel.addEventListener('touchcancel', () => soltar(), { passive: true });

  carrusel.addEventListener('mousedown', (e) => { agarrar(e.screenX, e.screenY); eje = 'x'; e.preventDefault(); });
  window.addEventListener('mouseup', (e) => soltar(e.screenX));
  // Si el puntero sale sin soltar, el arrastre se queda abierto y bloquea
  // el avance: aquí se cierra sin contarlo como deslizamiento.
  carrusel.addEventListener('mouseleave', () => { arrastrando = false; });
  window.addEventListener('blur', () => { arrastrando = false; });

  /* --- Puntos y teclado --- */

  const puntos = document.getElementById('promo-puntos');
  if (puntos) {
    // Sólo sobre los controles se pausa: la tarjeta ocupa media pantalla y
    // pausar ahí bastaba para que no volviera a avanzar.
    puntos.addEventListener('mouseenter', () => { sobreControles = true; });
    puntos.addEventListener('mouseleave', () => { sobreControles = false; });
    puntos.addEventListener('click', (e) => {
      const b = e.target.closest('.promo-punto');
      if (b) irA(Number(b.dataset.slide), true);
    });
  }

  carrusel.setAttribute('tabindex', '0');
  carrusel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); irA(state.currentPromoSlide + 1, true); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); irA(state.currentPromoSlide - 1, true); }
  });

  actualizarCarrusel();
  carrusel.classList.add('corriendo');
}

function actualizarCarrusel() {
  const slides = document.getElementById('promo-slides');
  if (!slides) return;
  
  slides.style.transform = `translateX(-${state.currentPromoSlide * 100}%)`;
  actualizarPromoPuntos();
}

// Videos
function initVideos() {
  renderVideos();
  initLazyVideos();
}

function initLazyVideos() {
  const videoContainers = document.querySelectorAll('.video-container-lazy');
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const videoSrc = container.getAttribute('data-video-src');
        const placeholder = container.querySelector('.video-placeholder');
        const video = container.querySelector('video');
        
        if (video && videoSrc && !video.src && placeholder) {
          // Sólo al pulsar: antes se descargaba con sólo asomar en pantalla,
          // y estos videos pesan hasta 7,7 MB.
          placeholder.addEventListener('click', () => {
            video.src = videoSrc;
            video.load();
            placeholder.classList.add('hidden');
            video.classList.remove('hidden');
            video.play().catch(() => {});
          }, { once: true });
          videoObserver.unobserve(container);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  videoContainers.forEach(container => {
    videoObserver.observe(container);
  });
}

function renderVideos() {
  const container = document.getElementById('videos-container');
  if (!container) return;

  const conContenido = videos.filter(v => v.videoSrc || v.url);

  if (!conContenido.length) {
    container.innerHTML = `
      <div class="reel-vacio">
        <i class="fas fa-video"></i>
        <p>Pronto publicaremos nuevos videos.</p>
      </div>`;
    return;
  }

  container.innerHTML = conContenido.map(video => {
    // Video propio: se descarga sólo al pulsar, nunca antes.
    if (video.videoSrc) {
      const base = video.videoSrc.split('/').pop().replace(/\.mp4$/i, '');
      const poster = 'assets/productos/Videos/posters/' + base + '.jpg';
      return `
      <article class="reel video-container-lazy" data-video-src="${video.videoSrc}">
        <img class="reel-poster" src="${poster}" alt="" loading="lazy" decoding="async"
             onerror="this.remove()">
        <button type="button" class="reel-lanzador video-placeholder" aria-label="Reproducir: ${video.titulo}">
          <span class="reel-play"><i class="fas fa-play"></i></span>
        </button>
        <video class="reel-video video-el hidden" preload="none" playsinline controls
               aria-label="${video.titulo}">
          Tu navegador no soporta videos HTML5.
        </video>
        <div class="reel-pie">
          <h3 class="reel-titulo">${video.titulo}</h3>
        </div>
      </article>`;
    }

    // Video de TikTok: portada alojada aquí que abre el original.
    return `
      <a class="reel reel-enlace" href="${video.url}" target="_blank" rel="noopener noreferrer"
         aria-label="Ver en TikTok: ${video.titulo}">
        <img class="reel-poster" src="${video.portada}" alt="" loading="lazy" decoding="async"
             onerror="this.remove()">
        <span class="reel-red"><i class="fab fa-tiktok" aria-hidden="true"></i></span>
        <span class="reel-play"><i class="fas fa-play"></i></span>
        <div class="reel-pie">
          <h3 class="reel-titulo">${video.titulo}</h3>
        </div>
      </a>`;
  }).join('');

  if (typeof refrescarMovimiento === 'function') refrescarMovimiento(container);
}

// Búsqueda mejorada
function initSearch() {
  const searchInput = document.getElementById('product-search');
  const searchIcon = document.querySelector('#product-search ~ .fa-search, .relative .fa-search');
  
  if (searchInput) {
    // Animación del icono al hacer focus
    searchInput.addEventListener('focus', () => {
      if (searchIcon) {
        searchIcon.style.color = 'var(--primary-gold)';
        searchIcon.style.transform = 'translateY(-50%) scale(1.1)';
      }
    });
    
    searchInput.addEventListener('blur', () => {
      if (searchIcon && !searchInput.value) {
        searchIcon.style.color = '';
        searchIcon.style.transform = '';
      }
    });
    
    searchInput.addEventListener('input', (e) => {
      state.busqueda = e.target.value;
      
      renderProductos();
    });
  }
}

// Animaciones
function initAnimations() {
  // Intersection Observer para fade-in
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Ripple effect
  document.addEventListener('click', (e) => {
    if (e.target.closest('.ripple-effect')) {
      const button = e.target.closest('.ripple-effect');
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  });
}

// Bottom Dock
function initBottomDock() {
  const dockLinks = document.querySelectorAll('#bottom-dock a, #bottom-dock button');
  dockLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.id === 'cart-button-dock') {
        e.preventDefault();
        abrirCarrito();
      } else {
        // Smooth scroll
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });
  
  // Ocultar/mostrar dock al hacer scroll
  let lastScrollTop = 0;
  const dock = document.getElementById('bottom-dock');
  if (!dock) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down - ocultar dock
      dock.style.transform = 'translateY(100%)';
    } else {
      // Scrolling up - mostrar dock
      dock.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, { passive: true });
}

// WhatsApp
function initWhatsApp() {
  // Los links ya están configurados en el HTML
}

// Botón Volver Arriba
function initScrollToTop() {
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;
  
  // Mostrar/ocultar botón según scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollButton.classList.remove('opacity-0', 'invisible');
      scrollButton.classList.add('opacity-100', 'visible');
    } else {
      scrollButton.classList.add('opacity-0', 'invisible');
      scrollButton.classList.remove('opacity-100', 'visible');
    }
  }, { passive: true });
  
  // Click para volver arriba
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Animación de vibración (si está disponible)
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  });
}

// Sistema de Navegación por Secciones
function initNavegacionSecciones() {
  // Detectar sección inicial desde URL hash
  const hash = window.location.hash.replace('#', '') || 'inicio';
  
  // Si el hash es 'videos', redirigir a inicio (los videos están en inicio)
  const hashFinal = hash === 'videos' ? 'inicio' : hash;
  mostrarSeccion(hashFinal);
  
  // Escuchar cambios en los enlaces del menú
  const enlaces = document.querySelectorAll('a[href^="#"]');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      let hash = enlace.getAttribute('href').replace('#', '');
      
      // Si el enlace es a videos, cambiar a inicio
      if (hash === 'videos') {
        hash = 'inicio';
        // Scroll a videos dentro de inicio
        setTimeout(() => {
          const videosSection = document.getElementById('videos');
          if (videosSection) {
            videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
      
      mostrarSeccion(hash);
      
      // Cerrar menú móvil si está abierto
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        const icon = document.getElementById('mobile-menu-button')?.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });
  });
  
  // Escuchar cambios en el hash de la URL
  window.addEventListener('hashchange', () => {
    let hash = window.location.hash.replace('#', '') || 'inicio';
    if (hash === 'videos') {
      hash = 'inicio';
      setTimeout(() => {
        const videosSection = document.getElementById('videos');
        if (videosSection) {
          videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    mostrarSeccion(hash);
  });
}

function mostrarSeccion(seccionId) {
  // Lista de secciones válidas
  const secciones = ['inicio', 'productos', 'personalizadas', 'contacto', 'videos'];
  
  // Si la sección no es válida, usar 'inicio'
  if (!secciones.includes(seccionId)) {
    seccionId = 'inicio';
  }
  
  // Ocultar todas las secciones principales
  const todasLasSecciones = document.querySelectorAll('.page-section');
  todasLasSecciones.forEach(seccion => {
    seccion.style.display = 'none';
  });
  
  // Ocultar secciones de inicio (promociones y videos)
  const seccionesInicio = document.querySelectorAll('.inicio-section');
  seccionesInicio.forEach(seccion => {
    seccion.style.display = 'none';
  });
  
  // Si es inicio, mostrar también promociones y videos
  if (seccionId === 'inicio') {
    seccionesInicio.forEach(seccion => {
      seccion.style.display = '';
    });
  }
  
  // Mostrar solo la sección activa
  const seccionActiva = document.getElementById(seccionId);
  if (seccionActiva) {
    seccionActiva.style.display = '';
    
    // Scroll suave al inicio de la sección
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  }
  
  // Actualizar estado
  state.seccionActual = seccionId;
  
  // Actualizar URL sin recargar
  if (window.location.hash !== `#${seccionId}`) {
    window.history.pushState(null, '', `#${seccionId}`);
  }
  
  // Resaltar enlace activo en el menú
  actualizarMenuActivo(seccionId);
  
  // Inicializar contenido específico de la sección si es necesario
  if (seccionId === 'productos') {
    // Asegurar que los productos se rendericen cuando se muestra la sección
    setTimeout(() => {
      // Si el contenedor está visible, renderizar productos
      const productsSection = document.getElementById('productos');
      if (productsSection && productsSection.style.display !== 'none') {
        renderProductos();
        renderCategorias();
      }
    }, 150);
  }
}

function actualizarMenuActivo(seccionId) {
  // El estado activo vive en una sola clase; el color lo decide theme.css.
  const enlaces = document.querySelectorAll('nav a[href^="#"]');
  enlaces.forEach(enlace => {
    enlace.classList.remove('active');
    enlace.removeAttribute('aria-current');
  });
  
  document.querySelectorAll(`nav a[href="#${seccionId}"]`).forEach(enlace => {
    enlace.classList.add('active');
    enlace.setAttribute('aria-current', 'page');
  });
}

// ============================================
// VELAS PERSONALIZADAS
// ============================================
// WhatsApp no deja adjuntar un archivo desde un enlace, así que la imagen
// de referencia se guarda en el equipo del usuario y se le indica cómo
// adjuntarla en el chat que se abre con el mensaje ya escrito.

const IMAGEN_MAX_MB = 8;

function initPersonalizadas() {
  const form = document.getElementById('form-personalizada');
  if (!form) return;

  const tieneImagenSi = document.getElementById('tiene-imagen-si');
  const tieneImagenNo = document.getElementById('tiene-imagen-no');
  const tieneImagenInput = document.getElementById('tiene-imagen');

  const zona = document.getElementById('imagen-zona');
  const entrada = document.getElementById('imagen-personalizada');
  const vista = document.getElementById('imagen-vista');
  const vistaImg = document.getElementById('imagen-vista-img');
  const vistaNombre = document.getElementById('imagen-vista-nombre');
  const vistaPeso = document.getElementById('imagen-vista-peso');
  const quitar = document.getElementById('imagen-quitar');
  const errorImagen = document.getElementById('error-imagen');
  const bloque = document.getElementById('imagen-bloque');

  // El archivo elegido, con su lectura en base64 para la vista previa
  let archivoElegido = null;
  let archivoBase64 = null;

  /* --- Chips sí/no: el "sí" despliega el área de subida --- */

  function elegirTiene(valor) {
    const si = valor === 'si';
    if (tieneImagenSi) {
      tieneImagenSi.classList.toggle('active', si);
      tieneImagenSi.setAttribute('aria-pressed', String(si));
    }
    if (tieneImagenNo) {
      tieneImagenNo.classList.toggle('active', !si);
      tieneImagenNo.setAttribute('aria-pressed', String(!si));
    }
    if (tieneImagenInput) tieneImagenInput.value = valor;
    if (bloque) {
      bloque.hidden = !si;
      bloque.setAttribute('aria-hidden', String(!si));
    }
    if (!si) limpiarImagen();
  }

  if (tieneImagenSi) tieneImagenSi.addEventListener('click', () => elegirTiene('si'));
  if (tieneImagenNo) tieneImagenNo.addEventListener('click', () => elegirTiene('no'));

  /* --- Elegir archivo: por clic, por teclado o arrastrando --- */

  function mostrarErrorImagen(texto) {
    if (!errorImagen) return;
    errorImagen.textContent = texto;
    errorImagen.classList.toggle('hidden', !texto);
  }

  function pesoLegible(bytes) {
    return bytes < 1048576
      ? Math.round(bytes / 1024) + ' KB'
      : (bytes / 1048576).toFixed(1) + ' MB';
  }

  function limpiarImagen() {
    archivoElegido = null;
    archivoBase64 = null;
    if (entrada) entrada.value = '';
    if (vistaImg) vistaImg.removeAttribute('src');
    if (vista) vista.hidden = true;
    if (zona) zona.hidden = false;
    mostrarErrorImagen('');
  }

  function aceptarArchivo(archivo) {
    if (!archivo) return;

    if (!/^image\//.test(archivo.type)) {
      mostrarErrorImagen('Ese archivo no es una imagen. Sube un JPG, PNG o WEBP.');
      return;
    }
    if (archivo.size > IMAGEN_MAX_MB * 1048576) {
      mostrarErrorImagen('La imagen pesa ' + pesoLegible(archivo.size) +
                         '. El máximo son ' + IMAGEN_MAX_MB + ' MB.');
      return;
    }

    mostrarErrorImagen('');
    archivoElegido = archivo;

    const lector = new FileReader();
    lector.onload = (e) => {
      archivoBase64 = e.target.result;
      if (vistaImg) vistaImg.src = archivoBase64;
      if (vistaNombre) vistaNombre.textContent = archivo.name;
      if (vistaPeso) vistaPeso.textContent = pesoLegible(archivo.size);
      if (vista) vista.hidden = false;
      if (zona) zona.hidden = true;
    };
    lector.onerror = () => mostrarErrorImagen('No se pudo leer la imagen. Prueba con otra.');
    lector.readAsDataURL(archivo);
  }

  if (entrada) {
    entrada.addEventListener('change', () => aceptarArchivo(entrada.files[0]));
  }

  if (zona) {
    zona.addEventListener('click', () => entrada && entrada.click());
    zona.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); entrada && entrada.click(); }
    });
    ['dragenter', 'dragover'].forEach(ev =>
      zona.addEventListener(ev, (e) => { e.preventDefault(); zona.classList.add('encima'); }));
    ['dragleave', 'drop'].forEach(ev =>
      zona.addEventListener(ev, (e) => { e.preventDefault(); zona.classList.remove('encima'); }));
    zona.addEventListener('drop', (e) => {
      const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) aceptarArchivo(f);
    });
  }

  if (quitar) quitar.addEventListener('click', limpiarImagen);

  /* --- Envío --- */

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre-personalizada').value.trim();
    const motivo = document.getElementById('motivo-personalizada').value.trim();
    const diseno = document.getElementById('diseno-personalizada').value.trim();
    const tieneImagen = tieneImagenInput ? tieneImagenInput.value : '';

    let hayErrores = false;
    const revisar = (valor, idError) => {
      const el = document.getElementById(idError);
      if (!el) return;
      el.classList.toggle('hidden', !!valor);
      if (!valor) hayErrores = true;
    };
    revisar(nombre, 'error-nombre');
    revisar(motivo, 'error-motivo');
    revisar(diseno, 'error-diseno');

    if (hayErrores) {
      const primero = document.querySelector('.field-error:not(.hidden)');
      if (primero) primero.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    let mensaje = '¡Hola Velas y Aromas Elena!\n\n';
    mensaje += 'Quiero hacer una vela personalizada.\n\n';
    mensaje += 'Nombre: ' + nombre + '\n';
    mensaje += 'Motivo: ' + motivo + '\n';
    mensaje += 'Idea: ' + diseno;

    if (archivoElegido) {
      mensaje += '\n\nTe adjunto en este chat la imagen de referencia.';
    } else if (tieneImagen === 'si') {
      mensaje += '\n\nTengo una imagen de referencia y te la envío por aquí.';
    } else if (tieneImagen === 'no') {
      mensaje += '\n\nNo tengo imagen de referencia.';
    }

    const url = 'https://api.whatsapp.com/send?phone=' + WHATSAPP_PHONE +
                '&text=' + encodeURIComponent(mensaje);

    if (archivoElegido) {
      // La imagen se descarga para que el usuario la adjunte en el chat.
      mostrarModalImagen(archivoBase64, archivoElegido.name, url, () => limpiar());
    } else {
      window.open(url, '_blank');
      mostrarNotificacion('Abriendo WhatsApp con tu pedido...', 'success');
      setTimeout(limpiar, 1500);
    }

    function limpiar() {
      form.reset();
      limpiarImagen();
      if (tieneImagenInput) tieneImagenInput.value = '';
      if (tieneImagenSi) { tieneImagenSi.classList.remove('active'); tieneImagenSi.setAttribute('aria-pressed', 'false'); }
      if (tieneImagenNo) { tieneImagenNo.classList.remove('active'); tieneImagenNo.setAttribute('aria-pressed', 'false'); }
      if (bloque) { bloque.hidden = true; bloque.setAttribute('aria-hidden', 'true'); }
      document.querySelectorAll('.field-error').forEach(el => el.classList.add('hidden'));
    }
  });
}

// Hoja con la imagen descargada y los pasos para adjuntarla en WhatsApp.
function mostrarModalImagen(imagenBase64, nombreArchivo, urlWhatsApp, alCerrar) {
  const anterior = document.getElementById('modal-imagen');
  if (anterior) anterior.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-imagen';
  modal.className = 'modal-imagen';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'modal-imagen-titulo');
  modal.innerHTML = `
    <div class="modal-overlay" data-cerrar></div>
    <div class="modal-imagen-hoja">
      <button type="button" class="ficha-cerrar" aria-label="Cerrar" data-cerrar>
        <i class="fas fa-times"></i>
      </button>

      <div class="modal-imagen-cabecera">
        <span class="promo-icono"><i class="fas fa-paperclip"></i></span>
        <h3 class="panel-title" id="modal-imagen-titulo">Adjunta tu imagen</h3>
        <p class="modal-imagen-intro">
          WhatsApp no permite adjuntar archivos desde un enlace. Guardamos tu
          imagen en el dispositivo para que la adjuntes en el chat.
        </p>
      </div>

      <figure class="modal-imagen-vista">
        <img src="${imagenBase64}" alt="Imagen de referencia seleccionada">
        <figcaption>${nombreArchivo}</figcaption>
      </figure>

      <ol class="modal-imagen-pasos">
        <li><span>1</span> Guarda la imagen con el botón de abajo.</li>
        <li><span>2</span> Se abre WhatsApp con tu mensaje ya escrito. Envíalo.</li>
        <li><span>3</span> Toca el clip 📎 y elige la imagen que acabas de guardar.</li>
      </ol>

      <div class="modal-imagen-acciones">
        <button type="button" class="btn btn-primary btn-block" id="modal-imagen-seguir">
          <i class="fas fa-download"></i> Guardar imagen y abrir WhatsApp
        </button>
        <button type="button" class="btn btn-ghost" data-cerrar>Cancelar</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  function cerrar() {
    modal.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', porTecla);
  }
  function porTecla(e) { if (e.key === 'Escape') cerrar(); }
  document.addEventListener('keydown', porTecla);

  modal.querySelectorAll('[data-cerrar]').forEach(b => b.addEventListener('click', cerrar));

  modal.querySelector('#modal-imagen-seguir').addEventListener('click', () => {
    const enlace = document.createElement('a');
    enlace.href = imagenBase64;
    enlace.download = nombreArchivo || 'imagen-referencia.jpg';
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    window.open(urlWhatsApp, '_blank');
    mostrarNotificacion('Imagen guardada. Adjúntala en el chat de WhatsApp.', 'success');
    cerrar();
    if (typeof alCerrar === 'function') alCerrar();
  });

  modal.querySelector('#modal-imagen-seguir').focus();
}

function comprarPorWhatsApp() {
  if (state.carrito.length === 0) {
    mostrarNotificacion('Tu carrito está vacío', 'error');
    return;
  }
  
  const total = state.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  
  let mensaje = `¡Hola! Me interesa hacer una compra:\n\n`;
  
  state.carrito.forEach((item, index) => {
    const tipoTexto = item.tipoCompra ? item.tipoCompra.charAt(0).toUpperCase() + item.tipoCompra.slice(1) : '';
    const presentacionTexto = item.presentacion ? item.presentacion.charAt(0).toUpperCase() + item.presentacion.slice(1) : '';
    const tamanoTexto = item.tamano ? item.tamano : '';
    
    mensaje += `${index + 1}. ${item.nombre}\n`;
    if (tipoTexto) {
      mensaje += `   - Tipo: ${tipoTexto}\n`;
    }
    if (tamanoTexto) {
      mensaje += `   - Tamaño: ${tamanoTexto}\n`;
    } else if (presentacionTexto) {
      mensaje += `   - Presentación: ${presentacionTexto}\n`;
    }
    mensaje += `   - Cantidad: ${item.cantidad}\n`;
    mensaje += `   - Precio unitario: $${item.precio.toLocaleString()}\n`;
    mensaje += `   - Subtotal: $${(item.precio * item.cantidad).toLocaleString()}\n\n`;
  });
  
  mensaje += `💰 Total: $${total.toLocaleString()}\n\n`;
  mensaje += `Gracias por tu atención.`;
  
  const url = WHATSAPP_API + encodeURIComponent(mensaje);
  window.open(url, '_blank');
}

// Partículas doradas flotantes
function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
}

// Partículas laterales para los márgenes
function initSideParticles() {
  const leftContainer = document.getElementById('side-particles-left');
  const rightContainer = document.getElementById('side-particles-right');
  
  if (!leftContainer || !rightContainer) return;
  
  // Solo mostrar en pantallas medianas y grandes
  if (window.innerWidth < 768) {
    leftContainer.style.display = 'none';
    rightContainer.style.display = 'none';
    return;
  }
  
  const particleCount = 20; // 20 partículas por lado
  
  // Partículas lado izquierdo
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'side-particle';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = 0.3 + Math.random() * 0.4;
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 15) + 's';
    particle.style.left = (10 + Math.random() * 20) + '%'; // Entre 10% y 30% desde el borde
    leftContainer.appendChild(particle);
  }
  
  // Partículas lado derecho
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'side-particle';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = 0.3 + Math.random() * 0.4;
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 15) + 's';
    particle.style.right = (10 + Math.random() * 20) + '%'; // Entre 10% y 30% desde el borde
    rightContainer.appendChild(particle);
  }
}

// Banners de catálogo
function initCatalogoBanners() {
  renderCatalogoBanners();
}

function renderCatalogoBanners() {
  const container = document.getElementById('catalog-banners');
  if (!container) return;
  
  const catalogs = [
    {
      id: 'amorYAmistad',
      nombre: 'Catálogo de Amor y Amistad',
      icon: 'fas fa-heart',
      color: 'glow-gold',
      bgColor: 'rgba(255, 215, 0, 0.1)'
    },
    {
      id: 'babyShower',
      nombre: 'Baby Shower',
      icon: 'fas fa-baby',
      color: 'glow-pink',
      bgColor: 'rgba(255, 105, 180, 0.1)',
      descripcion: 'Velas especiales para celebrar la llegada de tu bebé. Diseños tiernos y únicos.'
    },
    {
      id: 'primeraComunion',
      nombre: 'Primera Comunión',
      icon: 'fas fa-cross',
      color: 'glow-blue',
      bgColor: 'rgba(92, 138, 255, 0.1)',
      descripcion: 'Velas especiales para celebrar la Primera Comunión. Diseños religiosos y elegantes.'
    },
    {
      id: 'navidad',
      nombre: 'Navidad',
      icon: 'fas fa-snowflake',
      color: 'glow-red',
      bgColor: 'rgba(255, 0, 0, 0.1)',
      descripcion: 'Velas navideñas para crear el ambiente perfecto en las fiestas.'
    }
  ];
  
  container.innerHTML = catalogs.map(cat => {
    const productos = obtenerProductosPorCategoria(cat.id);
    if (productos.length === 0) return '';
    
    return `
      <div class="catalog-banner" id="banner-${cat.id}" style="background: ${cat.bgColor};">
        <div class="flex items-center justify-center mb-4">
          <i class="${cat.icon} text-4xl ${cat.color} mr-4"></i>
          <h3 class="font-playfair text-3xl font-bold ${cat.color}">${cat.nombre}</h3>
        </div>
        ${cat.descripcion ? `<p class="text-white/90 text-center mb-6">${cat.descripcion}</p>` : ''}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${productos.slice(0, 3).map(p => `
            <div class="bg-gray-900 rounded-xl p-3 border border-yellow-500/20 hover:border-yellow-500/50 transition cursor-pointer" onclick="abrirModalProducto('${p.id}')">
              <div class="bg-gray-800 rounded-lg p-2 mb-2 flex items-center justify-center h-32">
                <img src="${p.imagen}" alt="${p.nombre}" class="max-w-full max-h-full w-auto h-auto object-contain" loading="lazy" decoding="async" onerror="this.parentElement.parentElement.style.display='none'">
              </div>
              <h4 class="font-bold text-white mb-2 text-sm text-center">${p.nombre}</h4>
            </div>
          `).filter(html => html !== '').join('')}
        </div>
        <div class="text-center mt-6">
          <button onclick="mostrarTodosProductos('${cat.id}')" class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition-all">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function obtenerProductosPorCategoria(categoriaId) {
  let catMap = {
    'amorYAmistad': 'amorYAmistad',
    'babyShower': 'celebracion',
    'primeraComunion': 'primeraComunion',
    'navidad': 'navidad'
  };
  
  const categoriaReal = catMap[categoriaId] || categoriaId;
  return productos[categoriaReal] || [];
}

function mostrarCatalogo(categoriaId) {
  const banner = document.getElementById(`banner-${categoriaId}`);
  if (banner) {
    banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    mostrarTodosProductos(categoriaId);
  }
}

function mostrarTodosProductos(categoriaId) {
  if (categoriaId === 'babyShower') {
    state.categoriaActual = 'celebracion';
  } else {
    state.categoriaActual = categoriaId;
  }
  renderCategorias();
  renderProductos();
  const productsSection = document.getElementById('productos');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

window.mostrarCatalogo = mostrarCatalogo;
window.mostrarTodosProductos = mostrarTodosProductos;

// Utilidades
// Toast mejorado para productos agregados al carrito
function mostrarToastProducto(producto) {
  // Remover toast anterior si existe
  const toastAnterior = document.getElementById('product-toast');
  if (toastAnterior) {
    toastAnterior.remove();
  }
  
  const toast = document.createElement('div');
  toast.id = 'product-toast';
  toast.className = 'fixed top-4 right-4 md:top-6 md:right-6 z-50 animate-slide-in-right';
  
  toast.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-yellow-400/50 p-4 max-w-sm w-full flex items-center gap-4 backdrop-blur-md">
      <div class="flex-shrink-0">
        <img src="${producto.imagen}" alt="${producto.nombre}" 
             class="w-16 h-16 object-cover rounded-xl border-2 border-yellow-400/30"
             onerror="this.src='https://via.placeholder.com/64x64?text=Vela'">
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <i class="fas fa-check-circle text-green-500 text-lg"></i>
          <p class="text-sm font-semibold text-gray-800 dark:text-white truncate">¡Agregado!</p>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 truncate mb-2">${producto.nombre}</p>
        <button onclick="abrirCarrito(); document.getElementById('product-toast')?.remove();" 
                class="w-full py-2 px-3 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
          <i class="fas fa-shopping-cart"></i>
          Ver Carrito
        </button>
      </div>
      <button onclick="document.getElementById('product-toast')?.remove();" 
              class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
        <i class="fas fa-times text-sm"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Auto-ocultar después de 5 segundos
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.add('animate-slide-out-right');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }
  }, 5000);
}

function mostrarNotificacion(mensaje, tipo = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg ${
    tipo === 'error' ? 'bg-red-500' : 'notification-success'
  } text-white font-semibold fade-in-up`;
  notification.textContent = mensaje;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Tailwind ya está configurado en el HTML
