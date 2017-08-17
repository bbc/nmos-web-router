/*
Filter is used to filter routables out of the 'Choose' view according to
  search text entered by the user
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import mapFuzzymatch from './map-fuzzymatch'

export default (data) => {
  data = cloneRoutables(data)
  return (term) => {
    let senders = data.senders
    let receivers = data.receivers

    mapFuzzymatch(term, senders)
    mapFuzzymatch(term, receivers)

    return View(data)
  }
}
