/*
Mock routable with no interactions, purely to display the staged routing change
*/

import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../../gel-react/grid'
import Routable from '../../../routables/routable-component'

let Sender = ({sender, type, available}) => {
  let className = (available) ? 'routables senders' : 'routables senders unavailable'
  return <LayoutItem className={className} gels='4/12'>{
    <Routable
      id={sender.id}
      key={sender.id}
      routable={sender}
      node
      onNodeRender={function (nodeEl) { }}
      />
  }</LayoutItem>
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  type: PropTypes.string,
  available: PropTypes.bool.isRequired
}

export default Sender
