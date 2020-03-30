import { Section as BaseSection } from '../Section';
import { H1, P } from '../Text';
import { getColorValue } from '../Colors';
import React from 'react';
import styled from 'styled-components';

const ParentSection = styled(BaseSection)`
  flex-direction: column;
`;

const Section = styled.div`
  width: 50%;
  align-self: center;
`;

const ContentSection = styled(Section)`
  padding: 0 136px;
`;

const Title = styled(H1)`
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${getColorValue('black')};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  &:clicked {
    color: ${getColorValue('grey')}
  }
`;

const LinkInfo = styled(P)`
  padding-left: 24px;
`;

export const ConnectSection = () => {
  return (
    <ParentSection>
      <Section>
        <Title>{'Connect'}</Title>
      </Section>
      
      <ContentSection>
        <Link href="mailto:marissa.biesecker@gmail.com" className="fa fa-envelope">
          <LinkInfo>{'marissa.biesecker@gmail.com'}</LinkInfo>
        </Link>

        <Link href="https://twitter.com/maribies" className="fa fa-twitter">
          <LinkInfo>{'@maribies'}</LinkInfo>
        </Link>
        
        <Link href="https://www.instagram.com/maribies" className="fa fa-instagram">
          <LinkInfo>{'@maribies'}</LinkInfo>
        </Link>

        <Link href="https://github.com/maribies/" className="fa fa-github">
          <LinkInfo>{'@maribies'}</LinkInfo>
        </Link>

        <Link href="https://medium.com/@marissa.biesecker" className="fa fa-medium">
          <LinkInfo>{'@marissa.biesecker'}</LinkInfo>
        </Link>

        <Link href="https://www.linkedin.com/in/marissabiesecker/" className="fa fa-linkedin">
          <LinkInfo>{'marissabiesecker'}</LinkInfo>
        </Link>
      </ContentSection>
    </ParentSection>
  );
}
