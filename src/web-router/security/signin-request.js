const axios = require('axios')
const qs = require('qs')

export default (username, password) => {
  let clientID = 'EUrkTVN0RNCMhd8FZXcBlcTD'
  let clientSecret = 'fooIeREp5JtETq70bNqmzK9yIHHXFm8MitOBeGhnGzLdNi3u'
  let scope = 'is05'
  let url = 'http://localhost:4999/oauth/token'
  let data = {
    grant_type: 'password',
    scope: scope,
    username: username,
    password: password
  }
  return axios({
    url: url,
    method: 'post',
    data: qs.stringify(data),
    auth: {
      username: clientID,
      password: clientSecret
    }
  })
}
