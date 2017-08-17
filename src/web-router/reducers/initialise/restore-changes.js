export default (data, routables) => {
  if (window.sessionStorage) {
    let routableExists = (routables, id) => {
      let routable = routables.filter(routable => { return routable.id === id })[0]
      if (routable) return true
      else return false
    }

    let changes = JSON.parse(window.sessionStorage.getItem('saved-changes'))

    if (changes && changes.length >= 1 && data.senders.length >= 1 && data.receivers.length >= 1) {
      changes.forEach(change => {
        if (routableExists(data.senders, change.sender.id) && routableExists(data.receivers, change.receiver.id)) {
          routables.stageChange(change.sender.id, change.receiver.id, change.type, true)
        }
      })
    }
  }
}
