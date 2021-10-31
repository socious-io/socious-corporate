import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

import Banner from "../../components/NewsroomPage/Banner";

const NewsroomPage = ({ data }) => {
  console.log(data.wpcontent.posts.nodes)
  const newsPosts = data.wpcontent.posts.nodes.map(node => {
    return (
      <div>
        <p>{node.title}</p>
        <small>{node.author.node.name}</small>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
      </div>
    )
  })

  return (
    <Layout>
      <Seo
        title='Newsroom'
        description='Keep up to date with the latest news at Socious'
      />
      <Banner />
      {newsPosts}
    </Layout>
  )
}

export default NewsroomPage

export const pageQuery = graphql`
  query {
    wpcontent {
      posts(where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          id
          uri
          title
          author {
            node {
              name
            }
          }
          excerpt
        }
      }
    }
  }
`
