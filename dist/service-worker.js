/**
 * In a service worker you can add any javascript code, but keep in mind one thing,
 * the service worker is not ATTACHED to the page, by means you can't access `document`
 * and `window`.
 * 
 * the `self` keyword is the service worker itself
 */

// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function install() {
  // eslint-disable-next-line no-console
  console.log('I\'m installed');
});


