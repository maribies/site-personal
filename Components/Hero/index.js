import styled from 'styled-components'

import { Title, TitleOutline, H2, H3Outline, H4 } from '../Text'
import { Link } from '../Link'
import { getColorValue } from '../CssHelpers'

const NavLink = styled(Link)`
  justify-content: right;
  &:hover {
    border-bottom: 1px solid ${getColorValue('purple')};
  }
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

const NameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Hero = () => {
  return <>
    <NameWrapper>
      <NameWrapper><Title>Mari</Title><TitleOutline>ssa</TitleOutline></NameWrapper>
      <NameWrapper><Title>Bies</Title><TitleOutline>ecker</TitleOutline></NameWrapper>
    </NameWrapper>
    <NavLink href="#connect">Connect</NavLink>
    <H2>Creative Problem Solver</H2>
    <H4>with experience through the entire product lifecycle- where business, design, user experience, and technology intersect.</H4>
    <H3Outline>aka Utility Player</H3Outline>
  </>
}