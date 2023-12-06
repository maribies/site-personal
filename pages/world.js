import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { animated } from 'react-spring'

import theme from '../Styles/themes'
import { basicLoading, Footer, Map } from '../Components'
import { H3Outline, H4 } from '../Components/Text'

const Layout = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 48rem) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const MapWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
`

const World = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return (
  <ThemeProvider theme={theme}>
    {!!status && <>
      <Layout>
        <animated.div style={loadingProps}>
          <H3Outline>Where in the World?</H3Outline>
          <MapWrapper>
            <Map />
          </MapWrapper>
          <H4>30 Countries and counting</H4>
          <Footer />
        </ animated.div>
      </Layout>
    </>}
  </ThemeProvider>
)}

export default World