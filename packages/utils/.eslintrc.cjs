/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.cjs'],
  extends: ['@duri-fe/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
