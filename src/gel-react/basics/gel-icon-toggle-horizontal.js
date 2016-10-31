var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-toggle-horizontal', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M25 16L0 32v-8l13-8L0 8.2V0z' }),
    react.createElement('path', { d: 'M21 0v2h9v28h-9v2h11V0z' })
  )
}
