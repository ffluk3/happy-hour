import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJest from "eslint-plugin-jest";
import playwright from "eslint-plugin-playwright";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // update this to match your test files
    files: ["**/*.test.js"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      // Customize Playwright rules
      // ...
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
    },
  },
  tseslint.configs.recommended,
]);
