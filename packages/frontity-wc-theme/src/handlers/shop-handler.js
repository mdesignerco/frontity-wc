export const shopHandler = {
  name: 'products',
  priority: 10,
  pattern: '/product-category/:slug/',
  func: async ({ route, params, state, libraries }) => {

    //1. get categories
    const categoryResponse = await libraries.source.api.get({
      endpoint: '/wp/v2/product_cat',
    });

    // 2. get an array with each item in json format
    const categories = await categoryResponse.json();
    
    // 3. get category id by slug selected
    const catId = categories.find(cat => cat.slug === params.slug).id;
    console.log('catId' + catId)
    // 4. get products
    const productsResponse = await libraries.source.api.get({
      endpoint: '/wp/v2/product',
      params: { product_cat: catId }
    });

    // 5. add products to state
    const items = await productsResponse.json();

    console.log(items)

    // 6. add route to data
    Object.assign(state.source.data[route], {
      items,
      isProductArchive: true
    });
  }
}