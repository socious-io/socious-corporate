import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log(frontmatter)

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description='Keep up to date with the latest news at Socious'
      />
      <div className="main">
        <div className="container__article">
          <div className="article__info">
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.Date.start}</p>
            <p>{frontmatter.Author[0].name}</p>
          </div>
          <img src={frontmatter.Hero_Image[0].external.url} className="image__article" alt="article hero banner" />
          <div className="article__body">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PageContents($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        Author {
          name
        }
        Date {
          start(formatString: "YYYY-MM-DD")
        }
        slug
        title
        Hero_Image {
          external {
            url
          }
        }
      }
      html
    }
  }
`
