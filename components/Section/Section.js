import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  min-height: ${props => props.setHeight ? '900px' : 'auto'};
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex-wrap: ${props => props.wrap ? props.props.wrap : 'wrap'};

  @media (min-width: 48rem) {
    flex-wrap: wrap;
  }
`

export const Section = props => {
  const { id, children } = props;

  return (
    <Container id={id}>
      {children}
    </Container>
  )
}
