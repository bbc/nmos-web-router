import fuzzysearch from 'fuzzysearch'
import ChangeState from '../change-state'

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

function mapSender (sender, data, view) {
  sender = Object.assign({}, sender)
  let changeState = ChangeState(sender)
  changeState.check().contract().selectable()
  if (isSenderRouted(sender, data.receivers)) changeState.route()
  else changeState.unroute()
  sender = fuzzymatch(view, sender, changeState)
  return sender
}

function mapReceiver (receiver, view, senders) {
  receiver = Object.assign({}, receiver)
  let changeState = ChangeState(receiver)
  changeState.check().contract().notSelectable()
  if (receiver.subscription.sender_id !== null) {
    let sender = senders.filter(sender => {
      return sender.id === receiver.subscription.sender_id
    })[0]
    receiver.subscription.sender = sender
    changeState.route()
  } else changeState.unroute()
  receiver = fuzzymatch(view, receiver, changeState)
  return receiver
}

function mapSenders (data, view) {
  return data.senders.map(sender => {
    return mapSender(sender, data, view)
  })
}

function mapReceivers (data, view, senders) {
  return data.receivers.map(receiver => {
    return mapReceiver(receiver, view, senders)
  })
}

export default (data, view) => {
  view.senders = mapSenders(data, view)
  view.receivers = mapReceivers(data, view, view.senders)
  ChangeState(view.expandedSender).contract().unroute()
  return view
}
