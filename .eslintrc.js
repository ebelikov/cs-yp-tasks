module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
  },
  globals: {
    test: 'readonly',
    expect: 'readonly',
    Map: 'readonly',
    window: 'readonly',
    Set: 'readonly',
  },
  plugins: ['prettier'],
};
