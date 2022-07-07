module.exports = {
	'extends': [
		'../.eslintrc.js',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'env': {
		'browser': true,
		'jest': true,
		'es6': true,
	},
	'parserOptions': {
		'sourceType': 'module',
		'allowImportExportEverywhere': true,
	},
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
};
