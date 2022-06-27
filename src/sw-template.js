importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.5.3/workbox-sw.js');

workbox.loadModule('workbox-background-sync');
workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

registerRoute(
  new RegExp('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'),
  new CacheFirst()
);

registerRoute(
  new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'),
  new CacheFirst()
);

registerRoute(
  new RegExp('http://localhost:4000/api/auth/renew'),
  new NetworkFirst()
);

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkFirst()
);

/// Offline
const bgSyncPlugin = new BackgroundSyncPlugin('post-online-queue', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'POST'
);

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'PUT'
);

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'DELETE'
);