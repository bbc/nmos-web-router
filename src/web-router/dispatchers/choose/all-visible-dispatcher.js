export default (actions) => {
  return (routableType) => {
    actions.allVisible({ routableType })
  }
}
