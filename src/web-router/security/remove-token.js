export default () => {
  if (window.sessionStorage) {
    window.sessionStorage.removeItem('bearerToken')
  }
}
