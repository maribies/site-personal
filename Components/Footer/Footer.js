import React from 'react'
import styled from 'styled-components'
import { P } from '../Text'

const Container = styled.footer`
  height: 90px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 80px;
  padding-right: 80px;

  @media (min-width: 48rem) {
    justify-content: space-between;
    padding-left: 120px;
    padding-right: 120px;
  }
`

const Text = styled(P)`
  text-align: center;

  &:last-child {
    margin-top: 0;
  }

  @media(min-width: 48rem) {
    &:last-child {
      margin-top: 16px;
    }
  }
`

export const Footer = () => {
  return (
    <Container>
      <Text>Designed and developed with  💜 by me</Text>

      <Text>copyright 2018-2020</Text>
    </Container>
  )
}
