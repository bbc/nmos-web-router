import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

const expirationTime = 10000

export default (data) => {
  let senders = data.senders
  let receivers = data.receivers

  function checkForExpiration (routable) {
    if (routable.state.includes('removed')) {
      if (routable.timeRemoved && routable.state.includes('unchecked')) {
        let timeNow = new Date().getTime()
        let idleMS = timeNow - routable.timeRemoved
        if (idleMS > expirationTime) {
          return true
        } else {
          return false
        }
      }
    }
    return false
  }

  receivers.forEach(receiver => {
    let expired = checkForExpiration(receiver)
    if (expired) {
      receiver.state = mapState(receiver).expire().state()
      receiver.stateString = stateToString(receiver.state)
    }
  })

  senders.forEach(sender => {
    let expired = checkForExpiration(sender)
    if (expired) {
      console.log('Setting ' + sender.label + ' to expired')
      sender.state = mapState(sender).expire().state()
      sender.stateString = stateToString(sender.state)
    }
  })
}
