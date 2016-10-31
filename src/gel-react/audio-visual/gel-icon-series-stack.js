var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-series-stack', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M4 6h22v22h2V4H4z' }),
    react.createElement('path', { d: 'M8 0v2h22v22h2V0z' }),
    react.createElement('path', { d: 'M0 32h24V8H0v24zm4-20h16v16H4V12z' })
  )
}
