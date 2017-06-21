export default (actions) => {
  return (sID, rID, changeType) => {
    actions.unstageChange({sID, rID, changeType})
  }
}
