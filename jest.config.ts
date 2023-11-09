module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts',
  ],
  moduleNameMapper: {
    '@Components': '<rootDir>/src/app/shared/components',
    '@Animations': '<rootDir>/src/app/shared/animations',
    '@Utils': '<rootDir>/src/app/shared/utils',
  },
  'ts-jest': {
    tsConfig: '<rootDir>/tsconfig.spec.json',
    stringifyContentPathRegex: '\\.html$',
  },
};
