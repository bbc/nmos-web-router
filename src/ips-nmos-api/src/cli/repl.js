const chalk = require('chalk')
const repl = require('repl')

module.exports = (nmos, httpPort, wsPort) => {
  const help = chalk.white.bold('\nRunning ips-nmos-api stub service\n') +
  chalk.white.bold('\nNMOS REPL\n') +
  chalk.white(`  Global variable ${chalk.yellow.bold('nmos')} is available\n`) +
  chalk.white(`  See ${chalk.yellow.bold('README.md')} for details on how to use nmos\n`) +
  chalk.white(`  Run ${chalk.yellow.bold('.help')} for this info\n`) +
  chalk.white(`  Run ${chalk.yellow.bold('.exit')} for quick exit (or hammer Ctrl+C)\n\n`) +
  chalk.white.bold('serving on: ') + chalk.blue.underline.bold(`http://localhost:${httpPort}\n`) +
  chalk.white.bold('listening on: ') + chalk.blue.underline.bold(`ws://localhost:${wsPort}\n`)

  console.log(help)
  let r = repl.start({prompt: 'nmos > '})
  r.defineCommand('help', {
    action: function (name) {
      console.log(help)
    }
  })
  r.defineCommand('exit', {
    action: function (name) {
      console.log(chalk.red.bold('Killing ips-nmos-api stub service'))
      process.exit(0)
    }
  })
  r.context.nmos = nmos
}
