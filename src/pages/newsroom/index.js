import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import Banner from "../../components/NewsroomPage/Banner"

import NewsHeadline from "./NewsHeadline"
import PostItem from "./PostItem"

const NewsroomPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(post => {
    const { id,
            frontmatter: { title, slug, Date, Hero_Image }
    } = post.node

    return (
      <PostItem
        key={id}
        slug={slug}
        title={title}
        date={Date.start}
        imageSrc={Hero_Image[0].file.url}
      />
    )
  });

  return (
    <Layout>
      <Seo
        title='Newsroom'
        description='Keep up to date with the latest news at Socious'
      />
      <Banner />
      <div className="container__articles">
        <h2>Latest News</h2>
        <NewsHeadline />
        {posts}
      </div>
    </Layout>
  )
}

export default NewsroomPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: {fields: frontmatter___Date___start, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            slug
            Date {
              start(formatString: "YYYY-MM-DD")
            }
            Hero_Image {
              file {
                url
              }
            }
          }
          id
        }
      }
    }
  }
`
