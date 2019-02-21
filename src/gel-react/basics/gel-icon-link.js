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
    { className: 'gel-icon gel-icon-link', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18.5 4.6l-1.7-1.7C13-1 6.7-1 2.9 2.9-1 6.7-1 13 2.9 16.8l3.4 3.4c3.8 3.8 10.1 3.8 13.9 0l-3.5-3.5c-1.9 1.9-5 1.9-7 0l-3.4-3.4c-1.9-1.9-1.9-5 0-7 1.9-1.9 5-1.9 7 0L15 8l3.5-3.4z' }),
    react.createElement('path', { d: 'M13.4 27.4l1.7 1.7c3.8 3.8 10.1 3.8 13.9 0 3.8-3.8 4-10 .1-13.8l-3.5-3.5c-3.7-3.8-10-3.8-13.8 0l3.5 3.5c1.9-1.9 5-1.9 7 0l3.4 3.4c1.9 1.9 1.9 5 0 7-1.9 1.9-5 1.9-7 0L17 24l-3.6 3.4z' })
  )
}
