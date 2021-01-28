import * as React from 'react'
import { Link } from 'gatsby'
import Page from '../components/Page'

// markup
const NotFoundPage = () => {
  return (
    <Page>
      <title>Page Not Found</title>
      <h1>oops</h1>
      <p>this page doesn't exist</p>
      <Link to="/">home</Link>
    </Page>
  )
}

export default NotFoundPage
