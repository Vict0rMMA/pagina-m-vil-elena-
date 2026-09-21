// Service Worker - Elena Velas y Aromas
//
// Estrategia:
//   HTML  -> red primero (el catálogo y los precios deben salir al día),
//            con el caché como red de seguridad si no hay señal.
//   Resto -> se sirve del caché al instante y la red actualiza por detrás.
//
// Los videos quedan fuera: pesan hasta 7 MB y se piden por rangos.
const CACHE = 'elena-velas-v7';

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

function guardar(request, response) {
  if (!guardable(response)) return;
  const copia = response.clone();
  caches.open(CACHE).then((cache) => cache.put(request, copia));
}

// Red primero, caché como red de seguridad.
function redPrimero(request, respaldo) {
  return fetch(request)
    .then((response) => { guardar(request, response); return response; })
    .catch(() => caches.match(request, { ignoreSearch: true })
      .then((c) => c || (respaldo ? caches.match(respaldo) : undefined)));
}

// Del caché al instante, la red actualiza por detrás.
function cacheYActualiza(request) {
  return caches.match(request).then((cached) => {
    const red = fetch(request)
      .then((response) => { guardar(request, response); return response; })
      // Sin este catch, un recurso que no está en caché y falla en red
      // rechaza la promesa y el navegador muestra un error de red.
      .catch(() => cached);
    return cached || red;
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;
  if (request.destination === 'video') return;
  // Las peticiones por rango devuelven 206 y no se pueden guardar.
  if (request.headers.has('range')) return;

  // El HTML y el código siempre buscan la versión más reciente.
  //
  // El CSS y el JS estaban en "caché primero": la dueña desplegaba un
  // cambio y su propio móvil seguía viendo lo viejo. Peor todavía, la
  // búsqueda usaba ignoreSearch, así que la copia precargada sin ?v=
  // tapaba para siempre a la que la red iba guardando con ?v=. El CSS
  // no se actualizaba nunca.
  //
  // Pesan 30 KB comprimidos entre los dos y llevan max-age=300, así que
  // la mayoría de las veces salen del caché del navegador sin tocar la
  // red. Si no hay señal, responde la copia guardada.
  const esCodigo = request.destination === 'style' || request.destination === 'script';

  if (esHTML(request)) {
    event.respondWith(redPrimero(request, '/index.html'));
    return;
  }

  if (esCodigo) {
    event.respondWith(redPrimero(request));
    return;
  }

  // Imágenes y fuentes: son el grueso del peso y casi nunca cambian.
  event.respondWith(cacheYActualiza(request));
});
