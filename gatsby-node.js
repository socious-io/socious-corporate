require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path");
const messages = require("./src/resources/i18n-translations.json");
const { languages, defaultLanguage } = require("./src/resources/i18n");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  return new Promise(async (resolve) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPost.js");
    const wordpressPostTemplate = path.resolve("src/templates/WordPressBlog.js");
    const humansOfSociousPostTemplate = path.resolve("src/templates/HumansOfSociousBlog.js");

    const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___Date___start }
        filter: { frontmatter: { Publish: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

    const wordpressResult = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
    }  
  `);

    const hosBlogResult = await graphql(`
    {
      allWpHosBlog {
        edges {
          node {
            slug
          }
        }
      }
    }`)

    // {
      //   allWpHosBlog {
      //     nodes {
      //       hosBlogData {
      //         author {
      //           ... on WpHosBlogAuthors {
      //             title
      //             featuredImage {
      //               node {
      //                 localFile {
      //                   childImageSharp {
      //                     id
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //         category
      //         summary
      //       }
      //       title
      //       featuredImage {
      //         node {
      //           uri
      //         }
      //       }
      //     }
      //   }
      // }


    if (result.errors || wordpressResult.errors || hosBlogResult.errors) {
      reporter.panicOnBuild("Error while running GraphQL query.");
      return;
    }

    const posts = result.data.postsRemark.edges;
    const wordpressPosts = wordpressResult?.data?.allWpPost?.edges || [];
    const hosBlogPosts = hosBlogResult?.data?.allWpHosBlog?.edges || [];


    let posts_path_list = [];
    posts.forEach(({node})=>{
      let path = node.frontmatter.slug;
      if(path[0]!='/'){
        path = "/"+path;
      }
      posts_path_list.push(path)
    })

    posts.forEach(({ node }) => {
      let path = node.frontmatter.slug;
      for (let language of languages) {
        let slug = node.frontmatter.slug;

        const isDefaultLanguage = language === defaultLanguage;

        let pathComponents = path.match(/([^\/]+)/g);
        slug = pathComponents[pathComponents.length - 1];
        path = "/"+slug;

        if (!isDefaultLanguage) {
          path = "/" + language + '/' + slug;
          if(posts_path_list.includes(path)){
            slug = language + '/' + slug;
          }          
        }

        const pageForLanguage = Object.assign({}, node, {
          originalPath: slug,
          path: path,
          component: blogPostTemplate,
          context: {
            language,
            messages: messages[language],
            slug: slug
          },
        });
        createPage(pageForLanguage);
      }
    }
    )


    wordpressPosts.forEach(({ node }) => {
      let path = `/blog/${node.slug}`;
      for (let language of languages) {
        const isDefaultLanguage = language === defaultLanguage;
        if (!isDefaultLanguage) {
          path = "/" + language + '/blog/' + node.slug;
        }

        const pageForLanguage = Object.assign({}, node, {
          originalPath: `/blog/${node.slug}`,
          path: path,
          component: wordpressPostTemplate,
          context: {
            language,
            messages: messages[language],
            slug: node.slug
          },
        });
        createPage(pageForLanguage);
      }

      // createPage({
      //   path: `/blog/${node.slug}`,
      //   component: wordpressPostTemplate,
      //   context: {
      //     slug: node.slug,
      //   },
      // });
    });

  hosBlogPosts.forEach(({ node }) => {
    let path = `/hos/${node.slug}`;
    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) {
        path = "/" + language + '/hos/' + node.slug;
      }

      const pageForLanguage = Object.assign({}, node, {
        originalPath: `/hos/${node.slug}`,
        path: path,
        component: humansOfSociousPostTemplate,
        context: {
          language,
          messages: messages[language],
          slug: node.slug
        },
      });
      createPage(pageForLanguage);
    }
  });
  resolve()
  })
};



exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise((resolve) => {
    let path = page.path;
    deletePage(page);

    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) {
        path = "/" + language + page.path;
      }

      const pageForLanguage = Object.assign({}, page, {
        originalPath: page.path,
        path: path,
        context: {
          language,
          messages: messages[language],
        },
      });
      createPage(pageForLanguage);
    }
    resolve();
  });
};


const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = process.env.WORDPRESS_ENDPOINT + source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
