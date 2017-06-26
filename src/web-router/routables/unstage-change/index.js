/*
These functions are called from the unstage change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or removed accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import unstageRoute from './route'
import unstageUnroute from './unroute'
import doSomething from './do-something'

export default (data) => {
  return (receiverID, senderID, changeType, oldSenderID) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)
    let oldSender = ''
    if (oldSenderID) oldSender = getRoutable(data.senders, oldSenderID)

    if (changeType === 'route') {
      unstageRoute({data, sender, receiver})
      if (oldSenderID) {
        doSomething({data, oldSender, receiver})
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
