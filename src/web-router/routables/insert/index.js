/*
Insert functions are used to insert a new sender/receiver/flow into the web router
  Routes are inserted afterwards so they are up to date. Part of insert-routes
  is re-staging any staged changes so they are still visible in the 'Route' view
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import insertSenders from './insert-senders'
import insertReceivers from './insert-receivers'
import insertFlows from './insert-flows'

export default (data) => {
  data = cloneRoutables(data)

  return {
    senders (senders) {
      insertSenders(data, senders)
      return View(data)
    },
    receivers (receivers) {
      insertReceivers(data, receivers)
      return View(data)
    },
    flows (flows) {
      insertFlows(data, flows)
      return View(data)
    }
  }
}
