import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

const SEO = ({ title, description, article }) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata
  const { pathname } = useLocation()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`
  }
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {(article ? true : null) && <meta property="og:type" content="article" /> }
      {seo.title && <meta property="og:title" content={seo.title} /> }
      {seo.description && <meta property="og:description" content={seo.description} /> }
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  title: null,
  description: null,
  article: false
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
        siteUrl
      }
    }
  }
`
