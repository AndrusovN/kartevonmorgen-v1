import { useRouter } from 'next/router'
import tagsDescriptions from '../../public/co-map/tag_descriptions.json'

function ChooseDirectionSearch() {

  const router = useRouter()

  const redirectToCurrentTags = async (arrayOfTags: Array<string>) => {
    let tagsList = ''
    for (let tagId = 0; tagId < arrayOfTags.length; tagId++) {
      if (tagId > 0) {
        tagsList = tagsList.concat('&')
      }

      tagsList = tagsList.concat(`tag=${arrayOfTags[tagId]}`)
    }


    router.push('/maps/main?isSidebarOpen=true&' + tagsList)
    return
  }

  let arrayDescriptions = Object.entries(tagsDescriptions)

  return (
    <div id={'choose-direction-container'}>
      <div className={'co_map_title'}>Выбрать направление поиска</div>
      <div className={'item-container'}>
        {arrayDescriptions.map(value => {
          return <ItemDirection link={'https://ssr.kartevonmorgen.org/'} text={value[1]} onClick={() => {
            redirectToCurrentTags([value[0]]).then(r => console.log(r))
          }} />
        })}
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
