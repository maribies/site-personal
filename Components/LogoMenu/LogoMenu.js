import React from 'react';
import styled from 'styled-components';
import SvgLogo from '../../images/Logo.svg';

const Container = styled.div`
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  height: 72px;
  width: 200px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const LogoMenu = () => {
  return (
    <Container>
      <SvgLogo />
    </Container>
  )
}
