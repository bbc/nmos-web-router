var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-alert', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 2L0 30h32L16 2zm2 25h-4v-4h4v4zm-4-6V11h4v10h-4z' })
  )
}
