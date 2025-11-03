// Service Worker para PWA - Elena Velas y Aromas
// Actualizado: v4 - Network First para todos los recursos
const CACHE_NAME = 'elena-velas-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install Event - Forzar activación inmediata
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Forzar que el nuevo service worker se active inmediatamente
        return self.skipWaiting();
      })
  );
});

// Escuchar mensajes para activación inmediata
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Fetch Event - Network First para HTML, Cache First para assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Para archivos HTML, usar Network First (siempre obtener la versión más reciente)
  if (request.method === 'GET' && request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Si hay respuesta de red, actualizar caché y devolverla
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Si falla la red, usar caché como fallback
          return caches.match(request);
        })
    );
    return;
  }
  
  // Para otros recursos (CSS, JS, imágenes), usar Network First para forzar actualización
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si hay respuesta de red, actualizar caché y devolverla
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, usar caché como fallback
        return caches.match(event.request);
      })
  );
});

// Activate Event - Limpia TODOS los cachés antiguos incluyendo v3 y anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      // Eliminar TODOS los cachés antiguos para forzar actualización completa
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Eliminando caché antiguo:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Forzar que este service worker tome control inmediatamente
      return self.clients.claim();
    }).then(() => {
      // Notificar a todos los clientes que se actualice
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ action: 'swUpdated' });
        });
      });
    })
  );
});

