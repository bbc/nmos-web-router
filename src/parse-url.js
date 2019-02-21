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

export default (url) => {
  let parser = document.createElement('a')
  parser.href = url

  let query = {}
  let queries = parser.search.replace(/^\?/, '').replace(/\/$/, '').split('&')
  for (let i = 0; i < queries.length; i++) {
    let split = queries[i].split('=')
    let value = split[1] || ''
    query[split[0]] = {}
    query[split[0]].string = value
    query[split[0]].decode = decodeURIComponent(value)
    query[split[0]].number = parseInt(value)
    query[split[0]].boolean = value === 'true' || value === ''
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    query: function (name) {
      let defaultQuery = {
        boolean: false,
        number: NaN,
        string: '',
        decode: ''
      }
      if (!query.hasOwnProperty(name)) return defaultQuery
      return query[name]
    },
    hash: parser.hash
  }
}
