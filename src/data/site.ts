export const site = {
	siteName: 'Zettabit',
	name: 'Davide Albano',
	email: 'davide.albano@zettabit.it',
	vat: '18654361007',
	social: {
		linkedin: 'https://www.linkedin.com/in/davide-albano/',
		instagram: 'https://www.instagram.com/zettabit.studio',
		github: 'https://github.com/AlbDav/',
	},
};

// ── Listino (handoff "prezzi su zettabit.it") ────────────────────────────────
// I prezzi vivono SOLO qui: la pagina /prezzi, la sezione prezzi della home,
// l'hero, le FAQ, lo sticky CTA e il JSON-LD leggono tutti da questo oggetto,
// così le cifre non possono divergere tra una sezione e l'altra.
// `id` è la chiave di traduzione in src/i18n/{it,en}.ts → content.packages.
export const packages = {
	combo: { id: 'combo', price: 490 },
	sitoBase: { id: 'sitoBase', price: 390 },
	sitoCompleto: { id: 'sitoCompleto', price: 790 },
	sitoGestibile: { id: 'sitoGestibile', price: 1190 },
	videoBase: { id: 'videoBase', price: 150 },
	videoEsteso: { id: 'videoEsteso', price: 400 },
	reelMensili: { id: 'reelMensili', price: 400, perMonth: true },
} as const;

export type PackageId = keyof typeof packages;

/** I tre gruppi della pagina prezzi, nell'ordine in cui compaiono. */
export const sitePackages: PackageId[] = ['sitoBase', 'sitoCompleto', 'sitoGestibile'];
export const videoPackages: PackageId[] = ['videoBase', 'videoEsteso', 'reelMensili'];

// Headline "da X €" mostrati in hero, card dei servizi, FAQ e sticky CTA.
// Derivati dai pacchetti d'ingresso: cambiare un pacchetto aggiorna tutto.
export const pricing = {
	web: packages.sitoBase.price,
	video: packages.videoBase.price,
	combo: packages.combo.price,
};

// Prezzo di lancio: i primi 3 progetti, in cambio del caso studio.
// Messo a false quando i 3 posti sono finiti — la riga sparisce e il layout si
// richiude da solo, perché le spaziature sono tutte `gap` del contenitore.
export const LANCIO_ATTIVO = true;

// Proof (P3.5) — these are DATA-driven, not flag-driven: each section shows up on
// its own as soon as it has a real entry. Left empty on purpose — never seed fake
// testimonials/stats/certs, a single invented one sinks the credibility of the rest.
// certifications: [DA CONFERMARE quali completate — es. 'Blackmagic Design Certified']
export const certifications: string[] = [];
// testimonials: [DA CONFERMARE — solo reali]
export const testimonials: { quote: string; author: string; role?: string }[] = [];
// stats: [DA CONFERMARE — solo veri e abbastanza alti]
export const stats: { it: string; en: string }[] = [];

export const skills = [
	'HTML/CSS',
	'JavaScript',
	'Astro',
	'React',
	'Vue',
	'DaVinci Resolve',
	'SEO',
];
