import React, {FC} from 'react'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import { Layout } from 'antd'
import MapBannerCoMap from '../components/co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/co-map/TeamCoMap'
import Partners from '../components/co-map/Partners'
import HowToUseMap from '../components/co-map/HowToUseMap'
import HeaderCardContainer from '../components/co-map/HeaderCardContainer'
import ChooseDirectionSearch from '../components/co-map/ChooseDirectionSearch'

const Main: FC = () => {

  return (
    <>
        <HomeHeaderCoMap/>
        <MapBannerCoMap/>
        <HeaderCardContainer/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className={"bounding_element"}>
            <ChooseDirectionSearch/>
            <HowToUseMap/>
            <TeamCoMap/>
            <Partners/>
          </div>
        </div>
    </>
  )
}

export default Main