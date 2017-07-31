export default (senders, receivers) => {
  if (window.sessionStorage) {
    let saveCheckedStatus = (routables, type) => {
      let checkedArray = []
      routables.forEach(routable => {
        let thisRoutable = {id: routable.id, checked: true}
        if (routable.state.includes('unchecked')) thisRoutable.checked = false
        checkedArray.push(thisRoutable)
      })
      if (checkedArray.length > 0) {
        window.sessionStorage.setItem(`${type}-checked`, JSON.stringify(checkedArray))
      }
    }
    saveCheckedStatus(senders, 'senders')
    saveCheckedStatus(receivers, 'receivers')
  }
}
