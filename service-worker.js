// Service Worker para PWA - Elena Velas y Aromas
// Recursos propios cacheados para que las visitas repetidas abran rápido.
const CACHE_NAME = 'elena-velas-v5';
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

// Fetch Event - Network First para TODOS los recursos (fuerza actualización inmediata)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Dejar que el navegador gestione recursos externos y videos pesados.
  if (request.method !== 'GET' || url.origin !== self.location.origin || request.destination === 'video') {
    return;
  }

  // El HTML siempre busca la versión más reciente.
  if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
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
  
  // CSS, JS e imágenes propios salen del caché; la red actualiza en segundo plano.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const actualizar = fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
        }
        return response;
      });
      return cached || actualizar;
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

