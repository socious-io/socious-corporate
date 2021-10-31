const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpcontent {
        posts(where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
    `).then(result => {
      //highlight-start
      result.data.wpcontent.posts.nodes.forEach(node => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.slug,
          },
        })
      })
      //highlight-end
    })
  }
