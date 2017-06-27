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
  return (receiverID, senderID, changeType, subscriptionID) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)
    let subscription = ''
    if (subscriptionID) subscription = getRoutable(data.senders, subscriptionID)

    if (changeType === 'route') {
      if (subscriptionID) {
        unstageMulti({data, sender, receiver, subscription})
      } else {
        unstageRoute({data, sender, receiver})
      }
    } else {
      unstageUnroute({data, sender, receiver})
    }

    data.changes.forEach(change => {
      if (change.receiver.id === receiverID) change.state = 'unstaged'
    })

    data.routes.sort(sortRoutes)

    return View(data)
  }
}
