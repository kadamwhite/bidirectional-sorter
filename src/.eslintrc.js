module.exports = {
	'env': {
		'browser': true,
		'jest': true,
		'es6': true,
	},
	'parserOptions': {
		'sourceType': 'module',
	},
	'extends': [
		'../.eslintrc.js',
		'eslint:recommended',
		'plugin:react/recommended',
	],
};
