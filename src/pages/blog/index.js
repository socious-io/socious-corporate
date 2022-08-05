import React from 'react'
// import { graphql, Link } from 'gatsby'

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import FeaturedBlog from '../../components/BlogPage/FeaturedBlog'
import Blogs from '../../components/BlogPage/Blogs'

const BlogPage = (props) => {

  const jaPage = false

  const seoDescription = jaPage ?
                         'ソーシャスは社会変革のためのコミュニティアプリです。' :
                         'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ブログ' :
                   'Blog'
  
	return (
		<Layout {...props} header="transparent">
			<Seo
        title={seoTitle}
        description={seoDescription}
      />
      {/* Likely temporary Blog */}
      <div className="blog-banner">
        <div className="container__blog">
          <h2>Blog</h2>
          <p>Thoughts and opinions from the Socious team</p>
        </div>
      </div>
      <FeaturedBlog />
      <Blogs />
		</Layout>
	)
}

export default BlogPage
