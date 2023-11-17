import styled from 'styled-components'
import { 
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from "@react-spring/web"

import { getColorValue, changingIconColors } from '../CssHelpers'

const Container = styled(animated.div)`
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

export const InfoBubble = ({ children, showInfo }) => {
  const springApi = useSpringRef();
  const { y, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { opacity: 0, height: "0%", y: 0, display: 'none' },
    to: {
      opacity: showInfo ? 1 : 0,
      height: showInfo ? "100%" : "0%",
      y: showInfo ? 0 : 20,
      display: showInfo ? 'block' : 'none',
    }
  });

  useChain(showInfo ? [springApi] : [springApi], [0, showInfo ? 0.1 : 0.6]);

  return (
     <Container $showInfo={showInfo} style={{ ...rest }}>
      <InfoBubbleTail />
      <InfoBubbleBody $showInfo={showInfo}>
        <animated.div style={{ y }} children={children} />
      </InfoBubbleBody>
    </Container>
  )
}