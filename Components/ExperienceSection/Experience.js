import React, { useState } from 'react'
import styled from 'styled-components'

import { H3, P } from '../Text'
import { Link } from '../Link'
import { UnorderedListComponent as List } from '../List'
import { InfoBubble } from '../InfoBubble'

import { changingIconColors } from '../CssHelpers'

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
  ${changingIconColors({ property: "fill", cursor: "url('/static/SVG/cursors/pointer.svg'), pointer"})};
`

const More = styled(Link)`
  position: relative;
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
              <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
            : 
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            }
          </SVG>
        </More>
      </FlexContainer>

      <P>{experience.title}</P>

      <InfoBubble showInfo={showInfo}>
        <List listData={experience.skills} />
      </InfoBubble>

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
