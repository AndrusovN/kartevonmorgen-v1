import React, { FC } from 'react'
import { Col, Input, Layout, Row, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'


const { Content } = Layout
const { Title } = Typography

const MapBannerCoMap: FC = () => {
  return (<Content>
      <div
        id="main-cover"
        style={{
          height: 'calc(100vh - 68px)',
          width: '100%',
          backgroundColor: 'indianRed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
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
            <Input
              style={{ width: '250px', padding: '8px' }}
              placeholder="инклюзивная мастерская"
              prefix={<SearchOutlined/>}
              className="site-form-item-icon"
            />
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default MapBannerCoMap