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
    { className: 'gel-icon gel-icon-try', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { fill: '#4E7A22' },
      react.createElement('path', { d: 'M2 14v8h5l8-8zM17 15l-7 7h20v-7z' })
    ),
    react.createElement('path', { fill: '#FFF', d: 'M26.8 13.7c-.5 0-.9-.2-1.2-.6-.4-.5-.5-1.1-.2-1.8.2-.7.7-1.3 1.3-1.9.6-.5 1.4-.9 2.1-1h.6c.5 0 .9.2 1.2.6.4.5.5 1.1.2 1.8-.2.7-.7 1.3-1.3 1.9-.6.5-1.4.9-2.1 1-.2.1-.4.1-.6 0z' }),
    react.createElement('path', { d: 'M30.6 8.7c-.3-.4-.8-.6-1.4-.6h-.7c-.8.1-1.7.5-2.4 1.2-.7.6-1.3 1.4-1.5 2.2-.3.8-.2 1.6.3 2.1.3.4.8.6 1.3.6h.7c.8-.1 1.7-.5 2.4-1.2.7-.6 1.3-1.4 1.5-2.2.3-.9.2-1.6-.2-2.1zm-4.3 4.5c-.2 0-.5-.1-.7-.3-.2-.3-.2-.7-.1-1.2.2-.6.6-1.2 1.2-1.7.7-.5 1.3-.9 2-1h.5c.3 0 .5.1.7.3.2.3.2.7.1 1.2-.2.6-.6 1.2-1.2 1.7s-1.3.8-1.9.9c-.3.1-.5.1-.6.1M27.7 2.5c1.4-.5 2.9.3 3.3 1.7l-3.7 3.2c-.6-.3-1.2-.9-1.4-1.6-.4-1.4.4-2.9 1.8-3.3zM8 2H6.7l2 6.8 3.3-.3z' }),
    react.createElement(
      'g',
      null,
      react.createElement('path', { d: 'M23.3 8l-6.5 2.3-3.3-.8L7 10 1.3 0H0l5 13 11 2h5.5l-.8-1.6zM24.9 12.5l1.8-3L25.3 8h-.6L22 13.3l.7 1.7H32v-1.7z' })
    )
  )
}
