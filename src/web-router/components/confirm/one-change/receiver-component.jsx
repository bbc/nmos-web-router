/*
Mock routable with no interactions, purely to display the staged routing change
*/

import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../../gel-react/grid'
import Routable from '../../../routables/routable-component'

let Receiver = ({receiver, type, available}) => {
  let className = (available) ? 'routables receivers' : 'routables receivers unavailable'
  return <LayoutItem className={className} gels='4/12'>
    <Routable
      id={receiver.id}
      key={receiver.id}
      routable={receiver}
      node
      onNodeRender={function (nodeEl) { }}
      />
  </LayoutItem>
}

Receiver.propTypes = {
  receiver: PropTypes.object.isRequired,
  type: PropTypes.string,
  available: PropTypes.bool.isRequired
}

export default Receiver
