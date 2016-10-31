var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-hail', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M23 8.2h-.6c-.8-2.9-3.4-5-6.4-5-3.1 0-5.7 2.1-6.4 5H9c-2.7 0-4.9 2.2-4.9 4.9S6.3 18 9 18h3v-2.3H9c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6.9 0 1.8.5 2.2 1.3l2-1.2c-.4-.6-.9-1.2-1.5-1.6.4-2 2.2-3.5 4.3-3.5 2.4 0 4.4 2 4.4 4.4 0 .9-.3 1.8-.8 2.5h2.6c.2-.6.4-1.3.5-1.9h.4c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6H20V18h3c2.7 0 4.9-2.2 4.9-4.9S25.7 8.2 23 8.2z' }),
    react.createElement(
      'g',
      { fill: '#A8A8A8' },
      react.createElement('path', { d: 'M14.4 16.1l3.1 3.1M15.4 19.8l1.2-4.3M18.1 17.1l-4.2 1.1' }),
      react.createElement('circle', { cx: '16', cy: '17.7', r: '2.2' }),
      react.createElement(
        'g',
        null,
        react.createElement('path', { d: 'M9.1 20.4l3.1 3.1M10.1 24.1l1.1-4.3M12.8 21.4l-4.3 1.1' }),
        react.createElement('circle', { cx: '10.6', cy: '22', r: '2.2' })
      )
    )
  )
}
