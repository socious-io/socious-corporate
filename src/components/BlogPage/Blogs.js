import React from "react"

import { graphql, Link, useStaticQuery  } from "gatsby"

const Blogs = () => {

  const query = useStaticQuery(graphql`
    {
      allWpPost(sort: {order: DESC, fields: date}, skip: 1) {
        edges {
          node {
            id
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  `)

  const { edges } = query.allWpPost

  return (
    <div>
      {/* check for length */}
      { edges.length > 0 && 
        <>
          <h2>The Latest</h2>
          {
            edges.map((edge) => {
              return (
                <div className='blog-card' key={edge.node.id}>
                  <Link to={`/blog/${edge.node.slug}`} className="blog-list-name">
                    { edge.node.title }  
                  </Link>
                  <p className='blog-list-date'>
                    <small>{ edge.node.date }</small>
                  </p>
                </div>
              )
            })
          }
        </>
      }
    </div>
  )
}

export default Blogs
