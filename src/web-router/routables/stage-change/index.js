/*
These functions are called from the add change reducers
  Stage Multi means both a route and an unroute are staged because
  the user is routing a receiver which is already routed to a different sender
  Therefore the existing route (subscription) is turned dashed red to indicate
  to the user that it will be deleted if they deploy their desired change
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import stageRoute from './route'
import stageUnroute from './unroute'
import stageMulti from './multi'

export default (data) => {
  return (senderID, receiverID, changeType) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)
    let subscription = ''

    if (changeType === 'route') {
      if (receiver.state.includes('routed')) {
        subscription = getRoutable(data.senders, receiver.subscription.sender_id)
        stageMulti({data, sender, receiver, subscription})
      } else stageRoute({data, sender, receiver})
    } else stageUnroute({data, sender, receiver})

    data.routes.sort(sortRoutes)
    let newChange = {
      sender: sender,
      receiver: receiver,
      type: changeType,
      state: 'staged',
      subscriptionID: subscription.id
    }
    data.changes.push(newChange)

    return View(data)
  }
}
