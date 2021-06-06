const path = require('path');

module.exports = {
  preset: 'jest-preset-angular',
  rootDir: path.resolve(__dirname, '..', '..'),
  setupFilesAfterEnv: [
    '<rootDir>/src/jest/setupJest.ts',
    // '<rootDir>/src/test.ts',
    'jest-extended',
  ],
  moduleNameMapper: {
    '^app/(.*)': '<rootDir>/src/app/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1',
    '^env': '<rootDir>/src/environments/environment',
    '^src/(.*)': '<rootDir>/src/$1',
    '^state/(.*)': '<rootDir>/src/app/state/$1',
    '\\.(svg|jpg|png)$': '<rootDir>/empty-module.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  reporters: ['default'],
  collectCoverage: true,
  coverageReporters: [
    'html',
    "json-summary",
    "text-summary",
  ],
  collectCoverageFrom: [
    'src/app/**/**.ts',
  ],
  // TODO: Jest maybe remove all jasmine api.
  // see: https://stackoverflow.com/questions/55831105/jest-and-jasmine-in-angular-project
  errorOnDeprecated: false,
};
