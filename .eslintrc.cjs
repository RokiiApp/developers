module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'semistandard'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-namespace': 'off'
  },
  globals: {
    React: true,
    ReactDOM: true,
    JSX: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es2022: true
  }
};
