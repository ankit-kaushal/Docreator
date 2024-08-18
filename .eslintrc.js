module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},
	extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
	rules: {
		// general
		'no-restricted-exports': 'off',
		'object-curly-newline': [
			'error',
			{
				ImportDeclaration: { multiline: true, consistent: true },
				ExportDeclaration: { multiline: true, consistent: true },
				ObjectExpression: {
					multiline: true,
					consistent: true,
					minProperties: 4,
				},
				ObjectPattern: { multiline: true, consistent: true },
			},
		],

		// import
		'import/prefer-default-export': 'off',
		'import/named': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',

		// react
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',

		// a11y
		'jsx-a11y/media-has-caption': 'off',
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
			},
			{
				usePrettierrc: false,
			},
		],
	},
};
