/*
These functions are called from the deploy change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or removed accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import getRoutable from '../common/get-routable'
import deployRoute from './route'
import deployUnroute from './unroute'

export default (data) => {
  return (receiverId, senderId, changeType, oldSenderID) => {
    data = cloneRoutables(data)
    let sender = getRoutable(data.senders, senderId)
    let receiver = getRoutable(data.receivers, receiverId)
    let oldSender = ''
    if (oldSenderID) {
      oldSender = getRoutable(data.senders, oldSenderID)
    }
    if (changeType === 'route') {
      deployRoute({data, sender, receiver, oldSender})
    } else {
      deployUnroute({data, sender, receiver})
    }

    data.changes.forEach(change => {
      if (change.receiver.id === receiver.id) {
        change.state = 'deployed'
      }
    })

    return View(data)
  }
}
