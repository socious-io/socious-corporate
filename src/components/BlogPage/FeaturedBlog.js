import React from "react"

import { graphql, Link, useStaticQuery  } from "gatsby"

const FeaturedBlog = () => {

  const query = useStaticQuery(graphql`
  {
    allWpPost(sort: {order: ASC, fields: date}, limit: 2) {
      edges {
        node {
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

  const WORDPRESS_URL = process.env.WORDPRESS_ENDPOINT

  // const { node: {
  //                title,
  //                date,
  //                slug,
  //                content,
  //                featuredImage       
  //               } } = query.allWpPost.edges[0]
  const { edges } = query.allWpPost
  console.log("EDGES", edges);

  return (
    <div className="main featured-box">
      <div className="container__blog">
        <h1>Featured posts</h1>
        {  edges.map(edge => (
          <div className="featured-blog">
            <img src={ WORDPRESS_URL + edge.node.featuredImage?.node.sourceUrl} alt={ edge.node.featuredImage?.node.altText || edge.node.title} />
            <div>
              <p className='blog-list-date'>
                <small>{ edge.node.date }</small>
              </p>
              <h1 className="featured-title">
                { edge.node.title }
              </h1>
              <div className="featured-para" dangerouslySetInnerHTML={{ __html: edge.node.content }}/>
              <Link to={`/blog/${edge.node.slug}`}>
                Read more
              </Link>
            </div>            
          </div>
        ))}

      </div>
    </div>
  )
}

export default FeaturedBlog