import { Section as BaseSection } from '../Section'
import { HomeNavigationBar } from '../NavigationBar/HomeNavigationBar'
import { Alert } from '../Alert'
import React from 'react'
import styled from 'styled-components'

const Section = styled(BaseSection)`
  flex-direction: column;
`

export const MainSection = () => {
  return (
    <Section column>
      <HomeNavigationBar />

      <Alert isVisible top='70%' left='5%' />
    </Section>
  )
}
