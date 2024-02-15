const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '../index.html',
  '../ejemplo1.html',
  '../inicio.html',
  '../listaVideos.html',
  '../js/Lista.js',
  '../img/Juan.jpg', 
  '../img/Lulis.jpg', 
  '../img/Alexbb.jpg', 
  '../css/estiloIndex.css',
  '../css/estiloMenu.css',
  '../css/todo.css',
  '../.vscode/settings.json', 
  '../.idea/modules.xml',
  '../.idea/pagina1.xml',
  '../.idea/workspace.xml',

];


// Instalación del Service Worker
self.addEventListener('install', event => {
  // Esperar hasta que el caché esté abierto
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierto');
        // Agregar los archivos a cachear
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    // Obtener todos los cachés existentes
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          // Si el caché no coincide con el caché actual, eliminarlo
          if (cache !== CACHE_NAME) {
            console.log('Borrando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptar las peticiones y responder con los recursos almacenados en caché
self.addEventListener('fetch', event => {
  event.respondWith(
    // Buscar en caché antes de hacer la solicitud a la red
    caches.match(event.request)
      .then(response => {
        // Si se encuentra en caché, responder con la versión en caché
        if (response) {
          return response;
        }
        // Si no está en caché, hacer la solicitud a la red
        return fetch(event.request)
          .then(response => {
            // Si la solicitud falla, mostrar la página de respaldo
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return caches.match('/offline.html');
            }
            // Si la solicitud tiene éxito, agregarla al caché y responder con la respuesta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});
