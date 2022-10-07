module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  coverageDirectory: '.jest-coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  coverageReporters: ['html', 'lcov', 'text-summary', 'cobertura'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['/node_modules/(?!@babel).+\\.js$'],
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/src/components/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
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
