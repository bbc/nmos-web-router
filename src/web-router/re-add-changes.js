import clone from 'clone'

export default ({state}) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  if (state) {
    let updatedRoutes = state.view.routes

    state.data.changes.forEach(change => {
      if (change.type === 'route') {
        let sender = get(state.data.senders, change.sender.id)
        let receiver = get(state.data.receivers, change.receiver.id)
        let route = updatedRoutes.filter(route => {
          return receiver.id === route.receiver.id && route.state === 'staged-route'
        })[0]

        if (route === undefined) {
          let thisRoute = {state: 'staged-route',
            receiver: clone(receiver),
            sender: clone(sender)}
          updatedRoutes.push(thisRoute)
        }
      } else {
        let receiver = get(state.data.receivers, change.receiver.id)
        let route = updatedRoutes.filter(route => {
          return receiver.id === route.receiver.id
        })[0]

        if (route) {
          route.state = 'staged-unroute'
        }
      }
    })

    return updatedRoutes
  } else {
    return null
  }
}
