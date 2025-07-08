module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@Routes': './src/routes',
          '@Config': './src/config',
          '@Components': './src/components',
          '@Containers': './src/containers',
          '@Utils': './src/utils',
        },
      },
    ],
  ],
};
