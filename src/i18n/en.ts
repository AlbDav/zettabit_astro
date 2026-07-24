export const en = {
	ui: {
		'nav.services': 'Services',
		'nav.process': 'How I work',
		'nav.portfolio': 'Portfolio',
		'nav.overview': 'Overview',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.cta': "Start a project",
		'menu.open': 'Open menu',
		'a11y.skip': 'Skip to content',
		'hero.badge': 'Available for new projects',
		'hero.cta.process': 'How I work',
		'hero.cta.contact': 'Tell me about your project',
		'services.title': 'What I do',
		'services.subtitle': 'Two crafts, one goal: help your project grow and get noticed.',
		'why.title': 'Web and video, handled together',
		'why.p1':
			"A business's site and its videos tell the same story, and when two different suppliers handle them you can tell: colours that don't match, a tone that shifts, timelines that stretch because each is waiting on the other.",
		'why.p2': 'Handled together instead: one point of contact, one quote, one visual language.',
		'process.title': 'How I work',
		'process.subtitle': 'A simple, transparent process — from the first message to launch day.',
		'about.title': 'About me',
		'about.bio':
			"I'm Davide, a freelancer who blends web development and video editing to help people and businesses communicate online with clarity. I handle the whole journey — from designing the site to producing the video — with an eye for detail and real results.",
		'about.certTitle': 'Certifications',
		'about.techToggle': 'Tech stack',
		'about.location': 'Based in Rome — working with clients across Italy and remotely.',
		'portfolio.title': 'Portfolio',
		'portfolio.cta': 'Learn more',
		'faq.title': 'Frequently asked questions',
		'contact.title': "Let's talk about your project",
		'contact.subtitle':
			"A 20-minute call, no strings. You'll leave with a clear idea of what's needed, how long it takes and what it costs — even if you decide not to work with me.",
		'contact.linkedin': 'LinkedIn',
		'contact.instagram': 'Instagram',
		'contact.github': 'GitHub',
		'footer.tagline': 'Web development and video editing for brands that want to stand out.',
		'footer.connect': 'Contact',
		'footer.privacy': 'Privacy Policy',
		'footer.cookie': 'Cookie Policy',
		'footer.location': 'Rome, Italy',
		'legal.back': 'Back to home',
	},
	content: {
		// Per-page SEO (P5.3) — Rome in the home title (P5.4); descriptions 140–160 chars,
		// deliberately different from the Italian ones (not literal translations).
		seo: {
			title: 'Davide Albano — Web Developer & Video Editor, Rome',
			description:
				'Web development and video editing by one person in Rome. Fast sites and video people actually finish — for professionals and small businesses across Italy.',
		},
		role: 'Web Developer & Video Editor',
		headline: 'A site that loads fast. Video people actually finish. Web and video, together.',
		subheadline:
			'Web development and video editing for professionals and small businesses. From the first line of code to the final cut — no handoffs.',
		services: [
			{
				slug: 'sviluppo-web',
				type: 'web',
				metaTitle: 'Web Development — Landing Pages, Brochure Sites & CMS',
				metaDescription:
					'Fast, responsive landing pages, brochure sites and CMS-backed websites you can update yourself — built to load quickly and turn visitors into clients.',
				title: 'Web Development',
				tagline: 'Sites that load fast, look sharp and turn visitors into clients.',
				description:
					'Landing pages, brochure sites and sites you can update yourself (Sanity) — fast, responsive and built to convert.',
				features: ['Responsive design', 'On-page SEO', 'Optimized performance'],
				sections: [
					{
						slug: 'landing-pages',
						title: 'Landing pages',
						description: 'Focused single-page sites built to turn visitors into leads.',
					},
					{
						slug: 'showcase-sites',
						title: 'Brochure sites',
						description: 'Multi-page sites that present your brand, services and story.',
					},
					{
						slug: 'cms-sites',
						title: 'Sites you can update yourself',
						description: 'Sanity-backed sites you can update yourself, no code required.',
					},
				],
			},
			{
				slug: 'video',
				type: 'video',
				metaTitle: 'Video Editing, Colour Grading & Motion Graphics',
				metaDescription:
					'Editing, colour grading and motion graphics that turn raw footage into content people watch to the end — for small businesses and professionals.',
				title: 'Video Editing',
				tagline: 'Editing that turns raw footage into content people finish.',
				description:
					'Editing, color grading and motion graphics for content that grabs attention.',
				features: ['Story-driven editing', 'Color grading', 'Subtitles & graphics'],
				sections: [
					{
						slug: 'editing',
						title: 'Editing',
						description: 'Story-driven cuts that keep viewers watching to the end.',
					},
					{
						slug: 'color-grading',
						title: 'Color grading',
						description: 'Consistent, cinematic looks that set the right mood.',
					},
					{
						slug: 'motion-graphics',
						title: 'Motion graphics',
						description: 'Titles, lower-thirds and animations that add polish.',
					},
				],
			},
		],
		process: [
			{
				title: 'Understanding the project',
				description:
					'We go through your goals, audience and content. You get a written proposal with scope, cost and what’s needed from you. You can still walk away, at no cost.',
			},
			{
				title: 'Build or edit',
				description:
					'The project takes shape with progress shared regularly, so nothing is a surprise at the end.',
			},
			{
				title: 'Delivery and support',
				description:
					'Everything is handed over with a walkthrough on how to run it, plus a month of support for adjustments — then it’s up to you whether to continue.',
			},
		],
		form: {
			totalSteps: 3,
			progressTemplate: 'Step {current} of {total}',
			next: 'Next',
			back: 'Back',
			submit: 'Send',
			sending: 'Sending…',
			escapePrompt: 'Prefer to just email me?',
			steps: {
				need: {
					title: 'What do you need?',
					field: 'need',
					options: [
						{ value: 'website', label: 'A website' },
						{ value: 'video', label: 'Video' },
						{ value: 'both', label: 'Both' },
					],
				},
				projectType: {
					title: 'What kind of project?',
					field: 'project-type',
					options: [
						{ value: 'new', label: 'Brand new site' },
						{ value: 'redesign', label: 'Redesign of an existing site' },
						{ value: 'landing', label: 'Just a landing page' },
						{ value: 'other', label: 'Something else' },
					],
				},
				videoScope: {
					title: 'What kind of video?',
					field: 'video-scope',
					options: [
						{ value: 'editing', label: 'Editing' },
						{ value: 'color', label: 'Colour grading' },
						{ value: 'motion', label: 'Motion graphics' },
						{ value: 'other', label: 'Something else' },
					],
				},
				budget: {
					title: 'Rough budget',
					field: 'budget',
					na: "I'd rather not say",
				},
				details: {
					title: 'A few details',
					name: 'Name',
					email: 'Email',
					message: 'Tell me about the project',
					consentBefore: 'I have read and accept the ',
					consentLink: 'privacy policy',
					consentAfter: '.',
				},
			},
			errors: {
				choose: 'Please choose an option to continue.',
				name: 'Please enter your name.',
				email: 'Please enter a valid email address.',
				consent: 'Please accept the privacy policy to send.',
			},
			successTitle: 'Got it.',
			sendErrorBefore: 'Something went wrong. You can email me directly at ',
			sendErrorAfter: '.',
		},
		// [DA CONFERMARE le risposte; questions are final, answers are placeholders.
		// Fill them in, then set faqReady = true in src/data/site.ts to publish + emit schema.]
		faq: [
			{ q: 'How much does a website cost?', a: '[DA COMPILARE]' },
			{ q: 'How long does it take?', a: '[DA COMPILARE]' },
			{ q: 'Do I write the copy, or do you?', a: '[DA COMPILARE]' },
			{ q: 'Do you also shoot video, or only edit?', a: '[DA COMPILARE]' },
			{ q: 'Can I update the site myself?', a: '[DA COMPILARE]' },
			{ q: 'Do you also handle domain and hosting?', a: '[DA COMPILARE]' },
			{ q: 'Do you only work in Rome, or remotely too?', a: '[DA COMPILARE]' },
			{ q: "What if I'm not happy with the result?", a: '[DA COMPILARE]' },
		],
	},
};
