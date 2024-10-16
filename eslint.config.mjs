import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginNext from "eslint-plugin-next";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginJestDom from "eslint-plugin-jest-dom";

const compat = new FlatCompat();

export default [
  js.configs.recommended,

  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:next/recommended"),
  ...compat.extends("plugin:testing-library/react"),
  ...compat.extends("plugin:jest-dom/recommended"),

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "error", // Error on unused variables
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React to be in scope
      "no-console": "warn", // Warn for console logs
      "react/prop-types": "off", // Disable prop-types rule
      "@next/next/no-img-element": "error", // Enforce using next/image instead of img tag
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: false },
      ], // Ensure no extra dependencies
      "import/order": [
        "error",
        { groups: ["builtin", "external", "internal"] },
      ], // Order imports
      "no-debugger": "error", // Disallow debugger statements
      "no-alert": "error", // Disallow alert, confirm, and prompt
      "consistent-return": "error", // Require consistent return statements
      eqeqeq: ["error", "always"], // Enforce strict equality
      "no-implicit-globals": "error", // Disallow implicit global variable declarations
      "no-shadow": "error", // Disallow variable declarations from shadowing variables in the outer scope
      "no-var": "error", // Require let or const instead of var
      "prefer-const": "error", // Prefer const over let when variable is not reassigned
      "testing-library/no-dom-import": "error", // Ensure no direct import of dom-testing-library
      "testing-library/no-container": "error", // Disallow the use of container methods
      "jest-dom/prefer-checked": "warn", // Prefer toBeChecked matcher from jest-dom
      "jest-dom/prefer-enabled-disabled": "warn", // Prefer toBeDisabled and toBeEnabled matchers from jest-dom
      "@next/next/no-document-import-in-page": "error", // Prevent importing Document in pages
      "@next/next/no-typos": "error", // Prevent common typos in Next.js
      "@next/next/no-page-custom-font": "error", // Enforce usage of next/font instead of custom <link> tags
      "@next/next/no-script-in-document": "error", // Enforce using next/script instead of <script> tag in _document.js
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
