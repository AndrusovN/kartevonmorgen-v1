import { FC } from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'
import data from '../utils/co-map/partners.json'

require('../styles/globals.less')

const Partners: FC = () => {
  return (
    <div className={'partners_main_block'}>
      <h1>
        Партнёры
      </h1>
      <div className={'partners_container'}>
        {data.map(p => {
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