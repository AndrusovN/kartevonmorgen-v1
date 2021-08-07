import Link from 'next/link'
import { useRouter } from 'next/router'
import { setQueryParamsToCurrentLocation } from '../LocateMe'

function ChooseDirectionSearch() {

  const router = useRouter()

  const redirectToCurrentTags = async (arrayOfTags: Array<string>) => {
    return setQueryParamsToCurrentLocation(router)
  }

  return (
    <div id={'choose-direction-container'}>
      <div className={'co_map_title'}>Выбрать направление поиска</div>
      <div className={'item-container'}>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Сохранение окружающей среды'} onClick={() => {redirectToCurrentTags([]).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Забота о людях и их здоровье'} onClick={() => {redirectToCurrentTags([]).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Культура и креативные индустрии'} onClick={() => {redirectToCurrentTags([]).then(r => console.log(r))}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Развитие сообществ и территорий'} onClick={() => {redirectToCurrentTags([])}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Образование и развитие человека'} onClick={() => {redirectToCurrentTags([])}}/>
        <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={'Инфраструктура поддержки'} onClick={() => {redirectToCurrentTags([])}}/>
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
