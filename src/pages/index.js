import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Element } from 'react-scroll'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { Title, Paragraph, ContentContainer, Footer } from '../lib/StyledComponents'
import { desktopScreenshot, mobileScreenshot } from '../lib/Queries'
import Page from '../components/Page'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import SEO from '../lib/SEO'

export default function IndexPage ({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeView, setActiveView] = useState([])

  return (
    <Page>
      <>
      <SEO title="Paine's Portfolio Website" description="This is my home page containing my work and some information about me." />
      <ContentContainer>
        <Hero />

        {/* <About />
        <Element id="portfolio" name="portfolio">
          <Title className="text-center">Some of my recent work...</Title>
        </Element>

        <Project
          mainImage={data.wishlistMain.childImageSharp.fluid}
          mainImageAlt={'Wishlist board screenshot showcasing a organized kanban board with columns of tasks with assignees, descriptions, and tags.'}
          title={'Wishlist'}
          emojiSuffix={'✨'}
          emojiLabel={'Sparkles'}
          subtitle={'A collaborative productivity web application.'}
          description={'Wishlist was built out of a necessity of a place for do-ers to organize personal items or project work without creating additional overhead. My main goal was to allow people to use a process that worked for them, instead of trying to teach or show them ONE way to do project management. Wishlist was designed and developed by me from scratch in the beginning. Later, it was inter open-sourced and grew in features and contributors.'}
          images={data.wishlistImages.edges}
          setActiveView={setActiveView}
          setModalIsOpen={setModalIsOpen}
        />

        <Project
          mainImage={data.openspaceMain.childImageSharp.fluid}
          mainImageAlt={'OpenSpace Home Page Screenshot showing a flow of ideas among people with buttons for viewing projects and creating a project.'}
          title={'OpenSpace'}
          emojiSuffix={'🧑🏻‍💻'}
          emojiLabel={'Technologist'}
          subtitle={'An inter open-source platform for innovation.'}
          description={'OpenSpace was built as a knowledge sharing and collaboration platform to change the idea of assignment based work and learning. OpenSpace gives more code visibility to employees of the company. We really wanted this to be the place to build an internal portfolio and give people an opportunity to lead and teach others.'}
          images={data.openspaceImages.edges}
          setActiveView={setActiveView}
          setModalIsOpen={setModalIsOpen}
        />

        <Project
          mainImage={data.ocMain.childImageSharp.fluid}
          mainImageAlt={'Three iPhone devices demoing the map view, the location pins, the location cards, and the bottom drawer containing the resources on the OurCalling Mobile App'}
          title={'OurCalling'}
          emojiSuffix={'⛺'}
          emojiLabel={'Tent'}
          subtitle={'A mobile resource to support our homeless neighbors.'}
          description={'This mobile app was created in conjunction with OurCalling, an organization based in Dallas, TX. The mobile app is focused on connecting people in need with 8 main resource types. In addition to connecting people to resources, we enabled people to donate and help identify people in need by location so that an outreach team could bring assistance.'}
          images={data.ocImages.edges}
          setActiveView={setActiveView}
          setModalIsOpen={setModalIsOpen}
        />
        <Footer>
          <Paragraph>Made with lots of <span role="img" aria-label="coffee">☕</span></Paragraph>
        </Footer> */}
      </ContentContainer>
      {/* <ModalGateway>
        { modalIsOpen &&
          <Modal onClose={() => { setModalIsOpen(false) }}>
            <Carousel views={activeView} activeIndex={0}/>
          </Modal>
        }
      </ModalGateway> */}
      </>
    </Page>
  )
}

// export const query = graphql`
//   query {
//     wishlistMain: file(relativePath: { eq: "wishlist-light-3.png" }) {
//       ...desktopScreenshot
//     }
//     openspaceMain: file(relativePath: { eq: "openspace-1.png" }) {
//       ...desktopScreenshot
//     }
//     ocMain: file(relativePath: { eq: "oc.png" }) {
//       ...desktopScreenshot
//     }
//     wishlistImages: allImageSharp(filter: {fluid: {src: {regex: "/wishlist/"}}}) {
//       edges {
//         node {
//           fluid(maxWidth: 1512, maxHeight: 953) {
//             originalName
//             src
//           }
//         }
//       }
//     }
//     ocImages: allImageSharp(filter: {fluid: {src: {regex: "/oc-/"}}}) {
//       edges {
//         node {
//           fluid(maxWidth: 312, maxHeight: 672) {
//             originalName
//             src
//           }
//         }
//       }
//     }
//     openspaceImages: allImageSharp(filter: {fluid: {src: {regex: "/openspace/"}}}) {
//       edges {
//         node {
//           fluid(maxWidth: 1512, maxHeight: 953) {
//             originalName
//             src
//           }
//         }
//       }
//     }
//   }
// `

export { desktopScreenshot, mobileScreenshot }

IndexPage.propTypes = {
  data: PropTypes.object
}
