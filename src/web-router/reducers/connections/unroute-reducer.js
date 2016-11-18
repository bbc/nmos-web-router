import ChangeState from '../change-state'

function remove (data, sender) {
  let index = -1
  data.forEach((d, i) => {
    if (d.id === sender.id) index = i
  })
  if (index === -1) return data
  if (index === data.length - 1) return data.slice(0, data.length - 1)
  return data.slice(0, index).concat(data.slice(index + 1, data.length))
}

function routing (receiver, sender) {
  let matched = receiver.subscription.routing.filter(r => {
    return r.id === sender.id
  })[0]
  if (matched !== undefined) remove(receiver.subscription.routing, sender)
  return receiver.subscription.routing
}

function unrouting (receiver, sender) {
  let matched = receiver.subscription.unrouting.filter(r => {
    return r.id === sender.id
  })[0]
  if (matched === undefined) return [].concat(receiver.subscription.unrouting, [sender])
  return receiver.subscription.unrouting
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    if (receiver.id === action.receiver.id) {
      changeState.unrouting()
      let sender = Object.assign({}, receiver.subscription.routed)
      receiver.subscription.unrouting = unrouting(receiver, sender)
      receiver.subscription.routing = routing(receiver, sender)
    }
    return receiver
  })
  return merge({ view })
}
