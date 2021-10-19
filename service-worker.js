const APP_PREFIX = 'FoodEvent-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
  "./index.html",
  "./events.html",
  "./tickets.html",
  "./schedule.html",
  "./assets/css/style.css",
  "./assets/css/bootstrap.css",
  "./assets/css/tickets.css",
  "./dist/app.bundle.js",
  "./dist/events.bundle.js",
  "./dist/tickets.bundle.js",
  "./dist/schedule.bundle.js"
];

self.addEventListener('install', function (e) {
    e.waitUntil( // tells browser to wait until the work is complete before terminating service worker
        caches.open(CACHE_NAME).then(function (cache) { // caches.open finds specific cache by name and then adds every file
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})