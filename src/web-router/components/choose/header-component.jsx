/* import React, { PropTypes } from 'react'
import { LayoutItem, Layout } from '../../../gel-react/grid'
import { Pica } from '../../../gel-react/typography'
import AllVisible from './all-visible-component'

let Header = ({state, actions, expanded}) => {
  return <Layout gels='1/1' layouts='flush' className='choose-header'>
    <LayoutItem gels='1/4' className='column-title-left'>
      <Pica className='label'>Senders</Pica>
    </LayoutItem>
    <LayoutItem gels='1/4' className='all-visible-left'>
      <AllVisible
        state={state}
        type='senders'
        expanded={expanded}
        actions={actions} />
    </LayoutItem>
    <LayoutItem gels='1/4' className='column-title-right'>
      <Pica className='label'>Receivers</Pica>
    </LayoutItem>
    <LayoutItem gels='1/4' className='all-visible-right'>
      <AllVisible
        state={state}
        type='receivers'
        expanded={expanded}
        actions={actions} />
    </LayoutItem>
  </Layout>
}

Header.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Header */

import React from 'react'
import { LayoutItem, Layout } from '../../../gel-react/grid'
import { Pica } from '../../../gel-react/typography'

let Header = () => {
  return <Layout className='header' gels='1/1' layouts='flush'>
    <LayoutItem gels='1/2' className='column-title'>
      <Pica>Senders</Pica>
    </LayoutItem>
    <LayoutItem gels='1/2' className='column-title'>
      <Pica>Receivers</Pica>
    </LayoutItem>
  </Layout>
}

export default Header
