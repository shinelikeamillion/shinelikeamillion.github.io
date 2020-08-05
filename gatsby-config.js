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
        start_url: `/covid_19/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bungee+Outline`,
            subsets: [`latin`],
          },
          {
            family: `Rubik`,
            variants: [`300`, `500`],
          },
          {
            family: `Lora`,
            variants: [`400`, `700`],
          },
          {
            family: `Playfair+Display`,
            variants: [`700i`, `900`],
          },
        ],
      },
    },
  ],
}
