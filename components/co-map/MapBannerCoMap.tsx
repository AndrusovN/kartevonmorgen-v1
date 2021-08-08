import React, { FC, MouseEvent } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { NextRouter, useRouter } from 'next/router'
import HomeCitySearchCoMap from './HomeCitySearchCoMap'


const { Content } = Layout
const { Title } = Typography

const openMapByClickingOnTheBackground = (router: NextRouter) => (e: MouseEvent<HTMLDivElement>) => {
  if (e.currentTarget === e.target) {
    router.push('/maps/main')
  }
}

const MapBannerCoMap: FC = () => {
  const router = useRouter()
  return (<Content>
      <div
        id='main-cover'
        style={{
          height: 'calc(100vh - 68px)',
          width: '100%',
          backgroundColor: 'indianRed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={openMapByClickingOnTheBackground(router)}
      >
        <Row style={{ marginBottom: '100px' }}>
          <Col xs={24} style={{ textAlign: 'center' }}>
            <Title
              level={1}
              style={{
                color: 'white',
              }}
            >
              <span>Карта устойчивых проектов России</span>
            </Title>
            <Title
              level={5}
              style={{
                color: 'white',
                margin: '20px 0px',
                padding: '0px',
              }}
            >
              <span>c открытыми данными и открытым исходным кодом</span>
            </Title>

          </Col>
          <Col xs={24} style={{ textAlign: 'center' }}>
            {/*<Input*/}
            {/*  style={{ width: '250px', padding: '8px' }}*/}
            {/*  placeholder='инклюзивная мастерская'*/}
            {/*  prefix={<SearchOutlined />}*/}
            {/*  className='site-form-item-icon'*/}
            {/*/>*/}
            <HomeCitySearchCoMap />
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default MapBannerCoMap