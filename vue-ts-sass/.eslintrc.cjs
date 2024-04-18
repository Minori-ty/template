// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./node_modules/eslint-typegen/dist/index.d.ts" />
/**
 * @type {import("eslint").Linter.FlatConfig}
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'name',
                            'version',
                            'private',
                            'packageManager',
                            'description',
                            'type',
                            'keywords',
                            'homepage',
                            'bugs',
                            'license',
                            'author',
                            'contributors',
                            'funding',
                            'files',
                            'main',
                            'module',
                            'exports',
                            'unpkg',
                            'jsdelivr',
                            'browser',
                            'bin',
                            'man',
                            'directories',
                            'repository',
                            'publishConfig',
                            'scripts',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'optionalDependencies',
                            'dependencies',
                            'devDependencies',
                            'engines',
                            'config',
                            'overrides',
                            'pnpm',
                            'husky',
                            'lint-staged',
                            'eslintConfig',
                        ],
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                ],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING', // `v-for` 在这里
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
    },
}
