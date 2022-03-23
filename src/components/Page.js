import React from 'react'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;
  }
  body {
    margin: 0px;
    height: 100%;
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

export default Page
