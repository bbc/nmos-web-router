export default (actions) => {
  return (viewName, viewType, id) => {
    actions.toggleConnections({
      route: function (response) {
        console.log('need to upate the routes with the correct ones...')
      },
      viewName,
      viewType,
      id
    })
  }
}
