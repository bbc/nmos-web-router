import React, {PropTypes} from 'react'

let Route = ({receiver, routesEl}) => {
  if (routesEl === undefined || routesEl === null) return null
  if (receiver.subscription.sender === undefined) return null

  let senderRects = receiver.subscription.sender.nodeEl.getBoundingClientRect()
  let receiverRects = receiver.nodeEl.getBoundingClientRect()
  let routesRects = routesEl.getBoundingClientRect()

  let width = receiverRects.left - senderRects.left
  let height = Math.abs(senderRects.top - receiverRects.top)

  let y1 = height
  let y2 = 0
  let top = receiverRects.top
  if (senderRects.top < receiverRects.top) {
    top = senderRects.top
    y2 = height
    y1 = 0
  }

  return <svg
    style={{
      top: top - routesRects.top
    }}
    className='route'
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio='none'
    height={height}
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d={`M0 ${y1} C ${width / 2} ${y1}, ${width / 2} ${y2}, ${width} ${y2}`}
      strokeLinecap='round'
      stroke='black'
      fill='transparent'
      strokeWidth='2'
      />
  </svg>
}

Route.propTypes = {
  receiver: PropTypes.object.isRequired,
  routesEl: PropTypes.any
}

export default Route
