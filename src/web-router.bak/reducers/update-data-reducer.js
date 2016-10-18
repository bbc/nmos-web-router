import updateConnections from './update-connections-reducer'

function updateRoutables (dataRroutables, newRoutables) {
  return dataRroutables.map(dataRoutable => {
    let newRoutable = newRoutables.filter(newRoutable => {
      return newRoutable.id === dataRoutable.id
    })[0]
    if (newRoutable) return newRoutable
    return dataRoutable
  })
}

function getSender (data, id) {
  return data.senders.filter(sender => {
    return sender.id === id
  })[0]
}

function getRoutes (data) {
  return data.receivers
    .filter(receiver => {
      let senderId = receiver.subscription.sender_id
      return senderId !== null && getSender(data, senderId)
    })
    .map(receiver => {
      let sender = getSender(data, receiver.subscription.sender_id)
      return {receiver, sender}
    })
}

export default (state, action, merge) => {
  let data = Object.assign({}, state.data)
  if (action.receivers) data.receivers = updateRoutables(data.receivers, action.receivers)
  data.routes = getRoutes(data)
  let updateDataState = merge({ data })
  updateConnections(updateDataState, action, merge)
}
