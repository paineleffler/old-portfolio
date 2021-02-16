import React from 'react'
import { Link } from 'react-scroll'
import PaineSVG from '../images/svgs/PaineSVG'
import { FlexContainerFull, Row, SVGContainer, TextContainer, Title, Paragraph, Button, ContactLink, ContactRow } from '../lib/StyledComponents'

export default function Hero () {
  return (
    <FlexContainerFull>
      <Row>
        <SVGContainer>
          <PaineSVG height="12rem" width="100%" />
        </SVGContainer>
        <TextContainer>
          <Title>I&apos;m Paine <span role="img" aria-label="waving hand">👋🏼</span></Title>
          <Paragraph>
          Full-stack software engineer and designer <a href="https://www.att.com/" target="_blank" rel="noreferrer noopener">@AT&T</a>.
          </Paragraph>
          <Paragraph>
          Adventurer, artist, and dreamer.
          </Paragraph>
          <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-16}>
            <Button>
              View my work
            </Button>
          </Link>
          <ContactRow>
            <ContactLink href="https://github.com/paineleffler" target="_blank" rel="noreferrer noopener">Github</ContactLink>
            <ContactLink href="https://read.cv/paine" target="_blank" rel="noreferrer noopener">Resume</ContactLink>
            <ContactLink href="https://paine.dev" target="_blank" rel="noreferrer noopener">Terminal</ContactLink>
          </ContactRow>
        </TextContainer>
      </Row>
    </FlexContainerFull>
  )
}
