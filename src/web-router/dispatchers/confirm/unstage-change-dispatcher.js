export default (actions) => {
  return (sID, rID, changeType, oldSenderID) => {
    actions.unstageChange({sID, rID, changeType, oldSenderID})
  }
}
