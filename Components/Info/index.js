import styled from 'styled-components'

import { H4, P } from '../Text'
import { Link } from '../Link'

const Section = styled.div`
  border-top: 1px solid purple;
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

const ImageWrapper = styled.div`
  animation: 8s infinite alternate-reverse colors;
  padding: 10px;
  width: 80%;
  align-self: center;

  @media (min-width: 48rem) {
    width: 20%;
  }

  @keyframes colors {
    0% {
      background: #FF7913
    }
    20% {
      background: #D32E5E
    }
    40% {
      background: #F9AC2F
    }
    60% {
      background: #0078A7
    }
    100% {
      background: #5F4B8B
  }
`

const Image = styled.img`
  border: 5px solid white;
  width: -webkit-fill-available;
`

export const Info = () => {
  return (
    <Section id="info">
      <Title>Hi! I'm Marissa, a full stack developer, currently working with <InlineLink href="https://redsquirrel.com/">Red Squirrel Technologies.</InlineLink></Title>
      <InlineTextImg>
        <div>
          <P>I'm also a core teammate for <InlineLink href="https://quickbeam.xyz/">Quickbeam</InlineLink>, a technical education platform.</P>
          <P>Always keen for new experiences, I am frequently traveling  and currently based in Porto, Portugal.</P>
        </div>
        <ImageWrapper>
          <Image src="../static/images/me.jpeg" />
        </ImageWrapper>
      </InlineTextImg>
    </Section>
  )
}