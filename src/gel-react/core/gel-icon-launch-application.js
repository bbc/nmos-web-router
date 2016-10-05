var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-launch-application', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M10 26H2v-6h2v-2H0v10h12v-6h-2zM22 26h8v-6h-2v-2h4v10H20v-6h2z' }),
    react.createElement('path', { d: 'M6 20h20V4H6v16zm16-4H10V8h12v8z' })
  );
};