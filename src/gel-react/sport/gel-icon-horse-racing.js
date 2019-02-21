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
    { className: 'gel-icon gel-icon-horse-racing', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M17 31.5l1-1-3-6-3.7-.6zM0 12.1v4.6l3.5-3.3zM32 11.5l-.9-1-2.3 2.4 1.2.6z' }),
    react.createElement('path', { d: 'M18.6 14.2L8.5 4.5H5l-5 4v2l6.3 2.4L0 18.7v1.8l17.9 3h.1l7 5 1-1-6-6-5-2 3.6-5.3zM6 9.5l2-2 3 2-2 1-3-1zM30.1 9.4L22 .5v3l-7.9 4.3 5.7 5.5c.9.8 2 1.2 3.2 1.2 1.1 0 2.3-.4 3.2-1.2l.5-.5 3.4-3.4zM26 6.5l.7.7-.7.7-1.4-1.4H26zm-.1 5.7l-.4.4c-1.5 1.2-3.8 1.1-5.2-.1l-.3-.4 1.5-2c.1.1.2.3.3.4 1 1 2.4 1.3 3.7.8l.9.4-.5.5zM12.2 6h.7l1.8-3.6c-.4-.8-1.2-1.3-2.2-1.3-1.4 0-2.5 1.1-2.5 2.5v.5L12.2 6z' })
  )
}
