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
    { className: 'gel-icon gel-icon-mouse', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M10.2 9.1V16h5.6l-.1-1.4c-.4-2.8-2.6-5.1-5.5-5.5zM8.2 9.1c-2.8.4-5.1 2.7-5.5 5.5 0 0 0 .5-.1 1.4h5.6V9.1zM16.1 18H2.4c-.3 2.9-.7 6.5-.7 6.5 0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5l-.6-6.5z' }),
    react.createElement('path', { d: 'M28.8 16h-.4c-2.8-.2-5.1-2.6-5.1-5.5v-3c0-4.1-3.4-7.5-7.5-7.5S8.2 3.4 8.2 7.5V9h2V7.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v3c0 3.9 3 7.2 6.9 7.5h2.1v-2h-1.4z' })
  )
}
