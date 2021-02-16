import React from 'react'

import { FlexContainerFull, Title, Subtitle, Paragraph } from '../lib/StyledComponents'

export default function About () {
  return (
    <FlexContainerFull>
      <div>
        <Title>What I do</Title>
        <Subtitle>at work...</Subtitle>
        <Paragraph>I design and build web and mobile applications. Along the way I lead development teams and guide junior developers with code reviews. Most of my work has been React and React Native Apps with GraphQL and NodeJS backends.</Paragraph>
        <Subtitle>for fun...</Subtitle>
        <Paragraph>I dabble in some painting and sketching, maybe if I&apos;m feeling bold, I might add them here. I enjoy hiking and camping when I get the chance. Recently, my pandemic social get-away has been playing online games with friends.</Paragraph>
      </div>
    </FlexContainerFull>
  )
}
