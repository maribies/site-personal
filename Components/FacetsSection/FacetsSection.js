import { Section, SubSection } from '../Section'
import { H1, H3 } from '../Text'
import { Link as BaseLink } from '../Link'
import { Alert, Message } from '../Alert'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getColorValue } from '../CssHelpers'

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

const MessageLink = styled(BaseLink)`
  color: ${getColorValue('pink')};
  font-weight: bold;
  text-decoration: underline;
`

const Title = styled(H1)`
  text-align: center;
`

const renderFacetSection = showAlert => {
  const sections = [
    { alert: false, link: '/experiences', title: 'Portfolio, Experiences, & Skills' },
    { alert: '35%', link: '/', title: 'Travel and Photography', message: renderAlertLink('travel')},
    { alert: '65%', link: '/', title: 'Grilled Cheese, Food, & Crafts', message: renderAlertLink() }
  ]

  return sections.map((section, index) => {
    const { link, alert, message } = section;
  
    return (
      <FacetSection key={index} setHeight>
        <Link href={link} onClick={event => !!alert && showAlert(event, alert, message)}>
          <FacetSectionTitle>{section.title}</FacetSectionTitle>
        </Link>
      </FacetSection>
    )
  })
}

const renderAlert = (isVisible, top, message) => {
  return (
    <Alert isVisible={isVisible} top={top} left='70%' message={message} defaultMessage={false} />
  )
}

const renderAlertLink = type => {
  let redirect = { name: 'Instagram', link: 'https://www.instagram.com/maribies/' };

  if (type === 'travel') {
    redirect = { name: 'WixSite', link: 'https://maribies.wixsite.com/marissabiesecker/galleries'}
  }

  return (
  <Message>Redirect to my <MessageLink href={redirect.link}>{redirect.name}</MessageLink> while customization is still in progress?</Message>
  )
}

export const FacetsSection = () => {
  const [isVisible, makeVisible] = useState(null)
  const [top, setAlertTopValue] = useState(null)
  const [message, setMessage] = useState('This link doesn\'t go anywhere yet.');

  useEffect(() => {
    const timer = setTimeout(() => {
      makeVisible(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [isVisible])

  const showAlert = (e, topValue, message) => {
    e.preventDefault()
    makeVisible(true)
    setAlertTopValue(topValue)
    setMessage(message)
  }

  return (
    <Section id='facets' wrap='wrap-reverse'>
      <SubSection position='relative'>
        <ContentSection>
          {renderFacetSection(showAlert)}

          {renderAlert(isVisible, top, message)}
        </ContentSection>
      </SubSection>

      <SubSection>
        <Title>FACETS</Title>
      </SubSection>
    </Section>
  )
}
