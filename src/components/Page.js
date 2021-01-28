import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    margin: 0px;
  }
`

const Page = (props) => {
  return (
    <>
      <GlobalStyle />
      { props.children }
    </>
  )
}

export default Page
