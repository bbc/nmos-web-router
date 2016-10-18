process.env.NODE_ENV = 'development'

var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var execSync = require('child_process').execSync
var opn = require('opn')
var detect = require('detect-port')
var prompt = require('./utils/prompt')
var config = require('./config/webpack.config.dev')

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

var friendlySyntaxErrorLabel = 'Syntax error:'
function isLikelyASyntaxError (message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1
}
function formatMessage (message) {
  return message
    .replace(
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    .replace(/^\s*at\s.*:\d+:\d+[\s\)]*\n/gm, '')
    .replace('./~/css-loader!./~/postcss-loader!', '')
}

function clearConsole () {
  process.stdout.write('\x1bc')
}

function setupCompiler (port) {
  compiler = webpack(config, handleCompile)
  compiler.plugin('invalid', function () {
    clearConsole()
    console.log('Compiling...')
  })

  compiler.plugin('done', function (stats) {
    clearConsole()
    var hasErrors = stats.hasErrors()
    var hasWarnings = stats.hasWarnings()
    if (!hasErrors && !hasWarnings) {
      console.log(chalk.green('Compiled successfully!'))
      console.log()
      console.log('The app is running at:')
      console.log()
      console.log('  ' + chalk.cyan('http://localhost:' + port + '/'))
      console.log()
      console.log('Note that the development build is not optimized.')
      console.log('To create a production build, use ' + chalk.cyan('npm run build') + '.')
      console.log()
      return
    }

    var json = stats.toJson({}, true)
    var formattedErrors = json.errors.map(message =>
      'Error in ' + formatMessage(message)
    )
    var formattedWarnings = json.warnings.map(message =>
      'Warning in ' + formatMessage(message)
    )
    if (hasErrors) {
      console.log(chalk.red('Failed to compile.'))
      console.log()
      if (formattedErrors.some(isLikelyASyntaxError)) {
        formattedErrors = formattedErrors.filter(isLikelyASyntaxError)
      }
      formattedErrors.forEach(message => {
        console.log(message)
        console.log()
      })
      return
    }
    if (hasWarnings) {
      console.log(chalk.yellow('Compiled with warnings.'))
      console.log()
      formattedWarnings.forEach(message => {
        console.log(message)
        console.log()
      })
      console.log('You may use special comments to disable some warnings.')
      console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.')
      console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.')
    }
  })
}

function openBrowser (port) {
  if (process.platform === 'darwin') {
    try {
      execSync('ps cax | grep "Google Chrome"')
      execSync(
        'osascript chrome.applescript http://localhost:' + port + '/',
        {cwd: path.join(__dirname, 'utils'), stdio: 'ignore'}
      )
      return
    } catch (err) {
      // Ignore errors.
    }
  }
  opn('http://localhost:' + port + '/')
}

function runDevServer (port) {
  new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }).listen(port, (err, result) => {
    if (err) {
      return console.log(err)
    }

    clearConsole()
    console.log(chalk.cyan('Starting the development server...'))
    console.log()
    openBrowser(port)
  })
}

function run (port) {
  setupCompiler(port)
  runDevServer(port)
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
