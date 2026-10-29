import { H1 } from '../Text'
import { Experiences } from '../../api/Experiences'
import { Experience } from './Experience'

export const ExperienceSection = () => {
  const ExperiencesComponent = Experiences.map((section, index) => {
    const { experiences, type } = section

    return (
      <div id={type} key={index}>
        <div style={{ width: '100%' }}>
          <H1>{type?.toUpperCase()}</H1>
        </div>

        {experiences.map((experience, index) => {
          return (<Experience experience={experience} key={index} />)
        })}
      </div>
    )
  })

  return ExperiencesComponent
}
