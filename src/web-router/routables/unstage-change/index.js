/*
UnstageChange is used to remove changes from state and to undo their changes
  to the 'Route' view
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
      if (change.subscriptionID) unstageMulti({data, sender, receiver, subscription})
      else unstageRoute({data, sender, receiver})
    } else unstageUnroute({data, sender, receiver})

    data.routes.sort(sortRoutes)
    data.changes = data.changes.filter(oneChange => {
      return !(oneChange.receiver.id === change.receiver.id)
    })

    return View(data)
  }
}
