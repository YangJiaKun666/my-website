module.exports = {
	env: {
		browser: true,
		es6: true,
		amd: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		parser: 'babel-eslint'
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never']
	}
}
