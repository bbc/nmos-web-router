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
    { className: 'gel-icon gel-icon-family-activities', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18.1 19.1v.3c1.1.6 2.3.9 3.7.9 4.3 0 7.7-3.4 7.7-7.6 0-4.2-3.5-7.6-7.7-7.6-4.3 0-7.7 3.4-7.7 7.6v.8c2.4.8 4 3 4 5.6zM29.5 21.9H17.4c-.3.6-.7 1.1-1.2 1.6H18l1.9 6.4H32l-2.5-8zM12 23.5c2.5 0 4.5-2 4.5-4.4 0-2.4-2-4.4-4.5-4.4s-4.5 2-4.5 4.4c.1 2.4 2.1 4.4 4.5 4.4zM7.6 25.1L5.9 30h12.3l-1.7-4.9z' }),
    react.createElement(
      'g',
      null,
      react.createElement('path', { d: 'M12.3 7.4c.4.2.8.3 1.3.2.9-.2 1.4-1.1 1.2-2-.2-.9-1.2-1.4-2-1.2-.4.1-.8.4-1 .8v-.1l-.8-3-3.5.8c.3.2.6.5.7.9.2.9-.3 1.8-1.2 2-.9.3-1.8-.2-2-1.1-.1-.4 0-.8.1-1.2l-3.3.9.8 3.2c-.3-.2-.8-.4-1.3-.2-.9.2-1.4 1.2-1.2 2 .2.9 1.2 1.4 2 1.2.5-.1.9-.5 1.1-.9l.8 3.2 3.2-.8c-.3-.2-.5-.5-.6-.9-.2-.9.3-1.8 1.2-2 .9-.2 1.8.3 2 1.2.1.4.1.7-.1 1.1l3.3-.9-.8-3 .1-.2z' })
    )
  )
}
