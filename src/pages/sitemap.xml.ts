import type { APIRoute } from 'astro';

// Language-neutral base paths. Legal pages are intentionally excluded while they
// are still placeholder drafts. IT = base, EN = /en + base (P5.1).
const pages = ['/', '/servizi/sviluppo-web/', '/servizi/video/'];

const enOf = (p: string) => (p === '/' ? '/en/' : `/en${p}`);

export const GET: APIRoute = ({ site }) => {
	const origin = (site ?? new URL('https://zettabit.netlify.app')).origin;

	const entries = pages.flatMap((p) =>
		[p, enOf(p)].map(
			(loc) => `  <url>
    <loc>${origin}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="it" href="${origin}${p}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}${enOf(p)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${p}"/>
  </url>`
		)
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
