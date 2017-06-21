/*
Mock routable with no interactions, purely to display the staged routing change
*/

import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Sender = ({sender, type, available}) => {
  let className = (available) ? 'routables senders' : 'routables senders unavailable'
  return <LayoutItem className='sender-container' gels='4/12'>
    <LayoutItem className={className} gels='1/1'>{
      <Routable
        id={sender.id}
        key={sender.id}
        routable={sender}
        node
        onNodeRender={function (nodeEl) { }}
        />
    }</LayoutItem>
    <svg className='strikethrough-svg'>
      <line
        className={'strikethrough'}
        x1='0'
        y1='27'
        x2='300'
        y2='27' />
    </svg>
  </LayoutItem>
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  type: PropTypes.string,
  available: PropTypes.bool.isRequired
}

export default Sender
