const CACHE_ID = 'gastrogestion-hm-v1';
const RECURSOS_CRITICOS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalación del Service Worker y almacenamiento en caché preliminar
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_ID).then((cache) => {
      return cache.addAll(RECURSOS_CRITICOS);
    })
  );
});

// Activación del Service Worker y purga de cachés obsoletas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_ID) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Intercepción de solicitudes de red con estrategia Cache First
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Fallback en caso de pérdida total de conectividad
        return caches.match('/index.html');
      });
    })
  );
});
