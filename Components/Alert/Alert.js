import { P } from '../Text'
import { gradients, dropShadowWrapper, getColorValue } from '../CssHelpers'
import React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from '../Link'

const clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';


const AlertCard = styled.div`
  background-color: ${getColorValue('grey')};
  clip-path: ${clipPath};
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;  
  flex-direction: column;
`

const AlertCardBorder = styled.div`
  border: solid;
  border-width: 12px;
  border-image-slice: 1;
  border-image-source: linear-gradient( ${gradients.one});
  clip-path: ${clipPath};
  background: linear-gradient(${gradients.one});
`;

export const Message = styled(P)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-left: 35px;
  padding-right: 35px;
  justify-content: center;

  &:first-child {
    margin-bottom: 0;
  }

  &:last-child {
    margin-top: 0;
  }
`

const Wrapper = styled(dropShadowWrapper)`
  position: absolute;
  top: ${props => props.top};
  left:  ${props => props.left};
`

export const Alert = ({ isVisible, top, left, defaultMessage = true, message }) => {
  return isVisible && (
    <Wrapper top={top} left={left}>
      <AlertCardBorder>
        <AlertCard>
          {!!defaultMessage && <Message>Just like me, this website is a work in progress!</Message>}
          <Message>{message}</Message>
        </AlertCard>
      </AlertCardBorder>
    </Wrapper>
  )
}
