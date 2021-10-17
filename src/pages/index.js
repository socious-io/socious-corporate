import * as React from "react"
import "../styles/main.scss"

import Intro from "../../components/Homepage/Intro/Intro"
import Navbar from "../../components/shared/Navbar"
import AppLinks from "../../components/Homepage/AppLinks"


const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Intro />
      <AppLinks />
    </main>
  )
}

export default IndexPage
