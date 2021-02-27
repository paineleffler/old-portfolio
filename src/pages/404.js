import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { FlexContainerFullCol, ContentContainer, Title, Paragraph, Button } from '../lib/StyledComponents'

// markup
const NotFoundPage = () => {
  return (
    <Page>
      <>
      <title>Page Not Found</title>
      <ContentContainer>
        <FlexContainerFullCol>
          <Title>Oops...</Title>
          <Paragraph>This page doesn&apos;t exist.</Paragraph>
          <Link to="/"><Button role="navigation" aria-label="Go to Home page">Home</Button></Link>
        </FlexContainerFullCol>
      </ContentContainer>
      </>
    </Page>
  )
}

export default NotFoundPage
