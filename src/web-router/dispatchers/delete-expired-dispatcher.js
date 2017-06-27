export default (actions) => {
  return () => {
    actions.deleteExpired()
  }
}
