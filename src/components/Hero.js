import React from 'react'
import { Link } from 'react-scroll'
import PaineSVG from '../images/svgs/PaineSVG'
import { FlexContainerFull, Row, SVGContainer, TextContainer, Title, Paragraph, Button, ContactRow, StyledA } from '../lib/StyledComponents'

export default function Hero () {
  return (
    <FlexContainerFull>
      <Row>
        <SVGContainer>
          <PaineSVG width="100%"/>
        </SVGContainer>
        <TextContainer>
          <Title>I&apos;m Paine <span role="img" aria-label="waving hand">👋🏼</span></Title>
          <Paragraph>
            Frontend dev at Shopify.
          </Paragraph>
          <Paragraph>
            Adventurer, artist, and dreamer.
          </Paragraph>
          <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-16}>
            <Button aria-label="Skip down to the section containing my portfolio.">
              View my work
            </Button>
          </Link>
          <ContactRow>
            <Paragraph><StyledA href="https://github.com/paineleffler" aria-label="Visit my Github profile page." target="_blank" rel="noreferrer noopener"><span role="img" aria-label="octopus">🐙</span> Github</StyledA></Paragraph>
            <Paragraph><StyledA href="https://read.cv/paine" aria-label="View my Resume in a Web Format" target="_blank" rel="noreferrer noopener"><span role="img" aria-label="paper">📝</span> Resume</StyledA></Paragraph>
            <Paragraph><StyledA href="https://paine.dev" aria-label="Visit my terminal developer website." target="_blank" rel="noreferrer noopener"><span role="img" aria-label="laptop">💻</span> Terminal</StyledA></Paragraph>
          </ContactRow>
        </TextContainer>
      </Row>
    </FlexContainerFull>
  )
}
