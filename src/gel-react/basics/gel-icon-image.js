var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-image', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M9 5V3H4v2H0v24h32V5H9zm-2.5 8C5.1 13 4 11.9 4 10.5S5.1 8 6.5 8 9 9.1 9 10.5 7.9 13 6.5 13zM20 26c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z' }),
    react.createElement('path', { d: 'M20 11.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z' })
  )
}
