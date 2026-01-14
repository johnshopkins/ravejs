import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			js,
		},
		extends: ['js/recommended'],
		rules: {
			
		},
	},
]);
