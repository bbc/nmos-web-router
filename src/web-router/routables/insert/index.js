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
