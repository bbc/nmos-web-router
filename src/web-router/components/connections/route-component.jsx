import React, {PropTypes} from 'react'

let Route = ({expanded, receiver, routesEl}) => {
  if (routesEl === undefined || routesEl === null) return null
  if (receiver.subscription.sender === undefined) return null

  let senderRects = receiver.subscription.sender.nodeEl.getBoundingClientRect()
  let receiverRects = receiver.nodeEl.getBoundingClientRect()
  let routesRects = routesEl.getBoundingClientRect()

  let width = receiverRects.left - senderRects.left
  let height = Math.abs(senderRects.top - receiverRects.top)

  let className = 'route'
  if (expanded) {
    height = height - routesRects.top - 62
    className += ' expanded'
  }

  let y1 = height
  let y2 = 0
  let top = receiverRects.top
  if (senderRects.top < receiverRects.top) {
    top = senderRects.top
    y2 = height
    y1 = 0
  }

  if (expanded) {
    top = routesRects.top
  }

  return <svg
    style={{
      top: top - routesRects.top
    }}
    className={className}
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio='none'
    height={height}
    xmlns='http://www.w3.org/2000/svg'>
    <path
      className='line'
      d={`M0 ${y1} C ${width / 2} ${y1}, ${width / 2} ${y2}, ${width} ${y2}`}
      />
  </svg>
}

Route.propTypes = {
  expanded: PropTypes.bool.isRequired,
  receiver: PropTypes.object.isRequired,
  routesEl: PropTypes.any
}

export default Route
