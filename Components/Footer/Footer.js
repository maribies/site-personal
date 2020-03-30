import React from 'react';
import styled from 'styled-components';
import { P } from '../Text';

const Container = styled.div`
  height: 65px;
  padding-left: 120px;
  padding-right: 120px;
  display: flex;
  justify-content: space-between;
`;

export const Footer = () => {
  return (
    <Container>
      <P>{'Designed and developed by me with  💜'}</P>

      <P>{'copyright 2020'}</P>
    </Container>
  );
}
