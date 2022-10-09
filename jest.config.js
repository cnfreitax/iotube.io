module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?', '!src/**/stories.jsx'],
  coverageDirectory: '.jest-coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  coverageReporters: ['html', 'lcov', 'text-summary', 'cobertura'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['/node_modules/(?!@babel).+\\.js$'],
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/src/components/$1',
    'containers/(.*)$': '<rootDir>/src/containers/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      {
        caller: {
          supportsDynamicImport: true,
          supportsStaticESM: true
        },
        configFile: './.babelrc'
      }
    ]
  }
}
