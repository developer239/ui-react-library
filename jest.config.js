module.exports = {
  'moduleFileExtensions': ['js', 'jsx', 'json', 'ts', 'tsx'],
  'modulePaths': ['.storybook', 'src', 'stories'],
  'verbose': true,
  'collectCoverage': false,
  'transform': {
    '.(ts|tsx)': 'ts-jest'
  },
  'testRegex': '\\.test\\.(js|ts|tx)x?$',
  'moduleNameMapper': {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  'transformIgnorePatterns': [
    '(node_modules)(?!/lodash-es/)'
  ],
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/build/',
    '/coverage/',
  ],
}
