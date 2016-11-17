export default (actions) => {
  return (receiver, senders) => {
    let sender = senders.filter(receiver => {
      return receiver.state.includes('expanded')
    })[0]
    sender = Object.assign({}, sender)
    delete sender.node
    delete sender.nodeEl
    delete sender.format
    delete sender.state
    actions.route({ receiver, sender })
    window.nmos.route(receiver.id, sender)
  }
}
