import React, {PropTypes} from 'react'
import Line from './line-component'
import Path from './path-component'

let ExpandedRoute = ({data, routesRects, scrollTop}) => {
  let senderEl = document.querySelector('.expanded-sender')
  if (senderEl === null) return null

  let receiverEl = document.getElementById(data.receiver.id)
  let receiverNodeEl = receiverEl.querySelector('.node')
  let receiverRects = receiverNodeEl.getBoundingClientRect()

  let senderButtonContainer = senderEl.querySelector('.button-container')
  let senderHeight = senderButtonContainer.getBoundingClientRect().height / 2 + 12
  let top = routesRects.top + scrollTop + senderHeight
  let height = Math.abs(top - receiverRects.top)

  let y1 = 0
  let y2 = height
  if (receiverRects.top < top) {
    y1 = height
    y2 = 0
    top -= height
  }
  let x1 = routesRects.width / 10
  let width = routesRects.width
  return <svg
    style={{
      top: top - routesRects.top
    }}
    className={`route route-${data.state} expanded`}
    viewBox={`0 0 ${width} ${height + 4}`}
    preserveAspectRatio='none'
    height={height + 4}
    xmlns='http://www.w3.org/2000/svg'>
    <Path x1={x1} y1={y1} y2={y2} width={width} height={height} />
  </svg>
}

ExpandedRoute.propTypes = {
  data: PropTypes.object.isRequired,
  routesRects: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired
}

let FullRoute = ({data, routesRects, scrollTop}) => {
  let senderEl = document.getElementById(data.sender.id)

  if (senderEl === null) return null
  let senderNodeEl = senderEl.querySelector('.node')

  let receiverEl = document.getElementById(data.receiver.id)
  if (receiverEl === null) return null
  let receiverNodeEl = receiverEl.querySelector('.node')

  let senderRects = senderNodeEl.getBoundingClientRect()
  let receiverRects = receiverNodeEl.getBoundingClientRect()

  let width = routesRects.width
  let height = Math.abs(senderRects.top - receiverRects.top)

  let className = `route route-${data.state}`

  let x1 = 0
  let y1 = height
  let y2 = 0
  let top = receiverRects.top
  if (senderRects.top < receiverRects.top) {
    top = senderRects.top
    y2 = height
    y1 = 0
  }

  if (y1 === y2) {
    return <svg
      style={{
        top: top - routesRects.top
      }}
      className={className}
      viewBox={`0 0 ${width} ${height + 4}`}
      preserveAspectRatio='none'
      height={height + 4}
      xmlns='http://www.w3.org/2000/svg'>
      <Line x1={x1} y1={y1} y2={y2} width={width} height={height} />
    </svg>
  }

  return <svg
    style={{
      top: top - routesRects.top
    }}
    className={className}
    viewBox={`0 0 ${width} ${height + 4}`}
    preserveAspectRatio='none'
    height={height + 4}
    xmlns='http://www.w3.org/2000/svg'>
    <Path x1={x1} y1={y1} y2={y2} width={width} height={height} />
  </svg>
}

FullRoute.propTypes = {
  data: PropTypes.object.isRequired,
  routesRects: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired
}

let Route = ({data, expanded}) => {
  let routesEl = document.querySelector('.routes')
  if (routesEl === null) return null
  let routesRects = routesEl.getBoundingClientRect()
  let scrollTop = routesEl.parentElement.scrollTop

  if (expanded) return ExpandedRoute({data, routesRects, scrollTop})
  else return FullRoute({data, routesRects, scrollTop})
}

Route.propTypes = {
  data: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired
}

export default Route
