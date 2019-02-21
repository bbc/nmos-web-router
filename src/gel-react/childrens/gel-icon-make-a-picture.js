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
    { className: 'gel-icon gel-icon-make-a-picture', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M24.2 2.1c.5 1.1.8 2.5.9 3.9v20.2H6.8V6h7.6c.5-1.1 1.3-2 2.2-2.6l.4-1.3H3V32h26V2.1h-4.8zM18 30h-4v-2h4v2z' }),
    react.createElement('path', { d: 'M12.8 23.2h5.7l1.3-9.3-3.2-.8zM16.7 10.9l3.7 1c.9-.6 1.7-1.6 2-2.9.1-.5.2-.9.2-1.4C23 4.2 22 1.3 20 0l-1.1 4.3c-1.1.5-2.1 1.6-2.5 3.2-.4 1.2-.2 2.5.3 3.4z' })
  )
}
