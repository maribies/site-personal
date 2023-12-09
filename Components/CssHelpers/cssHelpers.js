import styled, { css, keyframes } from 'styled-components'

const colors = {
  purple: { hex: '#5F4B8B', rgb: { r: 95, g: 75, b: 139 } },
  blue: { hex: '#0078A7', rgb: { r: 0, g: 120, b: 167 } },
  yellow: { hex: '#F9AC2F', rgb: { r: 249, g: 172, b: 47 } },
  pink: { hex: '#D32E5E', rgb: { r: 211, g: 46, b: 94 } },
  orange: { hex: '#FF7913', rgb: { r: 255, g: 121, b: 19 } },
  rose: { hex: '#B76BA3', rgb: { r: 183, g: 107, b: 163 } },
  mustard: { hex: '#D2B04C', rgb: { r: 210, g: 176, b: 76 } },
  tan: { hex: '#C68F65', rgb: { r: 198, g: 143, b: 101 } },
  grey: { hex: '#2E3138', rgb: { r: 46, g: 49, b: 56 } },
  black: { hex: '#020300', rgb: { r: 2, g: 3, b: 0 } },
  white: { hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 } }
}

export const getColorValue = (color, opacity = 1, isHex) => {
  if (Object.keys(colors).forEach(key => { if (key !== color) { return true } })) {
    return colors.grey.hex
  }

  if (isHex) {
    return colors[color].hex
  }

  return `rgba(${colors[color].rgb?.r}, ${colors[color].rgb?.g}, ${colors[color].rgb?.b}, ${opacity})`
}

export const getRandomColor = () => {
  const colorName = Object.keys(colors)[Math.floor(Math.random() * 7)];
  return getColorValue(colorName);
}

export const dropShadowWrapper = styled.div`
  filter: drop-shadow(0 0 12px ${getColorValue('grey')});
`

export const gradients = {
  one: '#5F4B8B, #0078A7, #FF7913, #D32E5E, #5F4B8B',
  two: '#FF7913, #D32E5, #5F4B8B, #0078A7, #FF7913'
}

const iconColors = ({ property }) => {
  let valueOne = getColorValue('orange');
  let valueTwo = getColorValue('pink');
  let valueThree = getColorValue('yellow');
  let valueFour = getColorValue('blue');
  let valueFive = getColorValue('purple');

  if (property === 'border-bottom' || property === 'border' || property === 'outline') {
    valueOne = `10px solid ${getColorValue('orange')}`;
    valueTwo = `10px solid ${getColorValue('pink')}`;
    valueThree = `10px solid ${getColorValue('yellow')}`;
    valueFour = `10px solid ${getColorValue('blue')}`;
    valueFive = `10px solid ${getColorValue('purple')}`;
  }

  return keyframes`
    0% {
      ${property}: ${valueOne};
    }
    20% {
      ${property}: ${valueTwo};
    }
    40% {
      ${property}: ${valueThree};
    }
    60% {
      ${property}: ${valueFour};
    }
    100% {
      ${property}: ${valueFive};
    }
  `
}

export const changingIconColors = ({ property, cursor }) => {
  if (!property) {
    return new Error('No property provided to changingIconColors');    
  }
  
  return css`
  fill: transparent;
  stroke: white;
  stroke-width: 10px;
  animation: 8s infinite alternate-reverse ${iconColors({property})};
  cursor: ${cursor ? cursor : "inherit"};
`
}

const shineEffect = keyframes`
  0%, 10% {
    background-position: -100px;
  }
  20% {
    background-position: top left;
  }
  90% {
    background-position: top right;
  }
  100% {
    background-position: 100px;
  }
`

export const shineAnimationEffect = () => css`
  color: ${getColorValue('white', 0.8)};
  background: ${getColorValue('purple')} -webkit-gradient(linear, left top, right top, from(${getColorValue('pink')}), to(${getColorValue('blue')}), color-stop(0.5, #fff)) 0 0 no-repeat;
  background-image: linear-gradient(-40deg, transparent 0%, transparent 40%, #fff 50%, transparent 60%, transparent 100%);
  background-clip: text;
  -webkit-background-clip: text;
  animation-name: ${shineEffect};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`
