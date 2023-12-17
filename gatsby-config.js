
const path = require('path')

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'CompartiMOSS',
    description:
      'Bienvenidos a CompartiMOSS, la revista digital de habla hispana en la que se escribe sobre la tecnología Microsoft y todo lo relacionado con ésta',
    author: '@compartimoss_com',
    siteUrl: `https://www.compartimoss.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag", 
      options: {
        trackingIds: [
          "G-TJCZJ7913E"
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            },
          }
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CompartiMOSS',
        short_name: 'CompartiMOSS',
        description: 'La revista digital de habla hispana en la que se escribe sobre la tecnología Microsoft y todo lo relacionado con ésta',
        lang: 'es',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#303030',
        display: 'standalone',
        icon: 'src/images/compartimoss-icon.png'
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mdx-frontmatter'
    }
  ]
};