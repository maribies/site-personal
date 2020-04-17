import { NextHead } from '../Components/Head'
import { Background } from '../Components/Background'
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
      lg: 75, // 1200px
      md: 62, // 992px
      sm: 48, // 768px
      xs: 0
    },
    container: {
      xl: 106.25, // 1700px
      lg: 69.25, // 1108px
      md: 62, // 992px
      sm: 48, // 768px
      xs: 25 // 400px
    },
    gutterWidth: 1.875
  }
}

const Index = () => (
  <ThemeProvider theme={theme}>
    <>
      <NextHead />

      <Background />

      <MainSection />

      <AboutSection />

      <FacetsSection />

      <ConnectSection />

      <LogoMenu position='fixed' />

      <Footer />
    </>
  </ThemeProvider>
)

export default Index
