import * as React from "react"
import "../styles/main.scss"

import Layout from "../components/Layout"

import Intro from "../components/Homepage/Intro/Intro"
import Navbar from "../components/shared/Navbar"
import AppLinks from "../components/Homepage/AppLinks"
import JobsSection from "../components/Homepage/JobsSection/JobsSection"
import Footer from "../components/shared/Footer"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Intro />
      <AppLinks />
      <JobsSection />
    </Layout>
  )
}

export default IndexPage
