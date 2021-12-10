import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, twitterImage }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleJapanese,
    titleTemplate,
    titleTemplateJapanese,
    defaultDescription,
    descriptionJapanese,
    siteUrl,
    defaultImage,
    imageJapanese,
    defaultTwitterImage,
    favicon,
  } = site.siteMetadata

  const jaPage = pathname.includes('/ja')
  const titleSelector = jaPage ? titleJapanese : defaultTitle
  const imageSelector = jaPage ? imageJapanese : defaultImage
  const descriptionSelector = jaPage ? descriptionJapanese : defaultDescription
  const titleTemplateSelector = jaPage ? titleTemplateJapanese : titleTemplate

  const seo = {
    title: title || titleSelector,
    description: description || descriptionSelector,
    image: image || imageSelector,
    url: `${siteUrl}${pathname}`,
    twitterImage: twitterImage || defaultTwitterImage,
  }
  
  const fixedFaviconLink = (icon) => {
    return `${siteUrl}/${icon}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplateSelector}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
        )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.twitterImage && <meta name="twitter:image" content={seo.twitterImage} />}

      <link rel="apple-touch-icon" sizes="180x180" href={fixedFaviconLink(favicon.appleTouchIcon)} />
      <link rel="icon" type="image/png" sizes="16x16" href={fixedFaviconLink(favicon.ico)} />
      <link rel="icon" type="image/png" sizes="16x16" href={fixedFaviconLink(favicon.sm)} />
      <link rel="icon" type="image/png" sizes="32x32" href={fixedFaviconLink(favicon.lg)} />
      <link rel="mask-icon" href={fixedFaviconLink(favicon.safariPinnedTab)} color="#5bbad5" />
      <link rel="manifest" href={fixedFaviconLink(favicon.manifest)} />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        titleJapanese
        titleTemplate
        titleTemplateJapanese
        defaultDescription: description
        descriptionJapanese
        siteUrl: url
        defaultImage: image
        imageJapanese
        defaultTwitterImage: twitterImage
        favicon {
          ico
          sm
          lg
          appleTouchIcon
          safariPinnedTab
          manifest
        }
      }
    }
  }
`
