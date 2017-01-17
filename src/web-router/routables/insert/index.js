import cloneRoutables from '../common/clone-routables'
import View from '../view'
import insertRoutes from './insert-routes'
import insertSenders from './insert-senders'
import insertReceivers from './insert-receivers'
import insertFlows from './insert-flows'

export default (data) => {
  data = cloneRoutables(data)

  return {
    senders (senders) {
      insertSenders(data, senders)
      insertRoutes(data)
      return View(data)
    },
    receivers (receivers) {
      insertReceivers(data, receivers)
      insertRoutes(data)
      return View(data)
    },
    flows (flows) {
      insertFlows(data, flows)
      return View(data)
    }
  }
}
