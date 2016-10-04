function mouseOver (mouse, routable) {
  let mouseX = mouse.x
  let mouseY = mouse.y - mouse.offset
  let betweenWidth = mouseX >= routable.dimensions.x[0] && mouseX <= routable.dimensions.x[1]
  let betweenHeight = mouseY >= routable.dimensions.y[0] && mouseY <= routable.dimensions.y[1]
  return betweenWidth && betweenHeight
}

function connectionRoutable (routable, action, isDragging, hasStopped, state, view, sameSide) {
  let newRoute
  let isBeingDragged = routable.id === action.routable.id
  let dropable = !sameSide && !isBeingDragged && action.routable.format === routable.format
  routable.dropable = dropable
  let isOver = mouseOver(action.mouse, routable)
  routable.preview = isDragging && (isBeingDragged || (isOver && dropable))
  if (hasStopped && isOver && !isBeingDragged && dropable) {
    let sideName = state.sides[action.side]
    let opposite = state.sides[sideName].opposite.name
    let alreadyRouted = view.connections.routes.filter(route => {
      let hasRoutable = route[opposite].id === routable.id
      let hasDraggedRoutable = route[sideName].id === action.routable.id
      return hasRoutable && hasDraggedRoutable
    }).length > 0
    if (!alreadyRouted) {
      newRoute = {}
      let routableDimensions = view.connections.senders
            .concat(view.connections.receivers)
            .filter(routable => {
              return routable.id === action.routable.id
            })[0].dimensions

      newRoute[sideName] = {
        x: routableDimensions.x,
        y: routableDimensions.y,
        id: action.routable.id
      }

      newRoute[opposite] = {
        x: routable.dimensions.x,
        y: routable.dimensions.y,
        id: routable.id
      }

      view.connections.routes.push(newRoute)
    }
  }
  return newRoute
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let isDragging = action.status === 'dragging'
  let hasStopped = action.status === 'stopped'

  view.connections.isDragging = isDragging
  view.connections.mouse = action.mouse


  let newRoute
  view.connections.senders.forEach(routable => {
    let newSenderRoute = connectionRoutable(routable, action, isDragging, hasStopped, state, view, action.side === 'senders')
    newRoute = newRoute || newSenderRoute
  })
  view.connections.receivers.forEach(routable => {
    let newReceiverRoute = connectionRoutable(routable, action, isDragging, hasStopped, state, view, action.side === 'receivers')
    newRoute = newRoute || newReceiverRoute
  })

  if (newRoute) {
    let confirmationRoute = {}
    let leftName = state.sides.left.plural
    let left = state.data[leftName].filter(routable => {
      return routable.id === newRoute.left.id
    })[0]
    confirmationRoute[state.sides.left.singular] = {
      label: left.label,
      descripton: left.descripton,
      id: left.id,
      format: left.format,
      contracted: true
    }

    let rightName = state.sides.right.plural
    let right = state.data[rightName].filter(routable => {
      return routable.id === newRoute.right.id
    })[0]
    confirmationRoute[state.sides.right.singular] = {
      label: right.label,
      descripton: right.descripton,
      id: right.id,
      format: right.format,
      contracted: true
    }

    view.confirmation.routes.push(confirmationRoute)
  }

  view.scroll = false
  return merge({view})
}
