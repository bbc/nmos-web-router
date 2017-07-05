import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import removeRoute from './remove-route'

export default ({data, sender, receiver}) => {
  let unstageSender = true
  data.changes.forEach(change => {
    if (change.sender.id === sender.id && change.receiver.id !== receiver.id) {
      unstageSender = false
    }
  })
  if (unstageSender) {
    sender.state = mapState(sender).unstageRoute().state()
    sender.stateString = stateToString(sender.state)
  }

  receiver.state = mapState(receiver).unstageRoute().state()
  receiver.stateString = stateToString(receiver.state)
  removeRoute({data, receiver})
}
