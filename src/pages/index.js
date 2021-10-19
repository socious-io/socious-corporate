import * as React from "react"
import "../styles/main.scss"

import Intro from "../../components/Homepage/Intro/Intro"
import Navbar from "../../components/shared/Navbar"
import AppLinks from "../../components/Homepage/AppLinks"
import JobsSection from "../../components/Homepage/JobsSection/JobsSection"
import Footer from "../../components/shared/Footer"


const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Intro />
      <AppLinks />
      <JobsSection />
      <Footer />
    </main>
  )
}

export default IndexPage
