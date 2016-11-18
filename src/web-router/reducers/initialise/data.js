function mapSenders (data) {
  let senders = data.senders.map(sender => {
    let flow = data.flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0]
    if (flow) sender.format = flow.format
    else sender.format = 'no'
    return sender
  })
  senders.sort(window.nmos.defaultSort)
  return senders
}

export default (state, action) => {
  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows
  }
  data.receivers = data.receivers
  data.senders = mapSenders(data)
  return data
}
