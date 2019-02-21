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
    { className: 'gel-icon gel-icon-gymnastics', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 27v3l6 2h20l6-2v-3H21v-3h4v2h1v-2l-1-1h-4l-1 1v3H7v-3h4v2h1v-2l-1-1H7l-1 1v3M8 5.5C8 4.1 6.9 3 5.5 3 4.2 3 3.1 4 3 5.3L5.2 8h.7l2-2c.1-.2.1-.4.1-.5zM12 8l3.7-1 1.4-2L10 6l-5 5v2l2 4 1.4 5H10l-1-6-1-3 2 2 19 6.4 1-1.4-12-6 6-14h-2l-7 11z' })
  )
}
