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

// Contact-form budget slider — easy to edit here. If the visitor picks "Both"
// (website + video), min and max are summed automatically. `step` sets the
// granularity; `locale`/`currency` format the displayed amount.
export const budgetRange = {
	min: 180,
	max: 5000,
	step: 20,
	currency: 'EUR',
	locale: 'it-IT',
};

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
