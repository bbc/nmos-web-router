export default ({senders, flows, changes}) => {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
    if (sender.state && sender.format === 'no') {
      if (!sender.state.includes('removed')) sender.format = 'help'
    }
  })

  if (changes) {
    changes.forEach(change => {
      let flow = flows.filter(flow => {
        return flow.id === change.sender.flow_id
      })[0] || {format: 'no'}
      change.sender.format = flow.format
    })
  }
}
