var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-pop-out', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M20 30H2V12h6v-2H0v22h22v-8h-2z' }),
    react.createElement('path', { d: 'M28 4v14H14V4h14m4-4H10v22h22V0z' })
  )
}
