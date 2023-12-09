import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, a } from '@react-spring/web'

import { Link } from '../Link'

import { changingIconColors } from '../CssHelpers'

const Wrapper = styled.button`
  align-self: center;
  background: none;
`

const Container = styled(a.div)`
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  
`

const ContainerFlipped = styled(Container)`
  translate: 0px -100%;
  margin-bottom: -100%;
`

export const FlipCard = ({ frontCard, backCard }) =>  {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Wrapper onClick={() => set(state => !state)}>
      <Container
        style={{ 
          opacity: opacity.to(o => 1 - o), 
          transform,
        }}
      >
      <Card css={frontCard.css}>{frontCard.children}</Card>
      </Container>
      <ContainerFlipped
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
      <Card css={backCard.css} link={backCard.link} flipped={flipped}>{backCard.children}</Card>
      </ContainerFlipped>
    </Wrapper>
  )
}

const Card = ({ children, css, flipped, link }) => {
  const Card = styled.div`
    ${changingIconColors({property: "outline"})};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    ${css}
  `

  return <Card>
    {children}
    {link && flipped && <InnerCardLink link={link} />}
    </Card>;
}

const CardLink = styled(Link)`
  text-decoration: underline;
`

const InnerCardLink = ({ link }) => {
  return <CardLink href={link.href}>{link.text}</CardLink>
}