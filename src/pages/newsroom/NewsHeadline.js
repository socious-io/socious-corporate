import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const NewsHeadline = () => {
  const data = useStaticQuery(
    graphql`
      query NewsHeadline {
        allMarkdownRemark(
          sort: {fields: frontmatter___Date___start, order: DESC}
          limit: 1
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                Author {
                  name
                }
                Date {
                  start(formatString: "YYYY-MM-DD")
                }
                Hero_Image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  
  const {frontmatter: { title,
                        slug,
                        Date,
                        Hero_Image }} = data.allMarkdownRemark.edges[0].node

  const url = "/" + slug

  return (
    <Link to={url}>
      <div className="news-headline">        
        <img src={Hero_Image[0].file.url} style = {{ maxWidth: "100%" }} alt="article hero banner" />
        <div className="headline-content">
          <h3>{title}</h3>
          <small>{Date.start}</small>
        </div>
      </div>
    </Link>
  )
}

export default NewsHeadline
