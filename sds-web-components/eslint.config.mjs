import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'prettier';
import stencilPlugin from '@stencil-community/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      stencilPlugin,
      prettier
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        // solution for unused `h` import: https://github.com/stencil-community/stencil-eslint/issues/9
        "varsIgnorePattern": "^h$"
      }]
    }
  },
];
