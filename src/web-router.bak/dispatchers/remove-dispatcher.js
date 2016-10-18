export default (actions) => {
  return (route) => {
    actions.remove(route)
  }
}
