var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-continous-play', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M24 0H0v24h24V0zm-3 21H3V3h18v18z' }),
    react.createElement('path', { d: 'M28 5h-2v21H5v2h23z' }),
    react.createElement('path', { d: 'M30 8v22H8v2h24V8zM8 6v12l9.6-6z' })
  )
}
