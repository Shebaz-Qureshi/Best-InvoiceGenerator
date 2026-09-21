import { guides } from './guides';
import { guidesEs } from './guides-es';
import { guidesPt } from './guides-pt';
import { guidesAr } from './guides-ar';
import { guidesDe } from './guides-de';
import { guidesJa } from './guides-ja';
import { guidesIt } from './guides-it';

export interface GuideCardItem {
  slug: string;
  url: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
}

export interface HubMeta {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  cta: string;
  libraryEyebrow: string;
  libraryHeading: string;
  librarySubtitle: string;
  readGuide: string;
  editorialNote: string;
}

export const hubMetaByLocale: Record<string, HubMeta> = {
  en: {
    title: 'Invoice guides for clearer client billing | Best Invoice Generator',
    description: 'Original, practical guides for creating invoices, choosing payment terms, numbering invoices, and moving from a quote to payment.',
    eyebrow: 'Invoice field guide',
    heading: 'Practical billing guides, built around the work you actually send.',
    intro: 'Short, original explainers for common invoicing decisions. Every guide includes a worked example, a simple diagram, and a direct path back to the invoice tool.',
    cta: 'Create an invoice',
    libraryEyebrow: 'Browse the library',
    libraryHeading: 'Start with the decision in front of you.',
    librarySubtitle: 'No generic “ultimate guides”—just concrete steps you can apply to your next invoice.',
    readGuide: 'Read guide',
    editorialNote: 'Editorial note: these guides offer general workflow information, not tax, legal, or accounting advice. Check the requirements that apply to your business before issuing an invoice.',
  },
  es: {
    title: 'Guías prácticas de facturación para una facturación más clara | Best Invoice Generator',
    description: 'Guías originales y prácticas para crear facturas, elegir condiciones de pago, numerar facturas y pasar de un presupuesto al cobro.',
    eyebrow: 'Guía de facturación',
    heading: 'Guías prácticas de facturación, pensadas para el trabajo que realmente envías.',
    intro: 'Explicaciones breves y originales para decisiones comunes de facturación. Cada guía incluye un ejemplo resuelto, un diagrama sencillo y un enlace directo a la herramienta de facturas.',
    cta: 'Crear una factura',
    libraryEyebrow: 'Explora la biblioteca',
    libraryHeading: 'Empieza por la decisión que tienes delante.',
    librarySubtitle: 'Sin guías genéricas — solo pasos concretos que puedes aplicar en tu próxima factura.',
    readGuide: 'Leer guía',
    editorialNote: 'Nota editorial: estas guías ofrecen información general sobre procesos de trabajo, no asesoría fiscal, legal ni contable. Consulta los requisitos aplicables a tu negocio antes de emitir una factura.',
  },
  fr: {
    title: 'Guides pratiques de facturation pour une gestion client claire | Best Invoice Generator',
    description: 'Guides originaux et pratiques pour créer des factures, choisir les conditions de paiement, numéroter les factures et passer du devis au règlement.',
    eyebrow: 'Guide de facturation',
    heading: 'Des guides pratiques de facturation, adaptés à votre travail réel.',
    intro: 'Des explications concises pour vos décisions de facturation courantes. Chaque guide comprend un exemple concret, un schéma explicatif et un accès direct à notre outil.',
    cta: 'Créer une facture',
    libraryEyebrow: 'Parcourir les guides',
    libraryHeading: 'Commencez par la décision qui s\'impose à vous.',
    librarySubtitle: 'Pas de guide théorique — uniquement des étapes concrètes applicables à votre prochaine facture.',
    readGuide: 'Lire le guide',
    editorialNote: 'Note éditoriale : ces guides fournissent des informations générales sur les flux de travail et ne constituent pas des conseils fiscaux, juridiques ou comptables. Vérifiez la réglementation applicable à votre entreprise avant d\'émettre une facture.',
  },
  de: {
    title: 'Praktische Rechnungsleitfäden für klarere Abrechnungen | Best Invoice Generator',
    description: 'Praxisnahe Leitfäden zur Rechnungserstellung, Zahlungsbedingungen, Rechnungsnummerierung und dem reibungslosen Ablauf vom Angebot bis zum Zahlungseingang.',
    eyebrow: 'Rechnungsleitfaden',
    heading: 'Praktische Rechnungsleitfäden für Ihren Arbeitsalltag.',
    intro: 'Verständliche Erklärungen für typische Abrechnungsentscheidungen. Jeder Leitfaden bietet praxisnahe Beispiele, klare Übersichten und den direkten Weg zum Rechnungstool.',
    cta: 'Rechnung erstellen',
    libraryEyebrow: 'Bibliothek durchsuchen',
    libraryHeading: 'Starten Sie mit der Entscheidung, die vor Ihnen liegt.',
    librarySubtitle: 'Keine abstrakten Ratgeber – sondern sofort anwendbare Schritte für Ihre nächste Rechnung.',
    readGuide: 'Leitfaden lesen',
    editorialNote: 'Redaktioneller Hinweis: Diese Leitfäden bieten allgemeine Arbeitsablauf-Informationen und stellen keine Steuer-, Rechts- oder Buchhaltungsberatung dar. Prüfen Sie die gesetzlichen Bestimmungen Ihres Landes.',
  },
  it: {
    title: 'Guide pratiche alla fatturazione per una gestione più chiara | Best Invoice Generator',
    description: 'Guide originali e pratiche per creare fatture, scegliere i termini di pagamento, numerare i documenti e gestire l\'incasso dal preventivo.',
    eyebrow: 'Guida alla fatturazione',
    heading: 'Guide pratiche di fatturazione pensate per il lavoro di ogni giorno.',
    intro: 'Chiare spiegazioni per le decisioni di fatturazione più frequenti. Ogni guida include un esempio pratico, uno schema intuitivo e un collegamento rapido allo strumento.',
    cta: 'Crea una fattura',
    libraryEyebrow: 'Esplora le guide',
    libraryHeading: 'Parti dalla decisione che devi prendere oggi.',
    librarySubtitle: 'Nessuna guida generica: solo passaggi concreti da applicare subito alla tua prossima fattura.',
    readGuide: 'Leggi la guida',
    editorialNote: 'Nota editoriale: queste guide offrono informazioni generali sui processi di lavoro e non costituiscono consulenza fiscale, legale o contabile. Verifica sempre i requisiti previsti per la tua attività.',
  },
  nl: {
    title: 'Praktische factuurgidsen voor een heldere facturatie | Best Invoice Generator',
    description: 'Originele, praktische gidsen voor het opstellen van facturen, betalingstermijnen, factuurnummering en de overgang van offerte naar betaling.',
    eyebrow: 'Factuurgids',
    heading: 'Praktische factuurgidsen, afgestemd op uw dagelijkse praktijk.',
    intro: 'Korte, heldere toelichtingen voor veelvoorkomende factuurbeslissingen. Elke gids bevat een concreet voorbeeld, een schema en een directe koppeling naar het factuurprogramma.',
    cta: 'Factuur maken',
    libraryEyebrow: 'Bekijk de bibliotheek',
    libraryHeading: 'Begin bij de beslissing waar u nu voor staat.',
    librarySubtitle: 'Geen vage handleidingen — uitsluitend concrete stappen voor uw volgende factuur.',
    readGuide: 'Lees gids',
    editorialNote: 'Redactionele opmerking: deze gidsen bieden algemene procesinformatie en vormen geen fiscaal, juridisch of boekhoudkundig advies. Controleer de regels die op uw bedrijf van toepassing zijn.',
  },
  pt: {
    title: 'Guias práticos para emitir e gerenciar faturas | Best Invoice Generator',
    description: 'Guias em português brasileiro para criar faturas, definir prazos, organizar cobranças e acompanhar pagamentos.',
    eyebrow: 'Guias de faturamento',
    heading: 'Guias práticos de faturamento para o trabalho real.',
    intro: 'Orientações diretas para decisões comuns de faturamento. Cada guia traz um exemplo, um diagrama simples e um atalho para o gerador de faturas.',
    cta: 'Criar uma fatura',
    libraryEyebrow: 'Explorar a biblioteca',
    libraryHeading: 'Comece pela decisão que você precisa tomar agora.',
    librarySubtitle: 'Sem conteúdo genérico: apenas passos que você pode aplicar à sua próxima cobrança.',
    readGuide: 'Ler guia',
    editorialNote: 'Nota editorial: estes guias trazem informações gerais sobre processos de faturamento e não substituem orientação fiscal, jurídica ou contábil. Verifique os requisitos aplicáveis à sua atividade antes de emitir uma fatura.',
  },
  ar: {
    title: 'أدلة إعداد الفواتير لتحصيل مستحقات أكثر وضوحاً | Best Invoice Generator',
    description: 'أدلة عملية ومبتكرة لإنشاء الفواتير، واختيار شروط الدفع، وترقيم الفواتير، والانتقال من عروض الأسعار إلى استلام المستحقات.',
    eyebrow: 'دليل الفوترة العملي',
    heading: 'أدلة فوترة عملية، مصممة وفق طبيعة العمل الفعلي.',
    intro: 'شروحات موجزة لأهم قرارات الفوترة المتكررة. يتضمن كل دليل مثالاً تطبيقياً، ومخططاً توضيحياً، ورابطاً مباشراً لأداة الفواتير.',
    cta: 'إنشاء فاتورة',
    libraryEyebrow: 'تصفح المكتبة',
    libraryHeading: 'ابدأ بالقرار الذي أمامك الآن.',
    librarySubtitle: 'لا أدلة عامة غير مفيدة — بل خطوات محددة يمكنك تطبيقها على فاتورتك التالية.',
    readGuide: 'اقرأ الدليل',
    editorialNote: 'ملاحظة تحريرية: تقدم هذه الأدلة إرشادات عامة لتدفق العمل ولا تعد استشارة ضريبية أو قانونية أو محاسبية. تحقق من القوانين واللوائح السارية على نشاطك قبل إصدار الفاتورة.',
  },
  ja: {
    title: 'わかりやすい請求書作成の実践ガイド | Best Invoice Generator',
    description: '請求書の書き方、支払条件の選択、採番ルール、見積書から入金確認までの実務をわかりやすく解説する実践ガイド。',
    eyebrow: '請求書実務ガイド',
    heading: '実際の現場業務に役立つ、実践的な請求書作成ガイド。',
    intro: '請求業務でよくある判断ポイントをコンパクトに解説。各ガイドには具体例、図解、請求書ツールへのダイレクトリンクが用意されています。',
    cta: '請求書を作成する',
    libraryEyebrow: 'ガイド一覧',
    libraryHeading: '今必要な実務の判断から始めましょう。',
    librarySubtitle: '一般的な総論ではなく、次の請求書作成ですぐに使える具体的な手順をお届けします。',
    readGuide: 'ガイドを読む',
    editorialNote: '編集注記：本ガイドは一般的な業務フローの解説を目的としており、税務・法務・会計に関する個別のアドバイスではありません。請求書を発行する際は自社に適用される法令等をご確認ください。',
  },
};

