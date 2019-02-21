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
    { className: 'gel-icon gel-icon-5-mins', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15.4 6c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 22.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zM25.378 4.88l4.243 4.242-2.829 2.829-4.242-4.243zM18.4 3c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.3 3-3zm-3 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' }),
    react.createElement('path', { d: 'M16 17.3c-.7 0-1.3.2-1.8.7l.4-2.1h3.8v-1.5h-5.1l-.9 5H14c.4-.5.7-.7 1.4-.7 1 0 1.6.8 1.6 1.7 0 .9-.6 1.8-1.6 1.8-.8 0-1.4-.6-1.5-1.4H12c0 1.9 1.6 2.9 3.4 2.9 1.8 0 3.4-1.4 3.4-3.3 0-1.7-1-3.1-2.8-3.1z' })
  )
}
