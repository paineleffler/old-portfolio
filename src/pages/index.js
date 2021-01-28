import * as React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import Page from '../components/Page'
import PaineSVG from '../components/PaineSVG'

const Title = styled.div`
  ${tw`xl:text-6xl text-5xl mb-4`};
` 

const Subtitle = styled.div`
  ${tw`xl:text-3xl text-2xl mb-4`};
` 

const ContentContainer = styled.div`
  ${tw`container mx-auto px-4`};
`

const FlexContainerFull = styled.div`
  ${tw`flex flex-row justify-center items-center h-screen`};
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
  ${tw`xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full col-span-full`}
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
  ${tw`font-sans relative py-2 px-4 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`

export default function IndexPage ({ data }) {
  return (
    <Page>
      <ContentContainer>
        <FlexContainerFull>
          <Row>
            <SVGContainer>
              <PaineSVG height="12rem" width="auto" />
            </SVGContainer>
            <TextContainer>
              <Title>I'm Paine <span role="img" aria-label="waving hand">👋🏼</span></Title>
              <Paragraph>
              Full-stack software engineer and designer <a href="https://www.att.com/" target="_blank" rel="noreferrer noopener">@AT&T</a>.
              </Paragraph>
              <Paragraph>
              Adventurer, artist, and dreamer.
              </Paragraph>
              <Button>
                View my work
              </Button>
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
            <Title>Some of my recent work...</Title>
            <Subtitle>Most of my work has been React and React Native Apps with GraphQL and NodeJS backends.</Subtitle>
          </div>
        </FlexContainerFull>

        {/* begin wishlist */}
        <FlexContainerFull>
          <Row>
            <ScreenshotContainer>
              <Img fluid={data.wishlistMain.childImageSharp.fluid} alt="" />
            </ScreenshotContainer>
            <ProjectTextContainer>
              <Title>Wishlist</Title>
              <Subtitle>A collaborative productivity web application.</Subtitle>
              <Paragraph>Wishlist was built out of a necessity of a place for do-ers to organize personal items or project work without creating additional overhead. My main goal was to allow people to use a process that worked for them, instead of trying to teach or show them ONE way to do project management. Wishlist was designed and developed by me from scratch in the beginning. Later, it was inter open-sourced and grew in features and contributors.</Paragraph>
            </ProjectTextContainer>
          </Row>
        </FlexContainerFull>
        
        {/* begin openspace */}
        <FlexContainerFull>
          <Row>
            <ProjectTextContainer>
              <Title>OpenSpace</Title>
              <Subtitle>An inter open-source platform for innovation.</Subtitle>
              <Paragraph>OpenSpace was built as a knowledge sharing and collaboration platform to change the idea of assignment based work and learning. OpenSpace gives more code visibility to employees of the company. We really wanted this to be the place to build an internal portfolio and give people an opportunity to lead and teach others.</Paragraph>
            </ProjectTextContainer>
            <ScreenshotContainer>
              <Img fluid={data.openspaceMain.childImageSharp.fluid} alt="" />
            </ScreenshotContainer>
          </Row>
        </FlexContainerFull>
        
        {/* begin OC */}
        <FlexContainerFull>
          <Row>
            <ScreenshotContainer>
              <Img fluid={data.ocMain.childImageSharp.fluid} alt="" />
            </ScreenshotContainer>
            <ProjectTextContainer>
              <Title>OurCalling</Title>
              <Subtitle>A mobile resource to support our homeless neighbors.</Subtitle>
              <Paragraph>This mobile app was created in conjunction with <a href="https://www.ourcalling.org/" target="_blank" rel="noreferrer noopener">OurCalling</a>, an organization based in Dallas, TX. The mobile app was focused on connecting people in need with 8 main resource types. In addition to connecting people to resources, we enabled people to donate and help identify people in need by location so that an outreach team could bring assistance.</Paragraph>
            </ProjectTextContainer>
          </Row>
        </FlexContainerFull>
      </ContentContainer>
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
    wishlistMain: file(relativePath: { eq: "wishlist-3-light.png" }) {
      ...desktopScreenshot
    }
    openspaceMain: file(relativePath: { eq: "openspace-1.png" }) {
      ...desktopScreenshot
    }
    ocMain: file(relativePath: { eq: "oc.png" }) {
      ...desktopScreenshot
    }
  }
`