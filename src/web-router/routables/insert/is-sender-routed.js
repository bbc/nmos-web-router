export default ({sender, receivers}) => {
  return receivers.some(receiver => {
    return receiver.subscription.sender_id === sender.id && !receiver.state.includes('removed')
  })
}
