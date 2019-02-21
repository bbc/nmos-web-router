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
    { className: 'gel-icon gel-icon-being-creative', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 12h12v20H0zM28.2 0l-1.6 6c-1.6.7-2.9 2.3-3.5 4.4-.5 1.8-.3 3.7.4 5l5.3 1.4c1.3-.8 2.4-2.3 2.8-4.1.2-.7.3-1.3.3-2C32.4 6 31 1.9 28.2 0zM18 32h8l1.8-13-4.4-1.2zM6 0L2 7h8z' })
  )
}
