import React from 'react';
import styled from 'styled-components';
import { H1, H3 } from '../Text';
import { getColorValue } from '../Colors';

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

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionLink = styled.button`
  padding: 0 42px;
  background: transparent;
  border: none;
`;

const SectionTitle = styled(H3)`
  transition: color 1s steps(4, end);
  &:hover {
    color: ${getColorValue('grey')}
  }
`;

export const NavigationBar = () => {
  return (
    <NavigationContainer>
      <H1>{"MARISSA BIESECKER"}</H1>

      <SectionsContainer>
        <SectionLink>
          <SectionTitle>{"ABOUT"}</SectionTitle>
        </SectionLink>

        <SectionLink>
          <SectionTitle>{"FACETS"}</SectionTitle>
        </SectionLink>

        <SectionLink>
          <SectionTitle>{"CONNECT"}</SectionTitle>
        </SectionLink>
      </SectionsContainer>
    </NavigationContainer>
  )
}
