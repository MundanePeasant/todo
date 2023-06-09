module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js", "webpack.config.js", "*.json"],
  parser: "@babel/eslint-parser",
  requireConfigFile: false,
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
