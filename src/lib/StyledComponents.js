import tw, { styled } from 'twin.macro'

export const Title = styled.div`
  ${tw`xl:text-6xl text-5xl  my-2`};
`

export const Subtitle = styled.div`
  ${tw`xl:text-3xl text-2xl my-4`};
`

export const ContentContainer = styled.div`
  ${tw`container mx-auto px-4`};
`

export const FlexContainerFull = styled.div`
  ${tw`flex flex-row justify-center items-center min-h-screen`};
`

export const FlexContainerFullCol = styled.div`
  ${tw`flex flex-col justify-center items-center min-h-screen`};
`

export const Footer = styled.div`
  ${tw`flex flex-row justify-center mb-4`};
`

export const Row = styled.div`
  ${tw`grid grid-cols-4 gap-8`};
`

export const TextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-full col-span-full`};
`

export const SVGContainer = styled.div`
  ${tw`xl:col-span-1 lg:col-span-1 md:col-span-4 sm:col-span-full col-span-full`}
`

export const ProjectTextContainer = styled.div`
  ${tw`font-sans leading-normal xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full col-span-full`};
`

export const ScreenshotContainer = styled.div`
  ${tw`xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full col-span-full`};
`

export const Paragraph = styled.div`
  ${tw`font-sans leading-normal`}
`

export const ContactRow = styled.div`
  ${tw`mt-6 flex`};
`

export const ContactLink = styled.a`
  ${tw`font-sans mr-2`}
`

export const Button = styled.button`
  ${tw`font-sans relative py-2 px-4 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`

export const TechRow = styled.div`
 ${tw`flex flex-1 flex-row justify-around mt-6`};
`
