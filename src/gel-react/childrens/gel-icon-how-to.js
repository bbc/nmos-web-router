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
    { className: 'gel-icon gel-icon-how-to', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15.1 11.7c.2-.2.6-.4 1-.4s.6.1.8.2c.2.2.3.4.3.7 0 .3-.2.6-.7 1-.8.7-1.4 1.1-1.6 1.4-.2.3-.4.6-.5.9-.1.3-.2.7-.2 1.3v.3h3.1c0-.4.1-.8.2-1 .1-.3.5-.6 1-1 .8-.6 1.3-1.1 1.6-1.6.3-.4.4-.9.4-1.3 0-1.1-.5-2-1.5-2.6-.7-.5-1.7-.7-2.9-.7-1.5 0-2.6.4-3.4 1.1-.7.7-1.2 1.6-1.3 2.8l3.2.4c.1-.8.2-1.3.5-1.5zM14 17.9h3.3v2.9H14z' }),
    react.createElement('path', { d: 'M2 0v32h28V0H2zm16 30h-4v-2h4v2zm8-4H6V4h20v22z' })
  )
}
