export const productCategoriesHandler = {
    name: 'categories',
    priority: 10,
    pattern: 'product-categories',
    func: async ({ route, params, state, libraries }) => {

        // 1. fetch the data you want from the endpoint page
        const response = await libraries.source.api.get({
            endpoint: '/wc/v3/products/categories',
            params: { slug: params.slug}
        });

        // 2. get an array with each item in json format
        const categories = await response.json();

        // 3. add route to data
        Object.assign(state.source.data[route], {
            categories,
        });

    }
}