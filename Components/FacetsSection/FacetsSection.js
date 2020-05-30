import { Section, SubSection } from '../Section'
import { H1, H3 } from '../Text'
import { Link as BaseLink } from '../Link'
import { Alert } from '../Alert'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 48rem) {
    padding: 0 84px;
  }

  @media (min-width: 75rem) {
    padding: 0 120px;
  }
`

const FacetSection = styled.div`
  margin-bottom: 32px;
`

const FacetSectionTitle = styled(H3)`
  padding: 54px 32px;
`

const Link = styled(BaseLink)`
  justify-content: center;
`

const Title = styled(H1)`
  text-align: center;
`

const renderFacetSection = showAlert => {
  const sections = [
    { alert: false, link: '/experiences', title: 'Portfolio, Experiences, & Skills' },
    { alert: '35%', link: '/', title: 'Travel and Photography' },
    { alert: '65%', link: '/', title: 'Grilled Cheese, Food, & Crafts' }
  ]

  return sections.map((section, index) => {
    return (
      <FacetSection key={index}>
        <Link href={section.link} onClick={event => !!section.alert && showAlert(event, section.alert)}>
          <FacetSectionTitle>{section.title}</FacetSectionTitle>
        </Link>
      </FacetSection>
    )
  })
}

export const FacetsSection = () => {
  const [isVisible, makeVisible] = useState(null)
  const [top, setAlertTopValue] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      makeVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isVisible])

  const showAlert = (e, topValue) => {
    e.preventDefault()
    makeVisible(true)
    setAlertTopValue(topValue)
  }

  return (
    <Section id='facets' wrap='wrap-reverse'>
      <SubSection position='relative'>
        <ContentSection>
          {renderFacetSection(showAlert)}

          <Alert isVisible={isVisible} top={top} left='70%' message={'This link doesn\'t go anywhere yet.'} />
        </ContentSection>
      </SubSection>

      <SubSection>
        <Title>FACETS</Title>
      </SubSection>
    </Section>
  )
}
