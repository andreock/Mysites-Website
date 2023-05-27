import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Sitemap } from 'vite-plugin-svelte-sitemap';

export default defineConfig({
	plugins: [sveltekit(), Sitemap({
		baseurl: "https://mysites-service.com"
	})],
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
});
