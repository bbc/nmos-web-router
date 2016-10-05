var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-triathlon', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '2', cy: '2', r: '2' }),
    react.createElement('circle', { cx: '2', cy: '10', r: '2' }),
    react.createElement('circle', { cx: '7', cy: '6', r: '2' }),
    react.createElement('path', { d: 'M26.1 13.3L29 15l3-5-1-1-2 3-2.2-2.7zM14.4 23.3L7 25l-1 2 10-1 5-4.4-4-1.4z' }),
    react.createElement('path', { d: 'M25.6 7.5L25 7l-4-2-7 2-1 6.4 1.4.1 1.2-5L19 8l1 6-2 5 9 3-1 9 2 1 2-12-6-3zM25.5 5h.1l2.1-3.6C27.3.6 26.5 0 25.5 0 24.1 0 23 1.1 23 2.5S24.1 5 25.5 5z' })
  );
};