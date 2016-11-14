import fuzzysearch from 'fuzzysearch'
import ChangeState from '../change-state'
import onGrain from './on-grain'

function remove (routables, grain) {
  routables.forEach(routable => {
    if (grain.post.id === routable.id) {
      let changeState = ChangeState(routable)
      changeState.disable()
    }
  })
}

function add (routables, grain) {
  routables.forEach(routable => {
    if (grain.post.id === routable.id) {
      let changeState = ChangeState(routable)
      changeState.uncheck()
    }
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function fuzzymatch (view, routable, changeState) {
  let fuzzymatch = fuzzysearch(view.choose.term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(view.choose.term.toLowerCase(), routable.id.toLowerCase())
  if (fuzzymatch) changeState.fuzzymatch()
  else changeState.fuzzymissmatch()
  return routable
}

function mapSenders (data, view) {
  return data.senders.map(sender => {
    let changeState = ChangeState(sender)
    changeState.check().contract().selectable()
    if (isSenderRouted(sender, data.receivers)) changeState.route()
    else changeState.unroute()
    sender = fuzzymatch(view, sender, changeState)
    return sender
  })
}

function mapReceivers (data, view) {
  return data.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    changeState.check().contract().notSelectable()
    if (receiver.subscription.sender) changeState.route()
    else changeState.unroute()
    receiver = fuzzymatch(view, receiver, changeState)
    return receiver
  })
}

export default (data, view, action) => {
  view.senders = mapSenders(data, view)
  view.receivers = mapReceivers(data, view)
  onGrain(view[action.name], action.update[action.name], {
    remove,
    add
  })
  return view
}
