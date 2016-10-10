function getDimensions (elementId) {
  let containerElement = document.querySelector('.web-router-container')
  let containerRects = containerElement.getClientRects().item(0)

  let dimensions = { x: [0, 0], y: [0, 0] }
  let offestY = window.scrollY
  let offestX = window.scrollX - containerRects.left
  let routableElement = document.getElementById(elementId)
  if (routableElement === null) return dimensions
  let rects = routableElement.getClientRects().item(0)
  dimensions = {
    x: [rects.left + offestX, rects.right + offestX],
    width: rects.width,
    y: [rects.top + offestY, rects.bottom + offestY]
  }
  return dimensions
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)

  view.connections.senders
    .concat(view.connections.receivers)
    .forEach(routable => {
      let elementId = 'connections-' + routable.id
      routable.dimensions = getDimensions(elementId)
      routable.routed = view.connections.routes
        .filter(route => {
          return route.left.id === routable.id || route.right.id === routable.id
        }).length > 0
    })

  view.connections.routes = view.connections.routes.map(route => {
    let left = view.connections.senders
      .concat(view.connections.receivers)
      .filter(routable => {
        return routable.id === route.left.id
      })[0]

    let right = view.connections.senders
        .concat(view.connections.receivers)
        .filter(routable => {
          return routable.id === route.right.id
        })[0]

    return {
      left: {
        routable: left,
        id: left.id,
        width: left.dimensions.width,
        x: left.dimensions.x,
        y: left.dimensions.y
      },
      right: {
        routable: right,
        id: right.id,
        width: right.dimensions.width,
        x: right.dimensions.x,
        y: right.dimensions.y
      }
    }
  })

  view.scroll = false
  return merge({view})
}
