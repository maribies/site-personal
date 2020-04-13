import React from 'react'
import styled from 'styled-components'
import SvgLogo from '../../static/SVG/Logo.svg'

const Container = styled.button`
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  position: ${props => props.position};
  bottom:  ${props => props.position === 'fixed' ? '0px' : null};
  padding-top: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 100%;
  border: none;
  z-index: 1;
  left: 50%;
  margin-left: -74px;

  &:hover {
    background-image: radial-gradient(rgb(46,49,56), rgb(46,49,56, .3), rgb(46,49,56, .01), rgb(46,49,56, .0001));
  }
`

export const LogoMenu = ({ position }) => {
  return (
    <Container position={position}>
      <SvgLogo />
    </Container>
  )
}
