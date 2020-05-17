import React from 'react'
import styled, { css } from 'styled-components'

const base = css`
  align-self: center;
  flex-basis: auto;
  width: ${props => props.width ? props.width : 100}%;
  justify-content: center;
`

const Container = styled.div`
  ${base}
  display: flex;

  @media (min-width: 48rem) {
    width: ${props => props.width ? props.width : 50}%;
  }
`

const TitleContainer = styled.div`
  ${base}

  @media (min-width: 48rem) {
    width: ${props => props.width ? props.width : 30}%;
  }
`

const ContentContainer = styled.div`
  ${base}
  position: ${props => props.position};

  @media (min-width: 48rem) {
    width: ${props => props.width ? props.width : 70}%;
  }
`

export const SubSection = props => {
  return (
    <Container width={props.width}>
      {props.children}
    </Container>
  )
}

export const SubSectionTitle = props => {
  return (
    <TitleContainer width={props.width}>
      {props.children}
    </TitleContainer>
  )
}

export const SubSectionContent = props => {
  return (
    <ContentContainer position={props.position} width={props.width}>
      {props.children}
    </ContentContainer>
  )
}
