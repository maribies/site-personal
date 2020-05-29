import React from 'react'
import styled from 'styled-components'
import { H1, H3 } from '../Text'
import { Link } from '../Link'
import { shineAnimationEffect } from '../CssHelpers'
import { NavigationContainer } from './NavigationContainer'

const MainLink = styled(Link)`
  padding-right: 12px;
  background: transparent;
  border: none;

  @media (min-width: 75rem) {
    padding-right: 42px;
  }
`

const NameTitle = styled(H1)`
  ${shineAnimationEffect};
  margin: 0;
`

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
&:hover{
  ${shineAnimationEffect}
}
`

const renderName = isHome => {
  return isHome ? <NameTitle>MARISSA BIESECKER</NameTitle> : (
    <MainLink href='/'>
      <NameTitle>MARISSA BIESECKER</NameTitle>
    </MainLink>
  )
}

const renderSections = isHome => {
  const sections = isHome ? ['#about', '#facets', '#connect'] : ['#tech', '#retail', '#life']

  return sections.map((section, index) => {
    return (
      <SectionLink href={section} key={index}>
        <SectionTitle>{section.slice(1).toUpperCase()}</SectionTitle>
      </SectionLink>
    )
  })
}

export const NavigationBar = ({ isHome }) => {
  return (
    <NavigationContainer>
      {renderName(isHome)}

      <SectionsContainer>
        {renderSections(isHome)}
      </SectionsContainer>
    </NavigationContainer>
  )
}
