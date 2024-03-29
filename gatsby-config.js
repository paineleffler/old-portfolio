module.exports = {
  siteMetadata: {
    defaultTitle: 'Paine\'s Portfolio Website',
    siteUrl: 'https://paineleffler.com',
    defaultDescription: 'Paine\'s website to showcase recent works and skills.'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-BW5SFGJ9XM'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://paineleffler.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
