const PRECACHE_CACHE_NAME = 'precache-v0.1';
const precachedPaths = ['/', '/favicon.ico', '/large-meta-image.png', '/manifest.json'];

const RUNTIME_CACHE_NAME = 'runtime-v0.1';
const runtimeRegexp = /(.css|.png|.jpg|.svg|.chunk.js)$|^(https:\/\/fonts.googleapis.com|https:\/\/fonts.gstatic.com|https:\/\/api.github.com\/users\/ooade)/;

// Precache
self.addEventListener('install', (event) => {
	// Perform install steps
	event.waitUntil(
		caches
			.open(PRECACHE_CACHE_NAME)
			.then((cache) => {
				return cache.addAll(precachedPaths);
			})
			.then(() => {
				return self.skipWaiting();
			})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}

			return fetch(event.request).then((response) => {
				if (!response || response.status !== 200) {
					// response.type !== 'basic'
					return response;
				}

				const responseToCache = response.clone();

				if (response.url.match(runtimeRegexp)) {
					caches.open(RUNTIME_CACHE_NAME).then((cache) => {
						cache.put(event.request, responseToCache);
					});
				}

				return response;
			}).catch((response) => {
				return response;
			})
		})
	);
});

self.addEventListener('activate', (event) => {
	const cacheWhitelist = [PRECACHE_CACHE_NAME, RUNTIME_CACHE_NAME];

	event.waitUntil(clients.claim());

	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
