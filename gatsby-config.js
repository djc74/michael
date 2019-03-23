module.exports = {
  siteMetadata: {
    title: `LET'S BE SAFE`,
    description: `Michael Cooper's website`,
    author: `Big Tent`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Cooper`,
        short_name: `Michael`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/Michael.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
}
