import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
// Add this import for the formatter
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // Add the prettier config here
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*/', '**../'],
              message: 'Relative imports are not allowed.',
            },
          ],
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Add a new configuration object for formatting
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'prettier/prettier': 'error',
    },
  }
)
