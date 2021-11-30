import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const EnglishNewsHeadline = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {fields: frontmatter___Date___start, order: DESC}
          limit: 1
          filter: {frontmatter: {Language: {eq: "en"}, Publish: {eq: true}}}
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
                  external {
                    url
                  }
                }
                Publish
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
                        Hero_Image,
                        Publish                    
                      }} = data.allMarkdownRemark.edges[0].node

  const url = "/" + slug

  const headlineArticle = Publish ?
                          <Link to={url}>
                            <div className="news-headline">        
                              <img src={Hero_Image[0].external.url} style = {{ maxWidth: "100%" }} alt="article hero banner" />
                              <div className="headline-content">
                                <h3>{title}</h3>
                                <small>{Date.start}</small>
                              </div>
                            </div>
                          </Link> :
                          null

  return (
    <div>
      {headlineArticle}
    </div>
  )
}

export default EnglishNewsHeadline
