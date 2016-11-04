import fuzzysearch from 'fuzzysearch'

function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function fuzzymatch (view, routable) {
  let fuzzymatch = fuzzysearch(view.choose.term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(view.choose.term.toLowerCase(), routable.id.toLowerCase())
  if (fuzzymatch) routable.state = routable.state.replace('fuzzymissmatch', 'fuzzymatch')
  else routable.state = routable.state.replace('fuzzymatch', 'fuzzymissmatch')
  return routable
}

function mapSenders (data, view) {
  return data.senders.map(sender => {
    sender.state = 'checked contracted selectable fuzzymatch'
    sender.node = {
      state: isSenderRouted(sender, data.receivers) ? 'routed' : 'unrouted'
    }
    sender = fuzzymatch(view, sender)
    return sender
  })
}

function mapReceivers (data, view) {
  return data.receivers.map(receiver => {
    receiver.state = 'checked contracted fuzzymatch'
    receiver.node = {
      state: receiver.subscription.sender !== undefined ? 'routed' : 'unrouted'
    }
    receiver = fuzzymatch(view, receiver)
    return receiver
  })
}

export default (data, view) => {
  view.senders = mapSenders(data, view)
  view.receivers = mapReceivers(data, view)
  return view
}
