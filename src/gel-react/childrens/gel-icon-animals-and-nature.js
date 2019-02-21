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
    { className: 'gel-icon gel-icon-animals-and-nature', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M5.7 16.2c1.8-.7 2.4-3.3 1.5-6-1-2.6-3.2-4.2-5-3.5-1.8.7-2.4 3.3-1.5 6 1 2.6 3.2 4.2 5 3.5z' }),
    react.createElement('ellipse', { transform: 'rotate(-69.805 28.044 11.447)', cx: '28', cy: '11.4', rx: '5.1', ry: '3.4' }),
    react.createElement('path', { d: 'M12 10.1c1.9-.3 3.1-2.7 2.7-5.5-.4-2.8-2.2-4.8-4.1-4.6-1.8.3-3 2.8-2.6 5.5.3 2.8 2.2 4.9 4 4.6zM20.1 10.1c1.9.2 3.6-1.9 3.9-4.7.3-2.8-1-5.2-2.9-5.4-1.9-.2-3.6 1.9-3.9 4.7-.2 2.8 1 5.2 2.9 5.4zM22.1 20c.1-.3.1-.6.1-.9 0-3.4-2.7-6.1-6.1-6.1-3.3 0-6.1 2.7-6.1 6.1 0 .3 0 .5.1.8-3.2.2-5.7 2.8-5.7 6.1 0 3.4 2.7 6.1 6.1 6.1 2.1 0 4-1.1 5.1-2.8 1.1 1.7 3 2.8 5.1 2.8 3.4 0 6.1-2.7 6.1-6.1-.2-2.9-2.1-5.3-4.7-6z' })
  )
}
