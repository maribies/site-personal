import React from 'react';
import styled, { css, keyframes } from 'styled-components';


const animationFadeIn = () =>
  css`
    ${fadeIn} 30s linear infinite;
  `

const animationFadeOut = () =>
  css`
    ${fadeOut} 30s linear infinite;
  `

const Container = styled.stop`
  animation: ${animationFadeIn};
  offset-distance: 50%;
  stop-opacity: 1;
`;

const Fill = styled.rect`
  width: 100vw;
  height: 100vh;
  position: relative;
  opacity: 1;
`;

const Overlay = styled.stop`
  animation: ${animationFadeOut};
  offset-distance: 50%;
  stop-opacity: .75;
`;

const Svg = styled.svg`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

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
    stop-color: #D32E5E
  }
  25% {
    stop-color: #FF7913
  }
  50% {
    stop-color: #0078A7
  }
  75% {
    stop-color: #5F4B8B
  }
  100% {
    stop-color: #D32E5E
  }
`;

export const Background = () => {
  return (
    <Svg viewBox="0 0 100 100">
      <defs>
        <linearGradient id="fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <Container />
          <Overlay />
        </linearGradient>
      </defs>
      <Fill fill="url(#fill)"  />
    </Svg>
  );
}



