import React, { FC } from 'react'
import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import './../../styles/co_map.less'
import Slider from './Slider'
import { BASICS_ENDPOINTS } from '../../api/endpoints/BasicsEndpoints'

const { Title, Paragraph } = Typography

export const TeamCoMap: FC = () => {
  return (
    <div style={{ paddingTop: '30px' }} id={"team_co_map"}>
      <Title
        level={1}
        className={'co_map_title'}
        style={{
          textAlign: 'center',
        }}
      >
        <span>Карта создана международной командой</span>
      </Title>
      <Row
        justify="center"
        align="middle"
      >
        <Col>
          <Image
            src="/assets/img/undraw_mobile_testing.png"
            layout="intrinsic"
            width={370}
            height={400}
            alt="testing mobile"
          />
        </Col>
        <Col sm={24} md={8} style={{ marginLeft: '100px' }}>
          <Paragraph
            strong

          >
            <span>
              co-map.ru - это карта устойчивых практик на территории России,
              созданная для того чтобы каждый день активистмог создать карту
              для своих проектов и событий и привлечь новых участников
            </span>
          </Paragraph>

          <Paragraph
            strong
          >
            <span>Карта разрабатона на основе открытого программного кода по лицензии...</span>
          </Paragraph>
          <Paragraph
            strong

          >
            <span>Проект co-map стартовал в 2021 г. в рамках совместной работы некокомерческих организаций из России
            (Центр Соль, <a href="www.s-ol.ru">www.s-ol.ru</a>). и Германии (wechange.de), нацеленных на развитие практик устойчигово развития
            </span>
          </Paragraph>
          <Paragraph
            strong
          >
            <span>Развитие проекта осуществляется силами региональных волонтеров (амбассадоров) при поддержке ...</span>
          </Paragraph>

        </Col>

      </Row>

      <Slider API_URL={BASICS_ENDPOINTS.co_map.getCollaborators()}/>

    </div>
  )
}
