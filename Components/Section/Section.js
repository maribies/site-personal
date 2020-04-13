import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 900px;
  display: flex;
  flex-direction: ${props => props.props.column ? 'column' : 'row'};
`

export const Section = props => {
  return (
    <Container props={props} id={props.id}>
      {props.children}
    </Container>
  )
}
