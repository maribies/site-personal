import styled from "styled-components"

import { Experiences } from '../../api/Experiences'

import { H2Outline } from '../Text'
import { Experience } from '../ExperienceSection/Experience'

import { getColorValue } from '../CssHelpers'

const Section = styled.div`
  border-top: 1px solid ${getColorValue('yellow')};
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
  
  @media (min-width: 48rem) {
    flex-wrap: wrap;
  }
`

const VerticalText = styled(H2Outline)`
  writing-mode: vertical-rl;
  text-orientation: upright;
  
  margin: 0.83em 0.83em 0.83em 0em;

  @media (min-width: 48rem) {
    margin: 0.83em;
  }
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
`

export const Work = () => {
  const tech = Experiences.find(experience => experience.type === 'tech');

  return (
    <Section id="work">
      <VerticalText>WORK</VerticalText>

      <ColWrapper>
        {!!tech && tech.experiences.slice(0,3).map(exp => {
          return (<Experience experience={exp} key={exp.company} />)
        })}
         {/* TODO: Add clickable element to go to other projects/experiences */}
      </ColWrapper>
    </Section>
  );
}