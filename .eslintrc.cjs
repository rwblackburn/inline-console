/* eslint-env node */
const { defineConfig } = require("eslint-define-config");

/** @type EslintConfig */
const config = defineConfig({
	root: true,
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		impliedStrict: true,
	},
	env: {
		browser: true,
	},
	plugins: [],
	extends: ["eslint:recommended"],

	overrides: [],

	rules: {
		eqeqeq: "warn",
		"use-isnan": ["error", { enforceForIndexOf: true }],
		"no-unused-expressions": [
			"warn",
			{ allowShortCircuit: true, allowTernary: true },
		],
		"no-mixed-operators": ["warn", { allowSamePrecedence: false }],
		"no-unneeded-ternary": ["warn", { defaultAssignment: false }],
		"prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
		"wrap-iife": ["warn", "inside", { functionPrototypeMethods: true }],
		"comma-dangle": [
			"warn",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "ignore",
				exports: "ignore",
				functions: "ignore",
			},
		],
		"no-extra-parens": [
			"warn",
			"all",
			{
				enforceForSequenceExpressions: false,
				returnAssign: false,
				enforceForArrowConditionals: false,
				conditionalAssign: false,
				nestedBinaryExpressions: false,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false,
			},
		],
		"comma-style": "error",
		"new-parens": "error",
		"no-const-assign": "error",
		"no-label-var": "error",
		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: true,
			},
		],
		"arrow-parens": ["warn", "as-needed"],
		"no-throw-literal": "warn",
		"arrow-spacing": "warn",
		"comma-spacing": "warn",
		"dot-location": ["warn", "property"],
		"dot-notation": "warn",
		"no-cond-assign": "warn",
		"no-constant-condition": "warn",
		"no-else-return": "warn",
		"no-eval": "warn",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-fallthrough": "warn",
		"no-implied-eval": "warn",
		"no-lone-blocks": "warn",
		"no-lonely-if": "warn",
		"no-loop-func": "warn",
		"no-negated-condition": "warn",
		"no-self-compare": "warn",
		"no-sparse-arrays": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unreachable-loop": "warn",
		"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"no-useless-computed-key": "warn",
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-escape": "warn",
		"no-var": "warn",
		"no-with": "warn",
		"operator-assignment": "warn",
		"prefer-const": "warn",
		"prefer-exponentiation-operator": "warn",
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
	},
	ignorePatterns: ["dist", "**/*.d.ts", "node_modules"],
});

module.exports = config;
