import React from 'react'

import Button from '../../components/button-component'
import { Layout, LayoutItem } from '../../gel-react/grid'
import { Trafalgar, GreatPrimer } from '../../gel-react/typography'

let Welcome = () => {
  return <Layout layouts='center' className='welcome'>
    <LayoutItem>
      <Trafalgar>Welcome to the IP Studio site</Trafalgar>
    </LayoutItem>
    <LayoutItem>
      <GreatPrimer>You will find all the utilities to interact and observe IP Studio</GreatPrimer>
    </LayoutItem>
    <LayoutItem>
      <Button fill to='web-router' name='contents' label='web router' />
    </LayoutItem>
  </Layout>
}

export default Welcome
