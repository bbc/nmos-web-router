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
    { className: 'gel-icon gel-icon-snow', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M30 19.1l-.5-1.9-6.4 1.7L18 16l5.1-2.9 6.4 1.7.5-1.9-4.5-1.2 4.9-2.8-1-1.8-4.9 2.8 1.2-4.5-1.9-.5-1.7 6.4-5.1 3V8.4l4.7-4.7-1.4-1.4L17 5.6V0h-2v5.6l-3.3-3.3-1.4 1.4L15 8.4v5.9l-5.1-3-1.7-6.4-1.9.5 1.2 4.5-4.9-2.8-1 1.8 4.9 2.8L2 12.9l.5 1.9 6.4-1.7L14 16l-5.1 2.9-6.4-1.7-.5 1.9 4.5 1.2-4.9 2.8 1 1.8 4.9-2.8-1.2 4.5 1.9.5 1.7-6.4 5.1-3v5.9l-4.7 4.7 1.4 1.4 3.3-3.3V32h2v-5.6l3.3 3.3 1.4-1.4-4.7-4.7v-5.9l5.1 3 1.7 6.4 1.9-.5-1.2-4.5 4.9 2.8 1-1.8-4.9-2.8z' })
  )
}
