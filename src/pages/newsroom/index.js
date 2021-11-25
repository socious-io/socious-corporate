import React from "react"
import { graphql } from "gatsby"
import { useLocation } from '@reach/router';

import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import Banner from "../../components/NewsroomPage/Banner"

import EnglishNewsHeadline from "../../components/NewsroomPage/EnglishNewsHeadline";
import JapaneseNewsHeadline from "../../components/NewsroomPage/JapaneseNewsHeadline";
import JapaneseNews from "../../components/NewsroomPage/JapaneseNews";
import EnglishNews from "../../components/NewsroomPage/EnglishNews";


const NewsroomPage = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const { pageContext } = props

  const seoDescription = jaPage ?
                         'ソーシャスは社会変革のためのコミュニティアプリです。' :
                         'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ニュースルーム' :
                   'Newsroom'

  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={seoDescription}
      />
      <Banner />
      <div className="main">
        <div className="container__articles">
          <h2>Latest News</h2>
          {pageContext.language === 'ja' ? <JapaneseNewsHeadline /> : <EnglishNewsHeadline />}
          {pageContext.language === 'ja' ? <JapaneseNews /> : <EnglishNews />}
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
            Publish
            Language
          }
        }
      }
    }
  }
`
