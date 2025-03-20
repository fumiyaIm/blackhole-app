// sw.js
const CACHE_NAME = 'blackhole-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // その他キャッシュしたいリソース
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});