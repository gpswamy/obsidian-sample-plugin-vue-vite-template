import tseslint from 'typescript-eslint';
import obsidianmd from "eslint-plugin-obsidianmd";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						'eslint.config.mts',
						'manifest.json'
					]
				},
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: ['.json', '.vue']
			},
		},
	},
	...obsidianmd.configs.recommended,
	// Vue flat config with typescript-eslint parser forwarding
	...pluginVue.configs['flat/recommended'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: ['.vue']
			},
		},
	},
	globalIgnores([
		"node_modules",
		"dist",
		"vite.config.mts",
		"version-bump.mjs",
		"versions.json",
		"main.js",
	]),
);
