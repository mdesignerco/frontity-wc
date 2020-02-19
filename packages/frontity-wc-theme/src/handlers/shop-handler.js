export const shopHandler = {
  name: 'products',
  priority: 10,
  pattern: '/product-category/:slug/',
  func: async ({ route, params, state, libraries }) => {

    //1. get categories
    const categoryResponse = await libraries.source.api.get({
      endpoint: '/wc/v3/products/categories',
    });

    // 2. get an array with each item in json format
    const categories = await categoryResponse.json();
    
    // 3. get category id by slug selected
    const catId = categories.find(cat => cat.slug === params.slug).id;

    // 4. get products
    const productsResponse = await libraries.source.api.get({
      endpoint: '/wc/v3/products',
      params: { category: catId }
    });

    // 5. add products to state
    const items = await productsResponse.json();

    // 6. add route to data
    Object.assign(state.source.data[route], {
      items,
      isShop: true
    });
  }
}