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
    { className: 'gel-icon gel-icon-calendar', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M24 13h4v4h-4zM22 0h2v5h-2zM8 0h2v5H8zM19 13h4v4h-4zM14 13h4v4h-4zM9 13h4v4H9zM24 18h4v4h-4zM19 18h4v4h-4zM14 18h4v4h-4zM9 18h4v4H9zM4 18h4v4H4zM19 23h4v4h-4zM14 23h4v4h-4zM9 23h4v4H9zM4 23h4v4H4z' }),
    react.createElement('path', { d: 'M2 9h30V2h-7v4h-4V2H11v4H7V2H0v7zM30 11v19H2V11H0v21h32V11z' })
  )
}
