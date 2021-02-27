import tw, { styled } from 'twin.macro'

export const Title = styled.h1`
  ${tw`xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl my-4`};
`

export const Subtitle = styled.h2`
  ${tw`xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl my-4`};
`

export const ContentContainer = styled.div`
  ${tw`container mx-auto px-8`};
`

export const FlexContainerFull = styled.div`
  ${tw`flex flex-row justify-center items-center min-h-screen`};
`

export const FlexContainerFullCol = styled.div`
  ${tw`flex flex-col justify-center items-center`};
`

export const Footer = styled.div`
  ${tw`flex flex-row justify-center mb-4`};
`

export const Row = styled.div`
  ${tw`grid grid-cols-2 gap-6 mb-4`};
`

export const TextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-1 lg:col-span-1 md:col-span-full sm:col-span-full col-span-full`};
`

export const SVGContainer = styled.div`
  ${tw`xl:max-h-60 lg:max-h-60 md:max-h-56 sm:max-h-52 max-h-44`}
  ${tw`xl:col-span-1 lg:col-span-1 md:col-span-full sm:col-span-full col-span-full`}
  ${tw`xl:mt-auto xl:mr-0 xl:mb-auto xl:ml-auto`}
  ${tw`lg:mt-auto lg:mr-0 lg:mb-auto lg:ml-auto`}
  ${tw`md:my-0 md:mx-auto`}
`

export const ProjectTextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-1 lg:col-span-1 md:col-span-full sm:col-span-full col-span-full`};
`

export const ScreenshotContainer = styled.div`
  ${tw`xl:col-span-1 lg:col-span-1 md:col-span-full sm:col-span-full col-span-full`};
`

export const Paragraph = styled.p`
  ${tw`font-sans leading-normal`}
`

export const Prose = styled.p`
  ${tw`max-w-prose`}
`

export const ContactRow = styled.div`
  ${tw`mt-4 flex`};
  a {
    :not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`

export const Button = styled.button`
  ${tw`font-sans relative py-2 px-4 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`

export const TechRow = styled.div`
 ${tw`flex flex-1 flex-row justify-around mt-6`};
`

export const StyledA = styled.a`
  ${tw`text-indigo-700`};
  box-shadow: inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgb(199 210 254 / 40%);
`
