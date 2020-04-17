import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
  flex-basis: auto;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SubSection = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
