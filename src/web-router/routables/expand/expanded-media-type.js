export default ({id, senders, flows}) => {
  if (id) {
    let flowID = senders.filter(sender => {
      return sender.state.includes('expanded')
    })[0].flow_id
    let flow = flows.filter(flow => {
      return flow.id === flowID
    })[0]
    return flow.media_type
  }
  return 'contracting'
}
