import { Section, SubSection } from '../Section'
import { H1, P } from '../Text'
import { Link } from '../Link'
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

      <SubSection>
        <Link href='mailto:marissa.biesecker@gmail.com' className='fa fa-envelope'>
          <LinkInfo>marissa.biesecker@gmail.com</LinkInfo>
        </Link>

        <Link href='https://twitter.com/maribies' className='fa fa-twitter'>
          <LinkInfo>@maribies</LinkInfo>
        </Link>

        <Link href='https://www.instagram.com/maribies' className='fa fa-instagram'>
          <LinkInfo>@maribies</LinkInfo>
        </Link>

        <Link href='https://github.com/maribies/' className='fa fa-github'>
          <LinkInfo>@maribies</LinkInfo>
        </Link>

        <Link href='https://medium.com/@marissa.biesecker' className='fa fa-medium'>
          <LinkInfo>@marissa.biesecker</LinkInfo>
        </Link>

        <Link href='https://www.linkedin.com/in/marissabiesecker/' className='fa fa-linkedin'>
          <LinkInfo>marissabiesecker</LinkInfo>
        </Link>
      </SubSection>
    </Section>
  )
}
