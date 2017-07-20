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
    width = 0 // Hiding half route temporarily. Appearance should be changed.
    LineComponent = Half
    top = routesRects.top + scrollTop + senderHeight
  }

  top -= routesRects.top

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
  let senderNodeEl = senderEl.querySelector('.node')
  let senderRects = senderNodeEl.getBoundingClientRect()

  let receiverEl = document.getElementById(data.receiver.id)
  let receiverNodeEl = receiverEl.querySelector('.node')
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
  top -= routesRects.top

  let LineComponent = Path
  if (y1 === y2) LineComponent = Line

  return <RouteSVG
    top={top}
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

let HalfRoute = ({data, side, routesRects, scrollTop}) => {
  let routableEl = document.getElementById(data.routable.id)
  let routableNodeEl = routableEl.querySelector('.node')
  let routableRects = routableNodeEl.getBoundingClientRect()

  let width = 0
  let top = routableRects.top - routesRects.top

  return <RouteSVG
    top={top}
    state={data.state}
    width={width}
    height={4}
    >
    <Half side={side} x1={0} width={width} />
  </RouteSVG>
}

HalfRoute.propTypes = {
  side: PropTypes.string.isRequired,
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
  } else if (halfs.length === 1) {
    let side = 'right'
    let routableType = 'receiver'

    if (halfs[0] === 'receiver') {
      side = 'left'
      routableType = 'sender'
    }
    data = {
      state: data.state,
      routable: data[routableType]
    }
    return <HalfRoute
      data={data}
      routesRects={routesRects}
      scrollTop={scrollTop}
      side={side}
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
