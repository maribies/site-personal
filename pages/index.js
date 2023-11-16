import styled, { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import theme from '../Styles/themes'
import {  animated } from 'react-spring'
import { basicLoading } from '../Components/Loading'

import { Hero, Info, Work } from '../Components'
import { ConnectSection } from '../Components/ConnectSection'
import { Footer } from '../Components/Footer'

const Layout = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 48rem) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const Home = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return(
  <ThemeProvider theme={theme}>
    {!!status && <>
      <Layout>
        <animated.div style={loadingProps}>
          <Hero />
          <Info />
          <Work />
          <ConnectSection />
          <Footer />
        </ animated.div>
      </Layout>
    </>}
  </ThemeProvider>
)}

export default Home
