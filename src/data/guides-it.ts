import { guides, type Guide } from './guides';

const itTitles: Record<string, string> = {
  'invoice-checklist': 'Checklist della fattura: 9 dettagli da controllare prima dell’invio',
  'payment-terms': 'Termini di pagamento in fattura: come indicare una scadenza chiara',
  'invoice-numbering': 'Numerazione delle fatture: un sistema semplice e coerente',
  'quote-vs-invoice': 'Preventivo o fattura: dall’approvazione al pagamento',
  'freelance-billing-essentials': 'Fatturazione per freelance: le basi essenziali',
  'invoice-generator-software-guide': 'Software per fatture: come scegliere lo strumento adatto',
  'ai-invoice-automation': 'Automazione delle fatture: dove può essere utile',
  'mobile-invoicing-apps': 'Fatturazione mobile: creare e inviare fatture in movimento',
  'invoice-templates-branding': 'Modelli di fattura e branding: un aspetto professionale',
  'overdue-invoice-recovery': 'Fatture scadute: recuperare i pagamenti con professionalità',
  'international-multi-currency-invoicing': 'Fatture internazionali e multivaluta',
  'pdf-invoice-generation': 'Creare una fattura PDF pronta da inviare',
  'small-business-tax-invoicing': 'Fatture e imposte per piccole imprese',
  'contractor-milestone-billing': 'Fatturazione per stati di avanzamento dei lavori',
  'consultant-hourly-retainer-invoicing': 'Fatture per consulenti: ore, retainer e ambito di lavoro',
  'recurring-subscription-invoicing': 'Fatturazione ricorrente: organizzare gli addebiti periodici',
  'ecommerce-product-invoicing': 'Fatture e-commerce: prodotti, spedizioni e ordini',
  'agency-subcontractor-billing': 'Fatturazione per agenzie e subappaltatori',
  'how-to-write-an-invoice': 'Come scrivere una fattura: guida pratica passo dopo passo',
  'invoice-vs-receipt': 'La differenza tra fattura e ricevuta',
  'deposit-invoice-guide': 'Fattura di acconto: richiedere un anticipo con chiarezza',
  'proforma-invoice-guide': 'Fattura proforma: quando usarla e differenze dalla fattura',
  'invoice-email-templates': 'Email per l’invio della fattura: modelli e buone pratiche',
  'credit-note-invoice-corrections': 'Note di credito e correzioni delle fatture',
  'vat-invoice-requirements': 'Requisiti della fattura con IVA',
  'invoice-vs-receipt-vs-purchase-order': 'Fattura, ricevuta e ordine d’acquisto: ruoli a confronto',
  'purchase-order-invoice-matching': 'Abbinare ordine d’acquisto e fattura',
  'e-invoicing-formats-compliance': 'Fatturazione elettronica: formati e conformità',
  'invoice-payment-methods-fees': 'Metodi di pagamento e commissioni nelle fatture',
  'early-payment-discounts-late-fees': 'Sconti per pagamento anticipato e interessi di mora',
  'invoice-disputes-short-payments': 'Contestazioni e pagamenti parziali delle fatture',
  'invoice-record-retention-audit-trail': 'Conservazione delle fatture e tracciabilità delle modifiche',
  'invoice-fraud-prevention': 'Prevenire le frodi sulle fatture',
  'accounts-receivable-aging-cash-flow': 'Scadenzario clienti e flusso di cassa',
  'client-billing-onboarding': 'Onboarding del cliente per la fatturazione',
  'deposits-advance-payments': 'Acconti e pagamenti anticipati nella fattura finale',
  'invoice-email-delivery': 'Consegnare le fatture via email in modo affidabile',
  'invoice-line-item-descriptions': 'Descrizioni delle righe di fattura: scriverle con chiarezza',
  'invoicing-without-registered-business': 'Fatturare senza un’impresa registrata: nozioni di base',
  'multilingual-invoices': 'Fatture multilingue: comunicare con clienti internazionali',
  'rebilling-expenses-disbursements': 'Riaddebitare spese e anticipazioni al cliente',
  'trades-field-service-invoicing': 'Fatture per artigiani e servizi sul campo',
  'withholding-tax-on-invoices': 'Ritenuta d’acconto in fattura: come gestirla',
};

