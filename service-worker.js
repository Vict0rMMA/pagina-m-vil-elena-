// Service Worker - Elena Velas y Aromas
//
// Estrategia:
//   HTML  -> red primero (el catálogo y los precios deben salir al día),
//            con el caché como red de seguridad si no hay señal.
//   Resto -> se sirve del caché al instante y la red actualiza por detrás.
//
// Los videos quedan fuera: pesan hasta 7 MB y se piden por rangos.
const CACHE = 'elena-velas-v6';

// Sin el ?v= que lleva el HTML: al guardar y al buscar se ignora la query,
// así un cambio de versión no deja la copia anterior huérfana en el caché.
const PRECARGA = [
  '/',
  '/index.html',
  '/styles.css',
  '/theme.css',
  '/tailwind.css',
  '/iconos.css',
  '/app.js',
  '/motion.js',
  '/manifest.json',
  '/assets/fonts/fa-solid-900-subset.woff2',
  '/assets/fonts/fa-brands-400-subset.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // addAll falla entero si un solo recurso falla; así un 404 suelto
      // no deja la instalación a medias.
      .then((cache) => Promise.all(
        PRECARGA.map((url) => cache.add(url).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      // Sólo los cachés de versiones anteriores. Antes se borraban todos,
      // incluido el recién creado, y el caché nunca llegaba a servir nada.
      .then((nombres) => Promise.all(
        nombres.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

function esHTML(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

function guardable(response) {
  return response && response.status === 200 && response.type === 'basic';
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  if (request.destination === 'video') return;
  // Las peticiones por rango devuelven 206 y no se pueden guardar.
  if (request.headers.has('range')) return;

  if (esHTML(request)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (guardable(response)) {
            const copia = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copia));
          }
          return response;
        })
        .catch(() => caches.match(request, { ignoreSearch: true })
          .then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      const red = fetch(request)
        .then((response) => {
          if (guardable(response)) {
            const copia = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copia));
          }
          return response;
        })
        // Sin este catch, un recurso que no está en caché y falla en red
        // rechaza la promesa y el navegador muestra un error de red.
        .catch(() => cached);
      return cached || red;
    })
  );
});
