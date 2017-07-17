/*
These functions are called from the unstage change reducers
If a change has a subscriptionID then this means there is an existing route
  which has been changed to a 'staged unroute' and this needs to be changed back
  to a 'routed' route - unstageMulti does this
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import unstageRoute from './route'
import unstageUnroute from './unroute'
import unstageMulti from './multi'

export default (data) => {
  return (change) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, change.receiver.id)
    let sender = getRoutable(data.senders, change.sender.id)
    let subscription = ''
    if (change.subscriptionID) {
      subscription = getRoutable(data.senders, change.subscriptionID)
    }

    if (change.type === 'route') {
      if (change.subscriptionID) {
        unstageMulti({data, sender, receiver, subscription})
      } else {
        unstageRoute({data, sender, receiver})
      }
    } else {
      unstageUnroute({data, sender, receiver})
    }

    let targetID = change.receiver.id
    data.changes.forEach(change => {
      if (change.receiver.id === targetID) change.state = 'unstaged'
    })

    data.routes.sort(sortRoutes)
    data.changes = data.changes.filter(oneChange => {
      return !(oneChange.sender.id === change.sender.id && oneChange.receiver.id === change.receiver.id)
    })

    return View(data)
  }
}
