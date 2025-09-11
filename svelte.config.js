import adapter from '@sveltejs/adapter-static';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const theme = 'github-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'go', 'bash', 'json', 'svelte', 'diff', 'md']
});

const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		default: join(__dirname, 'src/lib/markdown/layout.svelte')
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
