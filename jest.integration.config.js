module.exports = {
  displayName: 'integration',
  testMatch: ['**/*.integration.spec.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage/integration',
  testEnvironment: 'node',
};