import React from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { LongPrimer } from '../../../gel-react/typography'

let Header = () => {
  return <LayoutItem gels='1/1'>
    <LayoutItem gels='1/3' className='column-title'>
      <LongPrimer>Senders</LongPrimer>
    </LayoutItem>
    <LayoutItem gels='1/3' />
    <LayoutItem gels='1/3' className='column-title'>
      <LongPrimer>Receivers</LongPrimer>
    </LayoutItem>
  </LayoutItem>
}

export default Header
