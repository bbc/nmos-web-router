function updateSendersWithFormat (data) {
  let senders = data.senders.map(sender => {
    let flow = data.flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0]
    if (flow) sender.format = flow.format
    else sender.format = 'no'
    return sender
  })

  senders.sort((left, right) => {
    if (left.format === right.format || left.format === undefined || right.format === undefined) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
    else if (left.format.includes('video')) return -1
    else if (right.format.includes('video')) return 1
    else if (left.format.includes('audio')) return -1
    else if (right.format.includes('audio')) return 1
    return 0
  })

  return senders
}

function getSender (data, id) {
  return data.senders.filter(sender => {
    return sender.id === id
  })[0]
}

function getRoutes (data) {
  return data.receivers
    .filter(receiver => {
      let senderId = receiver.subscription.sender_id
      return senderId !== null && getSender(data, senderId)
    })
    .map(receiver => {
      let sender = getSender(data, receiver.subscription.sender_id)
      return {receiver, sender}
    })
}

export default (state, action) => {
  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows,
    routes: action.routes || state.data.routes
  }
  data.senders = updateSendersWithFormat(data)
  data.routes = getRoutes(data)
  return data
}
