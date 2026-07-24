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

// Service detail pages live under /servizi/ (IT root) and /en/servizi/ (P5.2).
export function getLocalizedServicePath(lang: string, slug: string): string {
	return `${getLocalizedPath(lang)}servizi/${slug}/`;
}
