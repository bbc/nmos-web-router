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

export default (data, type, newData) => {
  if (!data.hasOwnProperty(type)) data[type] = []
  newData.forEach(newValue => {
    let pushed = false
    data[type].forEach((oldValue, index) => {
      if (oldValue.id === newValue.id) {
        let toUpdate = data[type][index]
        Object.keys(newValue).forEach(key => {
          toUpdate[key] = newValue[key]
        })
        pushed = true
      }
    })
    if (!pushed) data[type].push(newValue)
  })
}
