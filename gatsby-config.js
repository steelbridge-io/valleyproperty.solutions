//const queries = require("./src/utils/algolia")
require('dotenv').config({
  path: `.env.production`
});

// gatsby-config.js
const blogSearchQuery = `{
  allSite(filter: {}, limit: 10, skip: 10) {
    nodes {
      siteMetadata {
        author
        description
        title
      }
    }
  }
}`;

const queries = [
  {
    query: blogSearchQuery,
    transformer: ({ data }) => data.allSite.nodes, // optional
  },
];

module.exports = {
  siteMetadata: {
    title: "Valley Property Solutions",
    author: "Chris Parsons",
    description: "N. California Wholesale Realesate Investing"
  },
  pathPrefix: `/gatsby-plugin-elasticlunr-search`,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149208529-1",
        head: true,
        pageTransitionDelay: 0,
        optimizeId: "GTM-P36H4PR",
        experimentId: "R_HVO5A8Q7iJQYtxZzLhDQ",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "valleyproperty.solutions",
      },
    },



    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },




  ],
}


