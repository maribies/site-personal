import React, { useState } from 'react'
import styled from 'styled-components'

import { H3, P } from '../Text'
import { Link } from '../Link'
import { UnorderedListComponent as List } from '../List'

import { getColorValue } from '../CssHelpers'

const CompanyLink = styled(Link)`
  margin: 0;
  text-decoration: underline;
  display: inline;
`

const Wrapper = styled.div`
  width: 100%;
`

const ScrollingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
`

const Scroller = styled.div`
  animation: scrolling 20s linear infinite;
  position: absolute;

  @keyframes scrolling {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  };
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ScrollWord = styled(P)`
  margin: 0 0.2em;
  width: 100%;
  white-space: nowrap;
`

const SVG = styled.svg`
  .cursor {
    fill: transparent;
    stroke: white;
    stroke-width: 10px;
    animation: 8s infinite alternate-reverse cursor;
    cursor: url('/static/SVG/cursors/pointer.svg'), pointer;
  }

  @keyframes cursor {
    0% {
      fill: ${getColorValue('orange')};
    }
    20% {
      fill: ${getColorValue('pink')};
    }
    40% {
      fill: ${getColorValue('yellow')};
    }
    60% {
      fill: ${getColorValue('blue')};
    }
    100% {
      fill: ${getColorValue('purple')};
    }
  }
`

const More = styled(Link)`
  position: relative;
`

const InfoBubble = styled.div`
  display: ${({ showInfo }) => showInfo ? "block" : "none"};
  margin-bottom: 1rem;
`

const InfoBubbleTail = styled.div`
  position: relative;
  background: ${getColorValue('grey')};
  width: 3rem;
  height: 3rem;
  margin-left: 75%;
  border-left: 1px solid ${getColorValue('white')};
  border-top: 1px solid ${getColorValue('white')};
  transform: translate(0px, 1.5rem) rotate(45deg);
`

const InfoBubbleBody = styled.div`
  border-radius: 3rem;
  outline: 1px solid ${getColorValue('white')};
  padding: 1rem;
  border-bottom: 10px solid ${getColorValue('purple')};
  animation: 8s infinite alternate-reverse BubbleColors;

  @keyframes BubbleColors {
    0% {
      border-bottom: 10px solid ${getColorValue('orange')};
    }
    20% {
      border-bottom: 10px solid ${getColorValue('pink')};
    }
    40% {
      border-bottom: 10px solid ${getColorValue('yellow')};
    }
    60% {
      border-bottom: 10px solid ${getColorValue('blue')};
    }
    100% {
      border-bottom: 10px solid ${getColorValue('purple')};
    }
  }
`

export const Experience = ({ experience, index }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Wrapper key={index}>
      <FlexContainer>
        <CompanyLink href={experience.companyLink}><H3>{experience.company}</H3></CompanyLink>
        <More onClick={() => setShowInfo(!showInfo)}>
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="48" height="48">
            {showInfo ?
              <path class="cursor" d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
            : 
              <path className="cursor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            }
          </SVG>
        </More>
      </FlexContainer>

      <P>{experience.title}</P>

      {/* TODO: slide down effect */}
      <InfoBubble showInfo={showInfo}><InfoBubbleTail /><InfoBubbleBody><List listData={experience.skills} /></InfoBubbleBody></InfoBubble>

      <ScrollingWrapper>
        <Scroller>
          <FlexContainer>
            {experience.tools && experience.tools.map(tool =>  <ScrollWord key={tool}>{tool}</ScrollWord>)}
            {experience.tools && experience.tools.map(tool =>  <ScrollWord key={tool}>{tool}</ScrollWord>)}
          </FlexContainer>
        </Scroller>
      </ScrollingWrapper>
    </Wrapper>
  )
}
