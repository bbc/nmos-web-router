export default (actions) => {
  return (routable) => {
    actions.toggleLeft({ routable })
  }
}
