/*
This is used in update-reducer.js in order to change the state of routes
  and routables such that staged changes are displayed if the 'Route' view
  is updated due to something like a new pipeline being started etc.

Without this staged changes disappear from the 'Route' view despite still being
  staged

*** This process seems to cause bugs ***
*/

import clone from 'clone'

export default ({state}) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  if (state.view.routes && state.data.senders && state.data.receivers) {
    let updatedRoutes = state.view.routes
    state.data.changes.forEach(change => {
      if (change.type === 'route') {
        let sender = get(state.data.senders, change.sender.id)
        let receiver = get(state.data.receivers, change.receiver.id)
        let route = updatedRoutes.filter(route => {
          return receiver.id === route.receiver.id && route.sender.id === sender.id
        })[0]

        if (route === undefined) {
          console.log('Re-staging route')
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

        if (route && route.state === 'routed') {
          route.state = 'staged-unroute'
        }
      }
    })

    return updatedRoutes
  } else {
    return null
  }
}
