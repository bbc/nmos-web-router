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
    { className: 'gel-icon gel-icon-touch-down', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#FFF', d: 'M19 21h-6l-4 5v6h14v-6z' }),
    react.createElement('path', { fill: '#FFF', d: 'M19 21h-6l-4 5v6h14v-6z' }),
    react.createElement('path', { d: 'M18 6V.7l-.6-.7L16 3.3l-.6.4-1.1-1.4-.3 1L15.3 6z' }),
    react.createElement('path', { d: 'M14 6V.7l.6-.7L16 3.3l.6.4 1-1.4.4 1L16.7 6zM26 7l-1.3 9.7-3.4 3.3H11l-3.3-3.3L6 7H4v12l3 4 2 3 4-5h6l4 5 2-3 3-4V7z' }),
    react.createElement('path', { d: 'M16 8l-4 1.4v4.9c.2 2.1 1.9 3.7 4 3.7s3.8-1.6 4-3.7V9.4L16 8z' }),
    react.createElement('path', { fill: '#FFF', d: 'M19 10l-3-1-3 1v-.1V12h6v-2z' }),
    react.createElement('path', { d: 'M9 26v6h2v-8.5zM13 21l-1 1.2V32h2V21zM16 21h-1v11h2V21zM19 21h-1v11h2v-9.8zM21 32h2v-6l-2-2.5z' })
  )
}
