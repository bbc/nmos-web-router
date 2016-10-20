import React from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { Pica } from '../../../gel-react/typography'

let Header = () => {
  return <LayoutItem gels='1/1'>
    <LayoutItem gels='1/3' >
      <Pica bold>Senders</Pica>
    </LayoutItem>
    <LayoutItem gels='1/3' />
    <LayoutItem gels='1/3' >
      <Pica bold>Receivers</Pica>
    </LayoutItem>
  </LayoutItem>
}

export default Header
