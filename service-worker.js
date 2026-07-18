const cacheName = "mfd-cache-v1";

const files = [
    "index.html",
    "style.css",
    "script.js",
    "images/cockpit.png",
    "images/engine.png",
    "images/warning.png",
    "images/fuel.png",
    "images/electric.png",
    "images/radar.png",
    "images/text.png"
];


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(files))
    );
});


self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
