import cloneRoutables from '../common/clone-routables'
import Routables from '..'
import expandSenders from './expand-senders'
import expandReceivers from './expand-receivers'

export default (data) => {
  data = cloneRoutables(data)
  return (id) => {
    expandSenders(data, id)
    expandReceivers(data, id)
    return Routables(data)
  }
}
