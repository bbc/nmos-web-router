function mapReceivers (data, receivers) {
  return receivers.map(routable => {
    let matchingRoutable = data.receivers.filter(r => {
      return routable.id === r.id
    })[0]
    routable.node.state = 'unrouted'
    if (matchingRoutable === undefined) routable.state = 'disabled'
    else if (matchingRoutable.subscription.sender) routable.node.state = 'routed'
    return routable
  })
}

export default (data, connections) => {
  connections.receivers = mapReceivers(data, connections.receivers)

  return connections
}
