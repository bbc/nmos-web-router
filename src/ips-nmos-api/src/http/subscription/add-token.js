module.exports = () => {
  const TOKEN_KEY = 'accessToken'
  if (!window.sessionStorage) {
    console.error('Please use a browser that supports Session Storage')
    return
  }

  return {
    fetch () {
      if (window.sessionStorage.getItem(TOKEN_KEY)) {
        let accessToken = window.sessionStorage.getItem(TOKEN_KEY)
        return accessToken
      }
    },
    getAuthHeader () {
      let accessToken = this.fetch()
      if (accessToken) {
        let authString = `Bearer ${accessToken}`
        return authString
      }
    },
    addAuthHeader (headers) {
      let authString = this.getAuthHeader()
      if (authString) {
        if (headers) {
          headers['Authorization'] = authString
        } else {
          headers = {'Authorization': authString}
        }
        return headers
      }
    },
    addAuthQuery (url) {
      let accessToken = this.fetch()
      if (accessToken) {
        url.searchParams.append('access_token', accessToken)
      }
      return url
    }
  }
}
