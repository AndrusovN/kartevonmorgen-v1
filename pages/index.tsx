import React, {FC} from 'react'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import { Layout } from 'antd'
import MapBannerCoMap from '../components/co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/co-map/TeamCoMap'
import Partners from '../components/co-map/Partners'

const Main: FC = () => {

  return (
    <div>
      <Layout>
        <HomeHeaderCoMap/>
        <MapBannerCoMap/>
        <TeamCoMap/>
        <Partners/>
      </Layout>
    </div>
  )
}

export default Main