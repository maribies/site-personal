import { Section as BaseSection } from '../Section';
import { H1, H3 } from '../Text';
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
  display: flex;
  flex-direction: column;
`;

const FacetSection = styled.button`
  background-color: transparent;
  margin-bottom: 32px;
  border-color: ${getColorValue('grey')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FacetImage = styled.img`
  height: 150px;
  width: 40%;
  border: 2px solid ${getColorValue('grey')};
  margin-top: 54px;
  margin-bottom: 54px;
  margin-left: 32px;
`;

const FacetSectionTitle = styled(H3)`
  padding: 54px 32px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled(H1)`
  text-align: center;
  
`

export const FacetsSection = () => {
  return (
    <ParentSection>
      <ContentSection>
        <FacetSection>
          <FacetImage src={'https://via.placeholder.com/150'} />
          
          <FacetSectionTitle>{'Portfolio, Experiences, and Skills'}</FacetSectionTitle>
        </FacetSection>

        <FacetSection>
          <FacetImage src={'https://via.placeholder.com/150'} />

          <FacetSectionTitle>{'Travel and Photography'}</FacetSectionTitle>
        </FacetSection>

        <FacetSection>
          <FacetImage src={'https://via.placeholder.com/150'} />

          <FacetSectionTitle>{'Grilled Cheese'}</FacetSectionTitle>
        </FacetSection>
      </ContentSection>

      <Section>
        <Title>{'FACETS'}</Title>
      </Section>
    </ParentSection>
  )
}
