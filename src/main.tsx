import React from 'react';
import ReactDom from 'react-dom';

/**
 * @link https://www.npmjs.com/package/intersection-observer
 * Require the polyfill before requiring any other modules. 
 */
import 'intersection-observer';

import { App } from '@/components/core/App';

const AppWrapper = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// @ts-ignore
const app = document.querySelector('#app');

if (app !== null) {
  ReactDom.render(<AppWrapper />, app);
}

// @ts-ignore
if ('serviceWorker' in navigator) {
  // @ts-ignore
  window.addEventListener('load', async () => {
    type Reg = unknown;

    try {
      // @ts-ignore
      const reg: Reg = await navigator.serviceWorker.register('/service-worker.js');
      // eslint-disable-next-line no-console
      console.log('Service worker registered.', reg);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Service worker error.', err);
    }
  });
}
