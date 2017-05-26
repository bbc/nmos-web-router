export default (actions) => {
  return (index) => {
    actions.clearChanges({index})
  }
}
