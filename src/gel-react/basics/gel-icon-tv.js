var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-tv', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M32 26V1H0v25h12v2.5H6V31h20v-2.5h-6V26h12zm-20-3.8H4V4.8h24v17.5H12z' })
  );
};