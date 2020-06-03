import { Section as BaseSection, SubSectionTitle, SubSectionContent } from '../Section'
import { H1, P } from '../Text'
import { ShapeDiv } from '../ShapeDiv'
import React from 'react'
import styled from 'styled-components'

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
        <ShapeDiv clipPath='0 100%, 100% 75%, 100% 35%, 65% 0, 25% 0'>
          <TextWrapper>
            <P>
              {'This website is meant to be a reflection of me- all my sides and facets.'}
            </P>

            <P>
              {'Like other minerals and gems, we are all rare and unique, born under pressure, given lots of grades, classes, colors, and with lots of uses and values. There is beauty in the natural and raw as well as the polished and shaped.'}
            </P>

            <Text>
              {`I’d like to show both the rough and the polished- of me and the world as I move through it; how I was formed under pressure; how I seek and find other brilliant, precious and semi-precious gems of experience, and the myriad of ways I bring and seek value in life.`}
            </Text>
          </TextWrapper>
        </ShapeDiv>

        <ShapeDiv clipPath='100% 0, 75% 100%, 35% 100%, 0 65%, 0 25%' mobile>
          <TextWrapper>
            <P>
              {`I’d like to show both the rough and the polished- of me and the world as I move through it; how I was formed under pressure; how I seek and find other brilliant, precious and semi-precious gems of experience, and the myriad of ways I bring and seek value in life.`}
            </P>
          </TextWrapper>
        </ShapeDiv>
      </SubSectionContent>
    </BaseSection>
  )
}
