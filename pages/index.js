import { NextHead } from '../Components/Head'
import { NavigationBar } from '../Components/NavigationBar'
import { MainSection } from '../Components/MainSection'
import { AboutSection } from '../Components/AboutSection'
import { FacetsSection } from '../Components/FacetsSection'
import { ConnectSection } from '../Components/ConnectSection'
import { LogoMenu } from '../Components/LogoMenu'
import { Footer } from '../Components/Footer'
import { ThemeProvider } from 'styled-components'
import React, { useState, useEffect } from 'react'
import theme from '../Styles/themes'
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const [contentStatus, displayContent] = React.useState(false);

  const loadingProps = useSpring({
    opacity: contentStatus ? 1 : 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      displayContent(true)
    }, 500)
    return () => clearTimeout(timer)
  })
  
  return(
  <ThemeProvider theme={theme}>
    {!!contentStatus && <>
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
