// Elena Velas y Aromas - App Principal
// ======================================

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
      imagen: "assets/productos/Amor-y-amistad/2.png",
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
      imagen: "assets/productos/Amor-y-amistad/4.png",
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
      descripcion: "Flores aromáticas en empaque especial con domo transparente. Disponible en múltiples colores (rosa, rojo, blanco, morado, azul claro, amarillo). Medidas: 5.5cm x 5.5cm, peso 30gr.",
      imagen: "assets/productos/Amor-y-amistad/5.png",
      precios: {
        detal: 4700,
        mayorista: 4000
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
      nombre: "Flores con Aroma Empaque Especial",
      descripcion: "Flores aromáticas en empaque especial con domo transparente. Disponible en múltiples colores (rosa, rojo, blanco, morado, azul claro, amarillo). Medidas: 5.5cm x 5.5cm, peso 30gr.",
      imagen: "assets/productos/Amor-y-amistad/6.png",
      precios: {
        detal: 4700,
        mayorista: 4000
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
      imagen: "assets/productos/Amor-y-amistad/7.png",
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
      imagen: "assets/productos/Amor-y-amistad/8.png",
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
      imagen: "assets/productos/Amor-y-amistad/9.png",
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
      imagen: "assets/productos/Amor-y-amistad/10.png",
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
      imagen: "assets/productos/Amor-y-amistad/11.png",
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
      imagen: "assets/productos/Amor-y-amistad/12.png",
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
      imagen: "assets/productos/Amor-y-amistad/13.png",
      precios: {
        detal: 18500,
        mayorista: 16000
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
      imagen: "assets/productos/Amor-y-amistad/14.png",
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
      imagen: "assets/productos/Amor-y-amistad/15.png",
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
      imagen: "assets/productos/Amor-y-amistad/16.png",
      precios: {
        detal: 10800,
        mayorista: 9600
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
      imagen: "assets/productos/Amor-y-amistad/17.png",
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
      imagen: "assets/productos/Amor-y-amistad/18.png",
      precios: {
        detal: 3600,
        mayorista: 3100
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
      imagen: "assets/productos/Amor-y-amistad/19.png",
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
      imagen: "assets/productos/Amor-y-amistad/20.png",
      precios: {
        detal: 8500,
        mayorista: 7900
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
      imagen: "assets/productos/Amor-y-amistad/21.png",
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
      imagen: "assets/productos/Amor-y-amistad/22.png",
      precios: {
        detal: 11900,
        mayorista: 9600
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
      imagen: "assets/productos/Amor-y-amistad/23.png",
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
      imagen: "assets/productos/Baby-Shower/1.png",
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
      imagen: "assets/productos/Baby-Shower/1.png",
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
      imagen: "assets/productos/Baby-Shower/1.png",
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
      imagen: "assets/productos/Baby-Shower/2.png",
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
      imagen: "assets/productos/Baby-Shower/2.png",
      precios: {
        detal: 8500,
        mayorista: 7900
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
      imagen: "assets/productos/Baby-Shower/2.png",
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
      imagen: "assets/productos/Baby-Shower/3.png",
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
      imagen: "assets/productos/Baby-Shower/3.png",
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
      imagen: "assets/productos/Baby-Shower/3.png",
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
      id: "bs9",
      categoria: "celebracion",
      nombre: "COMPOTA 00",
      descripcion: "Compota en frasco de vidrio con tapa verde. Disponible en múltiples sabores. Presentación individual. Ideal como detalle para baby shower. Medidas: 4.2cm altura x 4.3cm ancho, peso 25gr.",
      imagen: "assets/productos/Baby-Shower/4.png",
      precios: {
        detal: 5500,
        mayorista: 5000
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
      imagen: "assets/productos/Baby-Shower/4.png",
      precios: {
        detal: 3500,
        mayorista: 3100
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
      imagen: "assets/productos/Baby-Shower/4.png",
      precios: {
        detal: 3300,
        mayorista: 2900
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
      imagen: "assets/productos/Primera-Comunion/1.png",
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
      imagen: "assets/productos/Primera-Comunion/2.png",
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
      imagen: "assets/productos/Primera-Comunion/2.png",
      precios: {
        detal: 8500,
        mayorista: 7700
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
      imagen: "assets/productos/Primera-Comunion/2.png",
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
      imagen: "assets/productos/Primera-Comunion/3.png",
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
      imagen: "assets/productos/Primera-Comunion/4.png",
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
      imagen: "assets/productos/Primera-Comunion/4.png",
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
      imagen: "assets/productos/Primera-Comunion/4.png",
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
      imagen: "assets/productos/Primera-Comunion/5.png",
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
      imagen: "assets/productos/Primera-Comunion/5.png",
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
      imagen: "assets/productos/Primera-Comunion/5.png",
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
      imagen: "assets/productos/Primera-Comunion/6.png",
      precios: {
        detal: 7500,
        mayorista: 6900
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
      imagen: "assets/productos/Primera-Comunion/6.png",
      precios: {
        detal: 6500,
        mayorista: 6000
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
      imagen: "assets/productos/Primera-Comunion/6.png",
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
      imagen: "assets/productos/Primera-Comunion/7.png",
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
      imagen: "assets/productos/Primera-Comunion/8.png",
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
    // Productos combinados Detal + Mayorista
    {
      id: "nav1",
      categoria: "navidad",
      nombre: "Vela Papá Noel",
      descripcion: "Vela navideña Papá Noel para venta al detal. Diseño festivo y fragancias navideñas. Altura: 14cm, Diámetro: 3.2cm.",
      imagen: "assets/productos/Navidad/1.jpg",
      precios: {
        detal: {
          bolsa: 12500,
          caja: 14500
        },
        mayorista: {
          bolsa: 10500,
          caja: 12500
        }
      }
    },
    {
      id: "nad2",
      categoria: "navidad",
      nombre: "Souvenir Navideño",
      descripcion: "Velas navideñas decorativas con diseño especial. Incluye velas en forma de Papá Noel, conos navideños y velas rectangulares con mensajes festivos. Disponible en bolsa.",
      imagen: "assets/productos/Navidad/2.jpg",
      precios: {
        detal: {
          bolsa: 3900,
          caja: 0
        },
        mayorista: {
          bolsa: 3700,
          caja: 0
        }
      }
    },
    {
      id: "nad3",
      categoria: "navidad",
      nombre: "Vela Degrade Larga Marcada",
      descripcion: "Velas largas con efecto degradado y personalización con nombres o mensajes. Disponible en múltiples colores vibrantes (rosa, amarillo, azul, verde). Disponible en dos tamaños: Grande y Pequeña, con presentación en bolsa o caja.",
      imagen: "assets/productos/Navidad/3.jpg",
      tamanos: [
        { nombre: "Grande Bolsa", precio: 10800 },
        { nombre: "Pequeña Bolsa", precio: 10500 },
        { nombre: "Grande Caja", precio: 12500 },
        { nombre: "Pequeña Caja", precio: 11500 }
      ]
    },
    {
      id: "nad4",
      categoria: "navidad",
      nombre: "Vela Degrade Pequeña",
      descripcion: "Velas degradadas pequeñas con efecto de color degradado. Disponibles en múltiples colores vibrantes (rosa, amarillo, azul, verde). Algunas incluyen palabras como Amor, Paz, Júbilo, Alegría, Prosperidad, Felicidad. Altura: 14cm, Diámetro: 1.5cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/4.jpg",
      precios: {
        detal: {
          bolsa: 15500,
          caja: 17000
        },
        mayorista: {
          bolsa: 14000,
          caja: 15900
        }
      }
    },
    {
      id: "nad5",
      categoria: "navidad",
      nombre: "Vela Mirella",
      descripcion: "Vela navideña decorativa con diseños festivos. Disponible en múltiples presentaciones: caja decorativa con ilustraciones navideñas (árbol, duende, muñeco de nieve) o bolsa individual. Velas blancas con bases brillantes en verde, dorado y rojo. Altura: 14cm, Diámetro: 1.5cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/5.jpg",
      precios: {
        detal: {
          bolsa: 16900,
          caja: 17500
        },
        mayorista: {
          bolsa: 15500,
          caja: 16800
        }
      }
    },
    {
      id: "nad6",
      categoria: "navidad",
      nombre: "Vela Blanca Larga Marcada",
      descripcion: "Velas blancas largas marcadas, individualmente empaquetadas en bolsa transparente con lazo dorado y etiqueta verde con mensaje 'Felices Fiestas'. Diseño elegante y festivo. Altura: 17cm, Diámetro: 1.5cm. Disponible solo en bolsa.",
      imagen: "assets/productos/Navidad/6.jpg",
      precios: {
        detal: {
          bolsa: 10800,
          caja: 0
        },
        mayorista: {
          bolsa: 9800,
          caja: 0
        }
      }
    },
    {
      id: "nad7",
      categoria: "navidad",
      nombre: "Vela Dorada",
      descripcion: "Velas navideñas blancas con bases doradas, cada una inscrita con palabras positivas y deseos como Prosperidad, Amor, Familia, Éxitos, Gratitud, Paz, Abundancia, Empleo, Salud y Dinero. Disponible en presentación individual en bolsa transparente o en caja decorativa navideña. Altura: 14cm, Diámetro: 1.5cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/7.jpg",
      precios: {
        detal: {
          bolsa: 16900,
          caja: 17500
        },
        mayorista: {
          bolsa: 15500,
          caja: 16800
        }
      }
    },
    {
      id: "nad8",
      categoria: "navidad",
      nombre: "Vela Navidad",
      descripcion: "Velas navideñas coloridas con palabras festivas como Unión, Alegría, Amor, Fe, Paz, Salud, Mayra. Cada vela tiene diseño brillante y textura glitter. Disponible en bolsa de tul (6 unidades) o caja decorativa navideña (6 unidades). Altura: 15cm, Diámetro: 3cm.",
      imagen: "assets/productos/Navidad/8.jpg",
      precios: {
        detal: {
          bolsa: 18500,
          caja: 19000
        },
        mayorista: {
          bolsa: 16800,
          caja: 17500
        }
      }
    },
    {
      id: "nad9",
      categoria: "navidad",
      nombre: "Caja Vela Propósito x6 Unidades",
      descripcion: "Set de 6 velas rectangulares blancas con palabras de propósito como Felicidad, Salud, Amor, Paz, Unión, Esperanza, Abundancia, Prosperidad, Éxito, Sabiduría y Fe. Cada palabra está escrita en colores vibrantes. Disponible en bolsa de tul (6 unidades) o caja decorativa navideña (6 unidades). Altura: 14cm, Diámetro: 3.5cm.",
      imagen: "assets/productos/Navidad/9.jpg",
      precios: {
        detal: {
          bolsa: 18500,
          caja: 19000
        },
        mayorista: {
          bolsa: 16800,
          caja: 17500
        }
      }
    },
    {
      id: "nad10",
      categoria: "navidad",
      nombre: "Vela Propósito Individual",
      descripcion: "Vela rectangular blanca individual con palabras de propósito como Gratitud. Empaquetada individualmente en bolsa transparente con lazo rojo. Cada vela tiene palabras escritas en cursiva, disponibles en diferentes colores (rojo, verde brillante).",
      imagen: "assets/productos/Navidad/10.jpg",
      precios: {
        detal: 3400,
        mayorista: 2900
      }
    },
    {
      id: "nad12",
      categoria: "navidad",
      nombre: "Arbol Navidad",
      descripcion: "Velas navideñas en forma de árbol de Navidad con diseño escalonado. Disponibles en colores rosa y verde/teal. Cada vela tiene decoración dorada en la parte superior. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 12cm, Diámetro: 7.5cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/12.jpg",
      precios: {
        detal: {
          bolsa: 9700,
          caja: 11500
        },
        mayorista: {
          bolsa: 7900,
          caja: 9500
        }
      }
    },
    {
      id: "nad13",
      categoria: "navidad",
      nombre: "Arbol Navidad Pino Pequeño",
      descripcion: "Velas navideñas pequeñas en forma de árbol de Navidad (pino) con efecto nevado en las puntas. Disponibles en colores verde oscuro, azul y verde menta. Cada vela tiene un adorno dorado en la parte superior. Empaquetadas en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 8cm, Diámetro: 8cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/13.jpg",
      precios: {
        detal: {
          bolsa: 5600,
          caja: 6500
        },
        mayorista: {
          bolsa: 4100,
          caja: 5500
        }
      }
    },
    {
      id: "nad14",
      categoria: "navidad",
      nombre: "Arbol Navidad Pino Grande",
      descripcion: "Velas navideñas grandes en forma de árbol de Navidad (pino) con efecto nevado en las puntas. Disponibles en colores rojo y blanco. Cada vela tiene textura que imita las hojas de pino y un adorno dorado en la parte superior. Empaquetadas en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 10cm, Diámetro: 8cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/14.jpg",
      precios: {
        detal: {
          bolsa: 6500,
          caja: 8500
        },
        mayorista: {
          bolsa: 5900,
          caja: 7500
        }
      }
    },
    {
      id: "nad15",
      categoria: "navidad",
      nombre: "Pesebre Estrella Arco",
      descripcion: "Velas navideñas decorativas en forma de arco con escena de pesebre (María, José y el niño Jesús) dentro, coronado con una estrella. Disponibles en colores verde azulado, azul, rojo y blanco. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 10cm, Diámetro: 9cm, Espesor: 3cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/15.jpg",
      precios: {
        detal: {
          bolsa: 7500,
          caja: 8900
        },
        mayorista: {
          bolsa: 6100,
          caja: 7900
        }
      }
    },
    {
      id: "nad16",
      categoria: "navidad",
      nombre: "Pesebre Estrella Navidad",
      descripcion: "Velas navideñas en forma de estrella con escena de pesebre (María, José y el niño Jesús) dentro del contorno de la estrella. Disponibles en colores verde azulado, azul, rojo y blanco. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 9cm, Diámetro: 9cm, Espesor: 3.5cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/16.jpg",
      precios: {
        detal: {
          bolsa: 6500,
          caja: 7900
        },
        mayorista: {
          bolsa: 5100,
          caja: 6800
        }
      }
    },
    {
      id: "nad17",
      categoria: "navidad",
      nombre: "Pesebre Arbol Navidad",
      descripcion: "Velas navideñas en forma de árbol de Navidad con escena de pesebre (María, José y el niño Jesús) integrada en su diseño. Cada vela está coronada con una estrella. Disponibles en colores rosa, verde azulado, azul y blanco con estrellas doradas. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 10cm, Diámetro: 7.5cm, Espesor: 3cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/17.jpg",
      precios: {
        detal: {
          bolsa: 6900,
          caja: 8400
        },
        mayorista: {
          bolsa: 6500,
          caja: 7900
        }
      }
    },
    {
      id: "nad18",
      categoria: "navidad",
      nombre: "Pesebre Casa Navidad",
      descripcion: "Velas navideñas en forma de casa con escena de pesebre (María, José y el niño Jesús) dentro. Cada casa tiene una estrella en el techo. Disponibles en colores azul, verde azulado, rojo, verde oscuro y blanco. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 10cm, Diámetro: 8.5cm, Espesor: 3cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/18.jpg",
      precios: {
        detal: {
          bolsa: 7500,
          caja: 9500
        },
        mayorista: {
          bolsa: 6800,
          caja: 8800
        }
      }
    },
    {
      id: "nad19",
      categoria: "navidad",
      nombre: "Pesebre Choza",
      descripcion: "Vela navideña blanca en forma de choza con techo texturizado que imita paja. La choza contiene una escena de pesebre (María, José y el niño Jesús) moldeada en la cera. Decorada con brillo dorado en el techo y la base. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/19.jpg",
      precios: {
        detal: {
          bolsa: 6500,
          caja: 7500
        },
        mayorista: {
          bolsa: 5600,
          caja: 6900
        }
      }
    },
    {
      id: "nad20",
      categoria: "navidad",
      nombre: "Bola Navidad Pesebre",
      descripcion: "Velas navideñas esféricas con escena de pesebre tallada en relieve (María, José y el niño Jesús en un pesebre, con animales y posiblemente pastores). Disponibles en colores rojo y verde azulado. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 6.5cm, Diámetro: 7.2cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/20.jpg",
      precios: {
        detal: {
          bolsa: 9000,
          caja: 10500
        },
        mayorista: {
          bolsa: 8500,
          caja: 9900
        }
      }
    },
    {
      id: "nad21",
      categoria: "navidad",
      nombre: "Bola Navidad",
      descripcion: "Velas navideñas esféricas ligeramente aplanadas con diseño tallado en relieve que muestra una escena de bosque invernal con ciervos y árboles. Disponibles en colores verde bosque y rojo navideño. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Altura: 7.2cm, Diámetro: 6.7cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/21.jpg",
      precios: {
        detal: {
          bolsa: 8000,
          caja: 9700
        },
        mayorista: {
          bolsa: 7500,
          caja: 8500
        }
      }
    },
    {
      id: "nad22",
      categoria: "navidad",
      nombre: "Muñeco de Nieve",
      descripcion: "Velas navideñas en forma de muñeco de nieve blanco con acabado brillante. El muñeco lleva un sombrero puntiagudo (que forma la mecha en la parte superior) y una bufanda alrededor del cuello. Tiene características faciales simples (ojos y nariz de zanahoria) y brazos pequeños. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/22.jpg",
      precios: {
        detal: {
          bolsa: 6500,
          caja: 7500
        },
        mayorista: {
          bolsa: 5000,
          caja: 6500
        }
      }
    },
    {
      id: "nad23",
      categoria: "navidad",
      nombre: "Angel Grande y Pequeño",
      descripcion: "Velas navideñas en forma de ángel blanco con un corte en forma de corazón en el centro. Disponibles en dos tamaños: Grande y Pequeño. Disponible en bolsa transparente con lazo dorado y etiqueta navideña. Disponible solo en bolsa.",
      imagen: "assets/productos/Navidad/23.jpg",
      tamanos: [
        { 
          nombre: "Grande Bolsa", 
          precios: {
            detal: 5500,
            mayorista: 4500
          }
        },
        { 
          nombre: "Pequeño Bolsa", 
          precios: {
            detal: 4500,
            mayorista: 4000
          }
        }
      ]
    },
    {
      id: "nad24",
      categoria: "navidad",
      nombre: "Pesebre Mini Poli",
      descripcion: "Velas navideñas mini con escena de pesebre (María, José y el niño Jesús) moldeada. Disponibles en colores rojo y verde brillante. Cada vela tiene una base circular transparente con mensaje 'Feliz Navidad'. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/24.jpg",
      precios: {
        detal: {
          bolsa: 5500,
          caja: 6700
        },
        mayorista: {
          bolsa: 4500,
          caja: 5500
        }
      }
    },
    {
      id: "nad25",
      categoria: "navidad",
      nombre: "Peonía Grande",
      descripcion: "Velas navideñas en forma de peonía grande con múltiples capas de pétalos realistas. Disponibles en colores rojo, blanco y rosa/rosa claro. Cada vela tiene una mecha visible en el centro. Disponibles en empaques individuales en cajas cuadradas pequeñas de cartón marrón claro con ventana transparente, o en bolsa. Altura: 7cm, Ancho: 7cm. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/25.jpg",
      precios: {
        detal: {
          bolsa: 4200,
          caja: 5000
        },
        mayorista: {
          bolsa: 3800,
          caja: 4500
        }
      }
    },
    {
      id: "nad26",
      categoria: "navidad",
      nombre: "Poli Mediano Navidad",
      descripcion: "Velas navideñas cilíndricas blancas con bases doradas. Cada vela está inscrita con palabras festivas como Felicidad, Feliz Navidad, Salud, Sueñas, Viajes, Mariana. Diseño elegante y festivo. Disponible en bolsa transparente con lazo dorado y etiqueta navideña, o en caja decorativa. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/26.jpg",
      precios: {
        detal: {
          bolsa: 6500,
          caja: 7500
        },
        mayorista: {
          bolsa: 5500,
          caja: 6800
        }
      }
    },
    {
      id: "nad27",
      categoria: "navidad",
      nombre: "Muñeco Año Viejo",
      descripcion: "Muñecos de año viejo artesanales con diferentes diseños y colores (suéteres a rayas rojas y blancas, camisas amarillas, verdes, negras, sombreros rojos, verdes). Incluyen elementos decorativos como libros pequeños y tarjetas. Disponibles en bolsa de tul transparente con lazo rojo y etiqueta, o en caja decorativa. Disponible en bolsa o caja.",
      imagen: "assets/productos/Navidad/27.jpg",
      precios: {
        detal: {
          bolsa: 16000,
          caja: 18500
        },
        mayorista: {
          bolsa: 15000,
          caja: 17500
        }
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
  promoInterval: null
};

// Promociones
const promociones = [
  {
    titulo: "✨ Velas Personalizadas - Crea tu diseño único",
    descripcion: "Haz tu vela única con tu nombre, logo o diseño especial. ¡Consulta nuestros precios!",
    imagen: "https://via.placeholder.com/800x400?text=Velas+Personalizadas",
    color: "from-purple-600 to-pink-600"
  },
  {
    titulo: "🎁 Envío GRATIS en compras superiores a $400 mil",
    descripcion: "Aprovecha esta oferta y ahorra en tus compras de velas artesanales",
    imagen: "https://via.placeholder.com/800x400?text=Envío+Gratis",
    color: "from-green-500 to-emerald-600"
  },
  {
    titulo: "🕯️ Nuevas Colecciones Navideñas Disponibles",
    descripcion: "Descubre muñecos de año viejo, velas decorativas y más productos exclusivos",
    imagen: "https://via.placeholder.com/800x400?text=Navidad",
    color: "from-red-600 to-orange-600"
  },
  {
    titulo: "💝 Perfectas para Regalos Especiales",
    descripcion: "Velas para cumpleaños, aniversarios, San Valentín, Baby Shower y más ocasiones",
    imagen: "https://via.placeholder.com/800x400?text=Regalos",
    color: "from-pink-500 to-rose-600"
  },
  {
    titulo: "🔥 Precios Mayoristas Disponibles",
    descripcion: "Compra al por mayor y obtén mejores precios. Ideal para eventos y negocios",
    imagen: "https://via.placeholder.com/800x400?text=Mayorista",
    color: "from-blue-600 to-indigo-600"
  },
  {
    titulo: "🌟 Velas con las Mejores Fragancias",
    descripcion: "Vainilla, canela, coco, rosa y más. Elige tu aroma favorito",
    imagen: "https://via.placeholder.com/800x400?text=Fragancias",
    color: "from-amber-500 to-yellow-600"
  }
];

// Videos de TikTok e Instagram
const videos = [
  {
    plataforma: "local",
    titulo: "Nuevo Video - Nuestras Velas",
    url: "",
    embedCode: "",
    videoSrc: "assets/productos/videos/velas.mp4"
  },
  {
    plataforma: "local",
    titulo: "Video - Aromas y Fragancias",
    url: "",
    embedCode: "",
    videoSrc: "assets/productos/videos/aro.mp4"
  },
  {
    plataforma: "local",
    titulo: "Video - Colección Especial",
    url: "",
    embedCode: "",
    videoSrc: "assets/productos/videos/al.mp4"
  },
  {
    plataforma: "local",
    titulo: "Video - Velas Artesanales",
    url: "",
    embedCode: "",
    videoSrc: "assets/productos/videos/vel.mp4"
  },
  {
    plataforma: "tiktok",
    titulo: "Nuevo Video en TikTok",
    url: "", // Aquí pegas la URL del video de TikTok
    embedCode: "" // O aquí pegas el código embed de TikTok
  },
  {
    plataforma: "instagram",
    titulo: "Nuevo Video en Instagram",
    url: "", // Aquí pegas la URL del video de Instagram
    embedCode: "" // O aquí pegas el código embed de Instagram
  }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar partículas laterales
  initSideParticles();
  
  // Mostrar elementos de fondo después de que cargue la página
  setTimeout(() => {
    const heroCandles = document.getElementById('hero-candles-container');
    const catalogCandles = document.getElementById('catalog-candles-container');
    const catalogParticles = document.getElementById('catalog-particles-container');
    const sideParticlesLeft = document.getElementById('side-particles-left');
    const sideParticlesRight = document.getElementById('side-particles-right');
    
    if (heroCandles) heroCandles.classList.add('loaded');
    if (catalogCandles) catalogCandles.classList.add('loaded');
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
  initSearch();
  initAnimations();
  initBottomDock();
  initWhatsApp();
  initPersonalizadas();
  initLazyVideosPersonalizadas();
  
});

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

// Dark Mode
function initDarkMode() {
  // Detectar preferencia del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  // Aplicar dark mode tanto al html como al body para asegurar compatibilidad con Tailwind
  if (currentTheme === 'dark' || (!currentTheme && prefersDark.matches)) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
  
  // Botón de toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
  
  // Escuchar cambios del sistema
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    }
  });
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
  
  // Actualizar URL de WhatsApp flotante con productos del carrito
  const whatsappFloatBtn = document.getElementById('whatsapp-float-btn');
  if (whatsappFloatBtn && total > 0) {
    const mensaje = generarMensajeWhatsApp();
    whatsappFloatBtn.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensaje)}`;
  } else if (whatsappFloatBtn) {
    whatsappFloatBtn.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent('Hola, me interesa conocer más sobre sus productos')}`;
  }
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
  if (!producto) return;
  
  // Si presentacion es un tamaño (para productos de Navidad), usar como tamaño
  const esTamano = producto.tamanos && producto.tamanos.some(t => t.nombre === presentacion);
  
  // Crear identificador único basado en tipo de compra y presentación/tamaño
  const identificador = presentacion ? `${tipoCompra}-${presentacion}` : tipoCompra;
  
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
      presentacion: esTamano ? null : (presentacion || null),
      tamano: esTamano ? presentacion : null,
      identificador: identificador,
      precio: precio,
      cantidad: 1,
      imagen: producto.imagen
    });
  }
  
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
  
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
  mostrarToastProducto(producto);
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
  
  if (!modal || !messageElement || !okButton || !cancelButton) return;
  
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
    okButton.removeEventListener('click', handleConfirm);
    cancelButton.removeEventListener('click', cerrar);
    overlay.removeEventListener('click', cerrar);
  };
  
  okButton.onclick = handleConfirm;
  cancelButton.onclick = cerrar;
  overlay.onclick = cerrar;
  
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
  if (!container) return;
  
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
    if (presentacionTexto && !tamanoTexto) detallesTexto += (detallesTexto ? ' • ' : '') + presentacionTexto;
    
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

// Funciones globales para los botones del carrito
window.actualizarCantidad = actualizarCantidad;
window.eliminarDelCarrito = eliminarDelCarrito;
window.vaciarCarrito = vaciarCarrito;

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
      
      // Filtrar y mostrar productos con animación
      filtrarYMostrarProductos();
      
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
  'navidad': 'navidad'
};

// Mapeo inverso: categoría real a filtro
const categoryToFilter = {
  'amorYAmistad': 'amor',
  'celebracion': 'babyshower',
  'primeraComunion': 'comunion',
  'navidad': 'navidad'
};

function renderCategorias() {
  const container = document.getElementById('category-filters');
  if (!container) return;
  
  const categorias = [
    { filter: 'todas', nombre: 'Todas', icon: 'fas fa-th' },
    { filter: 'amor', nombre: 'Amor y Amistad', icon: 'fas fa-heart' },
    { filter: 'babyshower', nombre: 'Baby Shower', icon: 'fas fa-baby' },
    { filter: 'comunion', nombre: 'Primera Comunión', icon: 'fas fa-cross' },
    { filter: 'navidad', nombre: 'Navidad', icon: 'fas fa-tree' }
  ];
  
  // Determinar el filtro activo actual
  const filterActual = state.categoriaActual === 'todas' ? 'todas' : 
                      (categoryToFilter[state.categoriaActual] || 'todas');
  
  container.innerHTML = categorias.map(cat => `
    <button 
      data-filter="${cat.filter}"
      class="px-6 py-3 rounded-full border-2 transition-all min-h-[44px] flex items-center gap-2 filter-btn ${
        filterActual === cat.filter 
          ? 'bg-yellow-500 border-yellow-500 text-white active' 
          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
      }"
    >
      <i class="${cat.icon}"></i>
      <span>${cat.nombre}</span>
    </button>
  `).join('');
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
      if (!p.id || !p.nombre || !p.imagen) return false;
      if (p.imagen.includes('placeholder') || p.imagen.includes('via.placeholder')) return false;
      return p.categoria === 'navidad';
    });
    
    htmlNavidad = productosNavidad.map(producto => {
      const dataCategory = getProductCategory(producto);
      
      return `
    <div class="producto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 producto-item" data-category="${dataCategory}" data-imagen="${producto.imagen}" data-nombre="${producto.nombre.toLowerCase()}" data-descripcion="${producto.descripcion ? producto.descripcion.toLowerCase() : ''}">
      <div class="relative h-72 bg-gray-50 dark:bg-gray-700/30 p-6 flex items-center justify-center cursor-pointer" ondblclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')">
        <div class="skeleton-image absolute inset-0"></div>
        <img 
          src="${producto.imagen}" 
          alt="${producto.nombre}"
          class="max-w-full max-h-full w-auto h-auto object-contain relative z-10 rounded-lg"
          loading="lazy"
          decoding="async"
          style="opacity: 0; transition: opacity 0.3s ease;"
          onload="this.style.opacity='1'; this.classList.add('loaded');"
          onerror="console.error('Error cargando imagen:', '${producto.imagen}'); this.style.opacity='1'; this.style.filter='grayscale(100%) opacity(0.5)';"
        >
        <div class="double-click-badge">
          <i class="fas fa-search-plus"></i>
          <span>Doble clic</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-playfair text-lg font-bold mb-3 text-gray-800 dark:text-[#D4AF37] text-center">
          ${producto.nombre}
        </h3>
        <button 
          onclick="abrirModalProducto('${producto.id}')"
          class="w-full py-2.5 text-black rounded-full font-semibold transition-all duration-300 min-h-[44px] ripple-effect"
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
    <div class="producto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 producto-item" data-category="${dataCategory}" data-imagen="${imagen}" data-nombre="${tituloTarjeta.toLowerCase()}" data-descripcion="${productoPrincipal.descripcion ? productoPrincipal.descripcion.toLowerCase() : ''}">
      <div class="relative h-72 bg-gray-50 dark:bg-gray-700/30 p-6 flex items-center justify-center cursor-pointer" ondblclick="ampliarImagenProducto('${imagen}', '${tituloTarjeta}')">
        <div class="skeleton-image absolute inset-0"></div>
        <img 
          src="${imagen}" 
          alt="${nombresProductos}"
          class="max-w-full max-h-full w-auto h-auto object-contain relative z-10 rounded-lg"
          loading="lazy"
          decoding="async"
          style="opacity: 0; transition: opacity 0.3s ease;"
          onload="this.style.opacity='1'; this.classList.add('loaded');"
          onerror="console.error('Error cargando imagen:', '${imagen}'); this.style.opacity='1'; this.style.filter='grayscale(100%) opacity(0.5)';"
        >
        <div class="double-click-badge">
          <i class="fas fa-search-plus"></i>
          <span>Doble clic</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-playfair text-lg font-bold mb-3 text-gray-800 dark:text-[#D4AF37] text-center">
          ${tituloTarjeta}
        </h3>
        <button 
          onclick="abrirModalProductoGrupo('${imagen}')"
          class="w-full py-2.5 text-black rounded-full font-semibold transition-all duration-300 min-h-[44px] ripple-effect"
        >
          Ver Precios
        </button>
      </div>
    </div>
    `;
    } else {
      // Producto único - mostrar normalmente
      return `
    <div class="producto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 producto-item" data-category="${dataCategory}" data-imagen="${imagen}" data-nombre="${productoPrincipal.nombre.toLowerCase()}" data-descripcion="${productoPrincipal.descripcion ? productoPrincipal.descripcion.toLowerCase() : ''}">
      <div class="relative h-72 bg-gray-50 dark:bg-gray-700/30 p-6 flex items-center justify-center cursor-pointer" ondblclick="ampliarImagenProducto('${imagen}', '${productoPrincipal.nombre}')">
        <div class="skeleton-image absolute inset-0"></div>
        <img 
          src="${imagen}" 
          alt="${productoPrincipal.nombre}"
          class="max-w-full max-h-full w-auto h-auto object-contain relative z-10 rounded-lg"
          loading="lazy"
          decoding="async"
          style="opacity: 0; transition: opacity 0.3s ease;"
          onload="this.style.opacity='1'; this.classList.add('loaded');"
          onerror="console.error('Error cargando imagen:', '${imagen}'); this.style.opacity='1'; this.style.filter='grayscale(100%) opacity(0.5)';"
        >
        <div class="double-click-badge">
          <i class="fas fa-search-plus"></i>
          <span>Doble clic</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-playfair text-lg font-bold mb-3 text-gray-800 dark:text-[#D4AF37] text-center">
          ${productoPrincipal.nombre}
        </h3>
        <button 
          onclick="abrirModalProducto('${productoPrincipal.id}')"
          class="w-full py-2.5 text-black rounded-full font-semibold transition-all duration-300 min-h-[44px] ripple-effect"
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
    // Reiniciar animaciones para productos visibles
    const productosVisibles = container.querySelectorAll('.producto-item:not([style*="display: none"])');
    productosVisibles.forEach((producto, index) => {
      producto.style.animationDelay = `${index * 0.05}s`;
      producto.classList.add('fade-in');
    });
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
      <div class="w-full max-w-2xl bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-400 cursor-pointer group relative" id="product-image-container-grupo" ondblclick="ampliarImagenProducto('${imagen}', 'Productos Disponibles')">
        <img 
          src="${imagen}" 
          alt="Productos"
          class="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          style=""
          onerror="this.style.filter='grayscale(100%) opacity(0.5)'; this.style.padding='20px';"
        >
        <div class="double-click-badge">
          <i class="fas fa-search-plus"></i>
          <span>Doble clic</span>
        </div>
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

function abrirModalProducto(productoId) {
  const producto = buscarProducto(productoId);
  if (!producto) return;
  
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');
  
  if (!modal || !content) return;
  
  // Si el producto tiene tamanos pero no precios, mostrar modal con tamaños
  if (producto.tamanos && producto.tamanos.length > 0 && !producto.precios) {
    const tamanos = producto.tamanos;
    const esMayorista = producto.nombre.toLowerCase().includes('mayorista');
    
    // Verificar si los tamaños tienen precios detal/mayorista incorporados
    const tamanosConPreciosMultiples = tamanos.some(t => t.precios && t.precios.detal && t.precios.mayorista);
    
    let tamanosDetal, tamanosMayorista, tieneAmbos;
    
    if (tamanosConPreciosMultiples) {
      // Los tamaños tienen precios detal/mayorista incorporados
      tamanosDetal = tamanos.map(t => ({
        nombre: t.nombre,
        precio: t.precios.detal
      }));
      tamanosMayorista = tamanos.map(t => ({
        nombre: t.nombre,
        precio: t.precios.mayorista
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
        <div class="w-full max-w-lg bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-xl border-2 border-yellow-400 cursor-pointer group relative" id="product-image-container" ondblclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')">
          <img 
            src="${producto.imagen}" 
            alt="${producto.nombre}"
            class="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            id="product-image-${producto.id}"
            onerror="this.style.filter='grayscale(100%) opacity(0.5)'; this.style.padding='20px';"
            style=""
          >
          <div class="double-click-badge">
            <i class="fas fa-search-plus"></i>
            <span>Doble clic</span>
          </div>
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
      
      <!-- Sección de tamaños disponibles -->
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
      
      <!-- Botón agregar al carrito -->
      <div class="text-center mt-8">
        <button 
          id="btn-agregar-carrito"
          disabled
          class="px-8 py-4 bg-gray-400 dark:bg-gray-600 text-white rounded-full font-bold text-lg transition-all duration-300 cursor-not-allowed"
        >
          ${tieneAmbos ? 'Selecciona tipo de compra y tamaño' : 'Selecciona un tamaño'}
        </button>
      </div>
    `;
    
    // Event listeners para selección de tamaño
    let tamanoSeleccionado = null;
    let precioSeleccionado = null;
    let tipoCompraSeleccionado = tieneAmbos ? null : (esMayorista ? 'mayorista' : 'detal');
    
    const btnAgregar = document.getElementById('btn-agregar-carrito');
    
    if (!btnAgregar) {
      console.error('No se encontró el botón btn-agregar-carrito');
      return;
    }
    
    // Si tiene ambos tipos, agregar listeners para selección de tipo
    if (tieneAmbos) {
      const tipoBtns = content.querySelectorAll('.tipo-compra-btn-tamanos');
      const tamanosSection = document.getElementById('tamanos-section');
      const tamanosGrid = document.getElementById('tamanos-grid');
      
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
          
          // Mostrar tamaños correspondientes
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
          
          // Resetear selección de tamaño
          tamanoSeleccionado = null;
          precioSeleccionado = null;
          btnAgregar.disabled = true;
          btnAgregar.classList.add('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.remove('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = 'Selecciona un tamaño';
          
          // Mostrar sección de tamaños
          if (tamanosSection) {
            tamanosSection.style.display = 'block';
          }
          
          // Agregar listeners a los nuevos botones de tamaño usando delegación de eventos
          // Esto evita acumulación de listeners cuando se actualiza el HTML
          const tamanosGridContainer = tamanosGrid.parentElement;
          if (tamanosGridContainer) {
            // Usar delegación de eventos directamente en el contenedor
            // Esto funciona incluso cuando se actualiza el innerHTML
            tamanosGridContainer.addEventListener('click', (e) => {
              const tamanoBtn = e.target.closest('.tamano-btn');
              if (!tamanoBtn || !tamanosGrid.contains(tamanoBtn)) return;
              
              // Remover selección anterior
              const tamanoBtns = tamanosGrid.querySelectorAll('.tamano-btn');
              tamanoBtns.forEach(b => {
                b.classList.remove('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
                b.classList.add('border-gray-300', 'dark:border-gray-600');
              });
              
              // Agregar selección actual
              tamanoBtn.classList.add('border-yellow-500', 'bg-yellow-50', 'dark:bg-yellow-900', 'active');
              tamanoBtn.classList.remove('border-gray-300', 'dark:border-gray-600');
              
              tamanoSeleccionado = tamanoBtn.dataset.tamano;
              precioSeleccionado = parseInt(tamanoBtn.dataset.precio);
              
              // Habilitar botón agregar
              const btnAgregarActual = document.getElementById('btn-agregar-carrito');
              if (btnAgregarActual) {
                btnAgregarActual.disabled = false;
                btnAgregarActual.classList.remove('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
                btnAgregarActual.classList.add('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
                btnAgregarActual.textContent = `Agregar al Carrito - $${precioSeleccionado.toLocaleString()}`;
              }
            }, { once: false });
          }
        });
      });
    }
    
    // Listeners para botones de tamaño iniciales usando delegación de eventos
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
        precioSeleccionado = parseInt(tamanoBtn.dataset.precio);
        
        // Habilitar botón agregar
        if (btnAgregar) {
          btnAgregar.disabled = false;
          btnAgregar.classList.remove('bg-gray-400', 'dark:bg-gray-600', 'cursor-not-allowed');
          btnAgregar.classList.add('bg-yellow-500', 'hover:bg-yellow-600', 'cursor-pointer');
          btnAgregar.textContent = `Agregar al Carrito - $${precioSeleccionado.toLocaleString()}`;
        }
      });
    }
    
    // Event listener para agregar al carrito (usar una función nombrada para poder removerla si es necesario)
    if (btnAgregar) {
      // Remover listener anterior si existe
      const nuevoBtnAgregar = btnAgregar.cloneNode(true);
      btnAgregar.parentNode.replaceChild(nuevoBtnAgregar, btnAgregar);
      
      nuevoBtnAgregar.addEventListener('click', () => {
        if (!tamanoSeleccionado || !precioSeleccionado) return;
        
        agregarAlCarrito(producto.id, tipoCompraSeleccionado || (esMayorista ? 'mayorista' : 'detal'), tamanoSeleccionado, precioSeleccionado);
        cerrarModalProducto();
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
      <div class="w-full max-w-lg bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-xl border-2 border-yellow-400 cursor-pointer group relative" id="product-image-container" ondblclick="ampliarImagenProducto('${producto.imagen}', '${producto.nombre}')">
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
        <div class="double-click-badge">
          <i class="fas fa-search-plus"></i>
          <span>Doble clic</span>
        </div>
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
    imageModal.className = 'fixed inset-0 z-[60] hidden bg-black/95 backdrop-blur-md';
    imageModal.innerHTML = `
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <button onclick="cerrarImagenAmpliada()" class="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all backdrop-blur-sm">
          <i class="fas fa-times text-2xl"></i>
        </button>
        <div class="max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
          <img 
            src="${imagenSrc}" 
            alt="${nombreProducto} - Vista ampliada"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            id="zoomed-image"
            loading="eager"
            decoding="async"
          >
        </div>
        <p class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full">
          ${nombreProducto}
        </p>
      </div>
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
    <div class="min-w-full flex-shrink-0 relative h-auto min-h-[200px] md:h-80 bg-gradient-to-r ${promo.color} flex items-center justify-center text-white overflow-hidden">
      <div class="text-center z-10 w-full px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-5xl mx-auto">
        <h3 class="font-playfair text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-3 text-center drop-shadow-lg break-words leading-snug px-2">${promo.titulo}</h3>
        ${promo.descripcion ? `<p class="text-xs md:text-sm lg:text-base opacity-90 text-center break-words leading-relaxed px-2 mt-2">${promo.descripcion}</p>` : ''}
      </div>
    </div>
  `).join('');
  
  actualizarIndicadores();
}

function iniciarCarrusel() {
  const slides = document.getElementById('promo-slides');
  if (!slides) return;
  
  state.promoInterval = setInterval(() => {
    state.currentPromoSlide = (state.currentPromoSlide + 1) % promociones.length;
    actualizarCarrusel();
  }, 5000);
  
  // Pause on touch
  const carousel = document.getElementById('promo-carousel');
  if (carousel) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(state.promoInterval);
    });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      state.promoInterval = setInterval(() => {
        state.currentPromoSlide = (state.currentPromoSlide + 1) % promociones.length;
        actualizarCarrusel();
      }, 5000);
    });
    
    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        state.currentPromoSlide = (state.currentPromoSlide + 1) % promociones.length;
        actualizarCarrusel();
      }
      if (touchEndX > touchStartX + 50) {
        state.currentPromoSlide = (state.currentPromoSlide - 1 + promociones.length) % promociones.length;
        actualizarCarrusel();
      }
    }
    
    // Indicadores
    const indicators = document.querySelectorAll('.promo-indicator');
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        state.currentPromoSlide = index;
        actualizarCarrusel();
      });
    });
  }
}

