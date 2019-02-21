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
    { className: 'gel-icon gel-icon-live-pulse', xmlns: 'http://www.w3.org/2000/svg', width: '60', height: '32', viewBox: '0 0 60 32' },
    react.createElement('path', { d: 'M21.3 10.1H24v10.7h6.5v2.4h-9.3V10.1zM34.6 23.3h-2.7V10.2h2.7v13.1zM45.5 10.2h2.8l-4.5 13.1h-2.6l-4.4-13.1h2.9l2.8 9.9 3-9.9zM59.7 12.5h-6.9v2.8h6.4v2.3h-6.4V21H60v2.4h-9.9V10.2h9.6v2.3z' }),
    react.createElement(
      'g',
      null,
      react.createElement('path', { d: 'M8.6 10.2c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5c.1-3.6 3-6.5 6.5-6.5m0-2.2C3.9 8 0 11.9 0 16.6s3.9 8.6 8.6 8.6 8.6-3.9 8.6-8.6S13.4 8 8.6 8z' }),
      react.createElement('path', { d: 'M8.6 12.3c2.4 0 4.3 1.9 4.3 4.3C13 19 11 21 8.6 21s-4.3-1.9-4.3-4.3 2-4.4 4.3-4.4' })
    )
  )
}
