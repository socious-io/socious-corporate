import React from "react"

import { graphql, Link, useStaticQuery  } from "gatsby"

import BlogCard from "./BlogCard"

const Blogs = () => {

  const query = useStaticQuery(graphql`
    {
      allWpPost(sort: {order: ASC, fields: date}, skip: 1, limit: 2) {
        edges {
          node {
            id
            title
            date(formatString: "MMM DD, YYYY")
            slug
            content
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

  return (
    <div className="main blogs-list">
      <div className="container__articles">
        {/* check for length */}
        { edges.length > 0 && 
          <>
            {
              edges.map((edge) => {
                return (
                  <div className="blog-card">
                    <BlogCard edge={edge} key={edge.node.id} alternate/>
                  </div>
                )
              })
            }
          </>
        }
        <button className="load-more">Load more news</button>
      </div>
    </div>
  )
}

export default Blogs
