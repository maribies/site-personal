import { useState } from 'react'
import {  animated } from '@react-spring/web'
import { basicLoading, ExperienceSection, Layout } from '../components'

const Experiences = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return (
    <>
      {!!status && 
      <Layout>
        <animated.div style={loadingProps}>
          <ExperienceSection />
        </ animated.div>
      </Layout>
      }
   </>
  )
}

export default Experiences
