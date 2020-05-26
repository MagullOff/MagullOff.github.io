const staticCacheName = 'static-1.2';
const assets = [
    '/',
    '/index.html',
    '/ttt2.css',
    '/ttt2.js',
    
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    "https://fonts.googleapis.com/css?family=Rubik&display=swap"
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  });

// fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
    );
  });