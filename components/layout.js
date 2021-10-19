import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{pageTitle} | { data.site.siteMetadata.title }</title>
      <Navbar />
        { children }
      <Footer />
    </div>
  )
}

export default Layout
