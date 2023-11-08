import styled from 'styled-components'

import { P, H2Outline } from '../Text'
import { Link } from '../Link'

import { Links } from '../../api/Links'
import { getColorValue } from '../CssHelpers'

const Section = styled.div`
  border-top: 1px solid ${getColorValue('blue')};
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  
  @media (min-width: 48rem) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

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
  flex-wrap: wrap;
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
