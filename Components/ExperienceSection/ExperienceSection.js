import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import { H1, SecondaryH3 } from '../Text'
import { getColorValue } from '../CssHelpers'
import { Experiences } from '../../api/Experiences'
import { Experience } from './Experience'

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;
  flex-wrap: wrap;

  @media (min-width: 48rem) {
    flex-direction: column;
    padding: 0 84px;
  }

  @media (min-width: 75rem) {
    padding: 0 120px;
  }
`

const Title = styled(H1)`
  margin-bottom: 0;
`

const Subtitle = styled(SecondaryH3)`
  color: ${getColorValue('white')};
`

export const ExperienceSection = () => {
  const ExperiencesComponent = Experiences.map((section, index) => {
    const { experiences, title, subtitle } = section

    return (
      <Section id={title} key={index}>
        <Header>
          <Title>{title.toUpperCase()}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>

        {experiences.map((experience, index) => {
          return (<Experience experience={experience} key={index} />)
        })}
      </Section>
    )
  })

  return ExperiencesComponent
}
