var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-headlines', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M4 20h14v3H4zM4 25h14v3H4zM4 4h24v13H4z' }),
    react.createElement('path', { d: 'M0 0v32h21l11-11V0H0zm22 28v-6h6l-6 6zm8-8H20v10H2V2h28v18z' })
  );
};