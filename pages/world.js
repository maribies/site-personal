import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { animated } from 'react-spring'

import theme from '../Styles/themes'
import { basicLoading, Footer, Map } from '../Components'

const World = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return (
  <ThemeProvider theme={theme}>
    {!!status && <>
      <animated.div style={loadingProps}>
        <Map />
        <Footer />
      </ animated.div>
    </>}
  </ThemeProvider>
)}

export default World