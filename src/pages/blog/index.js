import React from 'react'
// import { graphql, Link } from 'gatsby'

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import FeaturedBlog from '../../components/BlogPage/FeaturedBlog'
import AllBlog from '../../components/BlogPage/AllBlog'

const BlogPage = () => {

  const jaPage = false

  const seoDescription = jaPage ?
                         'ソーシャスは社会変革のためのコミュニティアプリです。' :
                         'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ブログ' :
                   'Blog'
  
	return (
		<Layout>
			<Seo
        title={seoTitle}
        description={seoDescription}
      />
      {/* Likely temporary Blog */}
      <div className="blog-banner">
        <div className="container__blog">
          <h2>Blog</h2>
        </div>
      </div>
      <div className="main">
        <div className="container__blog">
          <FeaturedBlog />
          <AllBlog />
        </div>
      </div>
		</Layout>
	)
}

export default BlogPage

// export const query = graphql`
//   {
//     allWpPost(sort: {order: DESC, fields: date}) {
//       edges {
//         node {
//           title
//           date(formatString: "MMMM Do, YYYY")
//           slug
//           featuredImage {
//             node {
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   }
// `

