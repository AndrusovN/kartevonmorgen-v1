import React from 'react'
import Image from 'next/image'
import { Col, Layout, Menu, Row } from 'antd'
import Link from 'next/link'

const HomeHeader = () => {
  const { Header } = Layout
  return (
    <Header
      style={{
        boxShadow: '0 2px 8px #f0f1f2',
        backgroundColor: 'white',
        height: 68,
      }}
    >
      <Row
        justify="space-between"
      >
        <Col
          xs={2}
          sm={4}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Image
              src="/assets/img/Comap.jpg"
              alt="logo"
              layout="intrinsic"
              width={170}
              height={60}
            />
          </div>
        </Col>

        <Col>
          <Menu
            mode="horizontal"
          >
            <Menu.Item><Link href={'/maps/main'}>Карта</Link></Menu.Item>
            <Menu.Item><Link href={'/ambassadors'}>Амбассадорам</Link></Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default HomeHeader
