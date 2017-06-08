export default (actions) => {
  return (rID) => {
    actions.unstageChange({rID})
  }
}
