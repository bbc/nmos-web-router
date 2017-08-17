/*
Route functions manipulate the state of routables
  The relevant receiver is unrouted by default and then routed to
  the relevant sender, if it is a routing change
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import mapRoutableStateToRouted from './map-routables-state-to-routed'
import pushRoute from '../common/push-route'
import unrouteReceivers from './unroute-receivers'

export default (data) => {
  return (receiverId, senderId) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverId)

    unrouteReceivers({data, receiver})

    if (senderId) {
      let sender = getRoutable(data.senders, senderId)
      mapRoutableStateToRouted({sender, receiver})
      pushRoute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)

    return View(data)
  }
}
