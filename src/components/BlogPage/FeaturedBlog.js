import React from "react"

import { graphql, useStaticQuery  } from "gatsby"

import BlogCard from './BlogCard'

const FeaturedBlog = () => {

  const query = useStaticQuery(graphql`
  {
    allWpPost(sort: {order: DESC, fields: date}, limit: 2) {
      edges {
        node {
          title
          date(formatString: "MMM DD, YYYY")
          slug
          excerpt
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


  const { edges } = query.allWpPost
  console.log("EDGES", edges);

  return (
    <div className="main featured-box">
      <div className="container__blog">
        <h1>Featured posts</h1>
        {  edges.map(edge => (
          <div className="featured-blog">
            <BlogCard edge={ edge } key={ edge.node.slug }/>
          </div>
        ))}

      </div>
    </div>
  )
}

export default FeaturedBlog
