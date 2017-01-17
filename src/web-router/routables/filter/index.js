import cloneRoutables from '../common/clone-routables'
import Routables from '..'
import mapFuzzymatch from './map-fuzzymatch'

export default (data) => {
  data = cloneRoutables(data)
  return (term) => {
    let senders = data.senders
    let receivers = data.receivers

    mapFuzzymatch(term, senders)
    mapFuzzymatch(term, receivers)

    return Routables(data)
  }
}
