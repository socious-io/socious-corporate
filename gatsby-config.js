module.exports = {
  siteMetadata: {
    url: "https://socious.io",
    title: "Socious",
    titleTemplate: "%s · Socious",
    description: "Socious is a Social Networking App for Social Changemakers: connecting social entrepreneurs with social impact talent.",
    image: "/socious-og.png",
    twitterImage: "/socious-og-twitter.png",
    favicon: {
      ico: 'favicons/favicon.ico',
      sm: 'favicons/favicon-16x16.png',
      lg: 'favicons/favicon-32x32.png',
      manifest: 'favicons/site.webmanifest',
      safariPinnedTab: 'favicons/safari-pinned-tab.svg',
      appleTouchIcon: 'favicons/apple-touch-icon.png',
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131',
          timeout: 3500,
      },
    },
  ],
};
