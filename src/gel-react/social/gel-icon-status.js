var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-status', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { id: 'Layer_2' },
      react.createElement('path', { d: 'M0 2v30l6-6h26V9.6L24.4 2H0z' }),
      react.createElement('path', { 'class': 'st3', d: 'M5 16.6h5v5H5zM13 16.6h5v5h-5zM21 16.6h5v5h-5z' })
    )
  )
}
