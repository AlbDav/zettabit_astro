export const it = {
	ui: {
		'nav.services': 'Servizi',
		'nav.process': 'Come lavoro',
		'nav.portfolio': 'Portfolio',
		'nav.overview': 'Panoramica',
		'nav.about': 'Chi sono',
		'nav.contact': 'Contatti',
		'nav.cta': 'Inizia un progetto',
		'menu.open': 'Apri menu',
		'a11y.skip': 'Salta al contenuto',
		'hero.badge': 'Disponibile per nuovi progetti',
		'hero.cta.process': 'Come lavoro',
		'hero.cta.contact': 'Raccontami il progetto',
		'services.title': 'Cosa faccio',
		'services.subtitle': 'Due mestieri, un obiettivo: far crescere il tuo progetto e farlo notare.',
		'why.title': 'Perché una persona sola e non due',
		'why.p1':
			'Il sito e i video di un’attività raccontano la stessa cosa, e quando li curano due fornitori diversi si vede: colori che non combaciano, tono che cambia, tempi che si allungano perché ognuno aspetta l’altro.',
		'why.p2': 'Io li faccio entrambi. Un interlocutore, un preventivo, una linea visiva sola.',
		'process.title': 'Come lavoro',
		'process.subtitle': 'Un processo semplice e trasparente, dal primo messaggio al giorno del lancio.',
		'about.title': 'Chi sono',
		'about.bio':
			"Sono Davide, un freelance che unisce sviluppo web e video editing per aiutare persone e aziende a comunicare online in modo chiaro. Seguo l'intero percorso, dalla progettazione del sito alla realizzazione del video, con attenzione ai dettagli e ai risultati concreti.",
		// [DA CONFERMARE — un dettaglio concreto: cosa ti ha portato a unire i due mestieri.
		// Lasciato con la '[' iniziale così resta nascosto finché non lo scrivi.]
		'about.bioDetail': '[DA CONFERMARE il dettaglio biografico]',
		'about.certTitle': 'Certificazioni',
		'about.techToggle': 'Stack tecnico',
		'about.location': 'Roma — lavoro con clienti in tutta Italia e da remoto.',
		'portfolio.title': 'Portfolio',
		'portfolio.cta': 'Scopri di più',
		'faq.title': 'Domande frequenti',
		'contact.title': 'Parliamo del tuo progetto',
		'contact.subtitle':
			'Una call di 20 minuti, senza impegno. Ne esci con un’idea chiara di cosa serve, dei tempi e di quanto costa — anche se poi decidi di non lavorare con me.',
		'contact.linkedin': 'LinkedIn',
		'contact.instagram': 'Instagram',
		'contact.github': 'GitHub',
		'footer.tagline': 'Sviluppo web e video editing per brand che vogliono distinguersi.',
		'footer.connect': 'Contatti',
		'footer.privacy': 'Privacy Policy',
		'footer.cookie': 'Cookie Policy',
		'footer.location': 'Roma, Italia',
		'legal.back': 'Torna alla home',
	},
	content: {
		// SEO per pagina (P5.3) — Roma nel title della home (P5.4); description 140–160
		// caratteri, diverse dalle inglesi (non traduzioni letterali).
		seo: {
			title: 'Davide Albano — Sviluppatore web e video editor a Roma',
			description:
				'Sviluppo web e video editing a Roma, una persona sola. Siti che caricano veloci e video che si guardano fino in fondo, per professionisti e piccole imprese.',
		},
		role: 'Sviluppatore Web & Video Editor',
		headline: 'Un sito che carica veloce. Video che si guardano fino in fondo. Una persona sola.',
		subheadline:
			'Sviluppo web e video editing per professionisti e piccole imprese. Dalla prima riga di codice all’ultimo taglio, senza passaggi di mano.',
		services: [
			{
				slug: 'sviluppo-web',
				type: 'web',
				metaTitle: 'Realizzazione siti web a Roma — landing page, siti vetrina e CMS',
				metaDescription:
					'Realizzo siti web a Roma: landing page, siti vetrina e siti con CMS che aggiorni in autonomia. Veloci, responsive e pensati per convertire i visitatori.',
				title: 'Sviluppo Web',
				tagline: 'Siti veloci, curati e pensati per trasformare i visitatori in clienti.',
				description:
					'Landing page, siti vetrina e siti con CMS leggeri (Sanity), veloci, responsive e pensati per convertire.',
				features: ['Design responsive', 'SEO on-page', 'Performance ottimizzate'],
				sections: [
					{
						slug: 'landing-pages',
						title: 'Landing page',
						description: 'Pagine singole e mirate, pensate per trasformare i visitatori in contatti.',
					},
					{
						slug: 'showcase-sites',
						title: 'Siti vetrina',
						description: 'Siti multipagina che raccontano brand, servizi e storia.',
					},
					{
						slug: 'cms-sites',
						title: 'Siti con CMS',
						description: 'Siti su Sanity che aggiorni in autonomia, senza toccare il codice.',
					},
				],
			},
			{
				slug: 'video',
				type: 'video',
				metaTitle: 'Montaggio video, color grading e motion graphics — Roma',
				metaDescription:
					'Montaggio, color grading e motion graphics a Roma e da remoto: dal girato grezzo a contenuti che si guardano fino in fondo, per professionisti e imprese.',
				title: 'Video Editing',
				tagline: 'Montaggio che trasforma il girato in contenuti che si guardano fino in fondo.',
				description:
					"Montaggio, color grading e motion graphics per contenuti che catturano l'attenzione.",
				features: ['Montaggio narrativo', 'Color grading', 'Sottotitoli e grafiche'],
				sections: [
					{
						slug: 'editing',
						title: 'Montaggio',
						description: 'Montaggi narrativi che tengono lo spettatore fino alla fine.',
					},
					{
						slug: 'color-grading',
						title: 'Color grading',
						description: 'Look coerenti e cinematografici che danno il tono giusto.',
					},
					{
						slug: 'motion-graphics',
						title: 'Motion graphics',
						description: 'Titoli, grafiche e animazioni che aggiungono qualità.',
					},
				],
			},
		],
		// [DA CONFERMARE le durate reali e il numero di revisioni ([N])]
		process: [
			{
				title: 'Capiamo il progetto',
				meta: 'circa 1 settimana',
				description:
					'Parliamo di obiettivi, pubblico e contenuti. Ti mando una proposta scritta con tempi, costo e cosa serve da parte tua. Da qui puoi ancora dire di no, senza costi.',
			},
			{
				title: 'Sviluppo o montaggio',
				meta: '2-6 settimane',
				description:
					'Lavoro sul progetto e ti mostro l’avanzamento ogni settimana, così non ci sono sorprese alla fine. [N] giri di revisioni inclusi.',
			},
			{
				title: 'Consegna e supporto',
				meta: '30 giorni inclusi',
				description:
					'Ti consegno tutto e ti spiego come gestirlo. Resto disponibile un mese per gli aggiustamenti, poi decidi tu se continuare con l’assistenza.',
			},
		],
		form: {
			totalSteps: 3,
			progressTemplate: 'Passo {current} di {total}',
			next: 'Avanti',
			back: 'Indietro',
			submit: 'Invia',
			sending: 'Invio in corso…',
			escapePrompt: 'Preferisci scrivermi direttamente?',
			steps: {
				need: {
					title: 'Di cosa hai bisogno?',
					field: 'need',
					options: [
						{ value: 'website', label: 'Un sito web' },
						{ value: 'video', label: 'Video' },
						{ value: 'both', label: 'Entrambi' },
						{ value: 'unsure', label: 'Non lo so ancora' },
					],
				},
				projectType: {
					title: 'Che tipo di progetto?',
					field: 'project-type',
					options: [
						{ value: 'new', label: 'Sito nuovo da zero' },
						{ value: 'redesign', label: 'Rifacimento di un sito esistente' },
						{ value: 'landing', label: 'Solo una landing page' },
					],
				},
				videoScope: {
					title: 'Serve anche la ripresa o solo il montaggio?',
					field: 'video-scope',
					options: [
						{ value: 'filming-editing', label: 'Ripresa e montaggio' },
						{ value: 'editing', label: "Solo montaggio, il girato ce l'ho" },
						{ value: 'unsure', label: 'Non lo so ancora' },
					],
				},
				// [DA CONFERMARE i range di budget — placeholder € [X] / € [Y]]
				budget: {
					title: 'Budget indicativo',
					field: 'budget',
					options: [
						{ value: 'under', label: 'Meno di € [X]' },
						{ value: 'mid', label: '€ [X]–[Y]' },
						{ value: 'over', label: 'Oltre € [Y]' },
						{ value: 'na', label: 'Preferisco non dirlo' },
					],
				},
				details: {
					title: 'Ancora un paio di dettagli',
					name: 'Nome',
					email: 'Email',
					message: 'Raccontami il progetto',
					consentBefore: 'Ho letto e accetto la ',
					consentLink: 'privacy policy',
					consentAfter: '.',
				},
			},
			errors: {
				choose: 'Scegli un’opzione per continuare.',
				name: 'Inserisci il tuo nome.',
				email: 'Inserisci un indirizzo email valido.',
				consent: 'Accetta la privacy policy per inviare.',
			},
			// [DA CONFERMARE il tempo di risposta — placeholder [X]]
			successTitle: 'Ricevuto.',
			successBody: 'Ti rispondo entro [X].',
			sendErrorBefore: 'Qualcosa è andato storto. Puoi scrivermi direttamente a ',
			sendErrorAfter: '.',
		},
		// [DA CONFERMARE le risposte; le domande sono definitive, le risposte placeholder.
		// Compilale, poi metti faqReady = true in src/data/site.ts per pubblicare + emettere lo schema.]
		faq: [
			{ q: 'Quanto costa un sito?', a: '[DA COMPILARE]' },
			{ q: 'Quanto tempo serve per realizzarlo?', a: '[DA COMPILARE]' },
			{ q: 'I testi li scrivo io o li scrivi tu?', a: '[DA COMPILARE]' },
			{ q: 'Giri anche i video o fai solo montaggio?', a: '[DA COMPILARE]' },
			{ q: 'Posso aggiornare il sito in autonomia?', a: '[DA COMPILARE]' },
			{ q: 'Ti occupi anche di dominio e hosting?', a: '[DA COMPILARE]' },
			{ q: 'Lavori solo su Roma o anche da remoto?', a: '[DA COMPILARE]' },
			{ q: 'Cosa succede se il risultato non mi convince?', a: '[DA COMPILARE]' },
		],
	},
};
