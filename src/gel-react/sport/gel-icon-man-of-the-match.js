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
    { className: 'gel-icon gel-icon-man-of-the-match', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M3.9 8.2L2.5 5.1l.4-.5 1.4 1.6h.4l.4-1 .4.6v1.8zM27.8 11L29 9.8l-.8-.5-.4.1-.4-.1-.4-.6-.2.1-.4 1.7z' }),
    react.createElement('path', { fill: '#4E7A22', d: 'M0 28h32v4H0z' }),
    react.createElement('path', { d: 'M9.5 32l-.7-5.7L7 20.6l-2.1-6.5-.6-4.6 1.6-.6 3.9 10.2 3.2 2 3.2.3 5.2-4.2 4.6-6 1.3.5-3.6 7.3-4.6 5.3-.2 2.4-.5 5.3z' }),
    react.createElement('path', { d: 'M13.7 18.7c1 .2 2 0 2.8-.5l-1.1-6.4h-.1c-1.9-.4-3.8.8-4.2 2.7-.5 1.9.7 3.8 2.6 4.2z' })
  )
}
