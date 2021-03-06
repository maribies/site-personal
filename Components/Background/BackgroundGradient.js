import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const HEIGHT = `${900 * 4 + 90}`

const animationFadeIn = () => css`
  ${fadeIn} 30s linear infinite;
`

const animationFadeOut = () => css`
  ${fadeOut} 30s linear infinite;
`

const Container = styled.stop`
  animation: ${animationFadeIn};
  stop-opacity: 1;
`

const Fill = styled.rect`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 1;
`

const Overlay = styled.stop`
  animation: ${animationFadeOut};
  stop-opacity: .75;
`

const Svg = styled.svg`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
  height: ${HEIGHT}px;
  width: ${props => props.theme.flexboxgrid.container.xs}rem;

  @media (min-width: 23.5) {
    width: ${props => props.theme.flexboxgrid.container.shm}rem;
  }

  @media (min-width: 25.875rem) {
    width: ${props => props.theme.flexboxgrid.container.sm}rem;
  }

  @media (min-width: 48rem) {
    width: ${props => props.theme.flexboxgrid.container.md}rem;
  }

  @media (min-width: 75rem) {
    width: ${props => props.theme.flexboxgrid.container.lg}rem;
  }

  @media (min-width: 90rem) {
    width: ${props => props.theme.flexboxgrid.container.xl}rem;
  }
`
const fadeIn = keyframes`
  0% {
    stop-color: #5F4B8B;
  }
  25% {
    stop-color: #0078A7
  }
  50% {
    stop-color: #FF7913
  }
  75% {
    stop-color: #D32E5E
  }
  100% {
    stop-color: #5F4B8B
  }
`
const fadeOut = keyframes`
  0% {
    stop-color: #FF7913
  }
  25% {
    stop-color: #D32E5
  }
  50% {
    stop-color: #5F4B8B
  }
  75% {
    stop-color: #0078A7
  }
  100% {
    stop-color: #FF7913
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const BackgroundGradient = () => {
  return (
    <Wrapper>
      <Svg>
        <defs>
          <linearGradient id='fill' x1='0%' y1='0%' x2='0%' y2='50%'>
            <Container offset='0%' />
            <Overlay offset='100%' />
          </linearGradient>
        </defs>
        <Fill fill='url(#fill)' />
      </Svg>
    </Wrapper>
  )
}
