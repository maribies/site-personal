import { useState } from 'react'
import { animated } from '@react-spring/web'

import { basicLoading, Hero, Info, Work, Layout, ConnectSection } from '../components'

const Home = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return(
  <>
    {!!status && <>
      <Layout>
        <animated.div style={loadingProps}>
          <Hero />
          <Info />
          <Work />
          <ConnectSection />
        </ animated.div>
      </Layout>
    </>}
  </>
)}

export default Home
