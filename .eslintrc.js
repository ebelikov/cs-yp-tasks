module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: "eslint:recommended",
  rules: {
    "no-unused-vars": "warn",
  },
  globals: {
    test: "readonly",
    expect: "readonly",
  },
};
