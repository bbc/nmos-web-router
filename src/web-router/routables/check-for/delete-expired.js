export default (data) => {
  data.senders = data.senders.filter(sender => {
    return !(sender.state.includes('expired'))
  })
  data.receivers = data.receivers.filter(receiver => {
    return !(receiver.state.includes('expired'))
  })
}
