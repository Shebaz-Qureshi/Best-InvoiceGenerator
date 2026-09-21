import { guides, type Guide } from './guides';

const frTitles: Record<string, string> = {
  'invoice-checklist': 'Checklist de facture : 9 points à vérifier avant l’envoi',
  'payment-terms': 'Conditions de paiement : définir une date d’échéance claire',
  'invoice-numbering': 'Numérotation des factures : un système simple et fiable',
  'quote-vs-invoice': 'Devis ou facture : de l’accord au paiement',
  'freelance-billing-essentials': 'Facturation des freelances : les fondamentaux',
  'invoice-generator-software-guide': 'Logiciel de facturation : choisir le bon outil',
  'ai-invoice-automation': 'Automatisation des factures : les usages utiles',
  'mobile-invoicing-apps': 'Facturation mobile : créer des factures en déplacement',
  'invoice-templates-branding': 'Modèles de facture et identité de marque',
  'overdue-invoice-recovery': 'Factures impayées : relancer avec professionnalisme',
  'international-multi-currency-invoicing': 'Facturation internationale et multidevise',
  'pdf-invoice-generation': 'Créer une facture PDF prête à envoyer',
  'small-business-tax-invoicing': 'Factures et fiscalité des petites entreprises',
  'contractor-milestone-billing': 'Facturation par jalons pour les prestataires',
  'consultant-hourly-retainer-invoicing': 'Facturation des consultants : heures, forfaits et périmètre',
  'recurring-subscription-invoicing': 'Facturation récurrente : organiser les échéances',
  'ecommerce-product-invoicing': 'Factures e-commerce : produits, expédition et commandes',
  'agency-subcontractor-billing': 'Facturation des agences et sous-traitants',
  'how-to-write-an-invoice': 'Comment rédiger une facture : guide pratique',
  'invoice-vs-receipt': 'La différence entre une facture et un reçu',
  'deposit-invoice-guide': 'Facture d’acompte : demander une avance clairement',
  'proforma-invoice-guide': 'Facture pro forma : utilisation et différence avec une facture',
  'invoice-email-templates': 'E-mails de facture : modèles et bonnes pratiques',
  'credit-note-invoice-corrections': 'Avoirs et corrections de facture',
  'vat-invoice-requirements': 'Exigences relatives aux factures avec TVA',
  'invoice-vs-receipt-vs-purchase-order': 'Facture, reçu et bon de commande : les rôles de chacun',
  'purchase-order-invoice-matching': 'Rapprocher bon de commande et facture',
  'e-invoicing-formats-compliance': 'Facturation électronique : formats et conformité',
  'invoice-payment-methods-fees': 'Moyens de paiement et frais sur les factures',
  'early-payment-discounts-late-fees': 'Escompte et pénalités de retard sur facture',
  'invoice-disputes-short-payments': 'Litiges et paiements partiels de factures',
  'invoice-record-retention-audit-trail': 'Conserver ses factures et assurer la traçabilité',
  'invoice-fraud-prevention': 'Prévenir la fraude à la facture',
  'accounts-receivable-aging-cash-flow': 'Créances clients et trésorerie : suivre les échéances',
  'client-billing-onboarding': 'Préparer l’onboarding de facturation d’un client',
  'deposits-advance-payments': 'Acomptes et avances sur la facture finale',
  'invoice-email-delivery': 'Envoyer une facture par e-mail de manière fiable',
  'invoice-line-item-descriptions': 'Décrire clairement les lignes de facture',
  'invoicing-without-registered-business': 'Facturer sans entreprise enregistrée : les bases',
  'multilingual-invoices': 'Factures multilingues : facturer des clients dans leur langue',
  'rebilling-expenses-disbursements': 'Refacturer les frais et débours au client',
  'trades-field-service-invoicing': 'Facturation des artisans et services sur le terrain',
  'withholding-tax-on-invoices': 'Retenue à la source sur facture : comment la traiter',
};

