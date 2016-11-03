export default (actions) => {
  return (value) => {
    window.routerHistory.push(`/web-router/choose?search=${value}`)
  }
}
