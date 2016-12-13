export default (actions, error) => {
  return (error) => {
    let message = error
    if (error.message) message = error.message
    console.error(error)
    let timeout = setTimeout(function () {
      actions.allClear()
    }, 30 * 1000)
    actions.alert({
      message,
      timeout
    })
  }
}
