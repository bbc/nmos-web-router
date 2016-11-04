export default (actions) => {
  return (routable) => {
    actions.check({routable})
  }
}
