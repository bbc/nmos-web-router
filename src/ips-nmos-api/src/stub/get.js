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

let defaultSort = require('../default-sort')

module.exports = function (collections, delay, type) {
  return (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        let data = collections[type].find({ id })
        if (data === null || !data.hasOwnProperty('id')) {
          setTimeout(function () {
            reject('404')
          }, delay())
        } else {
          setTimeout(function () {
            resolve(data)
          }, delay())
        }
      } else {
        setTimeout(function () {
          resolve(collections[type].all().sort(defaultSort))
        }, delay())
      }
    })
  }
}
