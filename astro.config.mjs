// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import { satteriKatex } from './src/plugins/satteri-katex.js';

// https://astro.build/config
export default defineConfig({
	markdown: {
		processor: satteri({
			features: { math: true },
			mdastPlugins: [satteriKatex()],
		}),
	}, 
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki({ accentColor: 'orange' })],
			title: 'Hồng Nhựt',
			components: {
				Footer: './src/components/Footer.astro',
			},
			customCss: ['./src/styles/fonts.css', 'katex/dist/katex.min.css'],
			expressiveCode: {
				styleOverrides: {
					codeFontFamily: '"Iosevka", ui-monospace, monospace',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'index' },
						{ label: 'Manual Setup', slug: 'manual-setup' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Pages', slug: 'guides/pages' },
						{ label: 'Authoring', slug: 'guides/authoring' },
						{ label: 'Components', slug: 'guides/components' },
						{ label: 'CSS and Styling', slug: 'guides/css-and-styling' },
						{ label: 'Project Structure', slug: 'guides/project-structure' },
						{ label: 'Sidebar', slug: 'guides/sidebar' },
						{ label: 'Search', slug: 'guides/site-search' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Configuration', slug: 'reference/configuration' },
						{ label: 'Frontmatter', slug: 'reference/frontmatter' },
					],
				},
				{
					label: 'Resources',
					items: [{ label: 'Plugins', slug: 'resources/plugins' }],
				},
			],
		}),
	],
});
