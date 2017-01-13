import cloneRoutables from '../clone-routables'
import Routables from '..'
import mapFuzzymatch from './map-fuzzymatch'

export default (data) => {
  return (term) => {
    data = cloneRoutables(data)
    let senders = data.senders
    let receivers = data.receivers

    mapFuzzymatch(term, senders)
    mapFuzzymatch(term, receivers)

    return Routables(data)
  }
}
