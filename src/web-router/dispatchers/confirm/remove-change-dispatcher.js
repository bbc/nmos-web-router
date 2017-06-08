export default (actions) => {
  return (rID) => {
    actions.removeChange({rID})
  }
}
