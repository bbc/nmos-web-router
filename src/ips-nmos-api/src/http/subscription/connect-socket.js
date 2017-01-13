module.exports = ({ws, callbacks, status}) => {
  ws.onopen = () => {
    status.open()
    callbacks.open()
  }
  ws.onmessage = (evt) => {
    let data = JSON.parse(evt.data)
    callbacks.update(data)
  }
  ws.onclose = () => {
    status.close()
    callbacks.close()
  }
  ws.onerror = (error) => {
    status.error()
    callbacks.error(error)
  }
}