function buildFrenchGuide(guide: Guide): Guide {
  const title = frTitles[guide.slug] ?? guide.title;
  const summary = `Un guide pratique sur ${title.toLocaleLowerCase('fr-FR')} pour créer des factures claires, les vérifier soigneusement et suivre les paiements.`;
  return {
    slug: guide.slug, title, description: summary, category: 'Guides de facturation',
    readingTime: guide.readingTime.replace('min read', 'min de lecture'), reviewed: '21 septembre 2026',
    author: 'Équipe éditoriale de Best Invoice Generator', editor: 'Équipe éditoriale de Best Invoice Generator', summary,
    image: guide.image ? { ...guide.image, alt: `Illustration sur ${title}` } : undefined,
    intro: [`Ce guide présente ${title.toLocaleLowerCase('fr-FR')} dans un français clair et naturel. Il se concentre sur les choix qui aident à créer une facture exacte, facile à contrôler et simple à régler pour le client.`, 'Utilisez ces indications comme point de départ, puis adaptez-les à votre contrat, à votre activité et aux règles applicables dans votre pays.'],
    example: { label: 'Exemple pratique', title: `Un exemple pour ${title.toLocaleLowerCase('fr-FR')}`, body: 'Une petite entreprise a terminé une prestation et souhaite envoyer une demande de paiement sans ambiguïté. La facture contient une référence unique, une description vérifiable, une échéance explicite et des instructions de paiement complètes.', rows: [['Référence', 'Utilisez un numéro de facture unique que le client pourra indiquer lors du paiement.'], ['Description', 'Précisez le produit, le service ou la période de travail.'], ['Échéance', 'Affichez une date précise, et pas seulement un délai relatif.'], ['Total', 'Distinguez la devise, les taxes et les éventuels ajustements.']] },
    diagram: { title: `Un déroulé simple pour ${title.toLocaleLowerCase('fr-FR')}`, caption: 'Une séquence claire rend le document plus facile à contrôler, à approuver et à payer.', steps: ['Préparer les données et la référence', 'Décrire ce qui a été convenu', 'Vérifier le montant et l’échéance', 'Envoyer et suivre le paiement'] },
    sections: [
      { heading: 'Commencez par confirmer les informations essentielles', paragraphs: ['Avant d’émettre la facture, vérifiez le nom exact du client, la prestation convenue, la référence de projet ou de commande et la personne responsable du paiement. Ces détails évitent qu’une facture correcte reste bloquée par manque de contexte.', 'S’il existe un contrat, un bon de commande, un devis accepté ou une modification du périmètre, gardez la référence correspondante près du document. Le destinataire pourra identifier plus rapidement le motif de la demande.'], checklist: ['Vérifiez vos coordonnées et celles du client.', 'Utilisez une référence unique et facile à retrouver.', 'Assurez-vous que le montant correspond à l’accord.', 'Affichez clairement l’échéance et le mode de paiement.'] },
      { heading: 'Présentez l’accord de façon vérifiable', paragraphs: ['Le client ne devrait pas avoir à deviner le sens d’une ligne de facture. Utilisez des descriptions précises, des périodes clairement indiquées et des montants distincts lorsque cela rend la facture plus compréhensible.', 'Ne cachez pas les taxes, remises, frais ou paiements déjà reçus dans le total. Identifiez chaque ajustement clairement afin que le responsable puisse vérifier le montant sans poser de question supplémentaire.'] },
      { heading: 'Conservez le dossier et relancez avec méthode', paragraphs: ['Après l’envoi, conservez ensemble une copie de la facture, l’accord d’origine et la confirmation d’envoi ou de paiement. Choisissez une date fixe pour examiner les factures ouvertes. Un rappel bref et courtois avec le numéro de facture et l’échéance est plus facile à traiter pour le client.', 'Ce guide fournit des informations générales et ne remplace pas un conseil juridique, fiscal ou comptable. Pour les exigences locales, consultez un professionnel qualifié ou l’autorité compétente.'], checklist: ['Enregistrez la date d’envoi.', 'Conservez la facture et les pièces justificatives ensemble.', 'Examinez les montants ouverts par échéance.', 'Envoyez des rappels clairs, courtois et référencés.'] },
    ],
    faq: [
      { question: `Quel est le point le plus important pour ${title.toLocaleLowerCase('fr-FR')} ?`, answer: 'Le client doit pouvoir comprendre le document sans demande supplémentaire : coordonnées correctes, description claire, référence unique, montant, échéance et moyen de paiement.' },
      { question: 'Dois-je vérifier les informations avant l’envoi ?', answer: 'Oui. Une courte vérification des coordonnées client, dates, lignes, total et instructions de paiement évite de nombreux retards et corrections ultérieures.' },
    ],
    related: guide.related,
  };
}

export const guidesFr = guides.map(buildFrenchGuide);
export const getGuideFr = (slug: string) => guidesFr.find((guide) => guide.slug === slug);
