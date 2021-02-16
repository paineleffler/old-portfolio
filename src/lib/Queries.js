import { graphql } from 'gatsby'

/**
 * Fragment for Desktop Sized Sharp Query
 */
export const desktopScreenshot = graphql`
  fragment desktopScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 1512, maxHeight: 953) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
/**
 * Fragment for Mobile Sized Sharp Query
 */
export const mobileScreenshot = graphql`
  fragment mobileScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 624, maxHeight: 1344) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
