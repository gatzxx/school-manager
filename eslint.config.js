import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import jestPlugin from 'eslint-plugin-jest'

export default [
    {
        ignores: ['dist', 'vite.config.ts', 'jest.config.ts', 'setupTests.ts'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...jestPlugin.environments.globals.globals,
            },
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            jest: jestPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            ...prettier.rules,
            ...jestPlugin.configs.recommended.rules,
        },
    },
]
