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
    { className: 'gel-icon gel-icon-funny', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M30.9 15.8s-1.1-7.4-8.6-3.4c0 0-.1 0-.2.1 0-3.5 1.4-7.5 6.7-8.8 0 0-4-4.8-8.7-2.9 0 0-6.5 2.5-5.8 10.3-.3-.4-.5-.6-.5-.6C4.9 1.4 0 11.7 0 11.7c4-.1 6.4 1.6 7.7 3.8v9.4h16.6V18c1.3-1.8 3.4-3.3 6.6-2.2z' }),
    react.createElement('circle', { cx: '2.3', cy: '16.6', r: '2.3' }),
    react.createElement('path', { d: 'M29.7 18.2c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3zM27.4 7.8c0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3-1.3 0-2.3 1.1-2.3 2.3zM7.8 26.7h16.6v4.9H7.8z' })
  )
}
