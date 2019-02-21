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
    { className: 'gel-icon gel-icon-equestrian', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M6.6 23.1L0 20.6V32h7.6zM6.7 5.2c.2 0 .4.1.6.1h.1l2.2-3.7C9.3.6 8.4 0 7.4 0 5.9 0 4.7 1.2 4.7 2.6c0 .8.4 1.6 1 2 .3.3.7.5 1 .6zM29 23h3v-1.5h-3.7z' }),
    react.createElement('path', { d: 'M30 9h-3s-10 0-13.7 7.7L8 14V8L7 7 3 5 1 8l1 6-2 5 8 3 1 9 2 1h8l2-5 .9-6.4-16-2.9.1-.7.1-.5L27 20h5V7l-2 2zm-2.9 10l-4.4-.7L24 15c.2 1.5 1.3 2.7 2.8 2.9l.5 1.1h-.2zm2.9-4h-1v-2l1 1v1z' })
  )
}
