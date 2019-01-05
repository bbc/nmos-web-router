const axios = require('axios')
const qs = require('qs')
import { getServiceUrl } from '../../init-nmos'

export default (username, password) => {
  let clientID = 'cdqgP5I6aMI3pvqacjkgroM7'
  let clientSecret = 'rectlNa4lGtC60BmFaE9gwKJQXcCnz0DDOxfUt7eRe7A0mby'
  let scope = 'is05'
  let data = {
    grant_type: 'password',
    scope: scope,
    username: username,
    password: password
  }
  // let url = 'http://172.29.80.117:4999/oauth/token' // TODO discover URL via mDNS

  return getServiceUrl('nmos-auth', 'v1.0')
    .then(href => {
      return axios({
        url: href + '/token',
        method: 'post',
        data: qs.stringify(data),
        auth: {
          username: clientID,
          password: clientSecret
        }
      })
    })
}
