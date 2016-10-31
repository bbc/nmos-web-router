var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-slideshow', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M22 13l-5-3-5-3v12l5-3z' }),
    react.createElement('path', { d: 'M30 0H0v26h13.9l-3.5 6H13l2.9-5.1 2.9 5.1h2.6l-3.5-6H32V0h-2zm0 22H2V4h28v18z' })
  )
}
