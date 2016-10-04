export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let notLoadedIndex = view.loading.notLoaded.indexOf(action.name)
  if (notLoadedIndex !== -1) view.loading.notLoaded.splice(notLoadedIndex, 1)
  if (!view.loading.loaded.includes(action.name) && !view.loading.errored.includes(action.name)) view.loading.errored.push(action.name)
  view.loading.status = 'error'
  return merge({
    initialised: true,
    view
  })
}
