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
    { className: 'gel-icon gel-icon-canoeing', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M19 13c-1.7 0-3 1.3-3 3 0 .3 0 .6.1.8l1.8 1.5 4-3.2c-.4-1.2-1.6-2.1-2.9-2.1z' }),
    react.createElement('path', { d: 'M22.6 11.1h-.2l2.2 8.1L20 22l-1.8-1.5-1.9 2.3L20 25l5.1-3.9.5 1.8-1.4 2.4.7 2.6.1-.1 3 1 2.1-.7L29 24l-2.4-1.4-3.2-11.8z' }),
    react.createElement('path', { d: 'M7 27.8l3 1 3-1 3 1s3.1-1 3-1c-1.7-1.4-3.8-2.3-6-2.6v-.7l2-2.5 2-2.5-3-2.5v-2l2-3 6.1-2.3.9-.4-.6-2.1 1.4-2.4L22.5 0l-4.8 1.3L19 6.1l2.5 1.4.1.5-7.6 2L2.2 28.2l1.8.6 3-1zM31 29.9l-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-1 .4v1l1-.3 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 1 .3v-1z' })
  )
}
