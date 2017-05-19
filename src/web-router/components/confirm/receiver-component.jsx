import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Receiver = ({receivers, index, type}) => {
  let routableClick = () => {
    console.log('You clicked it')
  }
  return <LayoutItem className={`routables receivers ${type}`} gels='1/1'>{
    <Routable
      id={receivers[index].id}
      key={receivers[index].id}
      routable={receivers[index]}
      node
      onClick={function () { routableClick() }}
      onNodeRender={function (nodeEl) { }}
      />
  }</LayoutItem>
}

Receiver.propTypes = {
  receivers: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string
}

export default Receiver
