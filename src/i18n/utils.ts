import { en } from './en';
import { it } from './it';

export const languages = {
	it: 'Italiano',
	en: 'English',
};

export const defaultLang: keyof typeof languages = 'it';

const dictionaries = { en, it };

type Lang = keyof typeof dictionaries;

function resolveLang(lang: string): Lang {
	return lang in dictionaries ? (lang as Lang) : defaultLang;
}

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	return resolveLang(lang);
}

export function useTranslations(lang: string) {
	const dict = dictionaries[resolveLang(lang)].ui;
	const fallback = dictionaries[defaultLang].ui;
	return function t(key: keyof typeof fallback): string {
		return dict[key] ?? fallback[key] ?? key;
	};
}

export function getContent(lang: string) {
	return dictionaries[resolveLang(lang)].content;
}

export function getLocalizedPath(lang: string): string {
	return lang === defaultLang ? '/' : `/${lang}/`;
}

// ── Rotte con slug diverso tra lingue ────────────────────────────────────────
// Il resto del sito usa la stessa path in entrambe le lingue (/privacy/ ↔
// /en/privacy/), quindi bastava aggiungere o togliere il prefisso /en. La pagina
// prezzi no: /prezzi/ ↔ /en/prices/. Senza questa mappa il selettore di lingua e
// gli hreflang costruirebbero /en/prezzi/, che non esiste.
const localizedRoutes: { it: string; en: string }[] = [{ it: '/prezzi/', en: '/en/prices/' }];

const normalize = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** La stessa pagina nelle due lingue, a partire da una qualsiasi delle due. */
export function altPaths(pathname: string): { it: string; en: string } {
	const path = normalize(pathname);
	const mapped = localizedRoutes.find((r) => r.it === path || r.en === path);
	if (mapped) return mapped;

	const base = path.replace(/^\/en(?=\/|$)/, '') || '/';
	return { it: base, en: base === '/' ? '/en/' : `/en${base}` };
}

/**
 * Cifra con il separatore delle migliaia della lingua: `1.190` in italiano,
 * `1,190` in inglese. Il simbolo € lo mette chi chiama, dopo la cifra, come
 * nel resto del sito.
 */
export function formatPrice(lang: string, value: number): string {
	// `useGrouping: 'always'` non è pignoleria: l'italiano usa il raggruppamento
	// "min2", che lascerebbe 1190 senza punto e lo farebbe leggere come 11.90.
	return new Intl.NumberFormat(resolveLang(lang) === 'en' ? 'en-US' : 'it-IT', {
		useGrouping: 'always',
	}).format(value);
}

/** Path della pagina prezzi nella lingua corrente. */
export function getPricingPath(lang: string): string {
	const [prezzi] = localizedRoutes;
	return resolveLang(lang) === 'en' ? prezzi.en : prezzi.it;
}
