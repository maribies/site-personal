import { Footer } from '../Components/Footer'
import { ExperienceSection } from '../Components/ExperienceSection'
import React, { useState } from 'react'
import {  animated } from '@react-spring/web'
import { basicLoading } from '../Components/Loading'

const Experiences = () => {
  const [status, loading] = useState(false)

  const loadingProps = basicLoading(status, loading);

  return (
  <>
    {!!status && <>

      <animated.div style={loadingProps}>
        <ExperienceSection />

        <Footer />
      </ animated.div>
    </>}
  </>
)}

export default Experiences
