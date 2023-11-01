import { useState } from 'react'
import styled from 'styled-components'

import { Title, TitleOutline, H2, H3Outline, H4, P } from '../Text'
import { Link } from '../Link'
import { getColorValue } from '../CssHelpers'

import { SoccerBallAnimation } from './SoccerBallAnimation'

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

const ExplainLink = styled.a`
  cursor:  ${({ isActive }) => isActive ? "url('/static/SVG/cursors/collapse.svg'), pointer" : "url('/static/SVG/cursors/question.svg'), pointer" };
`

const ExplainTitle = styled(H3Outline)`
  margin-bottom: 0;
`

const ExplainText = styled(P)`
  visibility: ${({ isActive }) => isActive ? "visible" : "hidden"};
  margin: 0;  
  transition: ${({ isActive }) => isActive ? "opacity 5s linear 1s" : ""};
  opacity: ${({ isActive }) => isActive ? 1 : 0};
`

const Flex = styled.div`
  display: flex;
`

const FlexGrow = styled(Flex)`
  flex-grow: 2;
  height: 3.25rem; 
  align-self: end;
  min-width: 50%;
`

export const Hero = () => {
  const [isExplainLinkClicked, setExplainLinkClicked] = useState(false);

  return <>
    <NameWrapper>
      <NameWrapper><Title>Mari</Title><TitleOutline>ssa</TitleOutline></NameWrapper>
      <NameWrapper><Title>Bies</Title><TitleOutline>ecker</TitleOutline></NameWrapper>
    </NameWrapper>
    <NavLink href="#connect">Connect</NavLink>
    <H2>Creative Problem Solver</H2>
    <H4>with experience through the entire product lifecycle- where business, design, user experience, and technology intersect.</H4>
    
    <Flex>
      <ExplainLink isActive={isExplainLinkClicked} onClick={() => setExplainLinkClicked(!isExplainLinkClicked)}>
        <ExplainTitle>aka Utility Player</ExplainTitle>
      </ExplainLink>
      <FlexGrow>
        <SoccerBallAnimation isActive={isExplainLinkClicked} />
      </FlexGrow>
    </Flex>
    
    <ExplainText isActive={isExplainLinkClicked}>This title was given to me by one of my youth soccer coaches for my ability to play any position on the pitch, but excelling in defense. I have applied a similar strategy to my career talents, being proficient at technologies across the stacks and Web3, but shining on the client side.</ExplainText>
  </>
}