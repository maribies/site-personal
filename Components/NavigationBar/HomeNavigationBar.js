import React from 'react'
import styled from 'styled-components'
import { H1, H3 } from '../Text'
import { Link } from '../Link'
import { getColorValue } from '../CssHelpers'
import { NavigationContainer } from './NavigationContainer'

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SectionLink = styled(Link)`
  padding: 0 42px;
  background: transparent;
  border: none;
`

const SectionTitle = styled(H3)`
  transition: color 1s steps(4, end);
  &:hover {
    color: ${getColorValue('grey')}
  }
`

export const HomeNavigationBar = () => {
  return (
    <NavigationContainer>
      <H1>MARISSA BIESECKER</H1>

      <SectionsContainer>
        <SectionLink href='#about'>
          <SectionTitle>ABOUT</SectionTitle>
        </SectionLink>

        <SectionLink href='#facets'>
          <SectionTitle>FACETS</SectionTitle>
        </SectionLink>

        <SectionLink href='#connect'>
          <SectionTitle>CONNECT</SectionTitle>
        </SectionLink>
      </SectionsContainer>
    </NavigationContainer>
  )
}
