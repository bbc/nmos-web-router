var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-ips-cross', xmlns: 'http://www.w3.org/2000/svg', width: '101', height: '101', viewBox: '0 0 101 101' },
    react.createElement('line', { fill: 'none', strokeWidth: '9', strokeLinecap: 'round', strokeMiterlimit: '10', x1: '4.5', y1: '96.5', x2: '96.5', y2: '4.5' }),
    react.createElement('line', { fill: 'none', strokeWidth: '9', strokeLinecap: 'round', strokeMiterlimit: '10', x1: '4.5', y1: '4.5', x2: '96.5', y2: '96.5' })
  )
}
