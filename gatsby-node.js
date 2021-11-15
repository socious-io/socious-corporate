const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/BlogPost.js");

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___Date___start}) {
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

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

const messages = require("./src/resources/i18n-translations.json")
const {languages, defaultLanguage} = require("./src/resources/i18n");

exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;
  return new Promise((resolve) => {
    let path = page.path;
    deletePage(page);

    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) {
        path = '/' + language + page.path;
      }

      const pageForLanguage = Object.assign({}, page, {
        originalPath: page.path,
        path: path,
        context: {
          language,
          messages: messages[language]
        }
      });
      createPage(pageForLanguage)
    }
    resolve()
  })
};
