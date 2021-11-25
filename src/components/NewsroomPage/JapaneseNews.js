import React from 'react'
import PostItem from "./PostItem"
import { useStaticQuery, graphql } from "gatsby"

const JapaneseNews = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {fields: frontmatter___Date___start, order: DESC}
          skip: 1
          filter: {frontmatter: {Language: {eq: "ja"}}}
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

  const posts = data.allMarkdownRemark.edges.map(post => {
    const { id,
            frontmatter: { title, slug, Date, Hero_Image, Publish }
    } = post.node

    const completeArticle = Publish ?
      <PostItem
        key={id}
        slug={slug}
        title={title}
        date={Date.start}
        imageSrc={Hero_Image[0].external.url}
      /> :
      null

      return completeArticle
  });

  return (
    <div className="news-container">
      {posts}
    </div>
  )
}

export default JapaneseNews
