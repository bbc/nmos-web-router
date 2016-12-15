export default (actions) => {
  return (message) => {
    console.info(message)
    let timeout = setTimeout(function () {
      actions.allClear()
    }, 30 * 1000)
    actions.info({
      message,
      timeout
    })
  }
}
