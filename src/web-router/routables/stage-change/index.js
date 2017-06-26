/*
These functions are called from the add change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or added accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import stageRoute from './route'
import stageUnroute from './unroute'
import doSomething from './do-something'

export default (data) => {
  return (senderID, receiverID, changeType) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)
    let oldSender = ''

    if (changeType === 'route') {
      if (receiver.state.includes('routed')) {
        oldSender = getRoutable(data.senders, receiver.subscription.sender_id)
        doSomething({data, oldSender, receiver})
      }
      stageRoute({data, sender, receiver})
    } else {
      stageUnroute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)
    let newChange = {
      sender: sender,
      receiver: receiver,
      type: changeType,
      state: 'staged',
      oldSender: oldSender
    }
    data.changes.push(newChange)

    return View(data)
  }
}
