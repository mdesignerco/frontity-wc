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
          menu: [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'https://wp.laotramirada.com.uy/wp-json'
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
