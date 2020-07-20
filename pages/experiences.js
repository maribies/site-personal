import { ThemeProvider } from 'styled-components'
import React from 'react'
import { Footer } from '../Components/Footer'
import { ExperienceSection } from '../Components/ExperienceSection'
import { NavigationBar } from '../Components/NavigationBar'
import { NextHead } from '../Components/Head'
import theme from '../Styles/themes'

const Experiences = () => (
  <ThemeProvider theme={theme}>
    <>
      <NextHead />

      <NavigationBar />

      <ExperienceSection />

      <Footer />
    </>
  </ThemeProvider>
)

export default Experiences
