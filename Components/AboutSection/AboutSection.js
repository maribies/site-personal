import { Section as BaseSection } from '../Section';
import { H1, P } from '../Text';
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
`

export const AboutSection = () => {
  return (
    <ParentSection>
      <Section>
        <Title>{'ABOUT'}</Title>
      </Section>
      
      <ContentSection>
        <P>{`This website is meant to be a reflection of me. It is the place for me to express myself and show off my passions.`}</P>
        <P>{`I’ve always been a bit different. Born in the country, moved to the city, and eventually kept moving around the world.`}</P>
        <P>{`I’ve discovered so much more to myself and life, which I’d like to share. I’m finally making a life in which I do what I love and love what I do.`}</P>
        <P>{`It’s also a place for me to connect- in whatever way that may be- travel, design, or even grilled cheese!`}</P>
        <P>{`Keep scrolling to discover more.`}</P>
      </ContentSection>
    </ParentSection>
  );
}
