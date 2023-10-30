import { NextHead } from '../Components/Head'
import styled, { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import theme from '../Styles/themes'
import {  animated } from 'react-spring'
import { basicLoading } from '../Components/Loading'

import { Hero } from '../Components'

import { NavigationBar } from '../Components/NavigationBar'
import { MainSection } from '../Components/MainSection'
import { AboutSection } from '../Components/AboutSection'
import { FacetsSection } from '../Components/FacetsSection'
import { ConnectSection } from '../Components/ConnectSection'
import { LogoMenu } from '../Components/LogoMenu'
import { Footer } from '../Components/Footer'

const Layout = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`

const Home = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return(
  <ThemeProvider theme={theme}>
    {!!status && <>
      <NextHead />

      <Layout>
        <animated.div style={loadingProps}>
          <Hero />
          <ConnectSection />
          <Footer />
        </ animated.div>
      </Layout>
    </>}
  </ThemeProvider>
)}

export default Home
