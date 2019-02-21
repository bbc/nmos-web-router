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
    { className: 'gel-icon gel-icon-film', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M28 10l-2 4h-3l2-4h-3l-2 4h-3l2-4h-3l-2 4h-3l2-4h-3l-2 4-3-3-.1-.1 2-.6-3.1-3.2-1.8.6V32h28V10h-2zm-2 16H6v-2h20v2zm0-4H6v-2h20v2zM24.1 4.9L21 1.7l-2.8.9 3.1 3.2zM18.4 6.7l-3.1-3.2-2.8.9 3 3.2z' }),
    react.createElement('path', { d: 'M12.7 8.5L9.6 5.3l-2.9.9 3.1 3.2zM27.9 3.8L26.7 0l-2.8.9L27 4z' })
  )
}
