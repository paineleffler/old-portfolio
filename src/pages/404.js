import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { FlexContainerFull, FlexContainerFullCol, ContentContainer, Title, Paragraph, Button } from '../lib/StyledComponents'
import SEO from '../lib/SEO'

const NotFoundPage = () => {
  return (
    <Page>
      <>
      <SEO title="Page Not Found" description="You have navigated to a nonexistent page." />
      <ContentContainer>
        <FlexContainerFull>
          <FlexContainerFullCol>
            <Title>Oops...</Title>
            <Paragraph>This page doesn&apos;t exist.</Paragraph>
            <Link to="/"><Button role="navigation" aria-label="Go to Home page">Home</Button></Link>
          </FlexContainerFullCol>
        </FlexContainerFull>
      </ContentContainer>
      </>
    </Page>
  )
}

export default NotFoundPage
