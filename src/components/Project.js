import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { FlexContainerFull, Row, Title, Paragraph, Button, Subtitle, ScreenshotContainer, ProjectTextContainer } from '../lib/StyledComponents'
import { ScreenshotCaptions } from '../lib/TextContent'

function Project (props) {
  const { mainImage, mainImageAlt, title, emojiSuffix, emojiLabel, subtitle, description, images, setActiveView, setModalIsOpen } = props

  const ImageList = images.map(({ node: { fluid: { src, originalName } } }) => {
    return { source: src, caption: ScreenshotCaptions[originalName], originalName }
  }).sort((a, b) => {
    return ('' + a.originalName).localeCompare(b.originalName)
  })

  return (
    <FlexContainerFull>
      <Row>
        <ScreenshotContainer>
          <Img fluid={mainImage} alt={mainImageAlt} />
        </ScreenshotContainer>
        <ProjectTextContainer>
          <hgroup>
            <Title>{title} <span role="img" aria-label={emojiLabel}>{emojiSuffix}</span></Title>
            <Subtitle>{subtitle}</Subtitle>
          </hgroup>
          <Paragraph>{description}</Paragraph>
          <Button
            aria-label={`View more screenshots and descriptions for the ${title} application.`}
            onClick={() => {
              setActiveView(ImageList)
              setModalIsOpen(true)
            }}>
              See more
          </Button>
        </ProjectTextContainer>
      </Row>
    </FlexContainerFull>
  )
}

Project.propTypes = {
  mainImage: PropTypes.any,
  mainImageAlt: PropTypes.string,
  title: PropTypes.string,
  emojiSuffix: PropTypes.string,
  emojiLabel: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.any,
  setActiveView: PropTypes.func,
  setModalIsOpen: PropTypes.func
}

export default Project
