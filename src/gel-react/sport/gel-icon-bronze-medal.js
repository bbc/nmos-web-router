var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-bronze-medal', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { fill: '#C19555' },
      react.createElement('circle', { cx: '16', cy: '21', r: '6' }),
      react.createElement('path', { d: 'M16 0H4l6 6zM18 0l-7 7 5 5L28 0z' })
    )
  );
};