export function getHubMetaForLocale(locale: string): HubMeta {
  return hubMetaByLocale[locale] ?? hubMetaByLocale.en;
}

// Translations for guide titles & summaries across non-English locales
interface LocalizedGuideData {
  title: string;
  summary: string;
  category: string;
  readingTime: string;
}

const localizedGuidesMap: Record<string, Record<string, LocalizedGuideData>> = {
  fr: {
    'invoice-checklist': {
      title: "Checklist de facture : 9 points à vérifier avant l'envoi",
      summary: "Une checklist pratique, champ par champ, avec un exemple concret pour éviter retards et erreurs de facturation.",
      category: "Bases de la facturation",
      readingTime: "5 min de lecture",
    },
    'payment-terms': {
      title: "Conditions de paiement d'une facture : définir une politique claire",
      summary: "Comment choisir et rédiger les conditions de paiement d'une facture selon la relation avec le client.",
      category: "Se faire payer",
      readingTime: "6 min de lecture",
    },
    'invoice-numbering': {
      title: "Numérotation des factures : un système simple pour rester organisé",
      summary: "Choisissez un format de numéro de facture séquentiel et unique pour simplifier votre comptabilité.",
      category: "Bases de la facturation",
      readingTime: "5 min de lecture",
    },
    'quote-vs-invoice': {
      title: "Devis ou facture : le flux de travail de l'accord au paiement",
      summary: "Comprenez la distinction légale et opérationnelle entre devis préalable et facture finale.",
      category: "Facturation client",
      readingTime: "6 min de lecture",
    },
    'freelance-billing-essentials': {
      title: "Facturation en freelance : les indispensables d'une gestion ordonnée",
      summary: "Mettez en place un processus de facturation indépendant simple pour être payé dans les délais.",
      category: "Freelance",
      readingTime: "5 min de lecture",
    },
    'invoice-generator-software-guide': {
      title: "Choisir son outil de facturation : générateur en ligne ou logiciel complet",
      summary: "Comparez les générateurs en ligne rapides et les suites logicielles selon les besoins de votre entreprise.",
      category: "Outils",
      readingTime: "6 min de lecture",
    },
    'ai-invoice-automation': {
      title: "Facturation avec l'IA : automatiser lignes, montants et calculs",
      summary: "Découvrez comment l'IA accélère la création et le formatage précis de vos factures professionnelles.",
      category: "Automatisation",
      readingTime: "5 min de lecture",
    },
    'mobile-invoicing-apps': {
      title: "Facturation mobile : émettre des factures sur le terrain",
      summary: "Facturez directement depuis votre smartphone pour accélérer l'encaissement chez vos clients.",
      category: "Mobile",
      readingTime: "5 min de lecture",
    },
    'invoice-templates-branding': {
      title: "Design de facture : modèles personnalisés et image professionnelle",
      summary: "Personnalisez facilement logos, polices et couleurs pour valoriser votre image de marque.",
      category: "Design",
      readingTime: "5 min de lecture",
    },
    'overdue-invoice-recovery': {
      title: "Relance des factures impayées : protocoles et modèles de relance",
      summary: "Méthodes courtoises et efficaces pour relancer les clients en retard de paiement et sécuriser la trésorerie.",
      category: "Recouvrement",
      readingTime: "7 min de lecture",
    },
  },
  de: {
    'invoice-checklist': {
      title: 'Rechnungs-Checkliste: 9 Punkte vor dem Absenden prüfen',
      summary: 'Vermeiden Sie Zahlungsverzögerungen durch fehlende Angaben: Eine strukturierte Checkliste für jede Rechnung.',
      category: 'Grundlagen',
      readingTime: '5 Min. Lesezeit',
    },
    'payment-terms': {
      title: 'Zahlungsbedingungen auf Rechnungen: Klare Zahlungsfristen vereinbaren',
      summary: 'So wählen Sie passende Zahlungsfristen (z. B. Zahlbar innerhalb 14 Tagen) für eine stabile Liquidität.',
      category: 'Zahlungseingang',
      readingTime: '6 Min. Lesezeit',
    },
    'invoice-numbering': {
      title: 'Rechnungsnummerierung: Ein fortlaufendes, einfaches System',
      summary: 'Rechtssichere und nachvollziehbare Rechnungsnummern für das Finanzamt und Ihre eigene Buchhaltung.',
      category: 'Grundlagen',
      readingTime: '5 Min. Lesezeit',
    },
    'quote-vs-invoice': {
      title: 'Angebot vs. Rechnung: Der Ablauf von der Zusage zur Zahlung',
      summary: 'Verstehen Sie die rechtlichen Unterschiede und den nahtlosen Übergang vom Kostenvoranschlag zur Rechnung.',
      category: 'Kundenabrechnung',
      readingTime: '6 Min. Lesezeit',
    },
    'freelance-billing-essentials': {
      title: 'Rechnungen für Freelancer: Das Basiswissen für Selbstständige',
      summary: 'Pflichtangaben, Fristen und praktische Tipps für freiberufliche und selbstständige Dienstleister.',
      category: 'Selbstständige',
      readingTime: '5 Min. Lesezeit',
    },
    'invoice-generator-software-guide': {
      title: 'Rechnungsprogramme im Vergleich: Online-Generator oder Komplettsoftware',
      summary: 'Entscheidungshilfe zwischen schnellen Online-Rechnungsgeneratoren und umfangreicher Buchhaltungssoftware.',
      category: 'Software',
      readingTime: '6 Min. Lesezeit',
    },
    'ai-invoice-automation': {
      title: 'KI-Rechnungsstellung: Automatisierung von Rechnungsposten und Texten',
      summary: 'Wie künstliche Intelligenz die Erstellung professioneller Rechnungen beschleunigt und Fehler minimiert.',
      category: 'Automatisierung',
      readingTime: '5 Min. Lesezeit',
    },
    'mobile-invoicing-apps': {
      title: 'Mobiles Rechnungsstellen: Rechnungen direkt vor Ort schreiben',
      summary: 'Tipps für Handwerker, Berater und Dienstleister, die Rechnungen direkt beim Kunden ausstellen.',
      category: 'Mobil',
      readingTime: '5 Min. Lesezeit',
    },
    'invoice-templates-branding': {
      title: 'Professionelles Rechnungsdesign: Vorlagen und Firmenidentität',
      summary: 'Logo, Schriftarten und Farbgestaltung für einen seriösen und wiedererkennbaren Geschäftsauftritt.',
      category: 'Design',
      readingTime: '5 Min. Lesezeit',
    },
    'overdue-invoice-recovery': {
      title: 'Mahnwesen bei Zahlungsverzug: Freundliche Zahlungserinnerungen',
      summary: 'Schritt-für-Schritt-Anleitung für professionelle Mahnungen und den Umgang mit säumigen Kunden.',
      category: 'Forderungsmanagement',
      readingTime: '7 Min. Lesezeit',
    },
  },
  it: {
    'invoice-checklist': {
      title: 'Checklist della fattura: 9 dettagli da controllare prima dell\'invio',
      summary: 'Evita ritardi nei pagamenti causati da dati mancanti: verifica campi, totali e riferimenti prima di inviare.',
      category: 'Fondamenti',
      readingTime: '5 min di lettura',
    },
    'payment-terms': {
      title: 'Termini di pagamento: come stabilire scadenze chiare e rispettate',
      summary: 'Guida alla scelta delle condizioni di saldo ideali per tutelare il flusso di cassa della tua attività.',
      category: 'Incassi',
      readingTime: '6 min di lettura',
    },
    'invoice-numbering': {
      title: 'Numerazione delle fatture: un sistema ordinato e progressivo',
      summary: 'Come impostare una numerazione univoca e corretta per la conformità contabile e fiscale.',
      category: 'Fondamenti',
      readingTime: '5 min di lettura',
    },
    'quote-vs-invoice': {
      title: 'Preventivo vs Fattura: il percorso dall\'approvazione all\'incasso',
      summary: 'Differenze chiave e passaggi operativi per trasformare un preventivo accettato in una fattura saldata.',
      category: 'Fatturazione',
      readingTime: '6 min di lettura',
    },
    'freelance-billing-essentials': {
      title: 'Fatturazione per freelance: guida pratica per professionisti autonomi',
      summary: 'Tutto ciò che serve ai liberi professionisti per emettere fatture corrette e ricevere pagamenti puntuali.',
      category: 'Freelance',
      readingTime: '5 min di lettura',
    },
    'invoice-generator-software-guide': {
      title: 'Software di fatturazione: generatori online vs programmi gestionali',
      summary: 'Un confronto utile per scegliere lo strumento più rapido ed economico per le tue esigenze lavorative.',
      category: 'Strumenti',
      readingTime: '6 min di lettura',
    },
    'ai-invoice-automation': {
      title: 'Fatturazione con IA: automatizzare descrizioni, righe e calcoli',
      summary: 'Come l\'intelligenza artificiale semplifica la composizione rapida e accurata dei documenti contabili.',
      category: 'Automazione',
      readingTime: '5 min di lettura',
    },
    'mobile-invoicing-apps': {
      title: 'Fatturare da mobile: inviare documenti contabili ovunque ti trovi',
      summary: 'Come gestire la fatturazione direttamente da smartphone durante interventi sul campo o trasferte.',
      category: 'Mobile',
      readingTime: '5 min di lettura',
    },
    'invoice-templates-branding': {
      title: 'Design delle fatture: modelli personalizzati e identità visiva',
      summary: 'Consigli per applicare logo, colori aziendali e layout puliti per trasmettere massima professionalità.',
      category: 'Design',
      readingTime: '5 min di lettura',
    },
    'overdue-invoice-recovery': {
      title: 'Fatture insolute: strategie e solleciti per recuperare i pagamenti',
      summary: 'Protocolli di recupero crediti e modelli di sollecito cordiali per incassare senza compromettere i rapporti.',
      category: 'Recupero crediti',
      readingTime: '7 min di lettura',
    },
  },
  nl: {
    'invoice-checklist': {
      title: 'Factuurchecklist: 9 details om te controleren voor verzending',
      summary: 'Voorkom betalingsvertragingen met deze praktische checklist voor verplichte factuurgegevens en bedragen.',
      category: 'Basisprincipes',
      readingTime: '5 min leestijd',
    },
    'payment-terms': {
      title: 'Betalingstermijnen op facturen: duidelijke afspraken maken',
      summary: 'Kies de juiste betalingstermijn en voorwaarden om tijdig betaald te worden door zakelijke klanten.',
      category: 'Betaald krijgen',
      readingTime: '6 min leestijd',
    },
    'invoice-numbering': {
      title: 'Factuurnummering: een overzichtelijk, opvolgend systeem',
      summary: 'Voldoe aan de eisen van de Belastingdienst met een doorlopende en logische factuurnummering.',
      category: 'Basisprincipes',
      readingTime: '5 min leestijd',
    },
    'quote-vs-invoice': {
      title: 'Offerte vs factuur: van akkoord naar vlotte betaling',
      summary: 'Het verschil tussen prijsopgaven en definitieve facturen en hoe u de overgang soepel regelt.',
      category: 'Klantfacturatie',
      readingTime: '6 min leestijd',
    },
    'freelance-billing-essentials': {
      title: 'Factureren als zzp\'er: de basis voor zelfstandig ondernemers',
      summary: 'Praktische handleiding voor freelancers en zzp\'ers om professioneel en foutloos te factureren.',
      category: 'ZZP & Freelance',
      readingTime: '5 min leestijd',
    },
    'invoice-generator-software-guide': {
      title: 'Factuurtools vergelijken: online generator of boekhoudpakket',
      summary: 'Vergelijk gratis online factuurmakers met complete boekhoudsoftware voor kleine bedrijven.',
      category: 'Software',
      readingTime: '6 min leestijd',
    },
    'ai-invoice-automation': {
      title: 'Factureren met AI: factureerregels en berekeningen automatiseren',
      summary: 'Ontdek hoe slimme tools factuuromschrijvingen en uurtarieven foutloos voor u invullen.',
      category: 'Automatisering',
      readingTime: '5 min leestijd',
    },
    'mobile-invoicing-apps': {
      title: 'Mobiel factureren: onderweg direct uw factuur versturen',
      summary: 'Ideaal voor vakmensen en dienstverleners op locatie die direct na afronding willen factureren.',
      category: 'Mobiel',
      readingTime: '5 min leestijd',
    },
    'invoice-templates-branding': {
      title: 'Factuurdesign: sjablonen en professionele uitstraling',
      summary: 'Gebruik uw eigen logo, merkkleuren en een heldere opmaak voor een betrouwbare indruk.',
      category: 'Design',
      readingTime: '5 min leestijd',
    },
    'overdue-invoice-recovery': {
      title: 'Achterstallige facturen: vriendelijke betalingsherinneringen sturen',
      summary: 'Stappenplan en handige voorbeelden om openstaande facturen snel en professioneel te innen.',
      category: 'Debiteurenbeheer',
      readingTime: '7 min leestijd',
    },
  },
  pt: {
    'invoice-checklist': {
      title: 'Lista de verificação de faturas: 9 itens a rever antes de enviar',
      summary: 'Evite atrasos no pagamento por omissão de datas ou totais: use este checklist prático antes do envio.',
      category: 'Fundamentos',
      readingTime: '5 min de leitura',
    },
    'payment-terms': {
      title: 'Prazos de pagamento: definir condições claras para receber a tempo',
      summary: 'Como escolher e redigir condições de pagamento que protejam a tesouraria da sua empresa.',
      category: 'Recebimentos',
      readingTime: '6 min de leitura',
    },
    'invoice-numbering': {
      title: 'Numeração de faturas: um sistema sequencial e organizado',
      summary: 'Formatos recomendados para manter a numeração das suas faturas legalmente correta e fácil de consultar.',
      category: 'Fundamentos',
      readingTime: '5 min de leitura',
    },
    'quote-vs-invoice': {
      title: 'Orçamento vs Fatura: da aprovação ao recebimento do valor',
      summary: 'Compreenda as distinções legais e práticas entre o orçamento inicial e a fatura definitiva.',
      category: 'Faturação',
      readingTime: '6 min de leitura',
    },
    'freelance-billing-essentials': {
      title: 'Faturação para freelancers: o guia essencial para independentes',
      summary: 'Boas práticas para profissionais liberais e freelancers organizarem a emissão de faturas sem complicações.',
      category: 'Trabalho independente',
      readingTime: '5 min de leitura',
    },
    'invoice-generator-software-guide': {
      title: 'Software de faturação: gerador online ou programa tradicional',
      summary: 'Avalie as vantagens de geradores rápidos na web versus plataformas completas de contabilidade.',
      category: 'Ferramentas',
      readingTime: '6 min de leitura',
    },
    'ai-invoice-automation': {
      title: 'Faturação com IA: automatizar itens, descrições e cálculos',
      summary: 'Descubra como ferramentas com inteligência artificial simplificam a criação de faturas profissionais.',
      category: 'Automação',
      readingTime: '5 min de leitura',
    },
    'mobile-invoicing-apps': {
      title: 'Faturar no telemóvel: criar e enviar faturas a partir de qualquer lugar',
      summary: 'Como prestadores de serviços e equipas no terreno faturam de imediato após a conclusão do trabalho.',
      category: 'Móvel',
      readingTime: '5 min de leitura',
    },
    'invoice-templates-branding': {
      title: 'Design de faturas: modelos profissionais e imagem de marca',
      summary: 'Incorpore o logótipo, cores e tipografia da sua empresa para reforçar a credibilidade do negócio.',
      category: 'Design',
      readingTime: '5 min de leitura',
    },
    'overdue-invoice-recovery': {
      title: 'Faturas em atraso: estratégias para cobrar valores pendentes',
      summary: 'Processos graduais e mensagens profissionais para recuperar pagamentos sem prejudicar relações.',
      category: 'Cobranças',
      readingTime: '7 min de leitura',
    },
  },
  ar: {
    'invoice-checklist': {
      title: 'قائمة التحقق من الفاتورة: 9 تفاصيل يجب مراجعتها قبل الإرسال',
      summary: 'تجنب تأخير السداد الناتج عن نسيان التواريخ أو الأرقام عبر مراجعة هذه القائمة العملية خطوة بخطوة.',
      category: 'أساسيات الفوترة',
      readingTime: '5 دقائق قراءة',
    },
    'payment-terms': {
      title: 'شروط الدفع في الفواتير: تحديد مواعيد استحقاق واضحة وموثوقة',
      summary: 'كيفية اختيار شروط السداد المناسبة لضمان التدفق النقدي السلس لعملك التجاري.',
      category: 'تحصيل المدفوعات',
      readingTime: '6 دقائق قراءة',
    },
    'invoice-numbering': {
      title: 'ترقيم الفواتير: نظام تسلسلي منظم يسهل المحاسبة',
      summary: 'اختيار صيغة فريدة لترقيم الفواتير تمنع الالتباس وتلبي المتطلبات المحاسبية والقانونية.',
      category: 'أساسيات الفوترة',
      readingTime: '5 دقائق قراءة',
    },
    'quote-vs-invoice': {
      title: 'عرض السعر مقابل الفاتورة: مسار العمل من الموافقة إلى السداد',
      summary: 'الفروق الجوهرية بين عرض الأسعار المبدئي والفاتورة النهائية وكيفية التحويل بينهما بسلاسة.',
      category: 'فوترة العملاء',
      readingTime: '6 دقائق قراءة',
    },
    'freelance-billing-essentials': {
      title: 'فوترة المستقلين: الدليل الأساسي للمحترفين وأصحاب العمل الحر',
      summary: 'أفضل الممارسات للمستقلين لإصدار فواتير دقيقة واستلام المستحقات في الوقت المحدد دون عناء.',
      category: 'العمل الحر',
      readingTime: '5 دقائق قراءة',
    },
    'invoice-generator-software-guide': {
      title: 'مقارنة برامج الفوترة: مولد الفواتير عبر الويب أم البرامج المحاسبية',
      summary: 'دليل لاختيار الأداة الأنسب لإنشاء الفواتير بسرعة وبتكلفة منخفضة لأصحاب المشاريع الصغيرة.',
      category: 'الأدوات',
      readingTime: '6 دقائق قراءة',
    },
    'ai-invoice-automation': {
      title: 'الفوترة بالذكاء الاصطناعي: أتمتة بنود الفواتير والأوصاف والحسابات',
      summary: 'استفد من الذكاء الاصطناعي لصياغة بنود الفاتورة والعمليات الحسابية بدقة متناهية وسرعة فائقة.',
      category: 'الأتمتة',
      readingTime: '5 دقائق قراءة',
    },
    'mobile-invoicing-apps': {
      title: 'الفوترة عبر الهاتف: إنشاء وإرسال الفواتير أثناء التنقل',
      summary: 'كيف يستخدم الفنيون والاستشاريون الهواتف المحمولة لإصدار الفواتير فور إنجاز المهام ميدانياً.',
      category: 'الهاتف المحمول',
      readingTime: '5 دقائق قراءة',
    },
    'invoice-templates-branding': {
      title: 'تصميم الفاتورة: قوالب مخصصة تعكس الهوية التجارية الاحترافية',
      summary: 'إضافة شعار شركتك والألوان والخطوط المناسبة لإبراز هوية عملك وبناء الثقة مع العملاء.',
      category: 'التصميم والهوية',
      readingTime: '5 دقائق قراءة',
    },
    'overdue-invoice-recovery': {
      title: 'تحصيل الفواتير المتأخرة: رسائل تذكير مهذبة وإجراءات فعالة',
      summary: 'استراتيجيات عملية ونماذج رسائل لاسترداد المستحقات المتأخرة دون خسارة العلاقات مع العملاء.',
      category: 'إدارة التحصيل',
      readingTime: '7 دقائق قراءة',
    },
  },
  ja: {
    'invoice-checklist': {
      title: '請求書チェックリスト：送付前に確認すべき9つの必須項目',
      summary: '日付や金額の誤りによる支払遅延を未然に防ぐ、実践的なセルフチェック項目一覧。',
      category: '請求書の基本',
      readingTime: '読了目安 5分',
    },
    'payment-terms': {
      title: '支払期日の設定ガイド：明確な条件でスムーズな入金を実現',
      summary: '取引先との関係性や資金繰りに合わせた、最適な支払期限と条件の決め方。',
      category: '入金・回収',
      readingTime: '読了目安 6分',
    },
    'invoice-numbering': {
      title: '請求書番号の採番ルール：連番管理で経理ミスを防ぐ',
      summary: '後からの検索や税務確認が容易になる、わかりやすく一意な請求書番号の付け方。',
      category: '請求書の基本',
      readingTime: '読了目安 5分',
    },
    'quote-vs-invoice': {
      title: '見積書と請求書の違い：受注から請求・入金までの業務フロー',
      summary: '法的な位置づけの違いから、見積承諾後に請求書へスムーズに移行する実務手順を解説。',
      category: '取引先管理',
      readingTime: '読了目安 6分',
    },
    'freelance-billing-essentials': {
      title: 'フリーランスのための請求書作成：個人事業主の必須実務',
      summary: 'フリーランスが期日通りに入金してもらうための請求書記載項目とトラブル防止策。',
      category: 'フリーランス',
      readingTime: '読了目安 5分',
    },
    'invoice-generator-software-guide': {
      title: '請求書ツールの選び方：無料オンライン作成ツールと会計ソフトの比較',
      summary: '手軽に使えるブラウザツールと高機能な会計システムの違いを比較し、最適な方法を提案。',
      category: 'ツール比較',
      readingTime: '読了目安 6分',
    },
    'ai-invoice-automation': {
      title: 'AIを活用した請求書作成：品目や明細・計算の自動化',
      summary: 'AIツールを補助的に活用して請求明細の入力ミスを削減し、作成時間を短縮する方法。',
      category: '自動化',
      readingTime: '読了目安 5分',
    },
    'mobile-invoicing-apps': {
      title: 'スマホで請求書発行：現場や外出先から即座にPDF送信',
      summary: '出張先や訪問現場での作業完了後、その場で請求書を作成・送付するノウハウ。',
      category: 'モバイル実務',
      readingTime: '読了目安 5分',
    },
    'invoice-templates-branding': {
      title: '請求書のデザインとブランディング：自社ロゴと統一感の出し方',
      summary: 'ロゴ配置やフォント・カラーを工夫して、取引先に信頼感を与えるビジネス文書を作成。',
      category: 'デザイン',
      readingTime: '読了目安 5分',
    },
    'overdue-invoice-recovery': {
      title: '支払遅延への対応手順：角を立てずに催促・入金を促す連絡方法',
      summary: '支払期日を過ぎた請求書の確認メール文面例と、段階的なフォローアップ手順。',
      category: '債権回収',
      readingTime: '読了目安 7分',
    },
  },
};

