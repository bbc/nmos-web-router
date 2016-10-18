var path = require('path')
var autoprefixer = require('autoprefixer')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
var WatchMissingNodeModulesPlugin = require('../scripts/utils/WatchMissingNodeModulesPlugin')
var paths = require('./paths')

module.exports = {
  node: {
    fs: 'empty'
  },
  devtool: 'eval',
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index')
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', ''],
    alias: {
      'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator'),
      'react-native': 'react-native-web'
    }
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: ['*-loader']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev')
      },
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!postcss'
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ]
}
