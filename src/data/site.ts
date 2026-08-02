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

// Headline "da X €" prices shown in the hero stats, service cards, FAQ and
// sticky CTA — a single source so the four never drift apart.
export const pricing = {
	web: 180,
	video: 150,
	combo: 300,
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
