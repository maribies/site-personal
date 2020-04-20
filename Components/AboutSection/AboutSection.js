import { Section as BaseSection, SubSectionTitle, SubSectionContent } from '../Section'
import { H1, P } from '../Text'
import { dropShadowWrapper as Wrapper, getColorValue } from '../CssHelpers'
import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background: ${getColorValue('grey')};
  clip-path: polygon(0 100%, 100% 75%, 100% 35%, 65% 0, 25% 0);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 420px;
  min-height: 420px;

  @media (min-width: 48rem) {
    min-width: 640px;
    min-height: 640px;
  }

  @media (min-width: 75rem) {
    min-width: 840px;
    min-height: 840px;
  }
`

const MobileContent = styled.div`
  background: ${getColorValue('grey', 0.8)};
  clip-path: polygon(100% 0, 75% 100%, 35% 100%, 0 65%, 0% 25%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 420px;
  min-height: 420px;
  transform: translateY(-160px);

  @media (min-width: 25.875rem) {
    display: none;
  }
`

const Text = styled(P)`
  display: none;

  @media (min-width: 25.875rem) {
    display: flex;
  }
`

const TextWrapper = styled.div`
  margin-top: 24px;
  max-width: 322px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 48rem) {
    max-width: 440px;
  }

  @media (min-width: 75rem) {
    max-width: 600px;
  }
`

const Title = styled(H1)`
  text-align: center;
`

export const AboutSection = () => {
  return (
    <BaseSection id='about'>
      <SubSectionTitle>
        <Title>ABOUT</Title>
      </SubSectionTitle>

      <SubSectionContent>
        <Wrapper>
          <Content>
            <TextWrapper>
              <P>
                {'This website is meant to be a reflection of me. It is the place for me to express myself and show off my passions.'}
              </P>

              <P>
                {'I’ve always been a bit different. Born in the country, moved to the city, and eventually kept moving around the world.'}
              </P>

              <Text>
                {`I’ve discovered so much more to myself and life, which I’d like to share. I’m finally making a life in which I do what I love and love what I do.
                It’s also a place for me to connect- in whatever way that may be- travel, design, or even grilled cheese!
                Keep scrolling to discover more.`}
              </Text>
            </TextWrapper>
          </Content>
        </Wrapper>

        <MobileContent>
          <TextWrapper>
            <P>
              {`I’ve discovered so much more to myself and life, which I’d like to share. I’m finally making a life in which I do what I love and love what I do.
              It’s also a place for me to connect- in whatever way that may be- travel, design, or even grilled cheese!
              Keep scrolling to discover more.`}
            </P>
          </TextWrapper>
        </MobileContent>
      </SubSectionContent>
    </BaseSection>
  )
}
