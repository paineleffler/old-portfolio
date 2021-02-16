import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Element } from 'react-scroll'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { FlexContainerFull, Row, Title, Paragraph, Button, ContentContainer, Footer, Subtitle, ScreenshotContainer, ProjectTextContainer } from '../lib/StyledComponents'
import { ScreenshotCaptions } from '../lib/TextContent'
import { desktopScreenshot, mobileScreenshot } from '../lib/Queries'
import Page from '../components/Page'
import Hero from '../components/Hero'
import About from '../components/About'

export default function IndexPage ({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeView, setActiveView] = useState([])

  function stringCompare (a, b) {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  }

  const wishlistList = data.wishlistImages.edges.map(({ node: { fluid: { src, originalName } } }) => { return { source: src, caption: ScreenshotCaptions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))
  const ocList = data.ocImages.edges.map(({ node: { fluid: { src, originalName } } }) => { return { source: src, caption: ScreenshotCaptions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))
  const openspaceList = data.openspaceImages.edges.map(({ node: { fluid: { src, originalName } } }) => { return { source: src, caption: ScreenshotCaptions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))

  return (
    <Page>
      <ContentContainer>
        <Hero />
        {/* begin portfolio */}
        <About />
        <Element id="portfolio" name="portfolio">
          <Subtitle>Some projects that I&apos;ve worked on recently...</Subtitle>
        </Element>
        {/* begin wishlist */}
        <FlexContainerFull>
          <Row>
            <ScreenshotContainer>
              <Img fluid={data.wishlistMain.childImageSharp.fluid} alt="Wishlist board screenshot" />
            </ScreenshotContainer>
            <ProjectTextContainer>
              <Title>Wishlist <span role="img" aria-label="sparkles">✨</span></Title>
              <Subtitle>A collaborative productivity web application.</Subtitle>
              <Paragraph>Wishlist was built out of a necessity of a place for do-ers to organize personal items or project work without creating additional overhead. My main goal was to allow people to use a process that worked for them, instead of trying to teach or show them ONE way to do project management. Wishlist was designed and developed by me from scratch in the beginning. Later, it was inter open-sourced and grew in features and contributors.</Paragraph>
              <Button
                onClick={() => {
                  setActiveView(wishlistList)
                  setModalIsOpen(true)
                }}>
                  See more
              </Button>
            </ProjectTextContainer>
          </Row>
        </FlexContainerFull>

        {/* begin openspace */}
        <FlexContainerFull>
          <Row>
            <ProjectTextContainer>
              <Title>OpenSpace <span role="img" aria-label="person on laptop">🧑🏻‍💻</span></Title>
              <Subtitle>An inter open-source platform for innovation.</Subtitle>
              <Paragraph>OpenSpace was built as a knowledge sharing and collaboration platform to change the idea of assignment based work and learning. OpenSpace gives more code visibility to employees of the company. We really wanted this to be the place to build an internal portfolio and give people an opportunity to lead and teach others.</Paragraph>
              <Button
                onClick={() => {
                  setActiveView(openspaceList)
                  setModalIsOpen(true)
                }}>
                  See more
              </Button>
            </ProjectTextContainer>
            <ScreenshotContainer>
              <Img fluid={data.openspaceMain.childImageSharp.fluid} alt="OpenSpace Home Page Screenshot" />
            </ScreenshotContainer>
          </Row>
        </FlexContainerFull>

        {/* begin OC */}
        <FlexContainerFull>
          <Row>
            <ScreenshotContainer>
              <Img fluid={data.ocMain.childImageSharp.fluid} alt="Three iPhone devices demoing the OurCalling Mobile App" />
            </ScreenshotContainer>
            <ProjectTextContainer>
              <Title>OurCalling <span role="img" aria-label="tent">⛺</span></Title>
              <Subtitle>A mobile resource to support our homeless neighbors.</Subtitle>
              <Paragraph>This mobile app was created in conjunction with <a href="https://www.ourcalling.org/" target="_blank" rel="noreferrer noopener">OurCalling</a>, an organization based in Dallas, TX. The mobile app was focused on connecting people in need with 8 main resource types. In addition to connecting people to resources, we enabled people to donate and help identify people in need by location so that an outreach team could bring assistance.</Paragraph>
              <Button
                onClick={() => {
                  setActiveView(ocList)
                  setModalIsOpen(true)
                }}>
                  See more
              </Button>
            </ProjectTextContainer>
          </Row>
        </FlexContainerFull>
        <Footer>
          <Paragraph>Made with lots of <span role="img" aria-label="coffee">☕</span></Paragraph>
        </Footer>
      </ContentContainer>
      <ModalGateway>
        { modalIsOpen &&
          <Modal onClose={() => { setModalIsOpen(false) }}>
            <Carousel views={activeView} activeIndex={0}/>
          </Modal>
        }
      </ModalGateway>
    </Page>
  )
}

export const query = graphql`
  query {
    wishlistMain: file(relativePath: { eq: "wishlist-light-3.png" }) {
      ...desktopScreenshot
    }
    openspaceMain: file(relativePath: { eq: "openspace-1.png" }) {
      ...desktopScreenshot
    }
    ocMain: file(relativePath: { eq: "oc.png" }) {
      ...desktopScreenshot
    }
    wishlistImages: allImageSharp(filter: {fluid: {src: {regex: "/wishlist/"}}}) {
      edges {
        node {
          fluid(maxWidth: 1512, maxHeight: 953) {
            originalName
            src
          }
        }
      }
    }
    ocImages: allImageSharp(filter: {fluid: {src: {regex: "/oc-/"}}}) {
      edges {
        node {
          fluid(maxWidth: 312, maxHeight: 672) {
            originalName
            src
          }
        }
      }
    }
    openspaceImages: allImageSharp(filter: {fluid: {src: {regex: "/openspace/"}}}) {
      edges {
        node {
          fluid(maxWidth: 1512, maxHeight: 953) {
            originalName
            src
          }
        }
      }
    }
  }
`

export { desktopScreenshot, mobileScreenshot }

IndexPage.propTypes = {
  data: PropTypes.object
}
