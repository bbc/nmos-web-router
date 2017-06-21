export default (actions) => {
  return (sID, rID, changeType) => {
    actions.removeChange({ sID, rID, changeType })
  }
}
