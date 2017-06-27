import cloneRoutables from '../common/clone-routables'
import View from '../view'
import checkForExpired from './check'

export default (data) => {
  data = cloneRoutables(data)
  return () => {
    checkForExpired(data)

    data.senders = data.senders.filter(sender => {
      return !(sender.state.includes('expired'))
    })
    data.receivers = data.receivers.filter(receiver => {
      return !(receiver.state.includes('expired'))
    })
    return View(data)
  }
}
