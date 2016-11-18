import ChangeState from '../change-state'

function routing (routable, sender) {
  let matched = routable.subscription.routing.filter(r => {
    return r.id === sender.id
  })[0]
  if (matched === undefined) return [].concat(routable.subscription.routing, [sender])
  return routable.subscription.routing
}

function remove (data, sender) {
  let index = -1
  data.forEach((d, i) => {
    if (d.id === sender.id) index = i
  })
  if (index === -1) return data
  if (index === data.length - 1) return data.slice(0, data.length - 1)
  return data.slice(0, index).concat(data.slice(index + 1, data.length))
}

function unrouting (routable, sender) {
  let matched = routable.subscription.unrouting.filter(r => {
    return r.id === sender.id
  })[0]
  if (matched !== undefined) remove(routable.subscription.unrouting, sender)
  return routable.subscription.unrouting
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    Object.assign({}, routable)
    let changeState = ChangeState(routable)
    if (routable.id === action.receiver.id) {
      changeState.route()
      routable.subscription.routing = routing(routable, action.sender)
      routable.subscription.unrouting = unrouting(routable, action.sender)
    }

    return routable
  })
  view.senders = view.senders.map(routable => {
    Object.assign({}, routable)
    let changeState = ChangeState(routable)
    if (routable.id === action.sender.id) changeState.route()
    return routable
  })
  let changeState = ChangeState(view.expandedSender)
  changeState.route()
  return merge({ view })
}
