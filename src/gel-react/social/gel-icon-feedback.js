var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-feedback', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M14 2v6h6v8h6l6 6V2H14zm16 12h-8v-2h8v2zm0-4h-8V8h8v2zm0-4H16V4h14v2z' }),
    react.createElement('path', { d: 'M0 24v6l6-6h12V10H0v14zm2-12h14v2H2v-2zm0 4h10v2H2v-2zm0 4h12v2H2v-2z' })
  );
};