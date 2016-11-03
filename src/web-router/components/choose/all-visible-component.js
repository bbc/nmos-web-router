import React from 'react'
import { No } from '../../../gel-react/iconography'
import { LongPrimer } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let Visible = () => {
  return <Layout layouts='flush'>
    <LayoutItem gels='11/12' className='all-visible'>
      <LongPrimer>All Visible</LongPrimer>
    </LayoutItem>
    <LayoutItem className='checkbox' gels='1/12'>
      <No />
    </LayoutItem>
  </Layout>
}

let AllVisible = () => {
  return <Layout>
    <LayoutItem className='all-visible-left' gels='1/2'>
      <Visible />
    </LayoutItem>
    <LayoutItem className='all-visible-right' gels='1/2'>
      <Visible />
    </LayoutItem>
  </Layout>
}

export default AllVisible
