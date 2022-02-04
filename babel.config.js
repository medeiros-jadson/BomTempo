module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          cwd: 'babelrc',
          root: ['./src'],
          extensions: ['.tsx', '.ts', '.js', '.ios.js', '.android.js']
        }
      ]
    ]
  }
}
