import Theme from './components';
//import { productCategoriesHandler } from './handlers/product-categories-handler';
import { cartHandler } from './handlers/cart-handler';
import { cartProductHandler } from './handlers/cart-product-handler';
import { checkoutHandler } from './handlers/checkout-handler';
import { fetchMediaHandler } from './handlers/fetch-media-handler';
//import { shopHandler } from './handlers/shop-handler';
//import { initHandler } from './handlers/init-handler';

import { addToCart } from './actions/add-to-cart';
import { afterCSR } from './actions/after-csr';
import { calculateCartTotal } from './actions/calculate-cart-total';
import { openModal } from './actions/open-modal';
import { goCheckout } from './actions/go-checkout';
import { closeModal } from './actions/close-modal';
import { setCheckoutField } from './actions/set-checkout-field';
import { trashCartItem } from './actions/trash-cart-item';
import { toggleShowCartDetail } from './actions/toggle-show-cart-detail';
import { changeCartItemQuantity } from './actions/change-cart-item-quantity';

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
      modalContent: '',
      cartTotal: 0,
      checkoutForm: {
        fields: {
          firstName: '',
          lastName: '',
          streetAddress: '',
          apartment: '',
          city: '',
          country: '',
          postcode: '',
          phone: '',
          email: '',
          notes: '',
        }
      }
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
        //shopHandler,
      ]
    }
  }
};
