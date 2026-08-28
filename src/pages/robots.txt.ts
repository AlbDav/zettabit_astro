import type { APIRoute } from 'astro';

// robots.txt is generated, not static: the sitemap URL must always match the
// canonical origin in astro.config.mjs. A hardcoded public/robots.txt is how the
// sitemap ended up advertised on one domain while the pages canonicalised to
// another — a mismatch Google resolves by ignoring the sitemap.
export const GET: APIRoute = ({ site }) => {
	const origin = (site ?? new URL('https://zettabit.it')).origin;

	const body = `User-agent: *
Allow: /

# No crawl traps here: the site is fully static and has no search, no faceted
# URLs and no session parameters, so everything is fair game.

Sitemap: ${origin}/sitemap.xml
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
