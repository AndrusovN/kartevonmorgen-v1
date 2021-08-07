import { FC, useEffect, useState } from 'react'
import { Carousel } from 'antd'
import '../components/co-map/co_map.less'
import { AxiosInstance } from '../api'
import { BASICS_ENDPOINTS } from '../api/endpoints/BasicsEndpoints'
import { Card } from '../components/co-map/Сard'

type CardType = {
  name: string
  img: string
  product: string
  place: string
  description: string
}


const Slider: FC = () => {

  const [card, setCard] = useState([] as CardType[])

  useEffect( () => {
     AxiosInstance.GetRequest(BASICS_ENDPOINTS.getAmbassadorCard()).then(res => {
       console.log(res.data)
       // @ts-ignore
       setCard(res.data)
     })
  }, [])

  console.log(card)

  return (
    <div className='carousel'>
      <Carousel dots={{className: 'dots'}} autoplay>
        {
          card.map((m, i) => <Card
            key={i}
            name={m.name}
            img={m.img}
            product={m.product}
            place={m.place}
            description={m.description}
          />)
        }
      </Carousel>
    </div>
  )
}

export default Slider

