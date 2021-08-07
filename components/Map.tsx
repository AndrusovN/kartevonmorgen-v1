import { FC, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import produce from 'immer'
import toString from 'lodash/toString'
import { Icon, LatLng, latLng, Point } from 'leaflet'
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import { RootState } from '../slices'
import searchResultSelector from '../selectors/searchResults'
import Category, { Categories, CategoryToNameMapper } from '../dtos/Categories'
import { SearchResult, SearchResults } from '../dtos/SearchResult'
import { convertQueryParamToArray, convertQueryParamToFloat } from '../utils/utils'
import { mapTypeIdToPluralEntityName, SlugVerb } from '../utils/types'
import { createSlugPathFromQueryAndRemoveSlug, getRootSlugActionFromQuery } from '../utils/slug'
import MapEventsListener from './MapEventsListener'
import MapLocationInitializer from './MapLocationInitializer'
import SearchEventsListener from './SearchEventsListener'
import 'leaflet/dist/leaflet.css'
import AddEntryButton from './AddEntryButton'
import BurgerMenu from './BurgerMenu'
import MapQueryParamsListener from './MapQueryParamsListener'
import LocateMe from './LocateMe'
import '../styles/globals.less'
//
// const iconLinksByTag = {
//   ecology: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/fairer-Handel-neu.svg',
//   education: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Bildung-und-Beratung-neu.svg',
//   social: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Kultur-und-Begegnung-neu.svg',
//   culture: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/secondhandverleihen-verschenken-neu.svg',
//   infrastructure: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Initiativen-Netzwerke-neu.svg',
//   communities: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Gemeinschaftsgarten-neu.svg'
// }

const iconLinksByTag = {
  nachbar: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/fairer-Handel-neu.svg',
  sozial: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Bildung-und-Beratung-neu.svg',
  fahrradverleih: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Kultur-und-Begegnung-neu.svg',
  exkursionen: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/secondhandverleihen-verschenken-neu.svg',
  bio: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Initiativen-Netzwerke-neu.svg',
  umweltbildung: 'https://blog.vonmorgen.org/wp-content/uploads/2021/08/Gemeinschaftsgarten-neu.svg'
}

const icons = {
  [Category.INITIATIVE]: 'initiative',
  [Category.EVENT]: 'event',
  [Category.COMPANY]: 'company',
  [Category.UNKNOWN]: 'unknown',
}


// memoize icons to prevent object creations
const getIcon = (types: Categories, tags?: any) => {
  console.log('TAGS', tags)

  // the reason we define types as array is because backend sends us an array of categories
  // and we won't ever know if in the feature we'll need to use the whole array or not
  const typeId = types[0]
  const icon = icons[typeId]
  console.log('icon', icon)
  const iconUrl = iconLinksByTag[Object.keys(iconLinksByTag).find((el: string) => tags.some((e: string)=> e === el))]
  const typeName = CategoryToNameMapper[typeId]
  // if (!icon) {
  //   icons[typeId] = new Icon({
  //     iconUrl: 'https://freesvg.org/img/mono-licq.png',
  //     iconSize: new Point(35, 35),
  //     shadowUrl: `/projects/main/pins/balloon_${typeName}.svg`,
  //     shadowSize: [68, 95],
  //     shadowAnchor: [37, 45],
  //   })
  //   return icons[typeId]
  // }
  return new Icon({
    iconUrl: iconUrl || `none`,
    iconSize: iconUrl ? [30, 30] : [0, 0],
    // iconAnchor: [50, 70],
    shadowUrl: `/projects/main/pins/balloon_${typeName}.svg`,
    shadowSize: [70, 70],
    // shadowAnchor: [0, 0],
    className: 'testClassName',
  })
}

const onClickOnPin = (router: NextRouter, searchResult: SearchResult) => () => {
  const { query } = router
  const rootSlugAction = getRootSlugActionFromQuery(query)
  const { subSlugAction: entitySlugAction } = rootSlugAction

  // if we are in the middle of creating/editing an entity, clicking on pins should do nothing
  if (
    entitySlugAction !== null &&
    entitySlugAction.verb !== SlugVerb.SHOW
  ) {
    return null
  }

  const category = searchResult.categories[0]
  const pluralEntityName = mapTypeIdToPluralEntityName[category]

  const newQueryParams = produce(query, draftState => {
    const { slug } = draftState
    const slugArray = convertQueryParamToArray(slug)

    if (entitySlugAction !== null) {
      slugArray.splice(slugArray.length - 2, 2)
    }

    slugArray.push(pluralEntityName, searchResult.id)
    draftState.slug = slugArray

    // open the sidebar
    draftState.isSidebarOpen = toString(true)
  })

  const [newPath, newQueryWithoutSlug] = createSlugPathFromQueryAndRemoveSlug(newQueryParams)

  router.replace(
    {
      pathname: `/maps/${newPath}`,
      query: newQueryWithoutSlug,
    },
    undefined,
    { shallow: true },
  )
}


export interface MapLocationProps {
  lat: number
  lng: number
  zoom: number
}

const Map: FC = () => {
  const router = useRouter()
  const { query } = router

  const markedPinLatLng: LatLng = latLng(convertQueryParamToFloat(query.pinLat), convertQueryParamToFloat(query.pinLng))
  const showMarkedPin = !!markedPinLatLng.lat && !!markedPinLatLng.lng

  const searchResults: SearchResults = useSelector(
    (state: RootState) => searchResultSelector(state),
  )
  console.log({ searchResults });

  return (
    <MapContainer
      center={[50.826, 10.92]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >

      <MapLocationInitializer/>

      <MapEventsListener/>

      <MapQueryParamsListener/>

      <SearchEventsListener/>

      <div id="map-bottom-right">
        <AddEntryButton/>

        <LocateMe/>
      </div>

      <div id="map-top-right">
        <BurgerMenu/>
      </div>


      <ZoomControl position="bottomright"/>

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        showMarkedPin && (
          <Marker
            position={markedPinLatLng}
            icon={getIcon([Category.UNKNOWN])}
          >
          </Marker>
        )
      }

      {
        searchResults.map((searchResult: SearchResult) => (
          <Marker
            key={`map-marker-${searchResult.id}`}
            position={[searchResult.lat, searchResult.lng]}
            icon={getIcon(searchResult.categories, searchResult.tags)}
            eventHandlers={{
              click: onClickOnPin(router, searchResult),
            }}
          >

          </Marker>
        ))
      }

    </MapContainer>
  )
}


export default Map