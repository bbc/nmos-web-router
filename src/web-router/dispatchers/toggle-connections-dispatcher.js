export default (actions) => {
  return (viewType, id) => {
    actions.toggleConnections({
      route: function (receiverId, sender) {
        window.nmos
          .route(receiverId, sender)
          .then(responseSender => {
            window.nmos
              .receivers(receiverId)
              .then(responseReceiver => {
                actions.updateData({
                  receivers: [responseReceiver]
                })
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            console.log(err)
          })
      },
      viewType,
      id
    })
  }
}
