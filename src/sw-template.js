importScript('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.5.3/workbox-sw.js');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );