// Legal pages content (Privacy Policy + Cookie Policy).

type Section = { heading: string; body: string };
type Doc = { title: string; intro: string; sections: Section[] };
type LegalStrings = {
	lastUpdated: string;
	privacy: Doc;
	cookie: Doc;
};

export const legal: Record<'it' | 'en', LegalStrings> = {
	it: {
		lastUpdated: 'Ultimo aggiornamento: 16/08/2026',
		privacy: {
			title: 'Privacy Policy',
			intro:
				'Questa pagina descrive come vengono trattati i dati personali di chi usa questo sito e, in particolare, di chi invia il modulo di contatto.',
			sections: [
				{
					heading: 'Titolare del trattamento',
					body: 'Davide Albano — Zettabit, Roma. P.IVA 18654361007. Email di contatto: davide.albano@zettabit.it.',
				},
				{
					heading: 'Dati raccolti',
					body: 'Tramite il modulo di contatto vengono raccolti: nome, email, il contenuto del messaggio e il tipo di progetto.',
				},
				{
					heading: 'Finalità e base giuridica',
					body: 'I dati sono usati solo per rispondere alla richiesta e gestire un eventuale progetto. La base giuridica è il riscontro alla tua richiesta (misure precontrattuali).',
				},
				{
					heading: 'Strumenti e destinatari',
					body: 'Il modulo è gestito tramite Netlify Forms; i dati transitano e sono conservati sui server del fornitore. Le statistiche di visita sono raccolte con Google Analytics 4 (Google Ireland Limited), solo previo tuo consenso: vedi la Cookie Policy.',
				},
				{
					heading: 'Trasferimento dei dati fuori dall’UE',
					body: 'Netlify, che gestisce il modulo di contatto, è una società statunitense: i dati che invii tramite il form sono trattati anche fuori dallo Spazio economico europeo. Google Analytics 4 è fornito da Google Ireland Limited, con sede nell’Unione, ma i dati possono essere trattati anche da società del gruppo Google negli Stati Uniti. In entrambi i casi il trasferimento avviene sulla base delle garanzie previste dagli accordi sul trattamento dei dati sottoscritti con i fornitori: in particolare le clausole contrattuali standard adottate dalla Commissione europea e, dove applicabile, l’adesione del fornitore all’EU-U.S. Data Privacy Framework.',
				},
				{
					heading: 'Conservazione',
					body: 'Se la richiesta non dà seguito a un progetto, i dati del modulo sono conservati per 24 mesi dall’ultimo contatto e poi cancellati. Se invece nasce un rapporto di lavoro, i dati legati al contratto e alla fatturazione sono conservati per i termini imposti dalla legge (dieci anni per le scritture contabili). Puoi chiederne la cancellazione anche prima, salvo che debba conservarli per un obbligo di legge.',
				},
				{
					heading: 'I tuoi diritti',
					body: 'Puoi chiedere in ogni momento accesso, rettifica, cancellazione, limitazione e portabilità dei tuoi dati, e opporti al trattamento, scrivendo al titolare. Quando il trattamento si basa sul consenso — come per i cookie statistici — puoi revocarlo quando vuoi, senza che questo tolga validità a quanto fatto prima della revoca. Puoi inoltre proporre reclamo al Garante per la protezione dei dati personali.',
				},
			],
		},
		cookie: {
			title: 'Cookie Policy',
			intro:
				'Questa pagina spiega quali cookie e tecnologie simili usa il sito.',
			sections: [
				{
					heading: 'Cookie tecnici',
					body: 'Il sito salva nel browser una preferenza di lingua (localStorage) e la scelta che fai sul banner dei cookie (cookie “cc_cookie”, durata 6 mesi), per non doverle richiedere a ogni visita. Non serve consenso per questa finalità.',
				},
				{
					heading: 'Cookie statistici (Google Analytics 4)',
					body: 'Con il tuo consenso il sito usa Google Analytics 4 (Google Ireland Limited) per contare le visite e capire da quali canali arrivano. Installa cookie con prefisso “_ga” (durata fino a 2 anni). Questi cookie NON vengono caricati finché non li accetti dal banner: se rifiuti, nessuno script di Google viene contattato. I dati sono aggregati e non li uso per profilazione o pubblicità.',
				},
				{
					heading: 'Revocare o cambiare il consenso',
					body: 'Puoi cambiare la tua scelta in qualsiasi momento dal link “Preferenze cookie” in fondo a ogni pagina. Se disattivi i cookie statistici, quelli già presenti vengono cancellati. In alternativa puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser.',
				},
			],
		},
	},
	en: {
		lastUpdated: 'Last updated: 16 August 2026',
		privacy: {
			title: 'Privacy Policy',
			intro:
				'This page describes how the personal data of people using this site — and in particular anyone submitting the contact form — is handled.',
			sections: [
				{
					heading: 'Data controller',
					body: 'Davide Albano — Zettabit, Rome, Italy. VAT 18654361007. Contact email: davide.albano@zettabit.it.',
				},
				{
					heading: 'Data collected',
					body: 'The contact form collects: name, email, the message content and the project type.',
				},
				{
					heading: 'Purpose and legal basis',
					body: 'Data is used only to reply to your request and to handle a possible project. The legal basis is responding to your request (pre-contractual measures).',
				},
				{
					heading: 'Tools and recipients',
					body: 'The form is handled through Netlify Forms; data passes through and is stored on the provider’s servers. Visit statistics are collected with Google Analytics 4 (Google Ireland Limited), only with your prior consent: see the Cookie Policy.',
				},
				{
					heading: 'Data transfers outside the EU',
					body: 'Netlify, which handles the contact form, is a US company: the data you send through the form is also processed outside the European Economic Area. Google Analytics 4 is provided by Google Ireland Limited, based in the EU, but the data may also be processed by Google group companies in the United States. In both cases the transfer relies on the safeguards set out in the data processing agreements signed with those providers: specifically the standard contractual clauses adopted by the European Commission and, where applicable, the provider’s certification under the EU-U.S. Data Privacy Framework.',
				},
				{
					heading: 'Retention',
					body: 'If your enquiry does not lead to a project, the form data is kept for 24 months from the last contact and then deleted. If a working relationship does start, the data tied to the contract and to invoicing is kept for the periods required by law (ten years for accounting records). You can ask for deletion earlier than that, unless I am required to keep the data by law.',
				},
				{
					heading: 'Your rights',
					body: 'You can ask at any time to access, correct, delete, restrict or port your data, and object to processing, by writing to the controller. Where processing is based on consent — as it is for statistics cookies — you can withdraw it whenever you like, without affecting the validity of what was done before you withdrew it. You may also lodge a complaint with the Italian Data Protection Authority (Garante).',
				},
			],
		},
		cookie: {
			title: 'Cookie Policy',
			intro: 'This page explains which cookies and similar technologies the site uses.',
			sections: [
				{
					heading: 'Technical cookies',
					body: 'The site stores a language preference in the browser (localStorage) and the choice you make on the cookie banner (“cc_cookie” cookie, 6 months), so it doesn’t have to ask on every visit. No consent is needed for this purpose.',
				},
				{
					heading: 'Statistics cookies (Google Analytics 4)',
					body: 'With your consent the site uses Google Analytics 4 (Google Ireland Limited) to count visits and understand which channels they come from. It sets cookies prefixed “_ga” (up to 2 years). These cookies are NOT loaded until you accept them on the banner: if you reject, no Google script is contacted at all. The data is aggregated and is not used for profiling or advertising.',
				},
				{
					heading: 'Withdrawing or changing consent',
					body: 'You can change your choice at any time via the “Cookie preferences” link at the bottom of every page. Turning statistics cookies off also deletes the ones already set. Alternatively you can delete or block cookies from your browser settings.',
				},
			],
		},
	},
};
