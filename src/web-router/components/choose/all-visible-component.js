import React from 'react'
import { No } from '../../../gel-react/iconography'
import { Pica } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let AllVisible = () => {
  return <Layout layouts='flush'>
    <LayoutItem gels='1/12' className='break' />
    <LayoutItem gels='10/12' className='all-visible'>
      <Pica>All Visible</Pica>
    </LayoutItem>
    <LayoutItem className='checkbox' gels='1/12'>
      <No />
    </LayoutItem>
  </Layout>
}

export default AllVisible
