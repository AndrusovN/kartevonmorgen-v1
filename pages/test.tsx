import { FC } from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'

require('../styles/globals.less')

const partnersArr = [
  {
    imageURL: '/assets/img/partners_co_map/AIESEC-New-Logo1.png',
    siteURL: 'https://aiesec.org/',
    w: '160', h: '170', alt: 'AIESEC',
  },
  {
    imageURL: '/assets/img/partners_co_map/RED-Moscow-Up-and-Running-DG-3.png',
    siteURL: 'https://impacthub.net/',
    w: '200', h: '80', alt: 'Impact Hub',
  },
  {
    imageURL: '/assets/img/partners_co_map/gladway.jpg',
    siteURL: 'http://www.gladway.ru/',
    w: '500', h: '250', alt: 'Gladway',
  },
  {
    imageURL: '/assets/img/partners_co_map/big-catalog-16212842451.png',
    siteURL: 'https://xn----htbbc4anafbkmm.xn--p1ai/',
    w: '200', h: '100', alt: 'Простое Дело',
  },
]

const Partners: FC = () => {
  return (
    <div className={'partners_main_block'}>
      <h1>
        Партнёры
      </h1>
      <div className={'partners_container'}>
        {partnersArr.map(p => {
          return <div>
            <Link href={p.siteURL}>
              <a>
                <Image
                  width={p.w}
                  height={p.h}
                  src={p.imageURL}
                  alt={p.alt}
                />
              </a>
            </Link>
          </div>
        })}
      </div>
      <Button>
        <p>
          Стать партнёром
        </p>
      </Button>
    </div>
  )
}
export default Partners