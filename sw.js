'use strict';

importScripts('lib/sw-toolbox.js');

var precacheList = [
  'index.html',
  'src/index.js',
  'images/favicon.png',
  'images/icon192.png',
  'images/icon512.png',
  'images/samsung-internet-logo-text.svg'
]

toolbox.precache(precacheList);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});