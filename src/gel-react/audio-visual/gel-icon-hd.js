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

var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-hd', xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '32', viewBox: '0 0 48 32' },
    react.createElement('path', { d: 'M0 0h48v32H0z' }),
    react.createElement('path', { fill: '#FFF', d: 'M9 8h4.2v5.8h5.5V8h4.2v16h-4.2v-6.6h-5.5V24H9V8zM26 8h6.9c4.9 0 7.8 3 7.8 7.9 0 5.2-3 8.1-7.8 8.1H26V8zm4.2 12.4h2c3.2-.1 4.4-1.3 4.4-4.5 0-2.9-1.6-4.3-4.4-4.3h-2v8.8z' })
  )
}
