import React, {PropTypes} from 'react'
import Half from './half-component'
import Line from './line-component'
import Path from './path-component'
import RouteSVG from './route-svg-component'

let ExpandedRoute = ({data, routesRects, scrollTop, half}) => {
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

  let LineComponent = Path
  if (half) {
    LineComponent = Half
    top = routesRects.top + scrollTop + senderHeight
  }

  top -= routesRects.top
  console.log(top)

  return <RouteSVG
    top={top}
    state={`${data.state} expanded`}
    width={width}
    height={height}
    >
    <LineComponent side='left' x1={x1} y1={y1} y2={y2} width={width} height={height} />
  </RouteSVG>
}

ExpandedRoute.propTypes = {
  data: PropTypes.object.isRequired,
  routesRects: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired,
  half: PropTypes.bool.isRequired
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

  return <RouteSVG
    top={top - routesRects.top}
    state={data.state}
    width={width}
    height={height}
    >
    <LineComponent x1={0} y1={y1} y2={y2} width={width} height={height} />
  </RouteSVG>
}

FullRoute.propTypes = {
  data: PropTypes.object.isRequired,
  routesRects: PropTypes.object.isRequired,
  scrollTop: PropTypes.number.isRequired
}

let Route = ({data, expanded, halfs}) => {
  let routesEl = document.querySelector('.routes')
  if (routesEl === null) return null
  let routesRects = routesEl.getBoundingClientRect()
  let scrollTop = routesEl.parentElement.scrollTop

  if (expanded) {
    return <ExpandedRoute
      data={data}
      routesRects={routesRects}
      scrollTop={scrollTop}
      half={halfs.includes('receiver')}
      />
  } else {
    return <FullRoute
      data={data}
      routesRects={routesRects}
      scrollTop={scrollTop}
      />
  }
}

Route.propTypes = {
  data: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  halfs: PropTypes.array.isRequired
}

export default Route
