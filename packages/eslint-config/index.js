module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-pascal-case": "error",
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
    "camelcase": ["error", { "properties": "never" }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // 'react', 'react-router-dom'
          ["^react", "^react-router-dom"],
          // 외부 라이브러리
          ["^@?\\w"],
          // 내부 모듈
          ["^@pages(/.*|$)"],
          ["^@components(/.*|$)"],
          ["^.+\\.svg$"],
          ["^@hooks(/.*|$)"],
          // Side effect imports. ('./styles.css 포함')
          ["^\\u0000"],
          // Parent imports.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "18.3.1",
    },
  },
};
