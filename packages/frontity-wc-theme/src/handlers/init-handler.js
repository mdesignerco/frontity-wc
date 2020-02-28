export const initHandler = {
    name: 'initHandler',
    priority: 10,

    pattern: 'initHandler',

    func: async ({ state, libraries }) => {
        console.log('init-handler')
        const cachedCart = window.localStorage.getItem('frontity_wc_cart');
        if (cachedCart && cachedCart.length !== 0) {
            state.theme.cart = JSON.parse(cachedCart);
            state.theme.cart.map(cartItem => {
                
                console.log(cartItem.productId);

            })
        };
    }
}