import { Section, SubSection } from '../Section'
import { H1, P, H2Outline } from '../Text'
import { Link } from '../Link'
import { Links } from '../../api/Links'
import React from 'react'
import styled from 'styled-components'

const ContactLink = styled(Link)`
  padding-left: 1rem;
`

const LinkInfo = styled(P)`
  padding-left: 0.5rem;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-grow: 2;
`

export const ConnectSection = () => {
  return (
    <Section id='connect'>
      <H2Outline>Connect</H2Outline>

      <LinksContainer>
        {Links.map((item, index) => {
          return (
            <ContactLink key={index} href={item.link} target="_blank" className={item.icon}>
              <LinkInfo>{item.name}</LinkInfo>
            </ContactLink>
          )
        })}
      </LinksContainer>
    </Section>
  )
}
