import ChangeState from '../change-state'

function mapReceivers (data, receivers) {
  return receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    let matchingRoutable = data.receivers.filter(r => {
      return receiver.id === r.id
    })[0]
    changeState.unroute()
    if (matchingRoutable === undefined) changeState.route().disable()
    else if (matchingRoutable.subscription.sender) changeState.route()
    return receiver
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function mapSenders (data, senders) {
  return senders.map(sender => {
    let changeState = ChangeState(sender)
    if (isSenderRouted(sender, data.receivers)) changeState.route()
    else changeState.unroute()
    return sender
  })
}

export default (data, view) => {
  view.receivers = mapReceivers(data, view.receivers)
  view.senders = mapSenders(data, view.senders)
  return view
}
