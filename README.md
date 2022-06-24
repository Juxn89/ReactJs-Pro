# CalendarApp - Progressive Web App
## Making a PWA
### Description
Starting with Create React App 4, you can add a src/service-worker.js file to your project to use the built-in support for Workbox's InjectManifest plugin, which will compile your service worker and inject into it a list of URLs to precache.

If you start a new project using one of the PWA custom templates, you'll get a src/service-worker.js file that serves as a good starting point for an offline-first service worker:

```npx create-react-app my-app --template cra-template-pwa```

The TypeScript equivalent is:

```npx create-react-app my-app --template cra-template-pwa-typescript```

### Content
- Service Worker.
- Caché.
- Instalation.
- Fetch.
- Caching strategies.
  - Network first.
  - Cache Only.
  - Network first with cache fallback.

### References
- [create-react-app | Making a Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/).
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/).