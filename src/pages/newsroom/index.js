import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import Banner from "../../components/NewsroomPage/Banner"
import PostItem from "./PostItem"

const NewsroomPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(post => {
    const { id,
            frontmatter: { title, slug, Author, Date, Hero_Image }
    } = post.node

    console.log(typeof(Hero_Image[0].file.url))

    return (
      <PostItem
        key={id}
        slug={slug}
        title={title}
        date={Date.start}
        author={Author[0].name}
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
      {posts}
    </Layout>
  )
}

export default NewsroomPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            Author {
              name
            }
            Date {
              start
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
