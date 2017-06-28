export default (actions) => {
  return (change) => {
    actions.unstageChange({change})
  }
}
