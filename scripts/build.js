process.env.NODE_ENV = 'production'
require('dotenv').config({silent: true})
var chalk = require('chalk')
var fs = require('fs-extra')
var path = require('path')
var filesize = require('filesize')
var gzipSize = require('gzip-size').sync
var rimrafSync = require('rimraf').sync
var webpack = require('webpack')
var config = require('../config/webpack.config.prod')
var paths = require('../config/paths')
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
var recursive = require('recursive-readdir')
var stripAnsi = require('strip-ansi')

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1)
}

function removeFileNameHash (fileName) {
  return fileName
    .replace(paths.appBuild, '')
    .replace(/\/?(.*)(\.\w+)(\.js|\.css)/, (match, p1, p2, p3) => p1 + p3)
}

function getDifferenceLabel (currentSize, previousSize) {
  var FIFTY_KILOBYTES = 1024 * 50
  var difference = currentSize - previousSize
  var fileSize = !Number.isNaN(difference) ? filesize(difference) : 0
  if (difference >= FIFTY_KILOBYTES) {
    return chalk.red('+' + fileSize)
  } else if (difference < FIFTY_KILOBYTES && difference > 0) {
    return chalk.yellow('+' + fileSize)
  } else if (difference < 0) {
    return chalk.green(fileSize)
  } else {
    return ''
  }
}

recursive(paths.appBuild, (err, fileNames) => {
  if (err) console.log(err)
  var previousSizeMap = (fileNames || [])
    .filter(fileName => /\.(js|css)$/.test(fileName))
    .reduce((memo, fileName) => {
      var contents = fs.readFileSync(fileName)
      var key = removeFileNameHash(fileName)
      memo[key] = gzipSize(contents)
      return memo
    }, {})
  rimrafSync(paths.appBuild + '/*')
  build(previousSizeMap)
  copyPublicFolder()
})

function printFileSizes (stats, previousSizeMap) {
  var assets = stats.toJson().assets
    .filter(asset => /\.(js|css)$/.test(asset.name))
    .map(asset => {
      var fileContents = fs.readFileSync(paths.appBuild + '/' + asset.name)
      var size = gzipSize(fileContents)
      var previousSize = previousSizeMap[removeFileNameHash(asset.name)]
      var difference = getDifferenceLabel(size, previousSize)
      return {
        folder: path.join('build', path.dirname(asset.name)),
        name: path.basename(asset.name),
        size: size,
        sizeLabel: filesize(size) + (difference ? ' (' + difference + ')' : '')
      }
    })
  assets.sort((a, b) => b.size - a.size)
  var longestSizeLabelLength = Math.max.apply(null,
    assets.map(a => stripAnsi(a.sizeLabel).length)
  )
  assets.forEach(asset => {
    var sizeLabel = asset.sizeLabel
    var sizeLength = stripAnsi(sizeLabel).length
    if (sizeLength < longestSizeLabelLength) {
      var rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength)
      sizeLabel += rightPadding
    }
    console.log(
      '  ' + sizeLabel +
      '  ' + chalk.dim(asset.folder + path.sep) + chalk.cyan(asset.name)
    )
  })
}

function printErrors (summary, errors) {
  console.log(chalk.red(summary))
  console.log()
  errors.forEach(err => {
    console.log(err.message || err)
    console.log()
  })
}

function build (previousSizeMap) {
  console.log('Creating an optimized production build...')
  webpack(config).run((err, stats) => {
    if (err) {
      printErrors('Failed to compile.', [err])
      process.exit(1)
    }

    if (stats.compilation.errors.length) {
      printErrors('Failed to compile.', stats.compilation.errors)
      process.exit(1)
    }

    console.log(chalk.green('Compiled successfully.'))
    console.log()

    console.log('File sizes after gzip:')
    console.log()
    printFileSizes(stats, previousSizeMap)
    console.log()

    fs.renameSync(paths.appBuild, paths.appBuild + '.tmp')
    fs.mkdirSync(paths.appBuild)
    fs.copySync(paths.appBuild + '.tmp', paths.appBuild + '/ips-web')
    fs.copySync(paths.appBuild + '.tmp', paths.appBuild)
    rimrafSync(paths.appBuild + '.tmp')
  })
}

function copyPublicFolder () {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  })
}
