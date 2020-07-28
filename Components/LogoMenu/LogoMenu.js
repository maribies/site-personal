import React, { useState } from 'react'
import styled from 'styled-components'
import { LogoSvg } from '../../public/static/SVG/svgs.js'
import { Link } from '../Link'

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
    background-image: radial-gradient(rgb(46,49,56), rgb(46,49,56, .3), rgb(46,49,56, .01), rgb(46,49,56, .01));
  }
`

const NavigationContainer = styled.div`
  display: ${props => props.isVisible === true ? 'block' : 'none'};
`;

export const LogoMenu = ({ position }) => {
  const [isVisible, makeVisible] = useState(false);

  const toggle = () => makeVisible(!isVisible)

  return (
    <Container position={position} onClick={toggle}>
      <NavigationContainer isVisible={isVisible}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#facets">Facets</Link>
        <Link href="#connect">Connect</Link>
      </NavigationContainer>

      <LogoSvg width={'50%'} viewbox={'-3 -18 50 50'} id="logo" />
    </Container>
  )
}
