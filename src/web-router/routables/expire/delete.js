export default (data) => {
  let senders = data.senders
  let receivers = data.receivers

  for (var i = receivers.length - 1; i >= 0; i--) {
    if (receivers[i].state.includes('expired')) {
      console.log('Deleting ' + receivers[i].label)
      receivers.splice(i, 1)
    }
  }

  for (var j = senders.length - 1; j >= 0; j--) {
    if (senders[j].state.includes('expired')) {
      console.log('Deleting ' + senders[j].label)
      senders.splice(j, 1)
    }
  }
}
