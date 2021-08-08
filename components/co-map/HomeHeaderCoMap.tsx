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
        width: '100vw',
        padding: 0,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Row
        justify="space-between"
        style={{height: '100%'}}
      >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '10em',
              height: '68px',
              marginRight: '20px'
            }}
          >
            <Link href={'/'}><Image
              src="/assets/img/Comap.jpg"
              alt="logo"
              layout="intrinsic"
              width={170}
              height={60}
            /></Link>

          </div>
          <Menu
            mode="horizontal"
          >
            <Menu.Item><Link href={'/maps/main'}>Карта</Link></Menu.Item>
            <Menu.Item><Link href={'/ambassadors'}>Амбассадорам</Link></Menu.Item>
          </Menu>
      </Row>
    </Header>
  )
}

export default HomeHeader
