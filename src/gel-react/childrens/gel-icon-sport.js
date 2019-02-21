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
    { className: 'gel-icon gel-icon-sport', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M12.5 17.2c1-1.6 2.5-3.2 4.5-4.5l-3.2-2.4-3.6 2.7 1.4 4.2h.9z' }),
    react.createElement('path', { d: 'M4.4 18.9l-.1 1.9c-1.7-1.9-2.9-4.4-3-7.2v-.5l1.4 1.3L5.4 11l-.7-4.3-1.9.5c1.4-2.4 3.7-4.3 6.4-5.3l-.8 1.7 4.1 1.6 3.9-2-1-1.6c2.8.6 5.3 2.2 7 4.5l-1.9-.2-.2 4.4 2.7-.5c.8-.2 1.6-.2 2.4-.3-1.7-5.6-7-9.6-13.1-9.2C5.1.5-.4 6.6 0 13.7c.3 5.6 4.2 10.2 9.3 11.6 0-.8.1-1.6.3-2.5l.2-1.3v-.2l-1.2-1.8-4.2-.6zM11.8 31l.1.3.3.1c.1 0 1.8.5 4.3.5 1 0 2.1-.1 3.3-.3l-8.3-8.3c-.7 4.1.2 7.5.3 7.7zM31.5 12.2l-.1-.3-.4-.1c-.1 0-1.8-.5-4.3-.5-1 0-2.1.1-3.3.3l8.3 8.3c.7-4.1-.2-7.5-.2-7.7z' }),
    react.createElement('path', { d: 'M21.9 13l-.8-.8c-1.8.7-3.7 1.7-5.5 3.4-1.7 1.7-2.8 3.6-3.4 5.5l.8.8 8.3 8.3.8.8c1.8-.7 3.7-1.7 5.5-3.4 1.7-1.7 2.8-3.6 3.4-5.5l-.8-.8-8.3-8.3zm.5 5.3l-1-1-1.9 1.7 1 1-.5.5-1-1-1.8 1.8 1 1-.5.5-1-1.1-.7.7-.4-.4.7-.7-1-1 .5-.5 1 1 1.8-1.8-1-1 .5-.5 1 1 1.8-1.8-1-1 .5-.5 1 1 .7-.7.5.5-.7.7 1 1-.5.6z' })
  )
}
