import { createApp } from 'vue';
import products from './components/Products';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(products);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_products-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
