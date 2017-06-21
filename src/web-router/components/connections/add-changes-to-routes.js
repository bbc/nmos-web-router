/*
This process ensures any staged changes are added to the list of routes
  that will be displayed in the 'Route' view. This is important to ensure
  staged changes are still displayed when 'Route' view is updated due to pipelines
  starting/stopping etc.
*/

import clone from 'clone'

export default ({changes, routes, senders, receivers}) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  if (routes && senders && receivers) {
    let updatedRoutes = routes
    changes.forEach(change => {
      if (change.type === 'route' && change.state !== 'deployed' && change.state !== 'unstaged') {
        let sender = get(senders, change.sender.id)
        let receiver = get(receivers, change.receiver.id)
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
      } else if (change.type === 'unroute' && change.state !== 'deployed' && change.state !== 'unstaged') {
        let receiver = get(receivers, change.receiver.id)
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
