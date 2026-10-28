import { css, keyframes } from 'styled-components'

const iconColors = ({ property }) => {
  let valueOne = "var(--orange)";
  let valueTwo = "var(--pink)";
  let valueThree = "var(--yellow)";
  let valueFour = "var(--blue)";
  let valueFive = "var(--purple)";

  if (property === 'border-bottom') {
    valueOne = `10px solid ${valueOne}`;
    valueTwo = `10px solid ${valueTwo}`;
    valueThree = `10px solid ${valueThree}`;
    valueFour = `10px solid ${valueFour}`;
    valueFive = `10px solid ${valueFive}`;
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

