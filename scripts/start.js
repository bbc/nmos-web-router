process.env.NODE_ENV = 'development'

require('dotenv').config({silent: true})

var chalk = require('chalk')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var historyApiFallback = require('connect-history-api-fallback')
var httpProxyMiddleware = require('http-proxy-middleware')
var detect = require('detect-port')
var clearConsole = require('react-dev-utils/clearConsole')
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
var openBrowser = require('react-dev-utils/openBrowser')
var prompt = require('react-dev-utils/prompt')
var config = require('../config/webpack.config.dev')
var paths = require('../config/paths')

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

var DEFAULT_PORT = process.env.PORT || 3000
var compiler
var handleCompile

var isSmokeTest = process.argv.some(arg => arg.indexOf('--smoke-test') > -1)
if (isSmokeTest) {
  handleCompile = function (err, stats) {
    if (err || stats.hasErrors() || stats.hasWarnings()) {
      process.exit(1)
    } else {
      process.exit(0)
    }
  }
}

function setupCompiler (host, port, protocol) {
  compiler = webpack(config, handleCompile)
  compiler.plugin('invalid', function () {
    clearConsole()
    console.log('Compiling...')
  })
  compiler.plugin('done', function (stats) {
    var messages = formatWebpackMessages(stats.toJson({}, true))
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'))
      console.log('The app is running at:')
      console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'))
    }
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'))
      console.log()
      messages.errors.forEach(message => {
        console.log(message)
        console.log()
      })
      return
    }
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'))
      console.log()
      messages.warnings.forEach(message => {
        console.log(message)
        console.log()
      })
      console.log('You may use special comments to disable some warnings.')
      console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.')
      console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.')
    }
  })
}

function onProxyError (proxy) {
  return function (err, req, res) {
    var host = req.headers && req.headers.host
    console.log(
      chalk.red('Proxy error:') + ' Could not proxy request ' + chalk.cyan(req.url) +
      ' from ' + chalk.cyan(host) + ' to ' + chalk.cyan(proxy) + '.'
    )
    console.log(
      'See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (' +
      chalk.cyan(err.code) + ').'
    )
    console.log()

    if (res.writeHead && !res.headersSent) {
      res.writeHead(500)
    }
    res.end('Proxy error: Could not proxy request ' + req.url + ' from ' +
      host + ' to ' + proxy + ' (' + err.code + ').'
    )
  }
}

function addMiddleware (devServer) {
  var proxy = require(paths.appPackageJson).proxy
  devServer.use(historyApiFallback({
    disableDotRule: true,
    htmlAcceptHeaders: proxy ? ['text/html'] : ['text/html', '*/*']
  }))
  if (proxy) {
    if (typeof proxy !== 'string') {
      console.log(chalk.red('When specified, "proxy" in package.json must be a string.'))
      console.log(chalk.red('Instead, the type of "proxy" was "' + typeof proxy + '".'))
      console.log(chalk.red('Either remove "proxy" from package.json, or make it a string.'))
      process.exit(1)
    }

    var mayProxy = /^(?!\/(index\.html$|.*\.hot-update\.json$|sockjs-node\/)).*$/
    devServer.use(mayProxy,
      httpProxyMiddleware(pathname => mayProxy.test(pathname), {
        target: proxy,
        logLevel: 'silent',
        onError: onProxyError(proxy),
        secure: false,
        changeOrigin: true
      })
    )
  }
  devServer.use(devServer.middleware)
}

function runDevServer (host, port, protocol) {
  var devServer = new WebpackDevServer(compiler, {
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    https: protocol === 'https',
    host: host
  })

  addMiddleware(devServer)

  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err)
    }

    clearConsole()
    console.log(chalk.cyan('Starting the development server...'))
    console.log()
    openBrowser(protocol + '://' + host + ':' + port + '/')
  })
}

function run (port) {
  var protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
  var host = process.env.HOST || 'localhost'
  setupCompiler(host, port, protocol)
  runDevServer(host, port, protocol)
}

detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port)
    return
  }

  clearConsole()
  var question =
    chalk.yellow('Something is already running on port ' + DEFAULT_PORT + '.') +
    '\n\nWould you like to run the app on another port instead?'

  prompt(question, true).then(shouldChangePort => {
    if (shouldChangePort) {
      run(port)
    }
  })
})
