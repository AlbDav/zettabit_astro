export const site = {
	siteName: 'Zettabit',
	name: 'Davide Albano',
	email: 'davide.albano@zettabit.it',
	// [DA CONFERMARE la P.IVA — mostrata nel footer quando compilata]
	vat: '',
	social: {
		linkedin: 'https://www.linkedin.com/in/davide-albano/',
		instagram: 'https://www.instagram.com/zettabit.studio',
		github: 'https://github.com/AlbDav/',
	},
};

// Availability badge (P3.1). [DA CONFERMARE il mese e il numero di progetti]
export const availability = {
	it: 'Disponibile da [MESE] — [N] progetti alla volta',
	en: 'Available from [MONTH] — [N] projects at a time',
};

// Price floor (P3.4). [DA CONFERMARE la cifra [X] — non inventare]
export const priceFloor = {
	it: 'Progetti a partire da € [X] — il preventivo esatto arriva dopo la prima call.',
	en: 'Projects start at € [X] — you get an exact quote after the first call.',
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
