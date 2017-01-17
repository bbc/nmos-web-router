import cloneRoutables from '../common/clone-routables'
import Routables from '..'
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
      return Routables(data)
    },
    receivers (receivers) {
      insertReceivers(data, receivers)
      insertRoutes(data)
      return Routables(data)
    },
    flows (flows) {
      insertFlows(data, flows)
      return Routables(data)
    }
  }
}
