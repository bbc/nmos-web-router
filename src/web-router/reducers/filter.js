import fuzzysearch from 'fuzzysearch'
import ChangeState from './change-state'

function matches (term, routable) {
  return fuzzysearch(term.toLowerCase(), routable.label.toLowerCase()) ||
         fuzzysearch(term.toLowerCase(), routable.id.toLowerCase())
}

function map (view, routable) {
  let fuzzymatch = matches(view.choose.term, routable)
  let changeState = ChangeState(routable)
  if (fuzzymatch) changeState.fuzzymatch()
  else changeState.fuzzymissmatch()
  return routable
}

export default (view) => {
  if (view.receivers.length === 0 || view.senders.length === 0) return view
  view.receivers = view.receivers.map(receiver => {
    return map(view, receiver)
  })
  view.senders = view.senders.map(sender => {
    return map(view, sender)
  })
  return view
}
