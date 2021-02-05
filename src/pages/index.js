import React, { useState } from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'
import { Element, Link } from 'react-scroll'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Page from '../components/Page'
import PaineSVG from '../components/svgs/PaineSVG'
// import GraphqlSVG from '../components/svgs/GraphqlSVG'
// import MongoSVG from '../components/svgs/MongoSVG'
// import NodeSVG from '../components/svgs/NodeSVG'
// import ReactSVG from '../components/svgs/ReactSVG'

const Title = styled.div`
  ${tw`xl:text-6xl text-5xl`};
` 

const Subtitle = styled.div`
  ${tw`xl:text-3xl text-2xl my-4`};
` 

const ContentContainer = styled.div`
  ${tw`container mx-auto px-4`};
`

const FlexContainerFull = styled.div`
  ${tw`flex flex-row justify-center items-center min-h-screen`};
`

const Footer = styled.div`
  ${tw`flex flex-row justify-center mb-4`};
`

const Row = styled.div`
  ${tw`grid grid-cols-4 gap-8`};
`

const TextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-full col-span-full`};
`

const SVGContainer = styled.div`
  ${tw`xl:col-span-1 lg:col-span-1 md:col-span-4 sm:col-span-full col-span-full`}
`

const ProjectTextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full col-span-full`};
`

const ScreenshotContainer = styled.div`
  ${tw`xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full col-span-full`};
`

const Paragraph = styled.div`
  ${tw`font-sans leading-normal`}
`

const ContactRow = styled.div`
  ${tw`mt-6 flex`};
`

const ContactLink = styled.a`
  ${tw`font-sans mr-2`}
`

const Button = styled.button`
  ${tw`font-sans relative py-2 px-4 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`

const TechRow = styled.div`
 ${tw`flex flex-1 flex-row justify-around mt-6`};
`

const Captions = {
  'oc-1.png': 'This is the landing screen for the OurCalling App. It automatically pulls up the resources nearest to you, or in an area you searched. Specific resources can be found in the quick bottom drawer or in the filter section. ',
  'oc-2.png': 'The bottom drawer allows a vertical scroll list of the search results. Each will navigate to their respective details page.',
  'oc-3.png': 'By tapping a map pin, the details of the location comes up in a swipe-able card on the bottom of the screen',
  'oc-4.png': 'The filter screen offers finer search criteria by category, age, gender, or common qualifications.',
  'oc-5.png': 'By tapping on a resource card or list item, you will be able to see details on the resource and be able to directly call, navigate, or view their webpage.',
  'oc-6.png': 'On the Identify tab, we allow users to submit information on where help is needed. This can be self identified or by a community member. The goal is for an outreach team to view the submission and bring assistance.',
  'oc-7.png': 'On the side drawer we can quickly access primary tabs and additional secondary pages like the hotline numbers and settings page.',
  'wishlist-light-1.png': 'The home page for Wishlist, it allows for public board searching and board creation if it does not exist. (light)',
  'wishlist-light-2.png': 'This is a profile page on Wishlist. Here you can see the boards you have created and the boards you have favorited. (light)',
  'wishlist-light-3.png': 'This is a board that was created to manage some of my reminders and to-do items. They have custom tags and correlate to different unrelated projects that I am working on. (light)',
  'wishlist-light-4.png': 'This is the side drawer of the board. This allows general board configuration for tags, permissions, email notifications, and other preferences. (light)',
  'wishlist-dark-1.png': 'The home page for Wishlist, it allows for public board searching and board creation if it does not exist. (dark)',
  'wishlist-dark-2.png': 'This is a profile page on Wishlist. Here you can see the boards you have created and the boards you have favorited. (dark)',
  'wishlist-dark-3.png': 'This is a board that was created to manage some of my reminders and to-do items. They have custom tags and correlate to different unrelated projects that I am working on. (dark)',
  'wishlist-dark-4.png': 'This is the side drawer of the board. This allows general board configuration for tags, permissions, email notifications, and other preferences. (dark)',
  'openspace-1.png': 'This is the homepage of OpenSpace, it goes into details about what the goals of the application serves, and allows users to sign up for meetups to learn more.',
  'openspace-2.png': 'The OpenSpace profile page allows people to showcase their projects and open-source activity.',
  'openspace-3.png': 'This is a project details page where you can find project activity and how to start contributing.',
  'openspace-4.png': 'This is a blog on OpenSpace that allows knowledge sharing and showcasing work with in depth descriptions and discussions.'
}

export default function IndexPage ({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeView, setActiveView] = useState([])
  
  function stringCompare (a, b) {
    if (a < b) {
      return -1
    }
    else {
      return 1
    }
  }

  const wishlistList = data.wishlistImages.edges.map(({ node: { fluid: { src, originalName }} }) => { return { source: src, caption: Captions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))
  const ocList = data.ocImages.edges.map(({ node: { fluid: { src, originalName }} }) => { return { source: src, caption: Captions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))
  const openspaceList = data.openspaceImages.edges.map(({ node: { fluid: { src, originalName }} }) => { return { source: src, caption: Captions[originalName], originalName } }).sort((a, b) => stringCompare(a.originalName, b.originalName))

  return (
    <Page>
      <ContentContainer>
        <FlexContainerFull>
          <Row>
            <SVGContainer>
              <PaineSVG height="12rem" width="100%" />
            </SVGContainer>
            <TextContainer>
              <Title>I'm Paine <span role="img" aria-label="waving hand">👋🏼</span></Title>
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
        {/* begin portfolio */}
        <FlexContainerFull>
          <div>
            <Title>What I do</Title>
            <Subtitle>at work...</Subtitle>
            <Paragraph>I design and build web and mobile applications. Along the way I lead development teams and guide junior developers with code reviews. Most of my work has been React and React Native Apps with GraphQL and NodeJS backends.</Paragraph>
            <Subtitle>for fun...</Subtitle>
            <Paragraph>I dabble in some painting and sketching, maybe if I'm feeling bold, I might add them here. I enjoy hiking and camping when I get the chance. Recently, my pandemic social get-away has been playing online games with friends.</Paragraph>
          </div>
        </FlexContainerFull>
        <Element id="portfolio" name="portfolio">
          <Subtitle>Some projects that I've worked on recently...</Subtitle>
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

export const desktopScreenshot = graphql`
  fragment desktopScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 1512, maxHeight: 953) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const mobileScreenshot = graphql`
  fragment mobileScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 624, maxHeight: 1344) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

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