export default (routables, id) => {
  return routables.filter(routable => {
    return routable.id === id
  })[0]
}
