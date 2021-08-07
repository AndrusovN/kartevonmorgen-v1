import React, { FC } from 'react'
import HowToUseMap from '../components/co-map/HowToUseMap'
import AmbassadorProgram from '../components/co-map/AmbassadorProgram'
import WhyAmbassador from '../components/co-map/WhyAmbassador'

const LandingComponents: FC = () => (
  <div className='container'>
    <HowToUseMap/>
    <AmbassadorProgram/>
    <WhyAmbassador/>
  </div>
)

export default LandingComponents