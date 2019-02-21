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
    { className: 'gel-icon gel-icon-just-for-fun', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18.5 19.2c5.1-1.4 8.1-6.6 6.7-11.6C23.8 2.5 18.6-.5 13.6.9 8.5 2.2 5.5 7.4 6.8 12.5c1.4 5 6.6 8 11.7 6.7zm2.3-7.7c.6 2.4-.8 4.9-3.2 5.5-2.4.6-4.9-.8-5.5-3.2l8.7-2.3zM25.5 21.5h-19l-3 10h25z' })
  )
}
