import { gradients, getColorValue } from '../CssHelpers'
import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  background: ${getColorValue('grey')};
  clip-path: polygon(${props => props.clipPath});
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 420px;
  min-height: 420px;

  @media (min-width: 25.875rem) {
    display: ${props => props.mobile ? 'none' : null}
  }

  @media (min-width: 48rem) {
    min-width: 640px;
    min-height: 640px;
  }

  @media (min-width: 75rem) {
    min-width: 840px;
    min-height: 840px;
  }
`

const ContentBorder = styled.div`
  border: solid;
  border-width: 24px;
  border-image-slice: 1;
  border-image-source: linear-gradient( ${gradients.one});
  clip-path: polygon(${props => props.clipPath});
  background: linear-gradient(${gradients.one});
  transform: translateY(${props => props.mobile ? '-160px' : null});

  @media (min-width: 25.875rem) {
    display: ${props => props.mobile ? 'none' : null};
  }

  @media (min-width: 48rem) {
    min-width: 640px;
    min-height: 640px;
  }

  @media (min-width: 75rem) {
    min-width: 840px;
    min-height: 840px;
    border-width: 80px;
  }
`

export const ShapeDiv = ({ children, clipPath, mobile }) => {
  return (
    <ContentBorder clipPath={clipPath} mobile={mobile}>
      <Content clipPath={clipPath} mobile={mobile}>
        {children}
      </Content>
    </ContentBorder>
  )
}
