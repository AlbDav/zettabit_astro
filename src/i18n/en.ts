export const en = {
	ui: {
		'nav.services': 'Services',
		'nav.process': 'How I work',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.faq': 'FAQ',
		'nav.cta': "Let's talk",
		'menu.open': 'Open menu',
		'a11y.skip': 'Skip to content',
		'hero.eyebrow': 'Davide Albano · Rome · freelance',
		'hero.badge': 'Available for new projects',
		'hero.cta.process': 'What I do',
		'hero.cta.contact': 'Book a 20-minute call',
		'price.from': 'from',
		'sticky.title': '20-minute call',
		'sticky.subtitle': 'No obligation, from €{price}',
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
		'faq.title': 'Frequently asked questions',
		'contact.title': "Let's talk about your project",
		'contact.subtitle':
			"A 20-minute call, no strings. You'll leave with a clear idea of what's needed, how long it takes and what it costs — even if you decide not to work with me.",
		'contact.emailPrompt': 'Prefer to just email me?',
		'contact.emailNote': "I'll reply within one business day.",
		'contact.linkedin': 'LinkedIn',
		'contact.instagram': 'Instagram',
		'contact.github': 'GitHub',
		'footer.tagline': 'Web development and video editing for brands that want to stand out.',
		'footer.connect': 'Contact',
		'footer.privacy': 'Privacy Policy',
		'footer.cookie': 'Cookie Policy',
		'footer.cookiePrefs': 'Cookie preferences',
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
		aboutHeadline: 'One person, and it shows — in a good way.',
		headline: 'The site and the videos for your business, made by the same person.',
		subheadline:
			'Web development and video editing for professionals and small businesses. One point of contact, one quote, one visual language — from the first line of code to the final cut.',
		heroStats: [
			{ label: 'Website', price: 'web', caption: 'base rate, tailored quote' },
			{ label: 'Video', price: 'video', caption: 'editing, based on length & footage' },
			{ label: 'Before we start', value: 'Written quote', caption: 'scope and cost, no obligation' },
			{ label: 'After delivery', value: '1 month', caption: 'of support included' },
		],
		services: [
			{
				title: 'Web Development',
				headline: 'Sites that load fast and bring in leads',
				description:
					'Landing pages, brochure sites and sites you can update yourself (Sanity) — fast, responsive and built to convert.',
				features: ['Responsive design, mobile included', 'On-page SEO and performance', 'Optional CMS you can update yourself'],
				ctaLabel: "Let's talk about the site →",
				needValue: 'website',
			},
			{
				title: 'Video Editing',
				headline: 'Video people watch to the end',
				description:
					'Editing, color grading and motion graphics for content that holds attention from the first second.',
				features: ['Story-driven editing', 'Color grading in DaVinci Resolve', 'Subtitles & animated graphics'],
				ctaLabel: "Let's talk about the video →",
				needValue: 'video',
			},
		],
		combo: {
			label: 'Web + video',
			headline: 'Handled together, no handoffs',
			description:
				"Your site and your videos tell the same story. With two different suppliers it shows: colours that don't match, a tone that shifts, timelines that stretch because each is waiting on the other.",
			features: ['One point of contact', 'One quote, not two', 'One visual language'],
			ctaLabel: "Let's talk about your business →",
			needValue: 'both',
		},
		process: [
			{
				title: 'Understanding the project',
				description:
					'We go through your goals, audience and content. You get a written proposal with scope, cost and what’s needed from you. You can still walk away, at no cost.',
				note: 'You can still walk away here, at no cost.',
			},
			{
				title: 'Build or edit',
				description:
					'The project takes shape with progress shared regularly, so nothing is a surprise at the end.',
				note: 'No surprises at the end.',
			},
			{
				title: 'Delivery and support',
				description:
					'Everything is handed over with a walkthrough on how to run it, plus a month of support for adjustments — then it’s up to you whether to continue.',
				note: 'A month of adjustments included.',
			},
		],
		form: {
			needTitle: 'What do you need?',
			needField: 'need',
			needOptions: [
				{ value: 'website', label: 'A website' },
				{ value: 'video', label: 'Video' },
				{ value: 'both', label: 'Both' },
			],
			name: 'Name',
			email: 'Email',
			message: 'Tell me about the project',
			messagePlaceholder: "A couple of lines is enough: what you need and by when.",
			consentBefore: 'I have read and accept the ',
			consentLink: 'privacy policy',
			consentAfter: '.',
			submit: 'Send the request',
			sending: 'Sending…',
			errors: {
				choose: 'Please choose an option to continue.',
				name: 'Please enter your name.',
				email: 'Please enter a valid email address.',
				consent: 'Please accept the privacy policy to send.',
			},
			successTitle: 'Got it.',
			successBody: "I'll get back to you within one business day with next steps. If it's urgent, just email me.",
			resetLabel: 'Send another message',
			sendErrorBefore: 'Something went wrong. You can email me directly at ',
			sendErrorAfter: '.',
		},
		// Mirrors it.ts faq 1:1 (same questions, translated) so both languages stay in sync.
		faq: [
			{
				q: 'How much does a website cost?',
				a: 'The price of a website depends on your needs, with a base rate starting from €{price}.',
			},
			{
				q: 'How long does it take to build?',
				a: "Turnaround depends on how complex the site is, and can range from a few days to a month. If you decide to work with me, we'll agree on this before starting.",
			},
			{
				q: 'Do you also shoot video, or only edit?',
				a: "For now I only edit, but I'm also looking into offering filming (initially only in and around Rome).",
			},
			{
				q: 'Can I update the site myself?',
				a: "There's the option of a Sanity integration, which lets you update your site's content yourself after launch.",
			},
			{
				q: 'Do you also handle domain and hosting?',
				a: 'I can guide you step by step through setting up your accounts and managing your domain.',
			},
			{
				q: 'Do you only work in Rome, or remotely too?',
				a: 'For websites and video editing I also work remotely. The filming service (coming soon) will initially only cover Rome and the surrounding area.',
			},
			{
				q: "What if I'm not happy with the result?",
				a: "I'll show you work in progress before final delivery, so we can adjust course as I go rather than only at the end.",
			},
		],
	},
};
