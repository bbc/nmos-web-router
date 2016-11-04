import fuzzysearch from 'fuzzysearch'

function map (view, routable) {
  let fuzzymatch = fuzzysearch(view.choose.term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(view.choose.term.toLowerCase(), routable.id.toLowerCase())
  if (fuzzymatch) routable.state = routable.state.replace('fuzzymissmatch', 'fuzzymatch')
  else routable.state = routable.state.replace('fuzzymatch', 'fuzzymissmatch')
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
