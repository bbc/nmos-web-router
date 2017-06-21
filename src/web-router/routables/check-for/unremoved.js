import getRoutable from '../common/get-routable.js'

export default (senders, receivers, changes) => {
  changes.forEach(change => {
    if (change.state === 'unavailable-sender') {
      let sender = getRoutable(senders, change.sender.id)
      if (!sender.state.includes('removed')) {
        change.state = 'staged'
      }
    } else if (change.state === 'unavailable-receiver') {
      let receiver = getRoutable(receivers, change.receiver.id)
      if (!receiver.state.includes('removed')) {
        change.state = 'staged'
      }
    }
  })
}
