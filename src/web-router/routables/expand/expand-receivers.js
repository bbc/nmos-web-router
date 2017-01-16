import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import expandedFormat from './expanded-format'

export default ({receivers, senders, id}) => {
  return receivers.map(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    let format = expandedFormat({senders, id})
    if (receiver.format === format) receiverMapState.selectable()
    else if (format !== 'contracting') receiverMapState.disable()
    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
    return receiver
  })
}
