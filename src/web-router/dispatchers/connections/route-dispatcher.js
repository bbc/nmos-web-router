export default (actions) => {
  return (receiver, senders) => {
    let sender = senders.filter(receiver => {
      return receiver.state.includes('expanded')
    })[0]
    actions.route({ receiver, sender })
    window.nmos.route(receiver.id, sender)
  }
}
