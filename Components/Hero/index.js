import { useState } from 'react'
import styled from 'styled-components'

import { Title, TitleOutline, H2, H3Outline, H4, P } from '../Text'
import { Link } from '../Link'
import { SoccerBallAnimation } from './SoccerBallAnimation'

import { getColorValue, changingIconColors } from '../CssHelpers'


const NavLink = styled(Link)`
  justify-content: right;
  border-bottom: ${({ $color }) => `1px solid ${getColorValue($color)}`};

  @media (min-width: 48rem) {
    border-bottom: none;
    &:hover {
      border-bottom: ${({ $color }) => `1px solid ${getColorValue($color)}`};
    }
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
  display: flex;
  align-items: center;
  cursor:  ${({ $isActive }) => $isActive ? "url('/static/SVG/cursors/collapse.svg'), pointer" : "url('/static/SVG/cursors/question.svg'), pointer" };
`

const ExplainTitle = styled(H3Outline)`
  margin-bottom: 0;
`

// TODO: Maybe this becomes a popout instead... depending on how the progressing layout goes.
const ExplainText = styled(P)`
  visibility: ${({ $isActive }) => $isActive ? "visible" : "hidden"};
  margin: 0;  
  transition: ${({ $isActive }) => $isActive ? "all 5s linear 1s" : ""};
  opacity: ${({ $isActive }) => $isActive ? 1 : 0};
  height: ${({ $isActive }) => $isActive ? "auto" : "3rem"};
`

const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const FlexGrow = styled(Flex)`
  height: 3.25rem; 
  align-self: end;
  flex-direction: row;
`

const SVG = styled.svg`
  ${changingIconColors({ property: "fill", cursor: "url('/static/SVG/cursors/pointer.svg'), pointer"})};
`

export const Hero = () => {
  const [isExplainLinkClicked, setExplainLinkClicked] = useState(false);

  return <>
    <NameWrapper>
      <NameWrapper><Title>Mari</Title><TitleOutline>ssa</TitleOutline></NameWrapper>
      <NameWrapper><Title>Bies</Title><TitleOutline>ecker</TitleOutline></NameWrapper>
    </NameWrapper>

    <NavLink href="#info" $color="purple">Info</NavLink>
    <NavLink href="#work" $color="blue">Work</NavLink>
    <NavLink href="#connect" $color="yellow">Connect</NavLink>

    <H2>Creative Problem Solver</H2>
    <H4>with experience through the entire product lifecycle- where business, design, user experience, and technology intersect.</H4>
    
    <Flex>
      <ExplainLink $isActive={isExplainLinkClicked} onClick={() => setExplainLinkClicked(!isExplainLinkClicked)}>
        <ExplainTitle>aka Utility Player</ExplainTitle>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.983 87.983 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
        </SVG>
      </ExplainLink>
      <FlexGrow>
        <SoccerBallAnimation $isActive={isExplainLinkClicked} />
      </FlexGrow>
    </Flex>
    
    <ExplainText $isActive={isExplainLinkClicked}>This title was given to me by one of my youth soccer coaches for my ability to play any position on the pitch, but excelling in defense. I have applied a similar strategy to my career talents, being proficient at technologies across the stacks and Web3, but shining on the client side.</ExplainText>
  </>
}