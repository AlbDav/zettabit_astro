export const it = {
	ui: {
		'nav.services': 'Servizi',
		'nav.process': 'Come lavoro',
		'nav.portfolio': 'Portfolio',
		'nav.overview': 'Panoramica',
		'nav.about': 'Chi sono',
		'nav.contact': 'Contatti',
		'nav.faq': 'Domande',
		'nav.cta': 'Parliamone',
		'menu.open': 'Apri menu',
		'a11y.skip': 'Salta al contenuto',
		'hero.eyebrow': 'Davide Albano · Roma · freelance',
		'hero.badge': 'Disponibile per nuovi progetti',
		'hero.cta.process': 'Cosa faccio',
		'hero.cta.contact': 'Prenota una call di 20 minuti',
		'price.from': 'da',
		'sticky.title': 'Call di 20 minuti',
		'sticky.subtitle': 'Senza impegno, da {price} €',
		'services.title': 'Cosa faccio',
		'services.subtitle': 'Due mestieri, un obiettivo: far crescere il tuo progetto e farlo notare.',
		'why.title': 'Web e video, gestiti insieme',
		'why.p1':
			'Il sito e i video di un’attività raccontano la stessa storia, e quando li seguono due fornitori diversi si vede: colori che non combaciano, tono che cambia, tempi che si allungano perché ognuno aspetta l’altro.',
		'why.p2': 'Seguiti insieme, invece: un solo interlocutore, un preventivo, una linea visiva sola.',
		'process.title': 'Come lavoro',
		'process.subtitle': 'Un processo semplice e trasparente, dal primo messaggio al giorno del lancio.',
		'about.title': 'Chi sono',
		'about.bio':
			"Sono Davide, un freelance che unisce sviluppo web e video editing per aiutare persone e aziende a comunicare online in modo chiaro. Seguo l'intero percorso, dalla progettazione del sito alla realizzazione del video, con attenzione ai dettagli e ai risultati concreti.",
		'about.certTitle': 'Certificazioni',
		'about.techToggle': 'Stack tecnico',
		'about.location': 'Roma — lavoro con clienti in tutta Italia e da remoto.',
		'portfolio.title': 'Portfolio',
		'portfolio.cta': 'Scopri di più',
		'faq.title': 'Domande frequenti',
		'contact.title': 'Parliamo del tuo progetto',
		'contact.subtitle':
			'Una call di 20 minuti, senza impegno. Ne esci con un’idea chiara di cosa serve, dei tempi e di quanto costa — anche se poi decidi di non lavorare con me.',
		'contact.emailPrompt': 'Preferisci scrivermi direttamente?',
		'contact.emailNote': 'Rispondo entro un giorno lavorativo.',
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
		aboutHeadline: 'Una persona sola, e si vede in bene.',
		headline: 'Il sito e i video della tua attività, fatti dalla stessa persona.',
		subheadline:
			'Sviluppo web e video editing per professionisti e piccole imprese. Un solo interlocutore, un preventivo, una linea visiva sola — dalla prima riga di codice all’ultimo taglio.',
		heroStats: [
			{ label: 'Sito', price: 'web', caption: 'tariffa base, preventivo su misura' },
			{ label: 'Video', price: 'video', caption: 'montaggio, in base a durata e girato' },
			{ label: 'Prima di iniziare', value: 'Preventivo scritto', caption: 'ambito e costo, senza impegno' },
			{ label: 'Dopo la consegna', value: '1 mese', caption: 'di supporto incluso' },
		],
		services: [
			{
				slug: 'sviluppo-web',
				type: 'web',
				metaTitle: 'Realizzazione siti web a Roma — landing page, siti vetrina e CMS',
				metaDescription:
					'Realizzo siti web a Roma: landing page, siti vetrina e siti con CMS che aggiorni in autonomia. Veloci, responsive e pensati per convertire i visitatori.',
				title: 'Sviluppo Web',
				tagline: 'Siti veloci, curati e pensati per trasformare i visitatori in clienti.',
				headline: 'Siti che caricano veloci e portano richieste',
				description:
					'Landing page, siti vetrina e siti con CMS leggero (Sanity), responsive e pensati per convertire.',
				features: ['Design responsive, mobile incluso', 'SEO on-page e performance', 'CMS opzionale per aggiornarlo da solo'],
				ctaLabel: 'Parliamo del sito →',
				needValue: 'website',
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
				headline: 'Video che si guardano fino in fondo',
				description:
					"Montaggio, color grading e motion graphics per contenuti che tengono l'attenzione dal primo secondo.",
				features: ['Montaggio narrativo', 'Color grading in DaVinci Resolve', 'Sottotitoli e grafiche animate'],
				ctaLabel: 'Parliamo del video →',
				needValue: 'video',
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
		combo: {
			label: 'Web + video',
			headline: 'Gestiti insieme, senza passaggi di mano',
			description:
				'Sito e video raccontano la stessa storia. Con due fornitori diversi si vede: colori che non combaciano, tono che cambia, tempi che si allungano perché ognuno aspetta l’altro.',
			features: ['Un solo interlocutore', 'Un preventivo, non due', 'Una linea visiva sola'],
			ctaLabel: 'Parliamo della tua attività →',
			needValue: 'both',
		},
		process: [
			{
				title: 'Capiamo il progetto',
				description:
					'Si parte da obiettivi, pubblico e contenuti. Ricevi una proposta scritta con ambito, costo e cosa serve da parte tua. Da qui puoi ancora dire di no, senza costi.',
				note: 'Qui puoi ancora dire no, senza costi.',
			},
			{
				title: 'Sviluppo o montaggio',
				description:
					'Il progetto prende forma con aggiornamenti costanti, così non ci sono sorprese alla fine.',
				note: 'Nessuna sorpresa alla fine.',
			},
			{
				title: 'Consegna e supporto',
				description:
					'Alla consegna ricevi tutto e una spiegazione su come gestirlo, più un mese di supporto per gli aggiustamenti — poi decidi tu se continuare.',
				note: 'Un mese di aggiustamenti incluso.',
			},
		],
		form: {
			needTitle: 'Di cosa hai bisogno?',
			needField: 'need',
			needOptions: [
				{ value: 'website', label: 'Un sito' },
				{ value: 'video', label: 'Video' },
				{ value: 'both', label: 'Entrambi' },
			],
			name: 'Nome',
			email: 'Email',
			message: 'Raccontami il progetto',
			messagePlaceholder: 'Due righe bastano: cosa ti serve e per quando.',
			consentBefore: 'Ho letto e accetto la ',
			consentLink: 'privacy policy',
			consentAfter: '.',
			submit: 'Invia la richiesta',
			sending: 'Invio in corso…',
			errors: {
				choose: 'Scegli un’opzione per continuare.',
				name: 'Inserisci il tuo nome.',
				email: 'Inserisci un indirizzo email valido.',
				consent: 'Accetta la privacy policy per inviare.',
			},
			successTitle: 'Ricevuto.',
			successBody: 'Ti scrivo entro un giorno lavorativo con i prossimi passi. Se serve prima, mandami una mail.',
			resetLabel: 'Invia un altro messaggio',
			sendErrorBefore: 'Qualcosa è andato storto. Puoi scrivermi direttamente a ',
			sendErrorAfter: '.',
		},
		faq: [
			{ q: 'Quanto costa un sito?', a: 'Il prezzo di un sito dipende dalle tue necessità, con una tariffa base che parte da {price}€.' },
			{ q: 'Quanto tempo serve per realizzarlo?', a: 'Le tempistiche per il rilascio di un sito dipendono dalla complessità del sito stesso e possono variare da qualche giorno a un mese. Se sceglierai di lavorare con me, ci accorderemo su questo dettaglio prima di iniziare.' },
			{ q: 'Giri anche i video o fai solo montaggio?', a: 'Per il momento monto soltanto, ma sto valutando anche l\'opzione di girare (inizialmente solo nella zona di Roma e dintorni).' },
			{ q: 'Posso aggiornare il sito in autonomia?', a: 'C\'è la possibilità di avere l\'integrazione di Sanity, che ti permetterebbe di aggiornare il contenuto del tuo sito dopo il lancio.' },
			{ q: 'Ti occupi anche di dominio e hosting?', a: 'Posso guidarti passo passo nella creazione delle utenze e nella gestione del tuo dominio.' },
			{ q: 'Lavori solo su Roma o anche da remoto?', a: 'Per i siti web e il montaggio video lavoro anche da remoto. Il servizio di riprese video (disponibile a breve) interesserà inizialmente solo le zone di Roma e dintorni.' },
			{ q: 'Cosa succede se il risultato non mi convince?', a: 'Ti mostrerò risultati intermedi prima della consegna, in modo tale da poter aggiustare il tiro man mano che procedo con lo sviluppo o il montaggio.' },
		],
	},
};
