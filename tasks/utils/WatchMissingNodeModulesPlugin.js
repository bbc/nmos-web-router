function WatchMissingNodeModulesPlugin (nodeModulesPath) {
  this.nodeModulesPath = nodeModulesPath
}

WatchMissingNodeModulesPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    var missingDeps = compilation.missingDependencies
    var nodeModulesPath = this.nodeModulesPath

    // If any missing files are expected to appear in node_modules...
    // ...tell webpack to watch node_modules recursively until they appear.
    if (missingDeps.some(file => file.indexOf(nodeModulesPath) !== -1)) compilation.contextDependencies.push(nodeModulesPath)

    callback()
  })
}

module.exports = WatchMissingNodeModulesPlugin
