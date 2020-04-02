import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const HEIGHT = `${900*4+65}px`;
const WIDTH = `${1700}px`;

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
  stop-opacity: 1;
`;

const Fill = styled.rect`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 1;
`;

const Overlay = styled.stop`
  animation: ${animationFadeOut};
  stop-opacity: .75;
`;

const Svg = styled.svg`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
  height: ${HEIGHT};
  width: ${WIDTH};
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
`;

export const Background = () => {
  return (
    <Svg viewBox={`0 0 ${HEIGHT} ${WIDTH}`}>
      <defs>
        <linearGradient id="fill" x1="0%" y1="0%" x2="0%" y2="50%">
          <Container offset="0%" />
          <Overlay offset="100%"/>
        </linearGradient>
      </defs>
      <Fill fill="url(#fill)"  />
    </Svg>
  );
}



