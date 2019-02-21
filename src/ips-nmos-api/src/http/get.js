/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var defaultSort = require('../default-sort')
var axios = require('axios')
var constants = require('./constants')

module.exports = function (baseUrl, apiVersion, name, downgrade, downgradeVersion) {
  return function (id) {
    var url = `${baseUrl}/${constants.QUERY_URL}/${apiVersion}/${name}/`
    if (id) url += `${id}/`
    if (downgrade) url += `?query.downgrade=${downgradeVersion}`
    return axios.get(url)
      .then(function (response) {
        var data = response.data
        if (Array.isArray(response.data)) {
          data = response.data.map(function (d) {
            d.type = name
            return d
          })
          data.sort(defaultSort)
        } else data.type = name
        return data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
