const settings = {
    "name": "frontity-wc",
    "state": {
      "frontity": {
        "url": "https://wp.laotramirada.com.uy",
        "title": "Test Frontity Blog",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "@frontity/mars-theme",
        "state": {
          "theme": {
            "menu": [
              [
                "Home",
                "/"
              ],
              [
                "Products",
                "/product/"
              ],
              [
                "Tshirts",
                "/categoria-producto/tshirts/"
              ],
              [
                "Japan",
                "/tag/japan/"
              ],
              [
                "About Us",
                "/about-us/"
              ]
            ],
            "featured": {
              "showOnList": true,
              "showOnPost": true
            }
          }
        }
      },
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            api: "https://wp.laotramirada.com.uy/wp-json",
            postTypes: [
                {
                    type: 'product',
                    endpoint: 'product',
                    archive: '/product'
                },
            ],
            taxonomies: [
              {
                taxonomy: 'product_cat',
                endpoint: 'product_cat',
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
  