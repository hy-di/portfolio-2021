module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'vue/html-indent': ['warn', 'tab', { 'baseIndent': 1 }],
		'comma-dangle': ['warn', 'always-multiline'],
		'semi': ['error', 'always'],
		'quotes': ['warn', 'single', { 'avoidEscape': false }],
		'eol-last': ['error', 'always'],
		'vue/comma-dangle': ['warn', 'always-multiline'],
		'vue/max-attributes-per-line': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
