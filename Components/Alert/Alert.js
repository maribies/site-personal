import { P } from '../Text';
import { dropShadowWrapper, getColorValue } from '../CssHelpers';
import React from 'react';
import styled from 'styled-components';

const AlertCard = styled.div`
  background-color: ${getColorValue('mustard')};
  margin-bottom: 32px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;  
  flex-direction: column;
`;

const Message = styled(P)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-left: 35px;
  padding-right: 35px;
  color: ${getColorValue('grey')};

  &:first-child {
    margin-bottom: 0;
  }

  &:last-child {
    margin-top: 0;
  }
`;

const Wrapper = styled(dropShadowWrapper)`
  position: absolute;
  top: ${props => props.top};
  left:  ${props => props.left};
`;

export const Alert = ({ isVisible, top, left, message }) => {
  return isVisible && (
    <Wrapper top={top} left={left}>
      <AlertCard>
        <Message>{`Just like me, this website is a work in progress!`}</Message>
        <Message>{message}</Message>
      </AlertCard>
    </Wrapper>
  );
}
