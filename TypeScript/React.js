const jsRules = require("../Rules/JavaScript");
const tsRules = require("../Rules/TypeScript");
const reactRules = require("../Rules/React");
const { PLUGINS } = require("../Constants");

module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: [PLUGINS.ESLINT, PLUGINS.TYPESCRIPT, PLUGINS.REACT],
    ignorePatterns: ["build"],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    plugins: ["@typescript-eslint", "react"],
    root: true,
    rules: { ...jsRules, ...tsRules, ...reactRules },
    settings: { react: { version: "detect" } }
};
