import mapSenderFormats from '../common/map-sender-formats'
import mapInitialSenderState from './map-sender-initial-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'

export default (data, senders) => {
  mapSenderFormats({senders, flows: data.flows})
  mapInitialSenderState({senders})
  mapSenderRoutedState({senders, receivers: data.receivers})
}
