import React, {PropTypes} from 'react'
import Line from './line-component'
import Path from './path-component'
import RouteSVG from './route-svg-component'

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
  return <RouteSVG
    top={top - routesRects.top}
    state={`${data.state} expanded`}
    width={width}
    height={height}
    >
    <Path x1={x1} y1={y1} y2={y2} width={width} height={height} />
  </RouteSVG>
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

  let y1 = height
  let y2 = 0
  let top = receiverRects.top
  if (senderRects.top < receiverRects.top) {
    top = senderRects.top
    y2 = height
    y1 = 0
  }

  let LineComponent = Path
  if (y1 === y2) LineComponent = Line

  return <svg
    style={{
      top: top - routesRects.top
    }}
    className={`route route-${data.state}`}
    viewBox={`0 0 ${width} ${height + 4}`}
    preserveAspectRatio='none'
    height={height + 4}
    xmlns='http://www.w3.org/2000/svg'>
    <LineComponent x1={0} y1={y1} y2={y2} width={width} height={height} />
  </svg>
}

FullRoute.propTypes = {
  data: PropTypes.object.isRequired,
  routesRects: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired
}

/*
if there is no sender/receiver element
or if either of the sender/receiver happens to be unchecked/removed
   then do half

Also would be good to make Expanded/Full Route to be metrics creaters instead
  then it would make this thing easier
*/
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
