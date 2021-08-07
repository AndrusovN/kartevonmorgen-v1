import React, {FC} from 'react'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import { Layout } from 'antd'
import MapBannerCoMap from '../components/co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/co-map/TeamCoMap'

const Main: FC = () => {

  return (
    <div>
      <Layout>
        <HomeHeaderCoMap/>
        <MapBannerCoMap/>
        <TeamCoMap/>
      </Layout>
    </div>
  )
}

export default Main