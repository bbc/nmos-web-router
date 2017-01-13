export default ({senders, flows}) => {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
  })
}
