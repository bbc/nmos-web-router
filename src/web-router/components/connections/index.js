import './connections.css'

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Header from './header-component'
import LeftRoutables from './left-routables-component'
import RightRoutables from './right-routables-component'

let Connections = ({view, actions}) => {
  return <Layout className={'connections'}>
    <Header left={view.leftTitle} right={view.rightTitle} />
    <LayoutItem gels='1/1'>
      <LeftRoutables
        routables={view.routables.left}
        actions={actions}
        />
      <LayoutItem gels='1/3' />
      <RightRoutables
        leftRoutables={view.routables.left}
        rightRoutables={view.routables.right}
        actions={actions}
        />
    </LayoutItem>
  </Layout>
}

Connections.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
