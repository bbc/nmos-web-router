var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-newsletter', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M5 3h22v12h3V0H2v15h3z' }),
    react.createElement('path', { d: 'M10 12h12v3H10zM10 16h12v3H10zM10 8h12v3H10z' }),
    react.createElement('path', { d: 'M29.5 16l-.5.3-13 8.1-13-8.1-.5-.3H0v16h32V16h-2.5zM29 29H3V17.5l13 8.1 13-8.1V29z' })
  )
}
