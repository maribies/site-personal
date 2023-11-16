import { ThemeProvider } from 'styled-components'
import { Footer } from '../Components/Footer'
import { ExperienceSection } from '../Components/ExperienceSection'
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

      <animated.div style={loadingProps}>
        <ExperienceSection />

        <Footer />
      </ animated.div>
    </>}
  </ThemeProvider>
)}

export default Experiences
