import React from 'react'
import styled from 'styled-components'
import { H3, P } from '../Text'
import { Link } from '../Link'

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

const ScrollContainer = styled.div`
  display: flex;
`

const ScrollWord = styled(P)`
  margin: 0 0.2em;
  width: 100%;
  white-space: nowrap;
`

export const Experience = ({ experience, index }) => {
  return (
    <Wrapper key={index}>
      <CompanyLink href={experience.companyLink}><H3>{experience.company}</H3></CompanyLink>
      <P>{experience.title}</P>

      <ScrollingWrapper>
        <Scroller>
          <ScrollContainer>
            {experience.tools && experience.tools.map(tool =>  <ScrollWord>{tool}</ScrollWord>)}
            {experience.tools && experience.tools.map(tool =>  <ScrollWord>{tool}</ScrollWord>)}
          </ScrollContainer>
        </Scroller>
      </ScrollingWrapper>
    </Wrapper>
  )
}
