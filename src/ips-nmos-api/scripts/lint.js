function js () {
  try {
    const CLIEngine = require('eslint').CLIEngine
    let eslint = new CLIEngine({
      configFile: './.eslintrc.json'
    })
    let srcResults = eslint.executeOnFiles([
      'src',
      '__tests__',
      'scripts'
    ]).results

    let filtered = srcResults
      .filter(function (result) {
        return result.messages.length !== 0
      })

    filtered.forEach(function (result) {
      console.log(result.filePath)
      result.messages.forEach(function (message) {
        let type = message.severity === 2 ? 'error' : 'warn'
        console.log(type, ':', message.line, ':', message.message)
      })
    })

    if (filtered.length === 0) console.log('JS LINT FREE')
    return filtered.length === 0
  } catch (e) {
    console.log(e)
  }
}

let exit = js() ? 0 : 1
process.exit(exit)
