import { NextHead } from '../Components/Head'
import { BackgroundGradient } from '../Components/Background'
import { MainSection } from '../Components/MainSection'
import { AboutSection } from '../Components/AboutSection'
import { FacetsSection } from '../Components/FacetsSection'
import { ConnectSection } from '../Components/ConnectSection'
import { LogoMenu } from '../Components/LogoMenu'
import { Footer } from '../Components/Footer'
import { ThemeProvider } from 'styled-components'
import React from 'react'

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

const Home = () => (
  <ThemeProvider theme={theme}>
    <>
      <NextHead />

      <BackgroundGradient />

      <MainSection />

      <AboutSection />

      <FacetsSection />

      <ConnectSection />

      <LogoMenu position='fixed' />

      <Footer />
    </>
  </ThemeProvider>
)

export default Home
