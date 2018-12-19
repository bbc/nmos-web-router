const axios = require('axios')
const qs = require('qs')

export default (username, password) => {
  let clientID = 'cdqgP5I6aMI3pvqacjkgroM7'
  let clientSecret = 'rectlNa4lGtC60BmFaE9gwKJQXcCnz0DDOxfUt7eRe7A0mby'
  let scope = 'is05'
  let url = 'http://172.29.80.117:4999/oauth/token' // TODO discover URL via mDNS
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
