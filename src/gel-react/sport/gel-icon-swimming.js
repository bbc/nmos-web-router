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
    { className: 'gel-icon gel-icon-swimming', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M1.2 12.7l2.8.9 3-1 3 1 3-1 3 1 3-1 3 1V10l-1-3-7-7h-2L5 7l1 1 7-4 2 3v1zM25 12.6l3 1 1.6-.5c.2-.5.4-1 .4-1.6C30 9.6 28.4 8 26.5 8S23 9.6 23 11.5c0 .6.2 1.2.4 1.6l1.6-.5zM31 14.7l-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-1 .3v1.1l1-.4 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 1 .4V15z' })
  )
}
