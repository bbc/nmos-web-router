export default (actions) => {
  return (mode, value) => {
    window.routerHistory.push(`/web-router/${mode}/choose?search=${value}`)
  }
}
