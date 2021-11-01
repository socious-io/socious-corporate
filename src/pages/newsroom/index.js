import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

import Banner from "../../components/NewsroomPage/Banner";

const NewsroomPage = ({ data }) => {
  // const newsPosts = data.allWpPost.nodes.map(node => {
  //   return (
  //     <div key={node.slug}>
  //       <Link to={node.slug}>
  //         <p>{node.title}</p>
  //       </Link>
  //       <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  //     </div>
  //   )
  // })

  return (
    <Layout>
      <Seo
        title='Newsroom'
        description='Keep up to date with the latest news at Socious'
      />
      <Banner />
      {/* {newsPosts} */}
    </Layout>
  )
}

export default NewsroomPage

// export const pageQuery = graphql`
//   query {
//     allWpPost(sort: { fields: date, order: DESC }) {
//       nodes {
//         title
//         excerpt
//         slug
//       }
//     }
//   }
// `
