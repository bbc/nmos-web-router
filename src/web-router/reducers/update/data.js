import onGrain from './on-grain'

function updateReceiversWithSenders (data) {
  return data.receivers.map(receiver => {
    if (receiver.subscription.sender_id) {
      receiver.subscription.sender = data.senders.filter(sender => {
        return sender.id === receiver.subscription.sender_id
      })[0]
    }
    return receiver
  })
}

function updateSendersWithFlows (data) {
  let senders = data.senders.map(sender => {
    let flow = data.flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0]
    if (flow) sender.format = flow.format
    else sender.format = 'no'
    return sender
  })
  return senders
}

function add (routables, grain) {
  let post = grain.post
  let routable = routables.filter(routable => {
    return routable.id === post.id
  })[0]
  if (routable === undefined) routables.push(post)
}

function update (routables, grain) {
  routables.forEach(routable => {
    if (routable.id === grain.pre.id) {
      Object.keys(grain.post).forEach(key => {
        let value = grain.post[key]
        routable[key] = value
      })
    }
  })
}

export default (state, action) => {
  let data = Object.assign({}, state.data) || {}
  onGrain(data[action.name], action.update[action.name], {
    update,
    add
  })

  data[action.name].sort(window.nmos.defaultSort)

  updateReceiversWithSenders(data)
  updateSendersWithFlows(data)

  return data
}
