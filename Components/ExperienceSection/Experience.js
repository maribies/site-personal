import React from 'react'
import styled from 'styled-components'
import { SubSection } from '../Section'
import { H3 } from '../Text'
import { UnorderedListComponent as List } from '../List'
import { PreviewSection } from './PreviewSection'

const Info = styled.div`
  display: inline-block;
`

const InfoDetails = styled(H3)`
  margin: 0;
`

const InfoDetailsLink = styled.a`
  text-decoration: none;
  margin: 0;
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;

  @media (min-width: 48rem) {
    padding: 0 84px;
  }

  @media (min-width: 75rem) {
    padding: 0 120px;
  }
`

const Icon = styled.img`
  height: 100px;
  width: 100px;
  display: inline-block;
  margin-right: 30px;
`

const DescriptonSection = styled.div`
  display: flex;
`

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Experience = ({ experience, index }) => {
  return (
    <>
      <Section key={index}>
        <SubSection key={index}>
          <ContentSection>
            <DescriptonSection>
              <Icon src={experience.icon} alt={experience.iconAlt} />
              <Info>
                <InfoDetails>{experience.title}</InfoDetails>
                <InfoDetailsLink href={experience.companyLink}><InfoDetails>{experience.company}</InfoDetails></InfoDetailsLink>
                <InfoDetails>{experience.timeFrame}</InfoDetails>
              </Info>
            </DescriptonSection>

            <List listData={experience.skills} />
          </ContentSection>
        </SubSection>

        <SubSection direction="column">
          <PreviewSection info={experience.links.main} />

          {!!experience.links.second && <PreviewSection info={experience.links.second} />}

          {!!experience.links.third && <PreviewSection info={experience.links.third} /> }
        </SubSection>
      </Section>
    </>
  )
}
