import { FC } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { updateRoutingQuery } from '../utils/utils'
import { AimOutlined } from '@ant-design/icons'
import { createSlugPathFromQueryAndRemoveSlug } from '../utils/slug'
import { getCurrentPosition } from '../utils/geolocation'



export const setQueryParamsToCurrentLocation = (router) => async () => {
  const { query } = router

  try {
    const currentPosition = await getCurrentPosition()
    const paramsToUpdate = {
      lat: currentPosition.coords.latitude.toFixed(4),
      lng: currentPosition.coords.longitude.toFixed(4),
    }

    const newQueryParams = updateRoutingQuery(query, paramsToUpdate)
    const [newPath, newQueryWithoutSlug] = createSlugPathFromQueryAndRemoveSlug(newQueryParams)


    router.replace(
      {
        pathname: `/maps/${newPath}`,
        query: newQueryWithoutSlug,
      },
      undefined,
      { shallow: true },
    )
  } catch (e) {
    console.error('failed to get current location: ', e)
  }
}


const LocateMe: FC = () => {
  const router = useRouter()

  return (
    <Button
      type="primary"
      icon={<AimOutlined/>}
      onClick={setQueryParamsToCurrentLocation(router)}
    />
  )
}


export default LocateMe