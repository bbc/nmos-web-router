export default (actions) => {
  return (rID, sID, changeType, deployed) => {
    actions.removeChange({ rID, sID, changeType, deployed })
  }
}
