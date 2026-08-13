// Legal pages content (Privacy Policy + Cookie Policy).
//
// ⚠️  PLACEHOLDER / BOZZA. Questi testi NON sono una privacy/cookie policy valida:
// sono uno scheletro con le sezioni standard richieste dal GDPR. Vanno compilati
// con i dati reali (titolare, P.IVA, strumenti usati, base giuridica…) e fatti
// rivedere prima della pubblicazione. Ogni [DA COMPILARE] è un buco da riempire.

type Section = { heading: string; body: string };
type Doc = { title: string; intro: string; sections: Section[] };
type LegalStrings = {
	draftNotice: string;
	lastUpdated: string;
	privacy: Doc;
	cookie: Doc;
};

export const legal: Record<'it' | 'en', LegalStrings> = {
	it: {
		draftNotice:
			'Bozza — struttura di base, non ancora un documento valido. Da compilare con i dati reali e far rivedere prima della pubblicazione.',
		lastUpdated: 'Ultimo aggiornamento: [DA CONFERMARE]',
		privacy: {
			title: 'Privacy Policy',
			intro:
				'Questa pagina descrive come vengono trattati i dati personali di chi usa questo sito e, in particolare, di chi invia il modulo di contatto. [DA COMPILARE]',
			sections: [
				{
					heading: 'Titolare del trattamento',
					body: 'Davide Albano — Zettabit, Roma. P.IVA [DA CONFERMARE]. Email di contatto: [DA CONFERMARE].',
				},
				{
					heading: 'Dati raccolti',
					body: 'Tramite il modulo di contatto vengono raccolti: nome, email, il contenuto del messaggio e le opzioni selezionate (tipo di progetto, budget indicativo). [DA COMPILARE eventuali altri dati].',
				},
				{
					heading: 'Finalità e base giuridica',
					body: 'I dati sono usati solo per rispondere alla richiesta e gestire un eventuale progetto. La base giuridica è il riscontro alla tua richiesta (misure precontrattuali). [DA COMPILARE].',
				},
				{
					heading: 'Strumenti e destinatari',
					body: 'Il modulo è gestito tramite Netlify Forms; i dati transitano e sono conservati sui server del fornitore. Le statistiche di visita sono raccolte con Google Analytics 4 (Google Ireland Limited), solo previo tuo consenso: vedi la Cookie Policy. [DA CONFERMARE eventuali altri strumenti, es. email provider].',
				},
				{
					heading: 'Conservazione',
					body: 'I dati sono conservati per il tempo necessario a gestire la richiesta e gli obblighi correlati. [DA CONFERMARE i tempi].',
				},
				{
					heading: 'I tuoi diritti',
					body: 'Puoi chiedere in ogni momento accesso, rettifica, cancellazione o limitazione dei tuoi dati, e opporti al trattamento, scrivendo al titolare. Puoi inoltre proporre reclamo al Garante per la protezione dei dati personali.',
				},
			],
		},
		cookie: {
			title: 'Cookie Policy',
			intro:
				'Questa pagina spiega quali cookie e tecnologie simili usa il sito. [DA COMPILARE in base agli strumenti effettivamente attivi].',
			sections: [
				{
					heading: 'Cookie tecnici',
					body: 'Il sito salva nel browser una preferenza di lingua (localStorage) e la scelta che fai sul banner dei cookie (cookie “cc_cookie”, durata 6 mesi), per non doverle richiedere a ogni visita. Non serve consenso per questa finalità.',
				},
				{
					heading: 'Cookie statistici (Google Analytics 4)',
					body: 'Con il tuo consenso il sito usa Google Analytics 4 (Google Ireland Limited) per contare le visite e capire da quali canali arrivano. Installa cookie con prefisso “_ga” (durata fino a 2 anni). Questi cookie NON vengono caricati finché non li accetti dal banner: se rifiuti, nessuno script di Google viene contattato. I dati sono aggregati e non li uso per profilazione o pubblicità. [DA CONFERMARE eventuale trasferimento dati extra-UE nelle impostazioni della proprietà GA4].',
				},
				{
					heading: 'Revocare o cambiare il consenso',
					body: 'Puoi cambiare la tua scelta in qualsiasi momento dal link “Preferenze cookie” in fondo a ogni pagina. Se disattivi i cookie statistici, quelli già presenti vengono cancellati. In alternativa puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser.',
				},
			],
		},
	},
	en: {
		draftNotice:
			'Draft — base structure only, not yet a valid document. To be filled in with real details and reviewed before publishing.',
		lastUpdated: 'Last updated: [DA CONFERMARE]',
		privacy: {
			title: 'Privacy Policy',
			intro:
				'This page describes how the personal data of people using this site — and in particular anyone submitting the contact form — is handled. [DA COMPILARE]',
			sections: [
				{
					heading: 'Data controller',
					body: 'Davide Albano — Zettabit, Rome, Italy. VAT [DA CONFERMARE]. Contact email: [DA CONFERMARE].',
				},
				{
					heading: 'Data collected',
					body: 'The contact form collects: name, email, the message content and the selected options (project type, rough budget). [DA COMPILARE any other data].',
				},
				{
					heading: 'Purpose and legal basis',
					body: 'Data is used only to reply to your request and to handle a possible project. The legal basis is responding to your request (pre-contractual measures). [DA COMPILARE].',
				},
				{
					heading: 'Tools and recipients',
					body: 'The form is handled through Netlify Forms; data passes through and is stored on the provider’s servers. Visit statistics are collected with Google Analytics 4 (Google Ireland Limited), only with your prior consent: see the Cookie Policy. [DA CONFERMARE any other tools, e.g. email provider].',
				},
				{
					heading: 'Retention',
					body: 'Data is kept for as long as needed to handle the request and related obligations. [DA CONFERMARE the timeframe].',
				},
				{
					heading: 'Your rights',
					body: 'You can ask at any time to access, correct, delete or restrict your data, and object to processing, by writing to the controller. You may also lodge a complaint with the Italian Data Protection Authority (Garante).',
				},
			],
		},
		cookie: {
			title: 'Cookie Policy',
			intro:
				'This page explains which cookies and similar technologies the site uses. [DA COMPILARE based on the tools actually active].',
			sections: [
				{
					heading: 'Technical cookies',
					body: 'The site stores a language preference in the browser (localStorage) and the choice you make on the cookie banner (“cc_cookie” cookie, 6 months), so it doesn’t have to ask on every visit. No consent is needed for this purpose.',
				},
				{
					heading: 'Statistics cookies (Google Analytics 4)',
					body: 'With your consent the site uses Google Analytics 4 (Google Ireland Limited) to count visits and understand which channels they come from. It sets cookies prefixed “_ga” (up to 2 years). These cookies are NOT loaded until you accept them on the banner: if you reject, no Google script is contacted at all. The data is aggregated and is not used for profiling or advertising. [DA CONFERMARE any non-EU data transfer in the GA4 property settings].',
				},
				{
					heading: 'Withdrawing or changing consent',
					body: 'You can change your choice at any time via the “Cookie preferences” link at the bottom of every page. Turning statistics cookies off also deletes the ones already set. Alternatively you can delete or block cookies from your browser settings.',
				},
			],
		},
	},
};
