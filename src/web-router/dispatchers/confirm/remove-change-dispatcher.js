export default (actions) => {
  return (index) => {
    actions.removeChange({index})
  }
}
