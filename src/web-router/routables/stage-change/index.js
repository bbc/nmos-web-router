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

export default (data) => {
  return (senderID, receiverID, changeType) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)

    if (changeType === 'route') {
      stageRoute({data, sender, receiver})
    } else {
      stageUnroute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)
    let newChange = {
      sender: sender,
      receiver: receiver,
      type: changeType,
      state: 'staged'
    }
    data.changes.push(newChange)

    return View(data)
  }
}
