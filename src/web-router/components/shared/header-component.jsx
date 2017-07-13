import React from 'react'
import { LayoutItem, Layout } from '../../../gel-react/grid'
import { Pica } from '../../../gel-react/typography'

let Header = () => {
  return <Layout gels='1/1' layouts='flush'>
    <LayoutItem gels='4/10' className='column-title'>
      <Pica>Senders</Pica>
    </LayoutItem>
    <LayoutItem gels='2/10' />
    <LayoutItem gels='4/10' className='column-title'>
      <Pica>Receivers</Pica>
    </LayoutItem>
  </Layout>
}

export default Header
