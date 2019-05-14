module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@store': './src/store',
          '@config': './src/config',
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
