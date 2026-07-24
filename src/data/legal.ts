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
					body: 'Il modulo è gestito tramite Netlify Forms; i dati transitano e sono conservati sui server del fornitore. [DA CONFERMARE eventuali altri strumenti, es. email provider, analytics].',
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
					body: 'Il sito salva nel browser una preferenza di lingua (localStorage) per non doverla richiedere ogni volta. Non serve consenso per questa finalità.',
				},
				{
					heading: 'Cookie di terze parti / analytics',
					body: 'Al momento [DA CONFERMARE]. Se verrà aggiunta analisi delle visite, l’intenzione è usare uno strumento senza cookie (es. Plausible o Umami) per evitare il banner di consenso. In caso contrario, questa sezione va aggiornata e va aggiunto un banner con blocco preventivo.',
				},
				{
					heading: 'Gestione dei cookie',
					body: 'Puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser. [DA COMPILARE eventuali istruzioni specifiche].',
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
					body: 'The form is handled through Netlify Forms; data passes through and is stored on the provider’s servers. [DA CONFERMARE any other tools, e.g. email provider, analytics].',
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
					body: 'The site stores a language preference in the browser (localStorage) so it doesn’t have to ask every time. No consent is needed for this purpose.',
				},
				{
					heading: 'Third-party / analytics cookies',
					body: 'None at the moment [DA CONFERMARE]. If visit analytics is added, the intention is to use a cookieless tool (e.g. Plausible or Umami) to avoid a consent banner. Otherwise this section must be updated and a banner with prior blocking added.',
				},
				{
					heading: 'Managing cookies',
					body: 'You can delete or block cookies from your browser settings. [DA COMPILARE any specific instructions].',
				},
			],
		},
	},
};
