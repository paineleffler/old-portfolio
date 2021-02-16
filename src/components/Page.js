import React from 'react'
import PropTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    margin: 0px;
  }
`

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      { children }
    </>
  )
}

Page.propTypes = {
  children: PropTypes.element
}

export default Page
