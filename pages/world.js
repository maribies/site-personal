import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { animated } from 'react-spring'

import { basicLoading, Footer, Map, Link } from '../Components'
import { H3Outline, H4 } from '../Components/Text'

import theme from '../Styles/themes'
import { getColorValue } from '../Components/CssHelpers'


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

const NavLink = styled(Link)`
  justify-content: right;
  border-bottom: ${({ $color }) => `1px solid ${getColorValue($color)}`};
  margin-bottom: 1rem;

  @media (min-width: 48rem) {
    border-bottom: none;
    &:hover {
      border-bottom: ${({ $color }) => `1px solid ${getColorValue($color)}`};
    }
  }
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
          <NavLink href="/" $color="purple">Home</NavLink>
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