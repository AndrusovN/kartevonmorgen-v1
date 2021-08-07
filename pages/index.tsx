import React, {FC} from 'react'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import { Layout } from 'antd'
import MapBannerCoMap from '../components/co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/co-map/TeamCoMap'
import Partners from '../components/co-map/Partners'
import HowToUseMap from '../components/co-map/HowToUseMap'

const Main: FC = () => {

  return (
    <>
        <HomeHeaderCoMap/>
        <MapBannerCoMap/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className={"bounding_element"}>
            <HowToUseMap/>
            <TeamCoMap/>
            <Partners/>
          </div>
        </div>
    </>
  )
}

export default Main