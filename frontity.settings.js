const settings = {
  name: 'frontity-wc',
  state: {
    frontity: {
      url: 'https://wp.laotramirada.com.uy',
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development'
    }
  },
  packages: [
    {
      name: "frontity-wc-theme",
      state: {
        theme: {
          cart: {
            items: [],
            cartTotal: 0,
          },
          menu: [
            ['Home', '/'],
            ['Shop', '/product/'],
            ['Tshirts', '/categoria-producto/tshirts'],
            ['Accessories', '/categoria-producto/accessories'],
            ['Checkout', '/checkout/'],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          },
          checkoutFields: [
            { name: 'firstName', title: 'First Name', value: '', error: false, half: true, isRequired: false },
            { name: 'lastName', title: 'Last Name', value: '', error: false, half: true, isRequired: false },
            { name: 'companyName', title: 'Company Name', value: '', error: false, half: false, isRequired: false },
            { name: 'streetAddress', title: 'Street', value: '', error: false, half: false, isRequired: false },
            { name: 'apartment', title: 'Apartment', value: '', error: false, half: false, isRequired: false },
            { name: 'city', title: 'City', value: '', error: false, half: false, isRequired: false },
            { name: 'country', title: 'Country', value: '', error: false, half: false, isRequired: false },
            { name: 'postcode', title: 'Post Code', value: '', error: false, half: false, isRequired: false },
            { name: 'phone', title: 'Phone', value: '', error: false, half: false, isRequired: false },
            { name: 'email', title: 'Email', value: '', error: false, half: false, isRequired: true },
            { name: 'notes', title: 'Notes', value: '', error: false, half: false, isRequired: false },
          ]
          //isCheckout: false,
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'https://wp.laotramirada.com.uy/wp-json',
          postTypes: [
            {
              type: 'product',
              //endpoint: '/wc/v3/products',
              endpoint: 'product',
              archive: '/product'
            }
          ],
          taxonomies: [
            {
              taxonomy: 'categoria-producto',
              endpoint: 'product_cat',
              //postTypeEndpoint: '/wc/v3/products',
              postTypeEndpoint: 'product',
              params: {
                per_page: 5,
                _embed: true
              }
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
