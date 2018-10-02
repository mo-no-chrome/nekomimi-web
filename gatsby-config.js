module.exports = {
  siteMetadata: {
    title: 'Nekomimi Web',
    siteUrl: 'https://mo-no-chrome.github.io/nekomimi-web',
    description: 'Nekomimi Webはネコミミの魅力を伝えるサイトです！'
  },
  pathPrefix: '/nekomimi-web',
  plugins: [
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
