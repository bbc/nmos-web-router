export default ({id, senders}) => {
  if (id) {
    return senders.filter(sender => {
      return sender.state.includes('expanded')
    })[0].format
  }
  return 'contracting'
}
