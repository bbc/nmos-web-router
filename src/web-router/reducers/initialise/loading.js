function getNotLoading (data) {
  let notLoaded = []
  if (data.receivers.length === 0) notLoaded.push('receivers')
  if (data.senders.length === 0) notLoaded.push('senders')
  if (data.flows.length === 0) notLoaded.push('flows')
  return notLoaded
}

function getLoaded (data) {
  let loaded = []
  if (data.receivers.length !== 0) loaded.push('receivers')
  if (data.senders.length !== 0) loaded.push('senders')
  if (data.flows.length !== 0) loaded.push('flows')
  return loaded
}

export default (data, view) => {
  return {
    notLoaded: getNotLoading(data),
    loaded: getLoaded(data),
    errored: view.loading.errored
  }
}
