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
              }
            }
          }
        }
      }
    }
  `)


  const { node: {
                 title,
                 date,
                 slug,
                 featuredImage       
                } } = query.allWpPost.edges[0]

  return (
    <div className="featured-blog">
      <img src={ featuredImage.node.sourceUrl}/>
      <div>
        <p className='blog-list-date'>
          <small>{ date }</small>
        </p>
        <h2>
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