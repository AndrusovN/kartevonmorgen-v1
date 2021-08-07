import React, {FC} from 'react'
import HomeHeaderCoMap from '../components/Co-map/HomeHeaderCoMap'
import { Layout } from 'antd'
import MapBannerCoMap from '../components/Co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/Co-map/TeamCoMap'

const Test: FC = () => {

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

export default Test