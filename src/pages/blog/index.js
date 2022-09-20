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
                         'Stay up to date about social impact topics: From social impact organizations to impact investing and climate change solutions, Socious got you covered.'

  const seoTitle = jaPage ?
                   'ブログ' :
                   'Blog | All about Social Impact | Socious'
  
	return (
		<Layout {...props} header="">
			<Seo
        title={seoTitle}
        description={seoDescription}
      />
      {/* Likely temporary Blog */}
      <div className="blog-banner">
        <div className="container__blog">
          <h2>BLOG</h2>
          <p>Thoughts and opinions from the Socious team</p>
        </div>
      </div>
      <FeaturedBlog />
      <Blogs />
		</Layout>
	)
}

export default BlogPage
