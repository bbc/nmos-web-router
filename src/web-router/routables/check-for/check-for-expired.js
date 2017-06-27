import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

const expirationTimeMins = 0.1 // Set the desired timeout in minutes here
const expirationTimeMS = expirationTimeMins * 60 * 1000

export default (data) => {
  let returnValue = false
  let senders = data.senders
  let receivers = data.receivers

  function checkForExpiration (routable) {
    if (routable.state.includes('removed')) {
      if (routable.timeRemoved && routable.state.includes('unchecked')) {
        let timeNow = new Date().getTime()
        let idleMS = timeNow - routable.timeRemoved
        return (idleMS > expirationTimeMS)
      }
    }
    return false
  }

  receivers.forEach(receiver => {
    if (checkForExpiration(receiver)) {
      receiver.state = mapState(receiver).expire().state()
      receiver.stateString = stateToString(receiver.state)
      returnValue = true
    }
  })

  senders.forEach(sender => {
    if (checkForExpiration(sender)) {
      sender.state = mapState(sender).expire().state()
      sender.stateString = stateToString(sender.state)
      returnValue = true
    }
  })

  return returnValue
}
