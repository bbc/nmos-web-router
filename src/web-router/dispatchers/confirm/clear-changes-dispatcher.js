export default (actions) => {
  return (targetState) => {
    actions.clearChanges({targetState})
  }
}
