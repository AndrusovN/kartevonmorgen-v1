import React, { FC } from 'react'
import HomeHeaderCoMap from '../components/co-map/HomeHeaderCoMap'
import MapBannerCoMap from '../components/co-map/MapBannerCoMap'
import { TeamCoMap } from '../components/co-map/TeamCoMap'
import Partners from '../components/co-map/Partners'
import HowToUseMap from '../components/co-map/HowToUseMap'
import HeaderCardContainer from '../components/co-map/HeaderCardContainer'
import ChooseDirectionSearch from '../components/co-map/ChooseDirectionSearch'
import { useRouter } from 'next/router'

const Main: FC = () => {
  const router = useRouter()
  const { moveToId } = router.query

  if (process.browser) {
    if (moveToId && typeof moveToId === 'string') {
      let yToScroll = 0
        let element = document.getElementById(moveToId)
        if (element) {
          yToScroll = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top
      }

      window.scrollTo({top: yToScroll, behavior: "smooth"})
      router.replace(router.pathname)
    }
  }

  return (
    <>
      <HomeHeaderCoMap />
      <MapBannerCoMap />
      <HeaderCardContainer />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={'bounding_element'}>
          <ChooseDirectionSearch />
          <HowToUseMap />
          <TeamCoMap />
          <Partners />
        </div>
      </div>
    </>
  )
}

export default Main