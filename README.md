# 🕯️ Elena Velas y Aromas

<div align="center">

![Elena Velas y Aromas](https://img.shields.io/badge/Elena%20Velas-y%20Aromas-D4AF37?style=for-the-badge&logo=codepen&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Ready-4285F4?style=for-the-badge&logo=pwa&logoColor=white)

**Página web moderna y elegante para Elena Velas y Aromas**  
*Iluminando momentos especiales con velas artesanales de calidad* ✨

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel&logoColor=white)](https://pagina-m-vil-elena.vercel.app)
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

**Sitio desplegado:** [pagina-m-vil-elena.vercel.app](https://pagina-m-vil-elena.vercel.app)

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

## 🌐 Despliegue

### Vercel (Desplegado) ✅

**Sitio en vivo:** [pagina-m-vil-elena.vercel.app](https://pagina-m-vil-elena.vercel.app)

#### Despliegue automático desde GitHub:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente el proyecto
3. Cada push a `main` desplegará automáticamente
4. ¡Listo! Tu sitio estará en línea en segundos

#### Despliegue manual:

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel` en la carpeta del proyecto
3. Sigue las instrucciones
4. ¡Listo!

### Otros servicios compatibles:

- **Netlify** - Deploy automático desde GitHub
- **GitHub Pages** - Hosting gratuito
- **Firebase Hosting** - Hosting de Google
- **AWS S3 + CloudFront** - Hosting escalable

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
