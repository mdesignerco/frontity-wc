import Theme from './components';
//import { productCategoriesHandler } from './handlers/product-categories-handler';
import { cartHandler } from './handlers/cart-handler';
import { cartProductHandler } from './handlers/cart-product-handler';
import { checkoutHandler } from './handlers/checkout-handler';
import { fetchMediaHandler } from './handlers/fetch-media-handler';
//import { placeOrderHandler } from './handlers/place-order-handler';
//import { initHandler } from './handlers/init-handler';

import { addToCart } from './actions/add-to-cart';
import { afterCSR } from './actions/after-csr';
import { calculateCartTotal } from './actions/calculate-cart-total';
import { changeCartItemQuantity } from './actions/change-cart-item-quantity';
import { closeModal } from './actions/close-modal';
import { goCheckout } from './actions/go-checkout';
import { openModal } from './actions/open-modal';
import { placeOrder } from './actions/place-order';
import { processOrder } from './actions/process-order';
import { setCheckoutField } from './actions/set-checkout-field';
import { trashCartItem } from './actions/trash-cart-item';
import { toggleShowCartDetail } from './actions/toggle-show-cart-detail';

export default {
  name: 'frontity-wc-theme',
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      cart: [],
      showCartDetail: false,
      showModal: false,
      processingOrder: false,
      modalContent: '',
      cartTotal: 0,
    }
  },
  actions: {
    theme: {
      addToCart,
      afterCSR,
      calculateCartTotal,
      changeCartItemQuantity,
      closeModal,
      goCheckout,
      openModal,
      placeOrder,
      processOrder,
      setCheckoutField,
      trashCartItem,
      toggleShowCartDetail,
    }
  },
  libraries: {
    source: {
      handlers: [
        //productCategoriesHandler,
        cartHandler,
        cartProductHandler,
        checkoutHandler,
        fetchMediaHandler,
        //placeOrderHandler,
      ]
    }
  }
};
