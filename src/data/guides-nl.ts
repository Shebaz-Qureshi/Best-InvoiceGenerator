import { guides, type Guide } from './guides';

const nlTitles: Record<string, string> = {
  'invoice-checklist': 'Factuurchecklist: 9 punten vóór verzending',
  'payment-terms': 'Betalingsvoorwaarden op facturen: een duidelijke vervaldatum instellen',
  'invoice-numbering': 'Factuurnummering: een eenvoudig en betrouwbaar systeem',
  'quote-vs-invoice': 'Offerte of factuur: van akkoord naar betaling',
  'freelance-billing-essentials': 'Factureren als freelancer: de belangrijkste basis',
  'invoice-generator-software-guide': 'Factuursoftware kiezen: waar let u op?',
  'ai-invoice-automation': 'Factuurautomatisering: waar automatisering helpt',
  'mobile-invoicing-apps': 'Mobiel factureren: facturen maken onderweg',
  'invoice-templates-branding': 'Factuursjablonen en huisstijl: een professionele uitstraling',
  'overdue-invoice-recovery': 'Achterstallige facturen: betalingen professioneel opvolgen',
  'international-multi-currency-invoicing': 'Internationale facturen en meerdere valuta',
  'pdf-invoice-generation': 'Een pdf-factuur maken die klaar is om te versturen',
  'small-business-tax-invoicing': 'Belasting op facturen voor kleine ondernemingen',
  'contractor-milestone-billing': 'Factureren per projectmijlpaal voor aannemers',
  'consultant-hourly-retainer-invoicing': 'Facturen voor consultants: uren, retainers en scope',
  'recurring-subscription-invoicing': 'Terugkerende facturen overzichtelijk organiseren',
  'ecommerce-product-invoicing': 'E-commercefacturen: producten, verzending en bestellingen',
  'agency-subcontractor-billing': 'Factureren voor bureaus en onderaannemers',
  'how-to-write-an-invoice': 'Een factuur schrijven: praktische stap-voor-stapgids',
  'invoice-vs-receipt': 'Het verschil tussen een factuur en een kwitantie',
  'deposit-invoice-guide': 'Aanbetalingsfacturen: een voorschot helder factureren',
  'proforma-invoice-guide': 'Proformafacturen: wanneer gebruikt u ze?',
  'invoice-email-templates': 'Facturen per e-mail: sjablonen en praktische tips',
  'credit-note-invoice-corrections': 'Creditnota’s en factuurcorrecties',
  'vat-invoice-requirements': 'Vereisten voor btw-facturen',
  'invoice-vs-receipt-vs-purchase-order': 'Factuur, kwitantie en inkooporder: de verschillen',
  'purchase-order-invoice-matching': 'Inkooporder en factuur met elkaar vergelijken',
  'e-invoicing-formats-compliance': 'E-facturatie: formaten en naleving',
  'invoice-payment-methods-fees': 'Betaalmethoden en kosten op facturen',
  'early-payment-discounts-late-fees': 'Korting voor snelle betaling en kosten bij vertraging',
  'invoice-disputes-short-payments': 'Factuurgeschillen en gedeeltelijke betalingen',
  'invoice-record-retention-audit-trail': 'Facturen bewaren en wijzigingen kunnen volgen',
  'invoice-fraud-prevention': 'Factuurfraude voorkomen',
  'accounts-receivable-aging-cash-flow': 'Openstaande posten en cashflow beheren',
  'client-billing-onboarding': 'Nieuwe klanten inrichten voor facturatie',
  'deposits-advance-payments': 'Aanbetalingen en vooruitbetalingen op de eindfactuur',
  'invoice-email-delivery': 'Facturen betrouwbaar per e-mail bezorgen',
  'invoice-line-item-descriptions': 'Factuurregels duidelijk beschrijven',
  'invoicing-without-registered-business': 'Factureren zonder ingeschreven onderneming',
  'multilingual-invoices': 'Meertalige facturen begrijpelijk maken',
  'rebilling-expenses-disbursements': 'Kosten en voorschotten doorberekenen aan klanten',
  'trades-field-service-invoicing': 'Facturen voor vakmensen en buitendiensten',
  'withholding-tax-on-invoices': 'Bronbelasting op facturen: wat u moet weten',
};

