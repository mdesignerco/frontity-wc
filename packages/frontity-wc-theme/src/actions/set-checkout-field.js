export const setCheckoutField = ({ state }) => ({ fieldName, value }) => {
    state.theme.checkoutForm.fields[fieldName] = value
}