function actualizarCarrusel() {
  const slides = document.getElementById('promo-slides');
  if (!slides) return;
  
  slides.style.transform = `translateX(-${state.currentPromoSlide * 100}%)`;
  actualizarIndicadores();
}

function actualizarIndicadores() {
  const indicators = document.querySelectorAll('.promo-indicator');
  indicators.forEach((indicator, index) => {
    if (index === state.currentPromoSlide) {
      indicator.classList.add('bg-white', 'w-8');
      indicator.classList.remove('bg-white/50', 'w-2');
    } else {
      indicator.classList.remove('bg-white', 'w-8');
      indicator.classList.add('bg-white/50', 'w-2');
    }
  });
}

// Videos
function initVideos() {
  renderVideos();
  initLazyVideos();
}

// Lazy loading para videos
function initLazyVideos() {
  const videoContainers = document.querySelectorAll('.video-container-lazy');
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const videoSrc = container.getAttribute('data-video-src');
        const placeholder = container.querySelector('.video-placeholder');
        const video = container.querySelector('video');
        
        if (video && videoSrc && !video.src) {
          // Cuando el usuario hace clic en el placeholder, cargar el video
          placeholder.addEventListener('click', () => {
            video.src = videoSrc;
            video.load();
            placeholder.classList.add('hidden');
            video.classList.remove('hidden');
            video.play().catch(() => {
              // Auto-play puede fallar, está bien
            });
          }, { once: true });
          
          // También cargar cuando el video está visible y el usuario hace scroll
          setTimeout(() => {
            if (entry.isIntersecting) {
              video.src = videoSrc;
              video.load();
            }
          }, 1000);
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
  
  // Filtrar videos que tengan contenido
  const videosConContenido = videos.filter(video => video.embedCode || video.url || video.videoSrc);
  
  if (videosConContenido.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-video text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
        <p class="text-gray-600 dark:text-gray-400 text-lg">
          Próximamente habrá nuevos videos aquí
        </p>
        <p class="text-gray-500 dark:text-gray-500 text-sm mt-2">
          Edita el array <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">videos</code> en app.js para agregar videos
        </p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = videosConContenido.map(video => {
    const icono = video.plataforma === 'tiktok' ? 'fab fa-tiktok' : video.plataforma === 'instagram' ? 'fab fa-instagram' : 'fas fa-video';
    const colorPlataforma = video.plataforma === 'tiktok' ? 'from-black to-gray-900' : video.plataforma === 'instagram' ? 'from-pink-600 to-purple-600' : 'from-yellow-500 to-amber-600';
    
    // Si es un video local (MP4)
    if (video.videoSrc && video.plataforma === 'local') {
      const videoId = `video-${Math.random().toString(36).substr(2, 9)}`;
      return `
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 video-container-lazy" data-video-src="${video.videoSrc}">
          <div class="bg-gradient-to-r ${colorPlataforma} p-4 text-white">
            <div class="flex items-center gap-3">
              <i class="${icono} text-2xl"></i>
              <h3 class="font-playfair text-xl font-bold">${video.titulo}</h3>
            </div>
          </div>
          <div class="p-4 relative">
            <div class="video-placeholder w-full rounded-xl shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style="min-height: 300px; max-height: 600px; aspect-ratio: 16/9;">
              <div class="text-center">
                <i class="fas fa-play-circle text-6xl text-gray-400 dark:text-gray-500 mb-3"></i>
                <p class="text-gray-600 dark:text-gray-400">Haz clic para cargar el video</p>
              </div>
            </div>
            <video 
              id="${videoId}"
              controls 
              class="w-full rounded-xl shadow-lg hidden"
              style="max-height: 600px;"
              preload="none"
              playsinline
            >
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      `;
    }
    
    // Si tiene embedCode, usarlo directamente
    if (video.embedCode) {
      return `
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="bg-gradient-to-r ${colorPlataforma} p-4 text-white">
            <div class="flex items-center gap-3">
              <i class="${icono} text-2xl"></i>
              <h3 class="font-playfair text-xl font-bold">${video.titulo}</h3>
            </div>
          </div>
          <div class="p-4">
            ${video.embedCode}
          </div>
        </div>
      `;
    }
    
    // Si solo tiene URL, crear un enlace
    if (video.url) {
      return `
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div class="bg-gradient-to-r ${colorPlataforma} p-4 text-white">
            <div class="flex items-center gap-3">
              <i class="${icono} text-2xl"></i>
              <h3 class="font-playfair text-xl font-bold">${video.titulo}</h3>
            </div>
          </div>
          <div class="p-4">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="block w-full py-4 bg-gradient-to-r ${colorPlataforma} text-white rounded-xl font-semibold text-center hover:opacity-90 transition-all">
              <i class="${icono} mr-2"></i>
              Ver Video en ${video.plataforma === 'tiktok' ? 'TikTok' : video.plataforma === 'instagram' ? 'Instagram' : 'Ver Video'}
            </a>
          </div>
        </div>
      `;
    }
    
    return '';
  }).filter(html => html !== '').join('');
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
}

// WhatsApp
function initWhatsApp() {
  // Los links ya están configurados en el HTML
}

// Velas Personalizadas
function initPersonalizadas() {
  const form = document.getElementById('form-personalizada');
  const tieneImagenSi = document.getElementById('tiene-imagen-si');
  const tieneImagenNo = document.getElementById('tiene-imagen-no');
  const tieneImagenInput = document.getElementById('tiene-imagen');
  
  if (!form) return;
  
  // Manejar botones Sí/No
  if (tieneImagenSi) {
    tieneImagenSi.addEventListener('click', () => {
      tieneImagenSi.classList.add('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenSi.classList.remove('border-gray-600', 'bg-gray-700/50');
      tieneImagenNo.classList.remove('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenNo.classList.add('border-gray-600', 'bg-gray-700/50');
      tieneImagenInput.value = 'si';
    });
  }
  
  if (tieneImagenNo) {
    tieneImagenNo.addEventListener('click', () => {
      tieneImagenNo.classList.add('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenNo.classList.remove('border-gray-600', 'bg-gray-700/50');
      tieneImagenSi.classList.remove('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenSi.classList.add('border-gray-600', 'bg-gray-700/50');
      tieneImagenInput.value = 'no';
    });
  }
  
  // Validar y enviar formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-personalizada').value.trim();
    const motivo = document.getElementById('motivo-personalizada').value.trim();
    const diseno = document.getElementById('diseno-personalizada').value.trim();
    const tieneImagen = tieneImagenInput.value;
    
    // Validar campos
    let tieneErrores = false;
    
    // Validar nombre
    const errorNombre = document.getElementById('error-nombre');
    if (!nombre) {
      errorNombre.classList.remove('hidden');
      tieneErrores = true;
    } else {
      errorNombre.classList.add('hidden');
    }
    
    // Validar motivo
    const errorMotivo = document.getElementById('error-motivo');
    if (!motivo) {
      errorMotivo.classList.remove('hidden');
      tieneErrores = true;
    } else {
      errorMotivo.classList.add('hidden');
    }
    
    // Validar diseño
    const errorDiseno = document.getElementById('error-diseno');
    if (!diseno) {
      errorDiseno.classList.remove('hidden');
      tieneErrores = true;
    } else {
      errorDiseno.classList.add('hidden');
    }
    
    if (tieneErrores) {
      // Scroll al primer error
      const primerError = document.querySelector('.text-red-400:not(.hidden)');
      if (primerError) {
        primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Construir mensaje para WhatsApp
    let mensaje = `¡Hola Velas y Aromas Elena! 💌\n\n`;
    mensaje += `Quiero hacer una vela personalizada.\n\n`;
    mensaje += `👤 Nombre: ${nombre}\n`;
    mensaje += `🕯️ Motivo: ${motivo}\n`;
    mensaje += `💭 Idea: ${diseno}`;
    
    // Nota sobre imagen
    if (tieneImagen === 'si') {
      mensaje += `\n\n📷 Sí tengo una imagen de referencia que puedo enviar`;
    } else if (tieneImagen === 'no') {
      mensaje += `\n\n📷 No tengo imagen de referencia`;
    }
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${mensajeCodificado}`;
    
    // Abrir WhatsApp directamente
    window.open(urlWhatsApp, '_blank');
    mostrarNotificacion('¡Formulario enviado! Redirigiendo a WhatsApp...', 'success');
    
    // Limpiar formulario después de un delay
    setTimeout(() => {
      form.reset();
      tieneImagenInput.value = '';
      tieneImagenSi.classList.remove('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenSi.classList.add('border-gray-600', 'bg-gray-700/50');
      tieneImagenNo.classList.remove('border-yellow-500', 'bg-yellow-500/30');
      tieneImagenNo.classList.add('border-gray-600', 'bg-gray-700/50');
      document.querySelectorAll('.text-red-400').forEach(el => el.classList.add('hidden'));
    }, 2000);
  });
}

// Función para mostrar modal con instrucciones de imagen
function mostrarModalImagen(nombre, motivo, diseno, imagenBase64, urlWhatsApp) {
  // Crear modal
  const modal = document.createElement('div');
  modal.id = 'modal-imagen-instructions';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4';
  modal.innerHTML = `
    <div class="bg-gray-800 rounded-3xl p-6 md:p-8 max-w-lg w-full border-2 border-yellow-500/50 shadow-2xl">
      <div class="text-center mb-6">
        <i class="fas fa-image text-yellow-400 text-5xl mb-4"></i>
        <h3 class="text-white text-2xl md:text-3xl font-bold mb-2">Instrucciones para enviar la imagen</h3>
        <p class="text-gray-300 text-sm md:text-base">
          WhatsApp Web no permite adjuntar archivos automáticamente. Sigue estos pasos:
        </p>
      </div>
      
      <div class="space-y-4 mb-6">
        <div class="bg-gray-700/50 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
            <p class="text-white text-sm md:text-base">Se abrirá WhatsApp con tu mensaje prellenado</p>
          </div>
        </div>
        
        <div class="bg-gray-700/50 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
            <p class="text-white text-sm md:text-base">Antes de enviar, haz clic en el botón de adjuntar (📎) en WhatsApp</p>
          </div>
        </div>
        
        <div class="bg-gray-700/50 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
            <p class="text-white text-sm md:text-base">Selecciona "Fotos y videos" y elige la imagen que subiste</p>
          </div>
        </div>
        
        <div class="bg-gray-700/50 rounded-xl p-4">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
            <p class="text-white text-sm md:text-base">Envía primero el mensaje de texto y luego la imagen</p>
          </div>
        </div>
      </div>
      
      <!-- Vista previa de imagen -->
      <div class="mb-6 bg-gray-700/30 rounded-xl p-4">
        <p class="text-gray-300 text-sm mb-2 text-center">Vista previa de tu imagen:</p>
        <img src="${imagenBase64}" alt="Preview" class="max-w-full max-h-48 mx-auto rounded-lg">
      </div>
      
      <!-- Botones -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button 
          id="btn-abrir-whatsapp"
          class="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <i class="fab fa-whatsapp text-2xl"></i>
          Abrir WhatsApp
        </button>
        <button 
          id="btn-descargar-imagen"
          class="flex-1 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <i class="fas fa-download text-xl"></i>
          Descargar Imagen
        </button>
        <button 
          id="btn-cerrar-modal"
          class="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Botón abrir WhatsApp
  document.getElementById('btn-abrir-whatsapp').addEventListener('click', () => {
    window.open(urlWhatsApp, '_blank');
    mostrarNotificacion('WhatsApp abierto. ¡No olvides enviar la imagen!', 'success');
    cerrarModalImagen(modal);
    
    const form = document.getElementById('form-personalizada');
    const imagenPreview = document.getElementById('imagen-preview');
    const imagenPreviewImg = document.getElementById('imagen-preview-img');
    const imagenTexto = document.getElementById('imagen-texto');
    const imagenInput = document.getElementById('imagen-personalizada');
    
    setTimeout(() => {
      limpiarFormulario(form, imagenPreview, imagenPreviewImg, imagenTexto, imagenInput);
    }, 2000);
  });
  
  // Botón descargar imagen
  document.getElementById('btn-descargar-imagen').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = imagenBase64;
    link.download = localStorage.getItem('nombreImagenPersonalizada') || 'imagen-referencia.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    mostrarNotificacion('Imagen descargada ✓', 'success');
  });
  
  // Botón cerrar
  document.getElementById('btn-cerrar-modal').addEventListener('click', () => {
    cerrarModalImagen(modal);
  });
  
  // Cerrar al hacer clic fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModalImagen(modal);
    }
  });
}

function cerrarModalImagen(modal) {
  modal.remove();
  document.body.style.overflow = '';
}

function limpiarFormulario(form, imagenPreview, imagenPreviewImg, imagenTexto, imagenInput) {
  form.reset();
  imagenPreview.classList.add('hidden');
  imagenPreviewImg.src = '';
  imagenTexto.textContent = 'Haz clic para subir una imagen';
  imagenInput.value = '';
  localStorage.removeItem('imagenPersonalizada');
  localStorage.removeItem('nombreImagenPersonalizada');
  document.querySelectorAll('.text-red-400').forEach(el => el.classList.add('hidden'));
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

