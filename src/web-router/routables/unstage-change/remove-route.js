export default ({data, receiver}) => {
  data.routes = data.routes.filter(route => {
    return !(route.receiver.id === receiver.id && route.state.includes('staged-route'))
  })
}
