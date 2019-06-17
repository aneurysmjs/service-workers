/**
 * In a service worker you can add any javascript code, but keep in mind one thing,
 * the service worker is not ATTACHED to the page, by means you can't access `document`
 * and `window`.
 * 
 * the `self` keyword is the service worker itself
 */

const URLS = [
  '/',
  '/index.html',
  '/main.js',
  '/assets/img/bootstrap-logo.png',
  '/assets/img/react-logo.png',
  '/assets/img/webpack-logo.png',
  '/manifest.json',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
];

const CACHE_NAME = 'fuckingCache';

// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function installHandler(evt) {
  // eslint-disable-next-line no-console
  console.log('I\'m installed');

  // will wait for data operation to finish
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // array of urls
      return cache.addAll(URLS);
    })
  );
});

/**
 * any time the browser tries to access any url the scope of the SW,
 * this event will be fire
 */
self.addEventListener('fetch', function fetchHandler(evt) {
  if (!navigator.onLine) {
    // evt.respondWith(new Response('You are offline'));
  } else {
    // cache-first policy "get from the cache, if isn't there, go to the network"
    evt.respondWith(
      caches.match(evt.request.url).then(response => {
        if (response) {
          // request is in the cache
          return response;
        }
        // eslint-disable-next-line no-console
        console.log('evt', evt);
        
        // go to the network
        return fetch(evt.request).then(res => {
          // eslint-disable-next-line no-console
          console.log('res', res);
          const resCloned = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(evt.request.url, resCloned);
          });
          return res;
        });
      })
    );
  }
 
});

