import * as React from "react"
import "../styles/main.scss"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import Intro from "../components/Homepage/Intro/Intro"
import AppLinks from "../components/Homepage/AppLinks"
import JobsSection from "../components/Homepage/JobsSection/JobsSection"

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo {...props} />
      <Intro {...props} />
      <AppLinks {...props} />
      <JobsSection {...props} />
    </Layout>
  )
}

export default IndexPage
