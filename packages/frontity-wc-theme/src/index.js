import Theme from './components';
//import { productCategoriesHandler } from './handlers/product-categories-handler';
import { productHandler } from './handlers/product-handler';
//import { shopHandler } from './handlers/shop-handler';

const addToCart = ({ state }) => ({ productId, quantity }) => {
  state.theme.cart.push({ productId, quantity });
}

export default {
  name: 'frontity-wc-theme',
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      cart: []
    }
  },
  actions: {
    theme: {
      /* beforeSSR: ({ actions }) => async() => {
        await actions.source.fetch('product-categories');
      } */
      /* addToCart: ({ state }) => ({ productId, quantity }) => {
        state.theme.cart.push({ productId, quantity });
      }, */
      addToCart

    }
  },
  libraries: {
    source: {
      handlers: [
        //productCategoriesHandler,
        productHandler,
        //shopHandler,
      ]
    }
  }
};