export function getGuidesForLocale(locale: string): GuideCardItem[] {
  if (locale === 'es') {
    return guidesEs.map((g) => ({
      slug: g.slug,
      url: `/es/guides/${g.slug}/`,
      title: g.title,
      summary: g.summary,
      category: g.category,
      readingTime: g.readingTime,
    }));
  }
  if (locale === 'pt') {
    return guidesPt.map((g) => ({
      slug: g.slug,
      url: `/pt/guides/${g.slug}/`,
      title: g.title,
      summary: g.summary,
      category: g.category,
      readingTime: g.readingTime,
    }));
  }
  if (locale === 'ar') {
    return guidesAr.map((g) => ({ slug: g.slug, url: `/ar/guides/${g.slug}/`, title: g.title, summary: g.summary, category: g.category, readingTime: g.readingTime }));
  }
  if (locale === 'de') {
    return guidesDe.map((g) => ({ slug: g.slug, url: `/de/guides/${g.slug}/`, title: g.title, summary: g.summary, category: g.category, readingTime: g.readingTime }));
  }
  if (locale === 'ja') {
    return guidesJa.map((g) => ({ slug: g.slug, url: `/ja/guides/${g.slug}/`, title: g.title, summary: g.summary, category: g.category, readingTime: g.readingTime }));
  }
  if (locale === 'it') {
    return guidesIt.map((g) => ({ slug: g.slug, url: `/it/guides/${g.slug}/`, title: g.title, summary: g.summary, category: g.category, readingTime: g.readingTime }));
  }

  const localeMap = localizedGuidesMap[locale];

  return guides.map((enGuide) => {
    const locItem = localeMap ? localeMap[enGuide.slug] : undefined;

    return {
      slug: enGuide.slug,
      url: `/guides/${enGuide.slug}/`,
      title: locItem ? locItem.title : enGuide.title,
      summary: locItem ? locItem.summary : enGuide.summary,
      category: locItem ? locItem.category : enGuide.category,
      readingTime: locItem ? locItem.readingTime : enGuide.readingTime,
    };
  });
}
