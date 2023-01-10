const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>src/components/$1',
    '^@/pages/(.*)$': '<rootDir>src/pages/$1',
    '^@/utils/(.*)$': '<rootDir>src/utils/$1',
  },
  modulePathIgnorePatterns: ['__mocks__'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
