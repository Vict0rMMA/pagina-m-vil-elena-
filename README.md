# 🕯️ Elena Velas y Aromas

<div align="center">

![Elena Velas y Aromas](https://img.shields.io/badge/Elena%20Velas-y%20Aromas-D4AF37?style=for-the-badge&logo=codepen&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Ready-4285F4?style=for-the-badge&logo=pwa&logoColor=white)

**Página web moderna y elegante para Elena Velas y Aromas**  
*Iluminando momentos especiales con velas artesanales de calidad* ✨

[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](LICENSE)

</div>

---

## ✨ Características Principales

<div align="center">

| 🎨 Diseño | ⚡ Rendimiento | 📱 Mobile First |
|:---:|:---:|:---:|
| Moderno y elegante | Optimizado | 100% Responsive |
| Dark Mode integrado | Carga rápida | PWA Ready |
| Animaciones suaves | Lazy Loading | Touch Friendly |

</div>

### 🚀 Funcionalidades

- ✅ **Diseño Mobile First** - Optimizado para dispositivos móviles
- ✅ **PWA Ready** - Instalable como aplicación móvil
- ✅ **Dark Mode** - Modo oscuro automático y manual
- ✅ **Carrito Persistente** - Guarda productos con LocalStorage
- ✅ **Búsqueda Inteligente** - Filtrado en tiempo real
- ✅ **Integración WhatsApp** - Compra directa por WhatsApp
- ✅ **Menú Flotante Inferior** - Navegación estilo dock app
- ✅ **Animaciones Suaves** - Microinteracciones modernas
- ✅ **SEO Optimizado** - Meta tags completas
- ✅ **Accesible** - Cumple estándares A11y

---

## 📁 Estructura del Proyecto

```
pagina-movil-elena/
│
├── 📄 index.html              # Página principal
├── 🎨 styles.css              # Estilos personalizados
├── ⚙️ app.js                  # Lógica JavaScript
├── 📱 manifest.json           # Configuración PWA
├── 🔧 service-worker.js       # Service Worker para PWA
├── 📖 README.md               # Este archivo
│
└── 📂 assets/
    ├── 📂 logos/              # Logos de la empresa
    ├── 📂 icons/              # Íconos PWA
    └── 📂 productos/          # Imágenes de productos
        ├── Amor-y-amistad/
        ├── Baby-Shower/
        ├── Navidad/
        ├── Primera-Comunion/
        └── Videos/
```

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=font-awesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google-fonts&logoColor=white)

</div>

- **HTML5** semántico
- **CSS3** moderno con Tailwind CSS
- **JavaScript ES6+** (Vanilla)
- **Font Awesome** para íconos
- **Google Fonts**: Playfair Display + Montserrat

---

## 🚀 Inicio Rápido

### 📦 Instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone https://github.com/VictorMMA/pagina-movil-elena.git
   cd pagina-movil-elena
   ```

2. **Abre directamente en el navegador**
   - Simplemente abre `index.html` en tu navegador preferido

3. **O usa un servidor local** (recomendado)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (con http-server)
   npx http-server -p 8000
   ```

4. **Accede desde tu dispositivo móvil**
   - Encuentra tu IP local: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
   - Visita: `http://TU-IP:8000`

### 🌐 Acceso en línea

<!-- Sitio desplegado: se define según el proveedor elegido -->

---

## ⚙️ Configuración

### 📱 Número de WhatsApp

Edita el número en `app.js`:

```javascript
const WHATSAPP_PHONE = '573008220389'; // Cambia aquí tu número
```

### 🛍️ Agregar Productos

Los productos se gestionan en el objeto `productos` dentro de `app.js`:

```javascript
const productos = {
  amorYAmistad: [
    {
      id: 'aa1',
      nombre: 'Nombre del Producto',
      descripcion: 'Descripción del producto',
      imagen: 'assets/productos/Amor-y-amistad/1.png',
      precios: {
        detal: { bolsa: 5000, caja: 6000 },
        mayorista: { bolsa: 4500, caja: 5500 }
      }
    }
  ]
};
```

