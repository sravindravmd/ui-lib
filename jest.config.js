module.exports = {
  automock: false,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverage: false,
  coverageThreshold: {
    src: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!<rootDir>/*.{js,jsx}',
    '!**/src/index.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/playground/**',
    '!**.docz/**',
    '!**.storybook/**',
    '!**/storybook-static/**',
    '!**/src/shared/**',
    '!**/src/assets/images/**',
    '!**/*.stories.js',
    '!**/src/**/*.example.js',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
