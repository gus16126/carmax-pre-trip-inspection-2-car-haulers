const CACHE_NAME = 'pre-trip-cache-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './CDL_Air_Dryer.jpg',
  './CDL_Alternator.jpg',
  './CDL_Coolant_Reservoir.jpg',
  './CDL_Intercooler_System.jpg',
  './CDL_Reservoir_Hoses.jpg',
  './CDL_Shocking_Wheels.jpg',
  './CDL_Step 2-Front_Cab2_Inspection.jpg',
  './CDL_Step 2-Front_Cab3_Inspection.jpg',
  './CDL_Step 2-Front_Cab_Hood-Grill_Inspection.jpg',
  './CDL_Step 2-Front_Cab_Hood_Hinges_Inspection.jpg',
  './CDL_Step 2-Front_Cab_Inspection.jpg',
  './CDL_Top_Radiator_Hose.jpg',
  './CDL_Water_Pump.jpg',
  './CDL_Wheel_Rim_Inside.jpg'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching files');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache First with Network Fallback
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately
        return cachedResponse;
      }
      
      // Fallback to network
      return fetch(e.request).then((networkResponse) => {
        // Cache new resource if it is a valid get request to our origin
        if (e.request.method === 'GET' && networkResponse.status === 200) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      }).catch(() => {
        // If both fail and request is for page, return cached index
        if (e.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
