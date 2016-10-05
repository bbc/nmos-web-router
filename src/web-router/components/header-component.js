import React from 'react'

import Button from '../../components/button-component'
import { Layout, LayoutItem } from '../../gel-react/grid'
import { Trafalgar } from '../../gel-react/typography'
import { Fullscreen, ExitFullscreen } from '../../gel-react/iconography'

let Header = () => {
  return <Layout className='header' layouts='flush' gels='1/1'>
    <Layout gels={['1/1', '1/3@l']} layouts='center'>
      <LayoutItem className='title'>
        <Trafalgar>Web Router</Trafalgar>
      </LayoutItem>
    </Layout>
    <Layout gels={['1/1', '2/3@l']} layouts='center'>
      <LayoutItem className='split' gels={['1/2', '1/3@l']}>
        <Button
          fill
          to={'/web-router/connections/confirmation'}
          name='layout'
          label='split'
          icon={<ExitFullscreen />}
          />
      </LayoutItem>
      <LayoutItem gels={['1/2', '1/3@l']}>
        <Button
          fill
          to='/web-router/connections'
          name='layout'
          label='connections'
          icon={<Fullscreen />}
          />
      </LayoutItem>
      <LayoutItem gels={['1/2', '1/3@l']}>
        <Button
          fill
          to='/web-router/confirmation'
          label='confirmation'
          name='layout'
          icon={<Fullscreen />}
          />
      </LayoutItem>
    </Layout>
  </Layout>
}

export default Header
