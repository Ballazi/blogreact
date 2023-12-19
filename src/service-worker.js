// service-worker.js


const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '../public/index.html',
    '/index.css',
    '/idex.js',
    // Add more URLs to cache as needed
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
