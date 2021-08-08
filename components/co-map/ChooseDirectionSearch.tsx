import Link from 'next/link'
import { useRouter } from 'next/router'
import { setQueryParamsToCurrentLocation } from '../LocateMe'
import { createSlugPathFromQueryAndRemoveSlug } from '../../utils/slug'

function ChooseDirectionSearch() {

  const router = useRouter()

  const redirectToCurrentTags = async (arrayOfTags: Array<string>) => {
    let tagsList = ""
    for (let tagId = 0; tagId < arrayOfTags.length; tagId++) {
      if (tagId > 0) {
        tagsList = tagsList.concat("&")
      }

      tagsList = tagsList.concat(`tag=${arrayOfTags[tagId]}`)
    }


    router.push("/maps/main?isSidebarOpen=true&" + tagsList)
    return
  }

  return (
    <div id={'choose-direction-container'}>
      <div className={'co_map_title'}>Выбрать направление поиска</div>
      <div className={'item-container'}>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Сохранение окружающей среды'} onClick={() => {redirectToCurrentTags(['environment']).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Забота о людях и их здоровье'} onClick={() => {redirectToCurrentTags(['healthcare']).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Культура и креативные индустрии'} onClick={() => {redirectToCurrentTags(['creativity']).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Развитие сообществ и территорий'} onClick={() => {redirectToCurrentTags(['society'])}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Образование и развитие человека'} onClick={() => {redirectToCurrentTags(['education'])}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Инфраструктура поддержки'} onClick={() => {redirectToCurrentTags(['help'])}}/>
      </div>
    </div>
  )
}

export default ChooseDirectionSearch

interface ItemDirectionProps {
  text: string
  link: string
  onClick: () => void
}


function ItemDirection(props: ItemDirectionProps) {
  return (
      <div className={'item-direction co_map_text noselect'} onClick={props.onClick}>
        {props.text}
      </div>
  )
}
