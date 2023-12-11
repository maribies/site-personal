import styled, { css } from 'styled-components'

import { H4, P } from '../Text'
import { Link } from '../Link'
import { FlipCard } from '../FlipCard'

import { getColorValue } from '../CssHelpers'

const Section = styled.div`
  border-top: 1px solid ${getColorValue('purple')};
  display: flex;
  flex-direction: column;
`

const Title = styled(H4)`
  margin-bottom: 0;
`

const InlineLink = styled(Link)`
  display: inline;
  text-decoration: underline;
`

const InlineTextImg = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ImgCard = css`
  background-image: url("../static/images/me.jpeg");
  background-size: cover;
  border: solid white;
`

const TextContainer = styled.div`
  margin-bottom: 1em;
`

const InlineP = styled(P)`
  display: inline;
`

const StrikeP = styled(InlineP)`
  text-decoration: line-through ${getColorValue('purple')};
  padding-right: .5rem;

  &:nth-child(2) {
    text-decoration: line-through ${getColorValue('blue')}
  }

  &:nth-child(3) {
    text-decoration: line-through ${getColorValue('yellow')}
  }
`

export const Info = () => {
  return (
    <Section id="info">
      <Title>Hi! I'm Marissa, a full stack developer, currently working with <InlineLink href="https://redsquirrel.com/">Red Squirrel Technologies.</InlineLink></Title>
      <InlineTextImg>
        <TextContainer>
          <P>I'm also a core teammate for <InlineLink href="https://quickbeam.xyz/">Quickbeam</InlineLink>, a technical education platform.</P>
          <InlineP>Always keen for new experiences, I am frequently traveling and currently based in </InlineP><StrikeP>PA,</StrikeP><StrikeP>DC,</StrikeP><StrikeP>New Zealand,</StrikeP><InlineP>Portugal.</InlineP>
        </TextContainer>
        <FlipCard 
          frontCard={{ css: ImgCard }}
          backCard={{
            link: { href: "/world", text: "Find out" },
            children: <InlineP>Where in the world have I been?</InlineP>
          }}
        />
      </InlineTextImg>
    </Section>
  )
}