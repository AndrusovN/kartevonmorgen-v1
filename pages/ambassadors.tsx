import React, { FC } from 'react'
import AmbassadorCommunity from '../components/co-map/AmbassadorCommunity'
import AmbassadorForm from '../components/co-map/AmbassadorForm'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import Slider from '../components/co-map/Slider'
import { BASICS_ENDPOINTS } from '../api/endpoints/BasicsEndpoints'
import AmbassadorProgram from '../components/co-map/AmbassadorProgram'
import WhyAmbassador from '../components/co-map/WhyAmbassador'

const Ambassadors: FC = () => {
  return (
    <>
      <HomeHeaderCoMap/>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={"bounding_element"}>
          <Slider API_URL={BASICS_ENDPOINTS.co_map.getAmbassadorCard()}/>

          <AmbassadorProgram/>
          <WhyAmbassador/>

          <AmbassadorCommunity/>
          <AmbassadorForm/>
        </div>
      </div>
    </>
  )
}

export default Ambassadors
