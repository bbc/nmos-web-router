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
    { className: 'gel-icon gel-icon-football', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M10.8 14.4l2 6h6.3l2-6-5.1-3.7z' }),
    react.createElement('path', { d: 'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm11.3 25l-.3-2.3-5.3 1.1-2.7 4.7 2.1 1c-1.6.6-3.3 1-5.1 1-1.8 0-3.5-.3-5.1-.9l2.1-1-2.7-4.7L5 22.7l-.3 2.4c-2-2.5-3.2-5.6-3.2-9.1v-.6l1.6 1.7 3.7-4-.6-5.5-2.3.5C5.8 5.2 8.7 3 12.1 2L11 4.1l5 2.2 5-2.2L19.8 2c3.4.9 6.4 3.1 8.3 6l-2.3-.4-.6 5.4 3.7 4 1.6-1.7v.7c0 3.4-1.2 6.6-3.2 9z' })
  )
}
