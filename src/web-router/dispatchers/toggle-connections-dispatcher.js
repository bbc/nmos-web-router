export default (actions) => {
  return (viewName, viewType, id) => {
    actions.toggleConnections({viewName, viewType, id})
  }
}
