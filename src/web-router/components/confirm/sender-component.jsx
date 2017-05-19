import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Sender = ({senders, index, type}) => {
  let routableClick = () => {
    console.log('You clicked it')
  }
  return <LayoutItem className={`routables senders ${type}`} gels='1/1'>{
    <Routable
      id={senders[index].id}
      key={senders[index].id}
      routable={senders[index]}
      node
      onClick={function () { routableClick() }}
      onNodeRender={function (nodeEl) { }}
      />
  }</LayoutItem>
}

Sender.propTypes = {
  senders: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string
}

export default Sender
