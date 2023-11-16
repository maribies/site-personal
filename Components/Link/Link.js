import { getColorValue } from '../CssHelpers'
import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  color: ${getColorValue('white')};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  cursor: url('/static/SVG/cursors/pointer.svg'), pointer;

  &:clicked {
    color: ${getColorValue('purple')}
  }
`
