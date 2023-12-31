module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: {
				'storybook/hierarchy-separator': 'error',
				'storybook/default-exports': 'off',
				quotes: 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: 'tsconfig.json',
	},
	rules: {
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 0,
		'import/no-webpack-loader-syntax': 0,
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				'newlines-between': 'always',
			},
		],
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		'@typescript-eslint/no-invalid-void-type': 0,
		'@typescript-eslint/no-misused-promises': 0,
	},
	plugins: ['react'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['components', './src/components'],
					['ui', './src/components/ui'],
					['hooks', './src/hooks'],
					['reduxx', './src/reduxx'],
					['api', './src/api'],
					['utils', './src/utils'],
					['static', './src/static'],
					['types', './src/types'],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};
