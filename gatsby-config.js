module.exports = {
  siteMetadata: {
    siteUrl: "https://socious.io",
    title: "Socious",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-anchor-links",
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131',
          timeout: 3500,
      },
    },
  ],
};
