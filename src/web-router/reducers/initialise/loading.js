// These functions used to check the length of each array and push to notLoaded
// if the length was 0, and push to loaded if greater than 0,
// however it is acceptable to have no senders/receivers/flows
// in the Query API so these checks were no longer suitable
// TODO The 'loading' functionality needs to be changed
function getNotLoading (data) {
  let notLoaded = []
  if (!data.receivers) notLoaded.push('receivers')
  if (!data.senders) notLoaded.push('senders')
  if (!data.flows) notLoaded.push('flows')
  return notLoaded
}

function getLoaded (data) {
  let loaded = []
  if (data.receivers) loaded.push('receivers')
  if (data.senders) loaded.push('senders')
  if (data.flows) loaded.push('flows')
  return loaded
}

export default (data, view, action) => {
  // These flags ensure the checked state of each routable
  // is correctly re-applied when the app is refreshed
  let restoredChecked = view.loading.restoredChecked
  if (action.senders) restoredChecked.senders = true
  if (action.receivers) restoredChecked.receivers = true

  let restoredChanges = false
  if (restoredChecked.senders && restoredChecked.receivers) restoredChanges = true

  return {
    notLoaded: getNotLoading(data),
    loaded: getLoaded(data),
    errored: view.loading.errored,
    restoredChecked: restoredChecked,
    restoredChanges: restoredChanges
  }
}
