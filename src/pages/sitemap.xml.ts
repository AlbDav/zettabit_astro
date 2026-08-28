import { execFileSync } from 'node:child_process';
import type { APIRoute } from 'astro';

// Language-neutral base paths. IT = base, EN = /en + base (P5.1).
// `sources` are the files whose last commit dates that URL's content, so each
// entry gets a real <lastmod> instead of the build timestamp. A sitemap where
// every lastmod is "now" on every deploy is one Google learns to ignore.
const pages: { path: string; sources: string[] }[] = [
	{
		path: '/',
		sources: ['src/pages/index.astro', 'src/pages/en/index.astro', 'src/components', 'src/i18n', 'src/data/site.ts'],
	},
	{
		path: '/privacy/',
		sources: ['src/pages/privacy', 'src/pages/en/privacy', 'src/components/LegalPage.astro', 'src/data/legal.ts'],
	},
	{
		path: '/cookie-policy/',
		sources: ['src/pages/cookie-policy', 'src/pages/en/cookie-policy', 'src/components/LegalPage.astro', 'src/data/legal.ts'],
	},
];

const enOf = (p: string) => (p === '/' ? '/en/' : `/en${p}`);

const buildDate = new Date().toISOString().slice(0, 10);

/** Date of the newest commit touching any of `sources`, YYYY-MM-DD. */
function lastModified(sources: string[]): string {
	try {
		const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...sources], {
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore'],
		}).trim();
		return out ? out.slice(0, 10) : buildDate;
	} catch {
		// No git in the build image, or a shallow clone with no history for these
		// paths — fall back rather than dropping <lastmod> entirely.
		return buildDate;
	}
}

export const GET: APIRoute = ({ site }) => {
	const origin = (site ?? new URL('https://zettabit.it')).origin;

	const entries = pages.flatMap(({ path, sources }) => {
		const lastmod = lastModified(sources);
		return [path, enOf(path)].map(
			(loc) => `  <url>
    <loc>${origin}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="${origin}${path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}${enOf(path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${path}"/>
  </url>`
		);
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
