import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Sender = ({sender, type}) => {
  return <LayoutItem className={'routables senders'} gels='1/1'>{
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
  type: PropTypes.string
}

export default Sender
