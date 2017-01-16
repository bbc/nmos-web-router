import cloneRoutables from '../clone-routables'
import Routables from '..'
import expandSenders from './expand-senders'
import expandReceivers from './expand-receivers'

export default (data) => {
  return (id) => {
    data = cloneRoutables(data)
    let senders = data.senders
    let receivers = data.receivers
    expandSenders({id, senders})
    data.receivers = expandReceivers({id, senders, receivers})
    return Routables(data)
  }
}
