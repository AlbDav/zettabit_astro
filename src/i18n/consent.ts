// Cookie banner copy, in the exact shape vanilla-cookieconsent expects for
// `language.translations`. Links to the policies are lang-dependent, so this is
// a function rather than a flat object.

type Links = { privacyHref: string; cookieHref: string };

export function getConsentStrings(lang: string, { privacyHref, cookieHref }: Links) {
	return lang === 'en' ? en({ privacyHref, cookieHref }) : it({ privacyHref, cookieHref });
}

const it = ({ privacyHref, cookieHref }: Links) => ({
	consentModal: {
		title: 'Cookie e statistiche',
		description:
			'Questo sito usa cookie tecnici, necessari per farlo funzionare. Solo se acconsenti, uso anche Google Analytics per capire quante persone lo visitano e da dove arrivano. Puoi cambiare idea quando vuoi.',
		acceptAllBtn: 'Accetta tutti',
		acceptNecessaryBtn: 'Rifiuta',
		showPreferencesBtn: 'Personalizza',
		footer: `<a href="${privacyHref}">Privacy Policy</a><a href="${cookieHref}">Cookie Policy</a>`,
	},
	preferencesModal: {
		title: 'Preferenze cookie',
		acceptAllBtn: 'Accetta tutti',
		acceptNecessaryBtn: 'Rifiuta',
		savePreferencesBtn: 'Salva le preferenze',
		closeIconLabel: 'Chiudi',
		serviceCounterLabel: 'Servizio|Servizi',
		sections: [
			{
				title: 'Come uso i cookie',
				description:
					'I cookie tecnici servono a far funzionare il sito e non si possono disattivare. Quelli statistici sono facoltativi: restano spenti finché non li attivi tu.',
			},
			{
				title: 'Cookie tecnici <span class="pm__badge">Sempre attivi</span>',
				description:
					'Memorizzano la lingua che preferisci e la scelta che fai su questo banner, così non te la richiedo a ogni visita. Senza di loro il sito non funziona correttamente.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Cookie statistici',
				description:
					'Google Analytics 4, per sapere quante visite riceve il sito, quali pagine vengono lette e da quale canale arrivano. I dati sono aggregati e non li uso per profilarti né per pubblicità.',
				linkedCategory: 'analytics',
			},
			{
				title: 'Vuoi saperne di più?',
				description: `Trovi tutti i dettagli nella <a href="${cookieHref}">Cookie Policy</a> e nella <a href="${privacyHref}">Privacy Policy</a>.`,
			},
		],
	},
});

const en = ({ privacyHref, cookieHref }: Links) => ({
	consentModal: {
		title: 'Cookies and statistics',
		description:
			'This site uses technical cookies, which are needed for it to work. Only if you agree, I also use Google Analytics to understand how many people visit and where they come from. You can change your mind at any time.',
		acceptAllBtn: 'Accept all',
		acceptNecessaryBtn: 'Reject',
		showPreferencesBtn: 'Customise',
		footer: `<a href="${privacyHref}">Privacy Policy</a><a href="${cookieHref}">Cookie Policy</a>`,
	},
	preferencesModal: {
		title: 'Cookie preferences',
		acceptAllBtn: 'Accept all',
		acceptNecessaryBtn: 'Reject',
		savePreferencesBtn: 'Save preferences',
		closeIconLabel: 'Close',
		serviceCounterLabel: 'Service|Services',
		sections: [
			{
				title: 'How I use cookies',
				description:
					'Technical cookies keep the site working and cannot be turned off. Statistics cookies are optional: they stay off until you switch them on.',
			},
			{
				title: 'Technical cookies <span class="pm__badge">Always on</span>',
				description:
					'They remember your preferred language and the choice you make on this banner, so I don’t have to ask every visit. The site does not work properly without them.',
				linkedCategory: 'necessary',
			},
			{
				title: 'Statistics cookies',
				description:
					'Google Analytics 4, to know how many visits the site gets, which pages are read and which channel people arrive from. The data is aggregated and is not used to profile you or for advertising.',
				linkedCategory: 'analytics',
			},
			{
				title: 'Want to know more?',
				description: `Full details are in the <a href="${cookieHref}">Cookie Policy</a> and the <a href="${privacyHref}">Privacy Policy</a>.`,
			},
		],
	},
});
