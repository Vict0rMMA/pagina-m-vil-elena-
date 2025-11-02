# Elena Velas y Aromas 🌸

Página web moderna y profesional para **Elena Velas y Aromas**, optimizada principalmente para dispositivos móviles.

## 🚀 Características

- ✅ **Mobile First** - Diseño 100% responsive
- ✅ **PWA Ready** - Funciona como aplicación móvil
- ✅ **Dark Mode** - Automático y manual
- ✅ **Carrito Persistente** - Guarda con LocalStorage
- ✅ **Búsqueda Inteligente** - Filtrado en tiempo real
- ✅ **Integración WhatsApp** - Compra directa por WhatsApp
- ✅ **Menú Flotante Inferior** - Navegación estilo dock app
- ✅ **Animaciones Suaves** - Microinteracciones modernas
- ✅ **SEO Optimizado** - Meta tags completas
- ✅ **Accesible** - Cumple estándares A11y

## 📁 Estructura del Proyecto

```
pagina-movil-elena/
├── index.html              # Página principal
├── app.js                  # Lógica JavaScript
├── styles.css              # Estilos personalizados
├── manifest.json           # Configuración PWA
├── service-worker.js       # Service Worker para PWA
├── README.md               # Este archivo
└── assets/
    ├── productos/          # Imágenes de productos (WebP)
    └── icons/              # Íconos PWA (72x72, 96x96, etc.)
```

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3** moderno (Tailwind CSS)
- **JavaScript ES6+** (Vanilla)
- **Font Awesome** para íconos
- **Google Fonts**: Playfair Display + Montserrat

## 📦 Instalación y Uso

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador o sirve con un servidor local
3. Para desarrollo local con Python:
   ```bash
   python -m http.server 8000
   ```
4. Para Netlify: Arrastra la carpeta a Netlify Drop o conecta con Git

## 📝 Configuración

### Número de WhatsApp
Edita en `app.js`:
```javascript
const WHATSAPP_PHONE = '573008220389'; // Cambia aquí
```

### Productos
Edita el objeto `productos` en `app.js` para agregar/modificar productos.

### Íconos PWA
Coloca los íconos en `assets/icons/` con los siguientes tamaños:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

### Imágenes de Productos
Coloca las imágenes en `assets/productos/` en formato WebP para mejor rendimiento.

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `styles.css`:
```css
:root {
  --primary-pink: #f472b6;
  --primary-purple: #a78bfa;
}
```

### Fuentes
Las fuentes se cargan desde Google Fonts en `index.html`.

## 📱 PWA

Para instalar como PWA:
1. Visita la página en un navegador móvil
2. Añade a la pantalla de inicio
3. ¡Funciona sin conexión (con caché)!

## 🌐 Despliegue

### Netlify
1. Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio Git
3. ¡Listo! La página estará en línea

### Otros
El proyecto es estático, funciona en cualquier hosting:
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- etc.

## ✅ Checklist de Testing

- [ ] 100% funcional en iOS y Android
- [ ] Sin zoom indeseado
- [ ] Carrito y modales operativos
- [ ] Dark Mode detecta sistema
- [ ] WhatsApp link correcto
- [ ] Animaciones suaves (sin lag)
- [ ] Tiempo de carga <3s en red 3G
- [ ] PWA instalable
- [ ] SEO verificado

## 📄 Licencia

Este proyecto es para uso personal/comercial de Elena Velas y Aromas.

## 👨‍💻 Soporte

Para problemas o preguntas, contacta al desarrollador o revisa la documentación.

---

**Elena Velas y Aromas** - Iluminando momentos especiales 🌸

