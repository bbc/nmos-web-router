function changeContracted (view, action) {
  let allContracted = true
  view[action.viewName][action.viewType] = view[action.viewName][action.viewType].map(routable => {
    routable.routable = true
    if (routable.id === action.id) {
      view[action.viewName].toggled = routable
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
  view[action.viewName][opposite] = view[action.viewName][opposite].map(routable => {
    if (view[action.viewName].toggled && !view[action.viewName].toggled.contracted) routable.routable = view[action.viewName].toggled.format !== 'no' && routable.format === view[action.viewName].toggled.format
    else routable.routable = true
    return routable
  })
}

function isRouted (routes, left, right) {
  return routes.filter(route => {
    return route.left.id === left.id && route.right.id === right.id
  }).length > 0
}

function changeConnected (state, view, action) {
  let rightSide = state.sides.right.plural
  if (action.viewType === rightSide) view[action.viewName][rightSide]
    .forEach(routable => {
      if (view[action.viewName].toggled && routable.id === view[action.viewName].toggled.id) routable.connected = true
    })
  else view[action.viewName][rightSide]
    .forEach(routable => {
      routable.connected = view[action.viewName].toggled && isRouted(view[action.viewName].routes, view[action.viewName].toggled, routable)
    })
}

function unConnectAll (state, view, action) {
  view[action.viewName].senders
    .concat(view[action.viewName].receivers)
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

  let routable = view[action.viewName][sideName].filter(routable => {
    return routable.id === action.id
  })[0]

  let toggled = view[action.viewName][state.sides[side].opposite.plural].filter(routable => {
    return routable.id === view[action.viewName].toggled.id
  })[0]

  toggled.routed = true

  routable.connected = true
  routable.routed = true

  let route = {
    status: 'user'
  }

  route[side] = routable
  route[state.sides[side].opposite.name] = view[action.viewName].toggled

  view[action.viewName].routes.push(route)

  let receiver = view[action.viewName].toggled
  if (sideName === 'receivers') receiver = routable

  let sender = view[action.viewName].toggled
  if (sideName === 'senders') sender = routable

  sender = state.data.senders.filter(dataSender => {
    return dataSender.id === sender.id
  })[0]

  action.route(receiver.id, sender)
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)

  let nothingExpanded = view[action.viewName].toggleSide === ''
  let sameSide = view[action.viewName].toggleSide === action.viewType

  unConnectAll(state, view, action)

  if (nothingExpanded) {
    toggle(state, view, action)
    view[action.viewName].toggleSide = action.viewType
    changeConnected(state, view, action)
  } else if (sameSide) {
    let allContracted = toggle(state, view, action)
    if (allContracted) view[action.viewName].toggleSide = ''
    else changeConnected(state, view, action)
  } else if (!sameSide && action.id !== 'off') {
    route(state, view, action)
  }

  if (action.id === 'off') {
    unConnectAll(state, view, action)
    view[action.viewName].toggleSide = ''
  }

  view.scroll = false
  return merge({ view })
}
