var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-communication', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M20 16h6l6 6V2H14v6h6z' }),
    react.createElement('path', { d: 'M0 30l6-6h12V10H0z' })
  );
};