import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import Banner from "../../components/NewsroomPage/Banner"
import PostItem from "./PostItem"

const NewsroomPage = ({ data }) => {
  const posts = data.allNotion.edges.map(post => {
    const { id,
            title,
            createdAt,
            properties: { Author, Date }
    } = post.node

    return (
      <PostItem
        title={title}
        date={Date.value.start}
        author={Author.value[0].name}
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
  query {
    allNotion(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          internal {
            content
            mediaType
          }
          title
          archived
          updatedAt(formatString: "YYYY-MM-DD")
          properties {
            Author {
              value {
                name
                avatar_url
              }
            }
            Date {
              value {
                start(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    }
  }
`
