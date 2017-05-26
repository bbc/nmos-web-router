export default (actions) => {
  return (index) => {
    actions.unstageChange({index})
  }
}
