export default (actions) => {
  return () => {
    actions.checkForExpired()
  }
}
