import React, { FC } from 'react'
import HowToUseMap from '../co-map/components/HowToUseMap'
import AmbassadorProgram from '../co-map/components/AmbassadorProgram'
import WhyAmbassador from '../co-map/components/WhyAmbassador'

const LandingComponents: FC = () => (
  <div className='container'>
    <HowToUseMap/>
    <AmbassadorProgram/>
    <WhyAmbassador/>
  </div>
)

export default LandingComponents