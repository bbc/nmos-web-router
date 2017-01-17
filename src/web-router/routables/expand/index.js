import cloneRoutables from '../common/clone-routables'
import View from '../view'
import expandSenders from './expand-senders'
import expandReceivers from './expand-receivers'

export default (data) => {
  data = cloneRoutables(data)
  return (id) => {
    expandSenders(data, id)
    expandReceivers(data, id)
    return View(data)
  }
}
