import { Section as BaseSection } from '../Section'
import { H1, P } from '../Text'
import { dropShadowWrapper as Wrapper, getColorValue } from '../CssHelpers'
import React from 'react'
import styled from 'styled-components'

const ParentSection = styled(BaseSection)`
  flex-direction: column;
`

const Section = styled.div`
  width: 50%;
  align-self: center;
`

const Content = styled.div`
  background: ${getColorValue('grey')};
  clip-path: polygon(32% 0, 100% 45%, 100% 71%, 0 100%, 15% 0);
  height: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Text = styled(P)`
  padding-left: 120px;
  padding-right: 120px;
`

const Title = styled(H1)`
  text-align: center;
`

export const AboutSection = () => {
  return (
    <ParentSection id='about'>
      <Section>
        <Title>ABOUT</Title>
      </Section>

      <Section>
        <Wrapper>
          <Content>
            <Text>
              {'This website is meant to be a reflection of me. It is the place for me to express myself and show off my passions.'}
            </Text>

            <Text>
              {'I’ve always been a bit different. Born in the country, moved to the city, and eventually kept moving around the world.'}
            </Text>

            <Text>
              {`I’ve discovered so much more to myself and life, which I’d like to share. I’m finally making a life in which I do what I love and love what I do.
              It’s also a place for me to connect- in whatever way that may be- travel, design, or even grilled cheese!
              Keep scrolling to discover more.`}
            </Text>
          </Content>
        </Wrapper>
      </Section>
    </ParentSection>
  )
}
