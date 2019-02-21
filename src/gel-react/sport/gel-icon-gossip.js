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
    { className: 'gel-icon gel-icon-gossip', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 24v6l6-6h12V10H0v14zm10.1-1.9H7.5v-2.6h2.6v2.6zm-1-10.2c1.8 0 3.5.9 3.5 2.9 0 1.4-.7 1.8-1.7 2.5-.7.5-.9.7-.9 1.5H7.7v-.7c0-1.1.6-1.6 1.1-1.9.6-.4 1.1-.7 1.1-1.4 0-.5-.4-.9-.9-.9-.8 0-1.2.5-1.2 1.2v.3H5.4c0-2.2 1.5-3.5 3.7-3.5z' }),
    react.createElement('path', { d: 'M14 2v6h6v8h6l6 6V2H14zm9.1 2h2.5v2.5l-.6 4.2h-1.2l-.6-4.2V4zm2.5 10H23v-2.6h2.6V14z' })
  )
}
