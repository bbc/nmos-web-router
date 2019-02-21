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
    { className: 'gel-icon gel-icon-handball', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27 0c-1.9 0-3.5 1.6-3.5 3.5 0 .6.2 1.1.4 1.6L21.5 8l-5-2-4-1h-4l-4 1-3 4 1 1 4-3h2l1 1v9l10 14h2l-5-10-1-6-1-2 3-4 5 1 4-6-1.4-1.3-.5.6c-.1-.2-.1-.5-.1-.8C24.5 2.1 25.6 1 27 1s2.5 1.1 2.5 2.5c0 1.1-.8 2.1-1.8 2.4L27 7c1.9 0 3.5-1.6 3.5-3.5S28.9 0 27 0zM10.5 28h4.3l-5.2-7.3z' }),
    react.createElement('path', { d: 'M12.9 3.5l1.2.3c.2-.4.4-.8.4-1.3C14.5 1.1 13.4 0 12 0c-.2 0-.3 0-.5.1l-.7 3.4h2.1z' })
  )
}
