import pluginJs from '@eslint/js';
import stencilPlugin from '@stencil-community/eslint-plugin';
import globals from 'globals';
import prettier from 'prettier';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { ignores: ['dist/*', 'loader/*', 'www/*'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      stencilPlugin,
      prettier,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // solution for unused `h` import: https://github.com/stencil-community/stencil-eslint/issues/9
          varsIgnorePattern: '^h$|^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
