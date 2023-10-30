import React from 'react'
import styled from 'styled-components'
import { P } from '../Text'

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Text = styled(P)`
  text-align: center;
`

export const Footer = () => {
  return (
    <Container>
      <Text>Designed and developed by me with 💜</Text>
      <Text><i class="fa-regular fa-copyright" /> 2018 - <i class="fa fa-infinity" /></Text>
    </Container>
  )
}
