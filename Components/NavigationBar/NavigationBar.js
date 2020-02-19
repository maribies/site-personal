import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 120px;
  margin-top: 48px;
  margin-left: 120px;
  margin-right: 120px;
`;

const Name= styled.div`
  font-family: 'Karla';
  font-size: 44px;
  line-height: 64px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Section = styled.div`
  color: #1B1B3A;
  font-family: 'Karla';
  font-size: 32px;
  line-height: 24px;
  padding-right: 84px;
  transition: color 1s steps(4, end);
  &:hover {
    color: white
  }
`;

export const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Name>{"MARISSA BIESECKER"}</Name>

      <SectionsContainer>
        <Section>{"HOME"}</Section>

        <Section>{"ABOUT"}</Section>

        <Section>{"FACETS"}</Section>

        <Section>{"CONNECT"}</Section>
      </SectionsContainer>
    </NavigationContainer>
  )
}
