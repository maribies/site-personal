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
  padding: 0 12px;
  background: transparent;
  border: none;

  @media (min-width: 75rem) {
    padding: 0 42px;
  }
`

const MainLink = styled(Link)`
  padding-right: 12px;
  background: transparent;
  border: none;

  @media (min-width: 75rem) {
    padding-right: 42px;
  }
`

const SectionTitle = styled(H3)`
  transition: color 1s steps(4, end);

  &:hover {
    color: ${getColorValue('grey')}
  }
`

const Header = styled(H1)`
  margin: 0;
`

export const PagesNavigationBar = () => {
  return (
    <NavigationContainer>
      <MainLink href='/'>
        <Header>MARISSA BIESECKER</Header>
      </MainLink>

      <SectionsContainer>
        <SectionLink href='#tech'>
          <SectionTitle>TECH</SectionTitle>
        </SectionLink>

        <SectionLink href='#retail'>
          <SectionTitle>RETAIL</SectionTitle>
        </SectionLink>

        <SectionLink href='#life'>
          <SectionTitle>LIFE</SectionTitle>
        </SectionLink>
      </SectionsContainer>
    </NavigationContainer>
  )
}
