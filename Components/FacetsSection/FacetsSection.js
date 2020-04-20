import { Section, SubSectionTitle, SubSectionContent } from '../Section'
import { H1, H3 } from '../Text'
import { Link as BaseLink } from '../Link'
import { Alert } from '../Alert'
import { dropShadowWrapper as Wrapper, getColorValue } from '../CssHelpers'
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
  background-color: ${getColorValue('grey')};
  margin-bottom: 32px;
  clip-path: ${props => props.clipPath};
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
      <SubSectionContent position='relative'>
        <ContentSection>
          <Wrapper>
            <FacetSection clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'>
              <Link href='#' onClick={e => showAlert(e, '5%')}>
                <FacetSectionTitle>Portfolio, Experiences, & Skills</FacetSectionTitle>
              </Link>
            </FacetSection>
          </Wrapper>

          <Wrapper>
            <FacetSection clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'>
              <Link href='#' onClick={e => showAlert(e, '35%')}>
                <FacetSectionTitle>Travel and Photography</FacetSectionTitle>
              </Link>
            </FacetSection>
          </Wrapper>

          <Wrapper>
            <FacetSection clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'>
              <Link href='#' onClick={e => showAlert(e, '65%')}>
                <FacetSectionTitle>Grilled Cheese, Food, & Crafts</FacetSectionTitle>
              </Link>
            </FacetSection>
          </Wrapper>

          <Alert isVisible={isVisible} top={top} left='70%' message={'This link doesn\'t go anywhere yet.'} />
        </ContentSection>
      </SubSectionContent>

      <SubSectionTitle>
        <Title>FACETS</Title>
      </SubSectionTitle>
    </Section>
  )
}
