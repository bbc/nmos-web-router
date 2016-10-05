var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-recent-activity', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 28C9.4 28 4 22.6 4 16S9.4 4 16 4c.3 0 .7 0 1 .1v-4c-.3-.1-.7-.1-1-.1C7.2 0 0 7.2 0 16s7.2 16 16 16c6.3 0 11.7-3.6 14.3-8.9l-3.5-2c-1.9 4.1-6 6.9-10.8 6.9z' }),
    react.createElement('path', { d: 'M15 6v10.6l8.8 5.1 1-1.8-7.8-4.5V6z' }),
    react.createElement('circle', { cx: '30', cy: '16', r: '2' }),
    react.createElement('circle', { cx: '28', cy: '9', r: '2' }),
    react.createElement('circle', { cx: '23', cy: '4', r: '2' })
  );
};