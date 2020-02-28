export const productHandler = {
  name: 'product',
  priority: 10,
  pattern: '/product/:slug',
  func: async ({ route, params, state, libraries }) => {
    
    // 1. get product
    const response = await libraries.source.api.get({
      endpoint: `product/${params.slug}`,
    });

    // 2. add product to state
    const [product] = await libraries.source.populate({ response, state });

    // 3. add route to data
    Object.assign(state.source.data[route], { product });
  }
}