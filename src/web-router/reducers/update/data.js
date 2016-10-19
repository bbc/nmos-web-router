function update (routables, data) {
  if (data.pre === {}) console.log('adding')
  else if (data.post === {}) console.log('removing')
  else {
    return routables.map(routable => {
      if (routable.id === data.post.id) return data.post
      return routable
    })
  }
  return routables
}


export default (state, action) => {
  let data = Object.assign({}, state.data)
  if (action.update.receivers) data.receivers = update(data.receivers, action.update.receivers)
  else if (action.update.senders) data.senders = update(data.senders, action.update.senders)
  return data
}
