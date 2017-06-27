export default (actions) => {
  return (sID, rID, changeType, subscriptionID) => {
    actions.unstageChange({sID, rID, changeType, subscriptionID})
  }
}
