import katex from 'katex';
import { defineMdastPlugin } from 'satteri';

const escapeHtml = (value) =>
	value.replace(/[&<>"']/g, (character) => {
		if (character === '&') return '&amp;';
		if (character === '<') return '&lt;';
		if (character === '>') return '&gt;';
		if (character === '"') return '&quot;';
		return '&#39;';
	});

/**
 * Sätteri re-parses the returned string as Markdown, which would treat a
 * backslash in KaTeX's MathML annotation as an escape.
 */
const preserveBackslashes = (html) => html.replace(/\\/g, '\\\\');

export function satteriKatex(options = {}) {
	const katexOptions = { output: 'htmlAndMathml', throwOnError: false, ...options };

	const render = (tex, displayMode) => {
		try {
			const rendered = katex
				.renderToString(tex, { ...katexOptions, displayMode })
				.replaceAll('class="katex"', 'class="katex not-content"');
			return { raw: preserveBackslashes(rendered), mdxExpressions: false };
		} catch (error) {
			return { raw: preserveBackslashes(escapeHtml(String(error))), mdxExpressions: false };
		}
	};

	return defineMdastPlugin({
		name: 'satteri-katex',
		math(node) {
			return render(node.value, true);
		},
		inlineMath(node) {
			return render(node.value, false);
		},
	});
}
