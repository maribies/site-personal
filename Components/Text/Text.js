import styled, { css } from 'styled-components'
import { getColorValue } from '../CssHelpers'

const baseStyles = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  color: ${getColorValue('white')};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const H1 = styled.h1`
  ${baseStyles}
  font-size: 44px;
  line-height: 72px;
`

export const H2 = styled.h2`
  ${baseStyles}
  font-size: 32px;
  line-height: 44px;
`

export const SecondaryH2 = styled(H2)`
  font-family: 'Vesper Libre', serif;
`

export const H3 = styled.h3`
  ${baseStyles}
  font-size: 24px;
  line-height: 32px;
`

export const SecondaryH3 = styled.h3`
  font-family: 'Vesper Libre', serif;
`

export const P = styled.p`
  ${baseStyles}
  font-family: 'Vesper Libre', serif;
  font-size: 16px;
  line-height: 24px;
`
