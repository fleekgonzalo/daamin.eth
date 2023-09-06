import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			strict: false,
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		})
	},

	preprocess: [vitePreprocess({})]
};

export default config;
