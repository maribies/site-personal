import styled from 'styled-components'

import { getColorValue } from '../CssHelpers'

const BallArc = styled.div`
  display: flex;
  width: 30%;
  transition: ${({ isActive }) => isActive ?
    `transform-origin 5s ease-in-out,
    transform 5s ease-in-out,
    opacity 5s linear 1s` : ""};

  transform-origin: ${({ isActive }) => isActive ? "50% 50%" : ""};
  transform: ${({ isActive }) => isActive ? "rotate(180deg)" : ""};
  opacity: ${({ isActive }) => isActive ? 0 : 1};
`

const BallArc2 = styled(BallArc)`
  margin-left: -32px;
  width: 20%;
  transition: ${({ isActive }) => isActive ?
    `transform-origin 2s ease-in-out 5s,
    transform 2s ease-in-out 5s,
    opacity 2s linear 5s` : ""};
  opacity: ${({ isActive }) => isActive ? 1 : 0};
`

const BallArc3 = styled(BallArc2)`
  margin-left: -32px;
  width: 10%;
  transition: ${({ isActive }) => isActive ?
    `transform-origin 2s ease-in-out 7s,
    transform 2s ease-in-out 7s,
    opacity 2s linear 7s` : ""};
  opacity: ${({ isActive }) => isActive ? 1 : 0 };
`

const SoccerBall = styled.i`
  display: ${({ isActive }) => isActive ? "flex" : "none"};
  align-self: center;
  color: ${getColorValue('purple')};
  transition: ${({ isActive }) => isActive ? "transform 5s" : ""};
  transform: ${({ isActive }) => isActive ? "rotate(-180deg)" : ""};
`

const SoccerBall2 = styled(SoccerBall)`
  display: flex;
  transition: ${({ isActive }) => isActive ? "color 3s ease-in-out 6s, transform 2s ease-in-out 5s" : ""};
  color: ${({ isActive }) => isActive ? getColorValue("grey") : getColorValue("purple")};
`

const SoccerBall3 = styled(SoccerBall)`
  transition: ${({ isActive }) => isActive ? "transform 2s ease-in-out 7s" : ""};
`

export const SoccerBallAnimation = ({ isActive }) => {
  return (
    <>
      <BallArc isActive={isActive}>
        <SoccerBall className="fa-solid fa-futbol fa-2xl" isActive={isActive} />
      </BallArc><BallArc2 isActive={isActive}>
        <SoccerBall2 className="fa-solid fa-futbol fa-2xl" isActive={isActive} />
      </BallArc2><BallArc3 isActive={isActive}>
        <SoccerBall3 className="fa-solid fa-futbol fa-2xl" isActive={isActive} />
      </BallArc3>
    </>
  )
}