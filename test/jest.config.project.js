const path = require('path');

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['.*/__test__/.*'],
  testEnvironment: 'node',
  rootDir: path.join(__dirname, '..'),
  roots: [path.join(__dirname, '../src')],
  testMatch: ['**/__tests__/**.test.js'],
  setupFilesAfterEnv: [require.resolve('./setup-env')],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
