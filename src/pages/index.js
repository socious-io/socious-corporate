import * as React from "react"
import "../styles/main.scss"

import Intro from "../../components/shared/Homepage/Intro/Intro"
import Navbar from "../../components/shared/Navbar"


const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Intro />
    </main>
  )
}

export default IndexPage
