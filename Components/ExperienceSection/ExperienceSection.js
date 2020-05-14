import React from 'react'
import styled from 'styled-components'
import { PagesNavigationBar } from '../NavigationBar'
import { Section, SubSection } from '../Section'
import { H1, H3, SecondaryH3 } from '../Text'
import { UnorderedListComponent as List } from '../List'
import { getColorValue } from '../CssHelpers'
import { PreviewSection } from './PreviewSection'

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

const Info = styled.div`
  display: inline-block;
`

const InfoDetails = styled(H3)`
  margin: 0;
`

const InfoDetailsLink = styled.a`
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

const listData = [
  'Focused on continuous development and automated testing of mobile app',
  'Experience with: React, React Native, GraphQL, styled-components, Redux, REST, Node.js, Next.js, i18next, CLI, analytics events with Datadog, testing with Jest, Detox, and Cypress'
]

export const ExperienceSection = () => {
  return (
    <Section>
      <PagesNavigationBar />

      <Header>
        <Title>TECH</Title>
        <Subtitle>Making and breaking. Creative problem solving. Self teaching. Continuous learning. Design thinking.</Subtitle>
      </Header>

      <SubSection>
        <ContentSection>
          <DescriptonSection>
            <Icon src='https://media-exp1.licdn.com/dms/image/C560BAQH3XmMGJebECg/company-logo_200_200/0?e=1597276800&v=beta&t=wu7qjKJ2pkhLv_OJxY7BTFHnf5L2bzYlTps_F_1kmwg' alt='Uphold Icon' />
            <Info>
              <InfoDetails>Junior Developer</InfoDetails>
              <InfoDetailsLink href='https://www.uphold.com'><InfoDetails>Uphold</InfoDetails></InfoDetailsLink>
              <InfoDetails>Jan 2018 - Present</InfoDetails>
            </Info>
          </DescriptonSection>

          <List listData={listData} />
        </ContentSection>
      </SubSection>

      <SubSection>
        <PreviewSection url='https://www.youtube.com/embed/UpvIJLUizB8' />
      </SubSection>

      <SubSection />
    </Section>
  )
}
