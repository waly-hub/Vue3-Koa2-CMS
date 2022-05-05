module.exports = {
  tabWidth: 2,
  jsxSingleQuote: false,
  printWidth: 100,
  singleQuote: false,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
  endOfLine: "auto"
}
