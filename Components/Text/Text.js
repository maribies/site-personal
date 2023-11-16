import styled, { css } from 'styled-components'
import { getColorValue } from '../CssHelpers'

const baseStyles = css`
  font-family: 'Poppins', helvetica neue, Helvetica, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  color: ${getColorValue('white')};
`

const colorChange = css`
  animation-duration: 8s;
  animation-name: colorchange;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  @keyframes colorchange {
    0% {
      -webkit-text-stroke: 1px #5F4B8B;
    }
    20% {
      -webkit-text-stroke: 1px #0078A7;
    }
    40% {
      -webkit-text-stroke: 1px #F9AC2F;
    }
    60% {
      -webkit-text-stroke: 1px #D32E5E;
    }
    100% {
      -webkit-text-stroke: 1px #FF7913;
    }
  }
`

// Perfect Fifth
export const Title = styled.h1`
  ${baseStyles}
  font-family: 'Dela Gothic One';
  font-size: 3.375rem;
  line-height: 4.375rem;
  margin: 0;

  @media (min-width: 48rem) {
    font-size: 5.063rem;
    line-height: 6.063rem;
  }

  @media (min-width: 75rem) {
    font-size: 7.594rem;
    line-height: 8.594rem;
  }
`

export const TitleOutline = styled(Title)`
  ${colorChange}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
`

export const H1 = styled.h1`
  ${baseStyles}
  font-size: 3.375rem;
  line-height: 4.375rem;

  @media (min-width: 48rem) {
    font-size: 5.063rem;
    line-height: 6.063rem;
  }
`

export const H2 = styled.h2`
  ${baseStyles}

  font-size: 2.25rem;
  line-height: 3.25rem;

  @media (min-width: 48rem) {
    font-size: 3.375rem;
    line-height: 4.375rem;
  }
`

export const SecondaryH2 = styled(H2)`
  font-weight: 100;
`

export const H2Outline = styled(H2)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
`

export const H3 = styled.h3`
  ${baseStyles}
  font-size: 1.5rem;
  line-height: 2rem;

  @media (min-width: 48rem) {
    font-size: 2.25rem;
    line-height: 3.25rem;
  }
`

export const SecondaryH3 = styled.h3`
  font-weight: 100;
`

export const H3Outline = styled(H3)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
`

export const H4 = styled.h4`
  ${baseStyles}
  font-size: 1.5rem;
  line-height: 2rem;
`
export const P = styled.p`
  ${baseStyles}
  font-size: 1rem;
  line-height: 1.5rem;
`
