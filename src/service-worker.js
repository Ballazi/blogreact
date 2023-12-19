// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';

// This line populates the cache with the resources listed in the manifest generated by Workbox
precacheAndRoute(self.__WB_MANIFEST);

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
