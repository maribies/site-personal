import { ThemeProvider } from 'styled-components'
import React from 'react'
import { Footer } from '../Components/Footer'
import { ExperienceSection } from '../Components/ExperienceSection'

// rem base is 16px.
const theme = {
  flexboxgrid: {
    breakpoints: {
      xl: 90, // 1440px
      lg: 75, // 1200px
      md: 48, // 768px
      sm: 25.875, // 414px
      xs: 0
    },
    container: {
      xl: 105, // 1680px
      lg: 90, // 1440px
      md: 52.125, // 834px
      sm: 25.875, // 414px
      shm: 23.4375, // 375px
      xs: 22.5 // 360px
    },
    gutterWidth: 1.5 // 24px
  }
}

const Experiences = () => (
  <ThemeProvider theme={theme}>
    <>
      <ExperienceSection />

      <Footer />
    </>
  </ThemeProvider>
)

export default Experiences
