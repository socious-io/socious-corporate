module.exports = {
  siteMetadata: {
    siteUrl: "https://www.socious.io",
    title: "Socious",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: "./src/images/App-icon.svg",
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "xxx",
        short_name: "xxxx",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/App-icon.svg" // This path is relative to the root of the site.
      }
    },
  ],
};
