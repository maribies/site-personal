import { NextHead } from '../Components/Head'
import { NavigationBar } from '../Components/NavigationBar'
import { MainSection } from '../Components/MainSection'
import { AboutSection } from '../Components/AboutSection'
import { FacetsSection } from '../Components/FacetsSection'
import { ConnectSection } from '../Components/ConnectSection'
import { LogoMenu } from '../Components/LogoMenu'
import { Footer } from '../Components/Footer'
import { ThemeProvider } from 'styled-components'
import React, { useState } from 'react'
import theme from '../Styles/themes'
import {  animated } from 'react-spring'
import { basicLoading } from '../Components/Loading'

const Home = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return(
  <ThemeProvider theme={theme}>
    {!!status && <>
      <NextHead />

      <animated.div style={loadingProps}>
        <NavigationBar isHome />

        <MainSection />

        <AboutSection />

        <FacetsSection />

        <ConnectSection />

        <LogoMenu position='fixed' />

        <Footer />
      </ animated.div>
    </>}
  </ThemeProvider>
)}

export default Home
