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
    { className: 'gel-icon gel-icon-shooting', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: 'none', d: 'M10.5 5zM15.4 5.6l.4-.1-.2-.6h-.2z' }),
    react.createElement('path', { d: 'M12.3 1.2C11.8.4 10.9 0 9.9 0 8.4.2 7.3 1.4 7.5 2.9c0 .2.1.4.1.6h3.6l1.1-2.3zM15.4 5.6v-.7h.2L21 3.7l10.6-2.2-.2-.5-.2-1-18.8 4-.7.4-1.2.6H4.4L3.1 6.4l3.4 2.8z' }),
    react.createElement('path', { d: 'M15.9 7.1l-.5.9-.7-.4-8.4 3.3L2.7 8l1.7 8-1 7-3 9h2.4l4.1-9 1.2-3.9 2.3 3.9 1.7 9h2.3l-1-9-2-8-1-3 1-2 5.1 1 2.3-5.5-2.4.5z' })
  )
}
