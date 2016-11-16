export default (actions) => {
  return (nodeEl, routable, routableType) => {
    actions.nodeRendered({nodeEl, routable, routableType})
  }
}
