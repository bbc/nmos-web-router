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
    { className: 'gel-icon gel-icon-sneak-peeks', xmlns: 'http://www.w3.org/2000/svg', width: '38', height: '32', viewBox: '0 0 38 32' },
    react.createElement('path', { d: 'M19 11.3c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7z' }),
    react.createElement('path', { d: 'M25 5.7c-1.5-.9-3.3-1.4-5.1-1.6h-1.8c-1.9.1-3.6.7-5.1 1.6C6.3 9 0 16 0 16s6.3 7 13 10.3c1.5.9 3.3 1.4 5.1 1.6h1.8c1.9-.1 3.6-.7 5.1-1.6C31.7 23 38 16 38 16S31.7 9 25 5.7zm-6 18.6c-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3c0 4.6-3.7 8.3-8.3 8.3z' })
  )
}
