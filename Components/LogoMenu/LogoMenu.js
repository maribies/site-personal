import React from 'react';
import styled from 'styled-components';
import SvgLogo from '../../static/images/Logo.svg';

const Container = styled.button`
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  position: ${props => props.position};
  bottom:  ${props => props.position === 'fixed' ? '0px': null};
  padding-top: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 100%;
  border: none;

  &:hover {
    background-image: radial-gradient(rgb(46,49,56), rgb(46,49,56, .3), rgb(46,49,56, .01), rgb(46,49,56, .0001));
  }
`;

export const LogoMenu = ({position}) => {
  return (
    <Container position={position}>
      <SvgLogo />
    </Container>
  )
}
