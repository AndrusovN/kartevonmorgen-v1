import { FC } from 'react'
import AmbassadorCommunity from '../components/co-map/AmbassadorCommunity'
import AmbassadorForm from '../components/co-map/AmbassadorForm'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import Slider from '../components/co-map/Slider'
import { BASICS_ENDPOINTS } from '../api/endpoints/BasicsEndpoints'

const Ambassadors: FC = () => {
  return (
    <>
      <HomeHeaderCoMap/>

      <Slider API_URL={BASICS_ENDPOINTS.co_map.getAmbassadorCard()}/>

      <AmbassadorCommunity/>
      <AmbassadorForm/>
    </>
  )
}

export default Ambassadors
