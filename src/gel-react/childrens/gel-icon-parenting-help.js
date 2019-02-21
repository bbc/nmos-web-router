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
    { className: 'gel-icon gel-icon-parenting-help', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15 18v.4c1.3.7 2.9 1.1 4.5 1.1 5.2 0 9.5-4.3 9.5-9.5S24.7.5 19.5.5 10 4.8 10 10v1c2.9 1 5 3.8 5 7zM29 21.5H14.1c-.4.7-.9 1.4-1.5 2h2.2l2.4 8H32l-3-10zM7.5 23.5c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5S2 15 2 18s2.5 5.5 5.5 5.5zM2 25.5l-2 6h15l-2-6z' })
  )
}
