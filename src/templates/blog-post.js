import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function BlogPost({ data }) {
  const post = data.wpcontent.posts.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($id: Int) {
    wpcontent {
      posts(where: {id: $id}) {
        nodes {
          title(format: RENDERED)
          excerpt
          content
          slug
          id
        }
      }
    }
  }
`
