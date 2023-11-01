import { useState } from 'react'
import styled from 'styled-components'

import { Title, TitleOutline, H2, H3Outline, H4, P } from '../Text'
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

const ExplainLink = styled.a`
  cursor:  ${({ active }) => active ? "url('/static/SVG/cursors/collapse.svg'), pointer" : "url('/static/SVG/cursors/question.svg'), pointer" };
`

const ExplainTitle = styled(H3Outline)`
  margin-bottom: 0;
`

const ExplainText = styled(P)`
  visibility: ${({ show }) => show ? "visible" : "hidden"};
  margin: 0;  
  transition: ${({ show }) => show ? "opacity 5s linear 1s" : ""};
  opacity: ${({ show }) => show ? 1 : 0};
`

const Flex = styled.div`
  display: flex;
`

const FlexGrow = styled(Flex)`
  flex-grow: 2;
  height: 3.25rem; 
  align-self: end;
`

const BallArc = styled.div`
  display: flex;
  width: 30%;
  transition: ${({ activate }) => activate ?
    `transform-origin 5s ease-in-out,
    transform 5s ease-in-out,
    opacity 5s linear 1s` : ""};

  transform-origin: ${({ activate }) => activate ? "50% 50%" : ""};
  transform: ${({ activate }) => activate ? "rotate(180deg)" : ""};
  opacity: ${({ activate }) => activate ? 0 : 1};
`

const BallArc2 = styled(BallArc)`
  margin-left: -32px;
  width: 20%;
  transition: ${({ activate }) => activate ?
    `transform-origin 2s ease-in-out 5s,
    transform 2s ease-in-out 5s,
    opacity 2s linear 5s` : ""};
  opacity: ${({ activate }) => activate ? 1 : 0};
`

const BallArc3 = styled(BallArc2)`
  margin-left: -32px;
  width: 10%;
  transition: ${({ activate }) => activate ?
    `transform-origin 2s ease-in-out 7s,
    transform 2s ease-in-out 7s,
    opacity 2s linear 7s` : ""};
  opacity: ${({ activate }) => activate ? 1 : 0 };
`

const SoccerBall = styled.i`
  display: ${({ activate }) => activate ? "flex" : "none"};
  align-self: center;
  color: #5f4b8b;
  transition: ${({ activate }) => activate ? "transform 5s" : ""};
  transform: ${({ activate }) => activate ? "rotate(-180deg)" : ""};
`

const SoccerBall2 = styled(SoccerBall)`
  display: flex;
  transition: ${({ activate }) => activate ? "color 3s ease-in-out 6s, transform 2s ease-in-out 5s" : ""};
  color: ${({ activate }) => activate ? "#2E3138" : "#5f4b8b"};
`

const SoccerBall3 = styled(SoccerBall)`
  transition: ${({ activate }) => activate ? "transform 2s ease-in-out 7s" : ""};
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
      <ExplainLink active={isExplainLinkClicked} onClick={() => setExplainLinkClicked(!isExplainLinkClicked)}>
        <ExplainTitle>aka Utility Player</ExplainTitle>
      </ExplainLink>
      <FlexGrow>
        <BallArc activate={isExplainLinkClicked}>
          <SoccerBall className="fa-solid fa-futbol fa-2xl" activate={isExplainLinkClicked} />
        </BallArc>
        <BallArc2 activate={isExplainLinkClicked}>
          <SoccerBall2 className="fa-solid fa-futbol fa-2xl" activate={isExplainLinkClicked} />
        </BallArc2>
        <BallArc3 activate={isExplainLinkClicked}>
          <SoccerBall3 className="fa-solid fa-futbol fa-2xl" activate={isExplainLinkClicked} />
        </BallArc3>
      </FlexGrow>
    </Flex>
    
    <ExplainText show={isExplainLinkClicked}>This title was given to me by one of my youth soccer coaches for my ability to play any position on the pitch, but excelling in defense. I have applied a similar strategy to my career talents, being proficient at technologies across the stacks and Web3, but shining on the client side.</ExplainText>
  </>
}