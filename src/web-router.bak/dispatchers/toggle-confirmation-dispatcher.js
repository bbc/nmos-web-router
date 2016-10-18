export default (actions) => {
  return (index, side) => {
    actions.toggleConfirmation({
      index, side
    })
  }
}
