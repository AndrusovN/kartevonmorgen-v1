import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getElementById } from 'domutils'


function HeaderCardContainer() {

  const scrollToMyRef = (ref) => {
    window.scrollTo(0, ref)
  }

  const router = useRouter()
  let yToScroll = 0
  
  if(process.browser) {
    let howTo = document.getElementById("HowToUseMap")
    yToScroll = howTo.getBoundingClientRect().top
  }

  return (
    <div id={'header-card-container'}>
      <HeaderCard title={'Каждому'} text={'Найдите места, где люди создают устойчивое будущее'}
                  onClick={() => scrollToMyRef(yToScroll)} />
      <HeaderCard title={'Амбассадорам'}
                  text={'Станьте частью глобального движения в роли локального автора карты co-map.ru'}
                  onClick={() => {
                    router.replace(
                      {
                        pathname: '/ambassadors',
                      })
                  }} />

      <HeaderCard title={'Лидерам изменений'} link={'/test.pdf'}
                  text={'Продвигайте свои проекты среди ответственной релеувантной аудитории'} onClick={() => {}} />

      <HeaderCard title={'Партнерам'} link={'/test.pdf'}
                  text={'Изучайте и поддерживайте социальные инициативы'} onClick={() => {}} />
    </div>
  )
}

interface HeaderCardProps {
  title: string
  text: string
  onClick: () => void
  link? : string
}

function HeaderCard(props: HeaderCardProps) {

  return (
    <div id={'header-card'}>
      <span className={'title'}>{props.title}</span>
      <span className={'text'}>{props.text}</span>
      { props.link ?
        <Button className={'button'} onClick={props.onClick}>
          <Link href={props.link} passHref>
            <a target="_blank" rel="noreferrer" style={{ outline: 'none', color: 'white' }}>
              Подробнее
            </a>
          </Link>
        </Button> :
        <Button className={'button'} onClick={props.onClick}>
              Подробнее
        </Button>
      }


    </div>
  )
}

export default HeaderCardContainer
