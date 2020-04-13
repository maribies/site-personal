import React from 'react'
import styled from 'styled-components'
import { P } from '../Text'

const Container = styled.footer`
  height: 65px;
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  justify-content: space-between;
`

export const Footer = () => {
  return (
    <Container>
      <P>Designed and developed with  💜 by me</P>

      <P>copyright 2018-2020</P>
    </Container>
  )
}
