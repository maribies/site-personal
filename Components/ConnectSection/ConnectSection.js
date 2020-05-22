import { Section, SubSection } from '../Section'
import { H1, P } from '../Text'
import { Link } from '../Link'
import { Links } from '../../api/Links'
import React from 'react'
import styled from 'styled-components'

const Title = styled(H1)`
  text-align: center;
`

const LinkInfo = styled(P)`
  padding-left: 24px;
`

export const ConnectSection = () => {
  return (
    <Section id='connect'>
      <SubSection>
        <Title>Connect</Title>
      </SubSection>

      <SubSection direction='column'>
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.link} className={item.icon}>
              <LinkInfo>{item.name}</LinkInfo>
            </Link>
          )
        })}
      </SubSection>
    </Section>
  )
}
