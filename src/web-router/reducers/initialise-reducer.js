function getNotLoading (data) {
  let notLoaded = []
  if (data.receivers.length === 0) notLoaded.push('receivers')
  if (data.senders.length === 0) notLoaded.push('senders')
  if (data.flows.length === 0) notLoaded.push('flows')
  return notLoaded
}

function getLoaded (data) {
  let loaded = []
  if (data.receivers.length !== 0) loaded.push('receivers')
  if (data.senders.length !== 0) loaded.push('senders')
  if (data.flows.length !== 0) loaded.push('flows')
  return loaded
}

function updateSendersWithFormat (data) {
  return data.senders.map(sender => {
    let flow = data.flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0]
    if (flow) sender.format = flow.format
    else sender.format = 'no'
    return sender
  })
}

function getSender (data, id) {
  return data.senders.filter(sender => {
    return sender.id === id
  })[0]
}

function getRoutes (data) {
  return data.receivers
    .filter(receiver => {
      let senderId = receiver.subscription.sender_id
      return senderId !== null && getSender(data, senderId)
    })
    .map(receiver => {
      let sender = getSender(data, receiver.subscription.sender_id)
      return {receiver, sender}
    })
}

function isRouted (data, routable, type) {
  return data.routes
    .filter(route => {
      return route[type].id === routable.id
    }).length > 0
}

function getConnectionsRoutables (data, type, singularType) {
  return data[type].map(routable => {
    return {
      id: routable.id,
      dropable: false,
      routed: isRouted(data, routable, singularType),
      preview: false,
      contracted: true,
      format: routable.format
    }
  })
}

function getConfirmatonRoutes (routes) {
  return routes.map(route => {
    return {
      sender: {
        id: route.sender.id,
        label: route.sender.label,
        descripton: route.sender.descripton,
        format: route.sender.format,
        contracted: true
      },
      receiver: {
        id: route.receiver.id,
        label: route.receiver.label,
        descripton: route.receiver.descripton,
        format: route.receiver.format,
        contracted: true
      }
    }
  })
}

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows,
    routes: action.routes || state.data.routes
  }

  data.senders = updateSendersWithFormat(data)
  data.routes = getRoutes(data)

  let connections = Object.assign({}, state.view.connections)
  connections.senders = getConnectionsRoutables(data, 'senders', 'sender')
  connections.receivers = getConnectionsRoutables(data, 'receivers', 'receiver')
  connections.routes = data.routes.map(route => {
    return {
      left: {
        id: route[state.sides.left.singular].id
      },
      right: {
        id: route[state.sides.right.singular].id
      }
    }
  })

  let confirmation = Object.assign({}, state.view.confirmation)
  confirmation.routes = getConfirmatonRoutes(data.routes)

  let view = Object.assign({}, state.view, {
    loading: {
      notLoaded: getNotLoading(data),
      loaded: getLoaded(data),
      errored: state.view.loading.errored
    },
    connections,
    confirmation,
    scroll: false
  })

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
