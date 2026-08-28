/**
 * Generates the 1200×630 open-graph cards in `public/og/`, one per language.
 *
 *   npm run og
 *
 * Run it again whenever `content.og` in the i18n files or the brand palette
 * changes. The output is committed: it is a static asset, so there is no reason
 * to make every deploy pay for satori + resvg.
 *
 * The cards are drawn from the same tokens the site uses (daisyUI `dim`, resolved
 * to hex below) and the same Space Grotesk / IBM Plex Sans faces, so a link
 * preview looks like the page it points at rather than a generic placeholder.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { en } from '../src/i18n/en.ts';
import { it } from '../src/i18n/it.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// daisyUI `dim`, converted from oklch once so the card never drifts from the site.
const c = {
	bg: '#20252e',
	panel: '#2a303c',
	border: 'rgba(178, 204, 214, 0.12)',
	text: '#b2ccd6',
	primary: '#9fe88d',
};

const font = (file: string) => readFileSync(join(root, 'node_modules/@fontsource', file));

// The real favicon mark, inlined — the card should carry the same logo the tab does.
const logo =
	'data:image/svg+xml;base64,' +
	readFileSync(join(root, 'public/favicon.svg')).toString('base64');

const fonts = [
	{ name: 'Space Grotesk', data: font('space-grotesk/files/space-grotesk-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
	{ name: 'IBM Plex Sans', data: font('ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
	{ name: 'IBM Plex Mono', data: font('ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
];

/** Minimal React-element shape — enough for satori, and avoids a JSX build step. */
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
	type,
	props: { style, ...(children === undefined ? {} : { children }) },
});

function card(og: { eyebrow: string; title: string; subtitle: string; footer: string }) {
	return el(
		'div',
		{
			width: 1200,
			height: 630,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			backgroundColor: c.bg,
			padding: '72px 80px',
			fontFamily: 'IBM Plex Sans',
		},
		[
			// The green wash mirrors the hero's top-right glow.
			el('div', {
				position: 'absolute',
				top: -260,
				right: -180,
				width: 760,
				height: 760,
				borderRadius: 760,
				background: 'radial-gradient(circle, rgba(159,232,141,0.16) 0%, rgba(159,232,141,0.04) 45%, rgba(159,232,141,0) 70%)',
			}),
			el(
				'div',
				{ display: 'flex', alignItems: 'center', gap: 14 },
				[
					{ type: 'img', props: { src: logo, width: 40, height: 40 } },
					el(
						'div',
						{
							fontFamily: 'Space Grotesk',
							fontSize: 27,
							fontWeight: 600,
							color: c.text,
							letterSpacing: '-0.01em',
						},
						'Zettabit'
					),
				]
			),
			el(
				'div',
				{ display: 'flex', flexDirection: 'column', gap: 22 },
				[
					el(
						'div',
						{
							fontFamily: 'IBM Plex Mono',
							fontSize: 21,
							color: c.primary,
							textTransform: 'uppercase',
							letterSpacing: '0.14em',
						},
						og.eyebrow
					),
					el(
						'div',
						{
							fontFamily: 'Space Grotesk',
							fontSize: 68,
							fontWeight: 600,
							color: '#e6eef2',
							lineHeight: 1.08,
							letterSpacing: '-0.025em',
							maxWidth: 900,
						},
						og.title
					),
					el(
						'div',
						{ fontSize: 27, color: c.text, lineHeight: 1.45, maxWidth: 860 },
						og.subtitle
					),
				]
			),
			el(
				'div',
				{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					borderTop: `1px solid ${c.border}`,
					paddingTop: 26,
					fontFamily: 'IBM Plex Mono',
					fontSize: 22,
					color: c.text,
				},
				[
					el('div', { display: 'flex' }, 'zettabit.it'),
					el('div', { display: 'flex', color: c.primary }, og.footer),
				]
			),
		]
	);
}

const outDir = join(root, 'public/og');
mkdirSync(outDir, { recursive: true });

for (const [lang, dict] of Object.entries({ it, en })) {
	const svg = await satori(card(dict.content.og) as never, { width: 1200, height: 630, fonts });
	const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
	const out = join(outDir, `og-${lang}.png`);
	writeFileSync(out, png);
	console.log(`${out}  ${(png.length / 1024).toFixed(0)} kB`);
}
