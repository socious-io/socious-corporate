import React from "react"

import { graphql, Link, useStaticQuery  } from "gatsby"

const FeaturedBlog = () => {

  const query = useStaticQuery(graphql`
  {
    allWpPost(sort: {order: DESC, fields: date}, limit: 1) {
      edges {
        node {
          title
          date(formatString: "YYYY-MM-DD")
          slug
          featuredImage {
            node {
              sourceUrl
              altText
              }
            }
          }
        }
      }
    }
  `)

  const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  const { node: {
                 title,
                 date,
                 slug,
                 featuredImage       
                } } = query.allWpPost.edges[0]

  return (
    <div className="featured-blog">
      <img src={ WORDPRESS_URL + featuredImage?.node.sourceUrl} alt={ featuredImage?.node.altText || title} />
      <div>
        <p className='blog-list-date'>
          <small>{ date }</small>
        </p>
        <h2 className="featured-title">
          { title }
        </h2>
        <Link to={`/blog/${slug}`}>
          Read article
        </Link>
      </div>            
    </div>
  )
}

export default FeaturedBlog