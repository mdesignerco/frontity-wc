import Theme from './components';
//import { productCategoriesHandler } from './handlers/product-categories-handler';
import { productHandler } from './handlers/product-handler';
//import { shopHandler } from './handlers/shop-handler';
//import { initHandler } from './handlers/init-handler';

const addToCart = ({ state, actions }) => ({ productId, quantity }) => {
  state.theme.cart.items.push({ productId, quantity });
  //actions.theme.calculateCartTotal();
  let products = state.source.product;
  actions.theme.calculateCartTotal();
  //console.log(products);
  /* state.theme.cart.cartTotal = state.theme.cart.items.reduce((total, product) =>
    total + parseFloat(products[product.productId].price), 0
  );
  localStorage.setItem(
    'frontity_wc_cart',
    JSON.stringify(state.theme.cart)
  ); */
}

const toggleShowCartDetail = ({ state }) => {
  state.theme.showCartDetail = !state.theme.showCartDetail;
}

const calculateCartTotal = ({ state }) => {
  let products = state.source.product;
  state.theme.cart.cartTotal = state.theme.cart.items.reduce((total, product) =>
    total + parseFloat(products[product.productId].price), 0
  );
  localStorage.setItem(
    'frontity_wc_cart',
    JSON.stringify(state.theme.cart)
  );
}

const onTrashCartItem = ({ state, actions }) => ({ productId }) => {
  //console.log(productId)
  state.theme.cart.items = state.theme.cart.items.filter(
    item => item.productId !== productId
  );
  actions.theme.calculateCartTotal();
}


const before = async ({ libraries, actions }) => {
  //libraries.source.handlers.push(initHandler);
  //await actions.source.fetch('initHandler')
}

const afterCSR = async ({ state, actions }) => {
  if (state.frontity.platform === 'client') {
    if (0 === state.theme.cart.items.length) {
      const storedCart = localStorage.getItem(
        'frontity_wc_cart'
      );
      if (storedCart && storedCart.length !== 0) {
        state.theme.cart = JSON.parse(storedCart);
        state.theme.cart.items.map(cartItem => {
          actions.source.fetch(
            `/product/${cartItem.productId}`,
          );
        })
      };
    }
  }
}

export default {
  name: 'frontity-wc-theme',
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      cart: [],
      showCartDetail: false,
      cartTotal: 0,
    }
  },
  actions: {
    theme: {
      beforeSSR: before,
      afterCSR: afterCSR,

      addToCart,
      calculateCartTotal,
      onTrashCartItem,
      toggleShowCartDetail,
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
