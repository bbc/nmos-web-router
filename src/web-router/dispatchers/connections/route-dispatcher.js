export default (actions) => {
  return (receiver, senders) => {
    let sender = senders.filter(sender => {
      return sender.state.includes('expanded')
    })[0]

    actions.route({ receiver, sender })

    sender = Object.assign({}, sender)
    delete sender.format
    delete sender.state
    delete sender.stateString
    window.nmos.route(receiver.id, sender)
  }
}
