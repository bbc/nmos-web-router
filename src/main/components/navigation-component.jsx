import React from 'react'
import { Link } from 'react-router'
import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'

let Navigation = () => {
  return <div>
    <div className='navigation-background' />
    <Layout className='navigation' layouts='flush'>
      <LayoutItem>
        <Link
          to='/'>
          <Logo />
        </Link>
      </LayoutItem>
    </Layout>
  < /div>
}

export default Navigation
