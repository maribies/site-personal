import styled from 'styled-components'

import { getColorValue, changingIconColors } from '../CssHelpers'

const Container = styled.div`
  display: ${({ $showInfo }) => $showInfo ? "block" : "none"};
  margin-bottom: 1rem;
`
const InfoBubbleTail = styled.div`
  position: relative;
  background: ${getColorValue('grey')};
  width: 3rem;
  height: 3rem;
  margin-left: 50%;
  border-left: 1px solid ${getColorValue('white')};
  border-top: 1px solid ${getColorValue('white')};
  transform: translate(0px, 1.5rem) rotate(45deg);

  @media (min-width: 48rem) {
    margin-left: 75%;
  }
`

const InfoBubbleBody = styled.div`
  border-radius: 3rem;
  outline: 1px solid ${getColorValue('white')};
  padding: 1rem;
  ${changingIconColors({property: "border-bottom"})};
`

{/* TODO: slide down effect */}
export const InfoBubble = ({ children, showInfo }) => {
  return (
    <Container $showInfo={showInfo}>
      <InfoBubbleTail />
      <InfoBubbleBody>
        {children}
      </InfoBubbleBody>
    </Container>
  )
}