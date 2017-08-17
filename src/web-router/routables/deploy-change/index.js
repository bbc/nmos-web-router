/*
The actual http get/post commands are carried out in the dispatcher
These functions change the state of routables and routes accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import getRoutable from '../common/get-routable'
import deployRoute from './route'
import deployUnroute from './unroute'

export default (data) => {
  return (senderID, receiverID, changeType, subscriptionID) => {
    data = cloneRoutables(data)
    let sender = getRoutable(data.senders, senderID)
    let receiver = getRoutable(data.receivers, receiverID)
    let subscription = ''
    if (subscriptionID) {
      subscription = getRoutable(data.senders, subscriptionID)
    }
    if (changeType === 'route') {
      deployRoute({data, sender, receiver, subscription})
    } else {
      deployUnroute({data, sender, receiver})
    }

    data.changes = data.changes.filter(change => {
      return !(change.receiver.id === receiver.id)
    })

    return View(data)
  }
}
