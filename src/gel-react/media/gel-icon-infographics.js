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
    { className: 'gel-icon gel-icon-infographics', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M24 18.1v-6.2c2.8-.5 5-2.9 5-5.9 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 3 2.2 5.4 5 5.9v6.2c-1.3.2-2.5.7-3.4 1.5l-5.1-5.1c.3-.6.5-1.3.5-2C14 10 12 8 9.5 8S5 10 5 12.5 7 17 9.5 17c1 0 2-.4 2.7-.9l5 5c-.6.9-1 1.9-1.1 2.9H7.8c-.4-1.2-1.5-2-2.8-2-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2h8.3c.5 3.4 3.4 6 6.9 6 3.9 0 7-3.1 7-7 0-3.5-2.6-6.4-6-6.9z' })
  )
}
