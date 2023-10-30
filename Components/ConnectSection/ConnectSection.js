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

export const ConnectSection = () => {
  return (
    <Section id='connect'>
      <H2Outline>Connect</H2Outline>

      {Links.map((item, index) => {
        return (
          <ContactLink key={index} href={item.link} className={item.icon}>
            <LinkInfo>{item.name}</LinkInfo>
          </ContactLink>
        )
      })}
    </Section>
  )
}
