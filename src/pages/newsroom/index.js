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
        imageSrc={Hero_Image[0].external.url}
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
      <div className="main">
        <div className="container__articles">
          <h2>Latest News</h2>
          <NewsHeadline />
          <div class="news-container">
            {posts}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewsroomPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(
      sort: {fields: frontmatter___Date___start, order: DESC}
      skip: 1
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
          }
        }
      }
    }
  }
`
