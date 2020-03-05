import { Section as BaseSection } from '../Section';
import { NavigationBar } from '../NavigationBar';
import { LogoMenu } from '../LogoMenu';
import React from 'react';
import styled from 'styled-components';

const Section = styled(BaseSection)`
  flex-direction: column;
`;

export const MainSection = () => {
  return (
    <Section column>
      <NavigationBar />

        <LogoMenu />
    </Section>
  );
}
