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
    { className: 'gel-icon gel-icon-platform', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M8.5 25.5h11.7V32H8.5zM20.3 18.9H32v6.5H20.3zM14.2 18.1l1 6.5h1.4l-.2-7.7-4-2.2L13.6 9s1.8 3.5 3.6 2.4c1.6-1 2.5-4.9 2.5-4.9l-1.2-.6-2 3.3L15.1 7c-1.4-2.2-3.6-2.1-3.6-2.1-2.2-.3-4.6 1.6-4.6 1.6s-1.2.7-2.8 2.6C2.6 11 1.9 13 1.9 13l1.1.6 2.6-3.3 2.8-1.9-1.3 6-1 3.4L0 20.1l.6 1.3 7.6-1.8 1.9-2.6 4.1 1.1z' }),
    react.createElement('circle', { cx: '12.3', cy: '2', r: '2' })
  )
}
