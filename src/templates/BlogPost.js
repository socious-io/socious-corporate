import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/seo'


const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description='Keep up to date with the latest news at Socious'
      />
      <div id = "main">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.Author.name}</h2>
        <small>{Date.start}</small>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
      html
    }
  }
`
