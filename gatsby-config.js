import { 
  title,
  titleAlt,
  description,
  headline,
  siteLanguage,
  logo,
  ogLanguage,
  url,
  author
} from './config/website';

export const siteMetadata = {
  siteUrl: url + pathPrefix, pathPrefix,
  title: title,
  titleAlt: titleAlt,
  description: description,
  headline: headline,
  siteLanguage: siteLanguage,
  logo: logo,
  ogLanguage: ogLanguage,
  author: author
};

export const plugins = [
  "gatsby-plugin-sass",
  "gatsby-plugin-sharp",
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
];