function buildDutchGuide(guide: Guide): Guide {
  const title = nlTitles[guide.slug] ?? guide.title;
  const summary = `Een praktische gids over ${title.toLocaleLowerCase('nl-NL')} voor duidelijke facturen, zorgvuldige controle en opvolging van betalingen.`;
  return {
    slug: guide.slug, title, description: summary, category: 'Facturatiegidsen',
    readingTime: guide.readingTime.replace('min read', 'min. leestijd'), reviewed: '21 september 2026',
    author: 'Redactie van Best Invoice Generator', editor: 'Redactie van Best Invoice Generator', summary,
    image: guide.image ? { ...guide.image, alt: `Illustratie over ${title}` } : undefined,
    intro: [`In deze gids leggen we ${title.toLocaleLowerCase('nl-NL')} uit in helder, natuurlijk Nederlands. De nadruk ligt op keuzes die helpen om een nauwkeurige factuur te maken, te controleren en tijdig betaald te krijgen.`, 'Gebruik deze informatie als uitgangspunt en pas deze aan uw contract, werkzaamheden en de regels die voor uw situatie gelden aan.'],
    example: { label: 'Praktijkvoorbeeld', title: `Een voorbeeld van ${title.toLocaleLowerCase('nl-NL')}`, body: 'Een kleine onderneming heeft een dienst geleverd en wil een factuur zonder onduidelijkheden versturen. Op het document staan een uniek kenmerk, een controleerbare omschrijving, een duidelijke vervaldatum en volledige betaalinstructies.', rows: [['Kenmerk', 'Gebruik een uniek factuurnummer dat de klant bij de betaling kan vermelden.'], ['Omschrijving', 'Benoem product, dienst of werkperiode specifiek.'], ['Vervaldatum', 'Toon een concrete datum, niet alleen een relatieve termijn.'], ['Totaalbedrag', 'Vermeld valuta, belastingen en eventuele correcties afzonderlijk.']] },
    diagram: { title: `Een eenvoudig proces voor ${title.toLocaleLowerCase('nl-NL')}`, caption: 'Een duidelijke volgorde maakt het document makkelijker te controleren, goed te keuren en te betalen.', steps: ['Gegevens en kenmerk voorbereiden', 'De afspraak duidelijk omschrijven', 'Bedrag en vervaldatum controleren', 'Versturen en betaling opvolgen'] },
    sections: [
      { heading: 'Begin met de belangrijkste gegevens', paragraphs: ['Controleer vóór verzending de juiste klantnaam, de afgesproken levering, het project- of bestelkenmerk en de contactpersoon die de betaling behandelt. Deze details voorkomen dat een inhoudelijk juiste factuur blijft liggen omdat er context ontbreekt.', 'Is er een contract, inkooporder, goedgekeurde offerte of wijziging van de opdracht? Zet de bijbehorende verwijzing dicht bij de factuur. Daardoor ziet de ontvanger sneller waarop de betaling betrekking heeft.'], checklist: ['Controleer uw eigen gegevens en die van de klant.', 'Gebruik een uniek, makkelijk terug te vinden kenmerk.', 'Controleer of het bedrag overeenkomt met de afspraak.', 'Maak vervaldatum en betaalwijze goed zichtbaar.'] },
      { heading: 'Maak afspraken makkelijk controleerbaar', paragraphs: ['Een klant moet niet hoeven raden wat een factuurregel betekent. Gebruik concrete omschrijvingen, duidelijke perioden en afzonderlijke bedragen als dat de factuur beter leesbaar maakt.', 'Verberg belastingen, kortingen, kosten of eerder ontvangen bedragen niet in het totaal. Benoem iedere correctie duidelijk zodat de verantwoordelijke het bedrag zonder extra vragen kan controleren.'] },
      { heading: 'Bewaar het dossier en volg gestructureerd op', paragraphs: ['Bewaar na verzending een kopie van de factuur, de oorspronkelijke afspraak en de verzend- of betaalbevestiging bij elkaar. Kies een vast moment om openstaande facturen te bekijken. Een korte, zakelijke herinnering met factuurnummer en vervaldatum is het makkelijkst voor een klant om te verwerken.', 'Deze gids biedt algemene informatie en is geen juridisch, fiscaal of boekhoudkundig advies. Vraag voor lokale voorschriften advies aan een gekwalificeerde professional of bevoegde instantie.'], checklist: ['Leg de verzenddatum vast.', 'Bewaar factuur en ondersteunende documenten samen.', 'Bekijk openstaande bedragen op vervaldatum.', 'Stuur herinneringen vriendelijk, duidelijk en met een kenmerk.'] },
    ],
    faq: [
      { question: `Wat is het belangrijkst bij ${title.toLocaleLowerCase('nl-NL')}?`, answer: 'De klant moet de factuur zonder extra vragen kunnen begrijpen: juiste gegevens van beide partijen, een duidelijke omschrijving, een uniek kenmerk, bedrag, vervaldatum en betaalwijze.' },
      { question: 'Moet ik alles nog eens controleren vóór verzending?', answer: 'Ja. Een korte controle van klantgegevens, data, regels, totaalbedrag en betaalinstructies voorkomt veel vertragingen en latere correcties.' },
    ],
    related: guide.related,
  };
}

export const guidesNl = guides.map(buildDutchGuide);
export const getGuideNl = (slug: string) => guidesNl.find((guide) => guide.slug === slug);
