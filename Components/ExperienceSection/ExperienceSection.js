import React from 'react'
import styled from 'styled-components'
import { H1, SecondaryH3 } from '../Text'
import { getColorValue } from '../CssHelpers'
import { Experiences } from '../../api/Experiences'
import { Experience } from './Experience'

const Header = styled.div`
  width: 100%;
`

const Section = styled.div`
  margin: 0 1em;
`

export const ExperienceSection = () => {
  const ExperiencesComponent = Experiences.map((section, index) => {
    const { experiences, type } = section

    return (
      <Section id={type} key={index}>
        <Header>
          <H1>{type?.toUpperCase()}</H1>
        </Header>

        {experiences.map((experience, index) => {
          return (<Experience experience={experience} key={index} />)
        })}
      </Section>
    )
  })

  return ExperiencesComponent
}
