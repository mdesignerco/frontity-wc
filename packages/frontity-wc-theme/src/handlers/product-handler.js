export const productHandler = {
    name: 'product-cat',
    priority: 10,
    pattern: '/product_cat/:slug',
    func: async ({ route, params, state, libraries }) => {
  
      // 1. get single product
      const response = await libraries.source.api.get({
        endpoint: '/wp/v2/product/?product_cat',
        params: { slug: params.slug}
      });
  
      // 2. add single product to state
      const productData = await response.json();
  
      // 3. add route to data
      Object.assign(state.source.data[route], {
        productData,
        isProduct: true
      });
    }
  }