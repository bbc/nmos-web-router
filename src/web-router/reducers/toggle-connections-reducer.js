function changeContracted (view, action) {
  let allContracted = true
  view.connections[action.viewType] = view.connections[action.viewType].map(routable => {
    routable.routable = true
    if (routable.id === action.id) {
      view.connections.toggled = routable
      routable.contracted = !routable.contracted
      allContracted = routable.contracted
    } else routable.contracted = true
    return routable
  })
  return allContracted
}

function changeRoutable (state, view, action) {
  let side = state.sides[action.viewType]
  let opposite = state.sides[side].opposite.plural
  view.connections[opposite] = view.connections[opposite].map(routable => {
    if (view.connections.toggled && !view.connections.toggled.contracted) routable.routable = view.connections.toggled.format !== 'no' && routable.format === view.connections.toggled.format
    else routable.routable = true
    return routable
  })
}

function isRouted (routes, left, right) {
  return routes.filter(route => {
    return route.left.id === left.id && route.right.id === right.id
  }).length > 0
}

function connect (state, view, action) {
  let rightSide = state.sides.right.plural
  if (action.viewType === rightSide) view.connections[rightSide]
    .forEach(routable => {
      if (view.connections.toggled && routable.id === view.connections.toggled.id) routable.connected = true
    })
  else view.connections[rightSide]
    .forEach(routable => {
      routable.connected = view.connections.toggled && isRouted(view.connections.routes, view.connections.toggled, routable)
    })
}

function disonnect (state, view, action) {
  view.connections.senders
    .concat(view.connections.receivers)
    .forEach(routable => {
      routable.connected = false
    })
}

function toggle (state, view, action) {
  let allContracted = changeContracted(view, action)
  changeRoutable(state, view, action)
  return allContracted
}

function route (state, view, action) {
  let side = state.sides[action.viewType]
  let sideName = state.sides[side].plural

  let routable = view.connections[sideName].filter(routable => {
    return routable.id === action.id
  })[0]

  let toggled = view.connections[state.sides[side].opposite.plural].filter(routable => {
    return routable.id === view.connections.toggled.id
  })[0]

  toggled.routed = true

  routable.connected = true
  routable.routed = true

  let route = {
    status: 'user'
  }

  route[side] = routable
  route[state.sides[side].opposite.name] = view.connections.toggled

  view.connections.routes.push(route)

  // TODO: put this back on once subscription API is working
  // let receiver = view.connections.toggled
  // if (sideName === 'receivers') receiver = routable
  // let sender = view.connections.toggled
  // if (sideName === 'senders') sender = routable
  // sender = state.data.senders.filter(dataSender => {
  //   return dataSender.id === sender.id
  // })[0]
  // action.route(receiver.id, sender)
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)

  let nothingExpanded = view.connections.toggleSide === ''
  let sameSide = view.connections.toggleSide === action.viewType

  if (sameSide) disonnect(state, view, action)

  if (nothingExpanded) {
    toggle(state, view, action)
    view.connections.toggleSide = action.viewType
    connect(state, view, action)
  } else if (sameSide) {
    let allContracted = toggle(state, view, action)
    if (allContracted) view.connections.toggleSide = ''
    else connect(state, view, action)
  } else if (!sameSide && action.id !== 'off') {
    route(state, view, action)
  }

  if (action.id === 'off') view.connections.toggleSide = ''

  if (view.connections.toggleSide === '') disonnect(state, view, action)

  view.scroll = false
  return merge({ view })
}
