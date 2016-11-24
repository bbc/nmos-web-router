import React from 'react'
import {Link} from 'react-router'
import { Layout, LayoutItem } from '../../gel-react/grid'
import { Trafalgar, GreatPrimer } from '../../gel-react/typography'

let Welcome = () => {
  return <Layout layouts='center' className='welcome'>
    <LayoutItem gels='9/10'>
      <Trafalgar>Welcome to the IP Studio site</Trafalgar>
    </LayoutItem>
    <LayoutItem gels='9/10'>
      <GreatPrimer>You will find all the utilities to interact and observe IP Studio</GreatPrimer>
    </LayoutItem>
    <LayoutItem gels='9/10'>
      <Link
        style={{
          width: '100%',
          textAlign: 'center'
        }}
        to='/web-router'
        className='button contents'>
        WEB ROUTER
      </Link>
    </LayoutItem>
  </Layout>
}

export default Welcome
