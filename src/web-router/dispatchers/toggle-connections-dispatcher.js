import discovery from '../../ips-api/discovery'

const usestub = window.location.search.includes('stub')
const routeUrl = 'http://172.29.80.128:12345'
const getUrl = 'http://ipstudio-discovery.rd.bbc.co.uk:8870'

export default (actions) => {
  return (viewName, viewType, id) => {
    actions.toggleConnections({
      route: function (receiverId, sender) {
        discovery(usestub, routeUrl)
          .route(receiverId, sender)
          .then(responseSender => {
            discovery(usestub, getUrl)
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
      viewName,
      viewType,
      id
    })
  }
}
