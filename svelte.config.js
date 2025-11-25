import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const { codeToHtml } = await import('shiki');
					const html = await codeToHtml(code, {
						lang,
						theme: 'everforest-dark'
					});
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx']
};

export default config;
