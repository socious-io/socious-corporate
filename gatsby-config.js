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
    description: "Socious is a community app to accelerate social change by bringing people together. We use AI and blockchain-based tokens to help people join social impact projects in an easy, fun and fulfilling way.",
    descriptionJapanese: "ソーシャスは、「出会いの化学反応で社会変革を加速させる」というミッションのもと、誰でも気軽に楽しく社会貢献できるように、SNSアプリ、AIマッチング、ブロックチェーンに基づくコミュニティ通貨を開発しています。",
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
