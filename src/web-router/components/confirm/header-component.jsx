import React from 'react'
import { LayoutItem, Layout } from '../../../gel-react/grid'
import { Pica } from '../../../gel-react/typography'

let Header = () => {
  return <Layout gels='1/1' layouts='flush' className='header'>
    <LayoutItem gels='4/12' className='column-title'>
      <Pica>Senders</Pica>
    </LayoutItem>
    <LayoutItem className='filler-block' />
    <LayoutItem gels='4/12' className='column-title'>
      <Pica>Receivers</Pica>
    </LayoutItem>
  </Layout>
}

export default Header
