const CACHE = 'smilestone-v3';
const ASSETS = [
    './',
    './index.html',
    './kommunizieren.html',
    './icon-192.png',
    './icon-512.png',
    './manifest.json',
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ));
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // HTML pages: network-first so deployments are picked up immediately
    if (e.request.mode === 'navigate') {
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
        return;
    }
    // Everything else: cache-first for fast offline use
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
