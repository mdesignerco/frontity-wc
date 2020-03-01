export const changeCartItemQuantity = ({ state, actions }) => ({ event, productId, value }) => {
    state.theme.cart.items.find(
        p => p.productId === productId
    ).quantity = value;
    actions.theme.calculateCartTotal();
}