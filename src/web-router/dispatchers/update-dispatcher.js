export default (actions) => {
  return () => {
    actions.update({
      name: 'view'
    })
  }
}
