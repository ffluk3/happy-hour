module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
		{
			extends: [
				'plugin:playwright/playwright-test',
			],
			files: [
				'tests/**/*.ts',
			],
		},
		{
			extends: [
				'plugin:jest/recommended',
			],
			plugins: ['jest'],
			files: [
				'**/__tests__/*',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
};
