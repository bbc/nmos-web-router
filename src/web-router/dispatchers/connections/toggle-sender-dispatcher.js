export default (actions) => {
  return (routable) => {
    actions.toggleSender({ routable })
  }
}
