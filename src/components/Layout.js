import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
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
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
