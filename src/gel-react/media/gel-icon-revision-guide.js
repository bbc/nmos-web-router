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
    { className: 'gel-icon gel-icon-revision-guide', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '5', r: '5' }),
    react.createElement('path', { d: 'M28 12.4l-5.1 2.3L21 12H11l-1.9 2.8L4 12.4v14.2L16 32l12-5.5V12.4zM6 15.5l9 4.1v9.8l-9-4.1v-9.8zm11 13.9v-9.8l9-4.1v9.8l-9 4.1z' })
  )
}
