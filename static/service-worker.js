self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("first-aid-cache").then(cache => {
            return cache.addAll([
                "/",              // main page
                "/offline",       // offline page
            ]);
        })
    );
});

// Fetch event (IMPORTANT)
self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});