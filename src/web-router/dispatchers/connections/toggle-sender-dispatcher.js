export default (actions) => {
  return (sender) => {
    actions.toggleSender({ sender })
  }
}