function buildItalianGuide(guide: Guide): Guide {
  const title = itTitles[guide.slug] ?? guide.title;
  const summary = `Una guida pratica a ${title.toLocaleLowerCase('it-IT')}, per creare documenti chiari, verificarli con cura e seguire i pagamenti.`;
  return {
    slug: guide.slug, title, description: summary, category: 'Guide alla fatturazione',
    readingTime: guide.readingTime.replace('min read', 'min di lettura'), reviewed: '21 settembre 2026',
    author: 'Redazione di Best Invoice Generator', editor: 'Redazione di Best Invoice Generator', summary,
    image: guide.image ? { ...guide.image, alt: `Illustrazione relativa a ${title}` } : undefined,
    intro: [`Questa guida spiega ${title.toLocaleLowerCase('it-IT')} in un italiano chiaro e pratico. L’obiettivo è aiutarti a preparare una fattura precisa, facile da controllare e semplice da pagare per il cliente.`, 'Usa questi consigli come punto di partenza e adattali al contratto, al tipo di attività e alle regole applicabili nel tuo Paese.'],
    example: { label: 'Esempio pratico', title: `Un esempio di ${title.toLocaleLowerCase('it-IT')}`, body: 'Una piccola attività ha completato un servizio e deve inviare una richiesta di pagamento senza lasciare dubbi. La fattura contiene un riferimento univoco, una descrizione verificabile, una data di scadenza esplicita e istruzioni di pagamento complete.', rows: [['Riferimento', 'Inserisci un numero di fattura univoco che il cliente possa citare nel pagamento.'], ['Descrizione', 'Indica con precisione prodotto, servizio o periodo di lavoro.'], ['Scadenza', 'Mostra una data precisa, non solo un termine relativo.'], ['Totale', 'Separa valore, valuta, imposte e possibili rettifiche.']] },
    diagram: { title: `Un flusso semplice per ${title.toLocaleLowerCase('it-IT')}`, caption: 'Una sequenza lineare rende il documento più facile da controllare, approvare e pagare.', steps: ['Prepara dati e riferimento', 'Descrivi quanto concordato', 'Controlla importo e scadenza', 'Invia e segui il pagamento'] },
    sections: [
      { heading: 'Conferma prima le informazioni essenziali', paragraphs: ['Prima di emettere la fattura, verifica il nome corretto del cliente, il lavoro o il prodotto concordato, il riferimento del progetto o dell’ordine e il contatto che gestisce il pagamento. Questi dettagli evitano che una fattura corretta resti bloccata per mancanza di contesto.', 'Se esistono un contratto, un ordine d’acquisto, un preventivo approvato o variazioni dell’incarico, tieni il riferimento vicino al documento. Il destinatario potrà così capire subito il motivo della richiesta.'], checklist: ['Verifica i tuoi dati e quelli del cliente.', 'Usa un riferimento univoco e facile da trovare.', 'Controlla che l’importo corrisponda a quanto concordato.', 'Mostra chiaramente scadenza e metodo di pagamento.'] },
      { heading: 'Trasforma gli accordi in dati verificabili', paragraphs: ['Il cliente non dovrebbe dover indovinare il significato di una riga. Usa descrizioni specifiche, periodi ben indicati e importi distinti quando questo rende la fattura più comprensibile.', 'Non nascondere imposte, sconti, spese o pagamenti già ricevuti nel totale. Identifica ogni rettifica in modo chiaro, affinché chi controlla possa verificare l’importo senza chiedere ulteriori informazioni.'] },
      { heading: 'Conserva le prove e segui con regolarità', paragraphs: ['Dopo l’invio, conserva insieme copia della fattura, accordo originale e conferma di invio o pagamento. Stabilisci una data fissa per rivedere le fatture aperte. Un promemoria breve e cortese, con numero di fattura e scadenza, è più semplice da gestire per il cliente.', 'Questa guida offre informazioni generali e non sostituisce una consulenza legale, fiscale o contabile. Per requisiti locali, rivolgiti a un professionista qualificato o all’autorità competente.'], checklist: ['Registra la data di invio.', 'Conserva fattura e documenti di supporto insieme.', 'Controlla gli importi aperti per data di scadenza.', 'Invia promemoria chiari, gentili e con un riferimento.'] },
    ],
    faq: [
      { question: `Qual è l’aspetto più importante di ${title.toLocaleLowerCase('it-IT')}?`, answer: 'Il cliente deve poter capire il documento senza ulteriori richieste: dati corretti delle parti, descrizione chiara, riferimento univoco, importo, scadenza e modalità di pagamento.' },
      { question: 'Devo ricontrollare i dati prima dell’invio?', answer: 'Sì. Una breve verifica di dati del cliente, date, righe, totale e istruzioni di pagamento evita molti ritardi e correzioni successive.' },
    ],
    related: guide.related,
  };
}

export const guidesIt = guides.map(buildItalianGuide);
export const getGuideIt = (slug: string) => guidesIt.find((guide) => guide.slug === slug);
