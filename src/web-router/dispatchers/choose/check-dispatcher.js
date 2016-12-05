export default (actions) => {
  return (routable, routableType) => {
    actions.check({routable, routableType})
  }
}
