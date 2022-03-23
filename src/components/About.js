import React from 'react'

import { FlexContainerFull, Title, Subtitle, Prose, StyledA } from '../lib/StyledComponents'

export default function About () {
  return (
    <FlexContainerFull>
      <div>
        <Title className="text-center">What I do</Title>
        <Subtitle>at work...</Subtitle>
        <Prose>Recently, I've been working with Webpack 5&apos;s <StyledA href="https://webpack.js.org/concepts/module-federation/" aria-label="Visit Stencil JS by Ionic." target="_blank" rel="noreferrer noopener">Module Federation</StyledA> and composing different frameworks and libraries for micro-frontends. I have also been working on a component library with <StyledA href="https://stenciljs.com/" aria-label="Visit Stencil JS by Ionic." target="_blank" rel="noreferrer noopener">Stencil</StyledA> using Typescript. Other ongoing work I have involves SEO improvements, security fixes, localization enhancements, and bug fixes to a handful of Node, React and Angular applications.</Prose>
        <Subtitle>for fun...</Subtitle>
        <Prose>I love paddle boarding on Lady Bird Lake when it&apos;s 70+ degrees in Austin, TX. I try to get into the gym every now and then. I dabble in some painting and sketching. I enjoy hiking and camping when I get the chance.</Prose>
      </div>
    </FlexContainerFull>
  )
}
