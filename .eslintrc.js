module.exports = {
	env: {
		commonjs: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6,
	},
	extends: "eslint:recommended",
	rules: {
		"no-unused-vars": "warn",
	},
	globals: {
		test: "readonly",
		expect: "readonly",
	},
};
