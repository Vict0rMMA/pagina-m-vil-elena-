# 📸 Fotos de Productos

## 📁 Estructura de Carpetas

Organiza tus fotos de productos por categoría:

```
assets/productos/
├── amor-y-amistad/      # Fotos de productos de Amor y Amistad
├── celebracion/         # Fotos de productos de Celebración
├── relajacion/          # Fotos de productos de Relajación
├── navidad/             # Fotos de productos de Navidad
├── decorativa/          # Fotos de productos Decorativos
├── aromaterapia/        # Fotos de productos de Aromaterapia
└── especial/            # Fotos de productos Especiales
```

## 📋 Formato de Nombres de Archivos

Usa nombres descriptivos y consistentes:

**Formato recomendado:**
```
categoria-nombre-producto.webp
```

**Ejemplos:**
- `amor-y-amistad-vela-corazon.webp`
- `celebracion-vela-cumpleanos.webp`
- `navidad-vela-estrella.webp`
- `relajacion-vela-lavanda.webp`

## 🖼️ Especificaciones de Imágenes

### Formato
- **Recomendado:** `.webp` (mejor compresión y calidad)
- **Alternativas:** `.jpg` o `.png`

### Tamaño
- **Ancho:** 800px - 1200px
- **Alto:** 600px - 900px
- **Ratio:** 4:3 o 16:9

### Calidad
- Resolución: Mínimo 72 DPI
- Peso: Idealmente < 200KB por imagen
- Optimización: Usa herramientas online para comprimir

## 💰 Información de Precios

Los precios se configuran en `app.js`, no en las imágenes.

Para actualizar precios, edita el archivo `app.js` en la sección de productos.

**Ejemplo:**
```javascript
{
  id: "aa1",
  categoria: "amorYAmistad",
  nombre: "Vela Romántica Corazón",
  imagen: "assets/productos/amor-y-amistad/vela-corazon.webp",
  tamanos: [
    { nombre: "Pequeña", precio: 15000 },
    { nombre: "Mediana", precio: 25000 },
    { nombre: "Grande", precio: 35000 }
  ]
}
```

## 📝 Checklist para Agregar Productos

- [ ] Foto del producto en formato WebP
- [ ] Nombre descriptivo del archivo
- [ ] Imagen en la carpeta correcta según categoría
- [ ] Tamaño optimizado (< 200KB)
- [ ] Actualizar `app.js` con la ruta correcta de la imagen
- [ ] Verificar que la imagen se muestra correctamente en la página

## 🔗 Actualizar Rutas en app.js

Cuando agregues una foto, actualiza la ruta en `app.js`:

**Busca la sección de productos y cambia:**
```javascript
imagen: "assets/productos/vela-corazon.webp"
```

**Por la ruta completa:**
```javascript
imagen: "assets/productos/amor-y-amistad/vela-corazon.webp"
```

## 🛠️ Herramientas Útiles

### Optimizar Imágenes
- **Online:** https://squoosh.app/
- **Online:** https://tinypng.com/
- **Convertir a WebP:** https://cloudconvert.com/jpg-to-webp

### Tomar Fotos
- Usa buena iluminación natural
- Fondo limpio o neutro
- Enfoque en el producto
- Múltiples ángulos si es necesario

---

¡Listo para agregar tus productos! 📸✨

