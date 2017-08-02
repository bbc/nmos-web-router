const expirationTimeMins = 10 // Set the desired timeout in minutes here
const expirationTimeMS = expirationTimeMins * 60 * 1000

export default (data) => {
  function isExpired (routable) {
    if (routable.state.includes('removed')) {
      if (routable.timeRemoved && routable.state.includes('unchecked')) {
        let timeNow = new Date().getTime()
        let idleMS = timeNow - routable.timeRemoved
        return (idleMS > expirationTimeMS)
      }
    }
    return false
  }

  data.senders = data.senders.filter(sender => {
    return !(isExpired(sender))
  })

  data.receivers = data.receivers.filter(receiver => {
    return !(isExpired(receiver))
  })
}
