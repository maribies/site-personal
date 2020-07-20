import { ThemeProvider } from 'styled-components'
import { Footer } from '../Components/Footer'
import { ExperienceSection } from '../Components/ExperienceSection'
import { NavigationBar } from '../Components/NavigationBar'
import { NextHead } from '../Components/Head'
import theme from '../Styles/themes'
import React, { useState } from 'react'
import {  animated } from 'react-spring'
import { basicLoading } from '../Components/Loading'

const Experiences = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return (
  <ThemeProvider theme={theme}>
    {!!status && <>
      <NextHead />

      <animated.div style={loadingProps}>
        <NavigationBar />

        <ExperienceSection />

        <Footer />
      </ animated.div>
    </>}
  </ThemeProvider>
)}

export default Experiences
