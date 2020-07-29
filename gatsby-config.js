require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `shinelikeamillions`,
    description: `blogging like a hacker.`,
    author: `@sean_matro`,
    keywords: `react, gatsby, nodejs, sean_matro, processing, emoji`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shinelikeamillion.io`,
        short_name: `shinelikeamillion`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: "AIzaSyCFqnuhXSqNCAcBS49trh8GrRqZsww5n_w",
          authDomain: "github-io-1f737.firebaseapp.com",
          databaseURL: "https://github-io-1f737.firebaseio.com",
          projectId: "github-io-1f737",
          storageBucket: "github-io-1f737.appspot.com",
          messagingSenderId: "234111469947",
          appId: "1:234111469947:web:00047d1743f1d53d1015de",
          measurementId: 'G-RPBYTVK1BM"',
        },
      },
    },
  ],
}
