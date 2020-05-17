import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 48rem) {
    padding: 0 84px;
    margin-top: 36px;
  }

  @media (min-width: 75rem) {
    padding: 0 120px;
    margin-top: 48px;
    height: 120px;
  }
`

export const NavigationContainer = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
