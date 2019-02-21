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
    { className: 'gel-icon gel-icon-tube-a', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18 4.2c-.6-.1-1.3-.2-2-.2s-1.4.1-2 .2V6h4V4.2zM7 10v6h3l2-2V7H9zM14 7h4v7h-4z' }),
    react.createElement('circle', { cx: '8.5', cy: '19.5', r: '1.5' }),
    react.createElement('path', { d: 'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm9 23v3h-2v-3H9v3H7v-3H4V11l1-2.1s3.9-5.8 10.9-5.8c7.1 0 10.9 5.8 10.9 5.8L28 11v12h-3z' }),
    react.createElement('circle', { cx: '23.5', cy: '19.5', r: '1.5' }),
    react.createElement('path', { d: 'M25 16v-6l-2-3h-3v7l2 2z' })
  )
}
