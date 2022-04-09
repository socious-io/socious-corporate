require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    url: "https://socious.io",
    title: "Socious | Community App for Social Change",
    titleJapanese: "ソーシャス | 社会変革のためのコミュニティアプリ",
    titleTemplate: "%s · Socious",
    titleTemplateJapanese: "%s · ソーシャス",
    description: "Socious is a community app with a mission to accelerate social and environmental impact. We use AI and blockchain technologies to reward good deeds to encourage people to contribute to impact projects.",
    descriptionJapanese: "ソーシャスは、「社会・環境インパクトを加速させる」というミッションのもと、誰でも気軽に社会貢献できるように、社会貢献にインセンティブを与えるAI・ブロックチェーンプラットフォームを開発しています。",
    image: "https://socious.io/socious-og.png",
    imageJapanese: "https://socious.io/socious-og-ja.png",
    twitterImage: "https://socious.io/socious-og-twitter.png",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WGLLNNL",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-MXDPH6PE8M", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131',
          timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_SECRET_TOKEN,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-katex`,
						options: {
							strict: false,
						},
					},
				],
			},
		},
  ],
};
