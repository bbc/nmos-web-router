var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-collection', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M4 26h22V4h2v24H4z' }),
    react.createElement('path', { d: 'M8 32v-2h22V8h2v24z' }),
    react.createElement('path', { d: 'M0 24h24V0H0v24z' })
  );
};