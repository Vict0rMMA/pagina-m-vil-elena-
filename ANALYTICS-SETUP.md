# 📊 Configuración de Analytics

## Opción 1: Google Analytics 4 (Recomendado - Gratis)

### Pasos para configurar:

1. **Crear cuenta en Google Analytics**
   - Ve a: https://analytics.google.com
   - Inicia sesión con tu cuenta de Google
   - Crea una nueva propiedad (Account)
   - Selecciona "Medición web"
   - Completa los datos de tu sitio

2. **Obtener tu Measurement ID**
   - Después de crear la propiedad, verás un código como: `G-XXXXXXXXXX`
   - Copia este código

3. **Configurar en el sitio**
   - Abre `index.html`
   - Busca `GA_MEASUREMENT_ID` (aparece dos veces)
   - Reemplaza ambas instancias con tu código, por ejemplo:
     - Cambiar: `id="GA_MEASUREMENT_ID"`
     - Por: `id="G-XXXXXXXXXX"`
     - Cambiar: `gtag('config', 'GA_MEASUREMENT_ID',`
     - Por: `gtag('config', 'G-XXXXXXXXXX',`

4. **Configurar eventos personalizados**
   - Ya está configurado para rastrear:
     - Visitas a la página
     - Productos agregados al carrito
     - Clics en WhatsApp
     - Búsquedas de productos
     - Visualizaciones de productos

### ¿Qué puedes ver en Google Analytics?

- **Usuarios**: Cantidad de visitantes únicos
- **Páginas vistas**: Qué páginas ven más
- **Tiempo en sitio**: Cuánto tiempo pasan
- **Dispositivos**: Desktop vs Mobile
- **Ubicación**: De dónde visitan
- **Eventos**: Acciones específicas (carrito, WhatsApp, etc.)

---

## Opción 2: Netlify Analytics (Solo si tienes Netlify Pro)

Si tienes Netlify Pro ($19/mes), puedes activar Netlify Analytics directamente desde el dashboard:
- Ve a tu sitio en Netlify
- Settings → Build & deploy → Analytics
- Activa "Netlify Analytics"

**Ventajas**: Ya instalado, sin código adicional
**Desventajas**: Requiere plan de pago

---

## Opción 3: Plausible Analytics (Alternativa Moderna - €9/mes)

Plausible es una alternativa moderna y respetuosa con la privacidad.

1. Crea cuenta en: https://plausible.io
2. Agrega tu dominio
3. Agrega este código antes de `</head>` en `index.html`:

```html
<script defer data-domain="velas-elena.netlify.app" src="https://plausible.io/js/script.js"></script>
```

---

## 📈 Eventos que ya están configurados para rastrear:

- ✅ Visitas a la página principal
- ✅ Visualización de productos
- ✅ Agregar productos al carrito
- ✅ Clics en botones de WhatsApp
- ✅ Búsquedas de productos
- ✅ Clics en categorías

---

## 🔍 Ver las estadísticas:

**Google Analytics:**
- Ve a: https://analytics.google.com
- Inicia sesión
- Selecciona tu propiedad
- Ve a "Tiempo real" para ver visitantes en vivo

---

**Nota**: Google Analytics puede tardar 24-48 horas en mostrar datos históricos completos, pero la vista "Tiempo real" funciona inmediatamente.