### 🎨 Personalizar Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
  --primary-gold: #D4AF37;
  --gold-rich: #B8860B;
  --gold-light: #FFD700;
}
```

---

## 📱 PWA - Instalación como App

### Para usuarios:

1. Visita la página en tu navegador móvil
2. Toca el menú del navegador (⋮)
3. Selecciona **"Añadir a la pantalla de inicio"**
4. ¡Listo! La app aparecerá en tu pantalla de inicio

### Características PWA:

- ✅ Funciona sin conexión (con caché)
- ✅ Carga rápida
- ✅ Experiencia nativa
- ✅ Notificaciones push (opcional)

---

## 🌐 Despliegue (Vercel)

El sitio se despliega solo: **cada `git push` a `main` publica una versión nueva**
en https://pagina-m-vil-elena.vercel.app. No hay paso de compilación, así que un
error de código nunca tumba el despliegue — pero tampoco hay nadie que avise, así
que conviene abrir la página después de cada push.

`vercel.json` define las cabeceras de caché. Lo importante:

| Recurso | Caché | Por qué |
|---|---|---|
| `index.html` | siempre revalida | los precios tienen que salir al día |
| `.css` / `.js` | 5 min + revalidación en segundo plano | cambian a menudo |
| Imágenes | 1 h + una semana en segundo plano | si reemplazas una foto, tarda como mucho 1 h |
| Vídeos | 1 día | pesan mucho y casi nunca cambian |
| Fuentes | 1 año | llevan el contenido en el nombre |

> Si cambias una foto y quieres verla ya, añade `?2` al final de su nombre en el
> código, o espera una hora.

### Forzar que un cliente vea los cambios

El HTML nunca se cachea, así que basta con recargar. Si aun así ve algo viejo,
es el *service worker*: **Ctrl+Shift+R** lo salta.

---

## 🔧 Mantenimiento

### Estilos de Tailwind

Tailwind va **precompilado** en `tailwind.css`. Antes se cargaba desde
`cdn.tailwindcss.com`, que son 124 KB de JavaScript generando el CSS en el móvil
del cliente en cada visita — el propio Tailwind avisa de que eso no debe usarse
en producción.

Si añades clases de Tailwind nuevas al HTML o al JS, hay que regenerarlo:

```bash
npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.entrada.css -o tailwind.css --minify
```

> Las clases que se construyen en tiempo de ejecución (por ejemplo
> `md:grid-cols-${n}` en `app.js`) el escáner no las ve. Están puestas a mano en
> el `safelist` de `tailwind.config.js`; si añades otra, agrégala ahí.

### Iconos

Font Awesome va **reducido**: el sitio usa ~50 iconos de los miles que trae, así
que `iconos.css` y `assets/fonts/` contienen sólo esos (6 KB en vez de 270 KB).

Si añades un icono nuevo (`<i class="fas fa-loquesea">`), regenera:

```bash
pip install "fonttools[woff]"
python herramientas/regenerar-iconos.py
```

El script busca las clases `fa-*` por todo el proyecto, se descarga Font Awesome,
recorta las fuentes y reescribe `iconos.css`. **Si no lo ejecutas, el icono nuevo
sale en blanco.**

### Fotos de producto

Las fotos grandes son el mayor peso del sitio. Antes de subir una, redúcela a
unos 1000 px de ancho y guárdala como JPEG de calidad ~80. Una foto de producto
no debería pasar de 200 KB.

---

## 📸 Capturas de Pantalla

<div align="center">

| Vista Desktop | Vista Mobile |
|:---:|:---:|
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

</div>

---

## ✅ Checklist de Testing

- [x] ✅ 100% funcional en iOS y Android
- [x] ✅ Sin zoom indeseado en móviles
- [x] ✅ Carrito y modales operativos
- [x] ✅ Dark Mode detecta sistema
- [x] ✅ WhatsApp link correcto
- [x] ✅ Animaciones suaves (sin lag)
- [x] ✅ Tiempo de carga <3s en red 3G
- [x] ✅ PWA instalable
- [x] ✅ SEO verificado

---

## 🎯 Catálogos Disponibles

| Catálogo | Descripción | Productos |
|:---:|:---|:---:|
| 💝 **Amor y Amistad** | Velas románticas y especiales | 21 |
| 🎉 **Baby Shower** | Velas para celebración de bebés | 12 |
| ⛪ **Primera Comunión** | Velas religiosas decorativas | 16 |
| 🎄 **Navidad** | Colección navideña especial | 27 |

---

## 🤝 Contribuciones

Este es un proyecto privado para **Elena Velas y Aromas**.  
Para sugerencias o mejoras, contacta al desarrollador.

---

## 📄 Licencia

Este proyecto es de uso **privado/comercial** para Elena Velas y Aromas.

---

<div align="center">

### 🌸 Elena Velas y Aromas

**Iluminando momentos especiales con las mejores fragancias** 🕯️

⭐ Si te gusta este proyecto, ¡compártelo!

---

Hecho con ❤️ para Elena Velas y Aromas

</div>
