module.exports = {
  siteMetadata: {
    title: "Valley Property Solutions",
    author: "Chris Parsons",
    description: "N. California Wholesale Realesate Investing"
  },
  plugins: [
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

