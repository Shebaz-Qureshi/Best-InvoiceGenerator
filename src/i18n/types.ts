export type TextDirection = 'ltr' | 'rtl';

export interface MessageStrings {
  preparingPdf: string;
  openingPrintDialog: string;
  keepOneItem: string;
  logoTooLarge: string;
  coverTooLarge: string;
  pdfDownloaded: string;
  usedPrintDialog: string;
  fromAddress: string;
  billToAddress: string;
  serviceOrProduct: string;
  thankYou: string;
  invoiceSaved?: string;
  invoiceUpdated?: string;
  savedInvoices?: string;
  saveFailed?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SeoSection {
  heading: string;
  body: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
}

export interface Translation {
  langName: string;
  dir: TextDirection;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  header: {
    homeAria: string;
    brand: string;
    tagline: string;
    subtitle: string;
    themeToggle: string;
    languageLabel: string;
    quickLinks: { about: string; contact: string; privacy: string; terms: string; savedInvoices?: string; faq: string };
  };
  tool: {
    invoicePdfInfo: string;
    options: string;
    showTax: string;
    showShipping: string;
    uploadLogo: string;
    uploadCoverArt: string;
    presetArtwork: string;
    presetLiquid: string;
    presetDots: string;
    presetCoral: string;
    presetMonochrome: string;
    currency: string;
    dueDate: string;
    invoiceNumber: string;
    invoiceNumberPlaceholder: string;
    from: string;
    to: string;
    fromPlaceholder: string;
    toPlaceholder: string;
    items: string;
    qty: string;
    rate: string;
    addItem: string;
    addDiscount: string;
    discountPercent: string;
    taxRate: string;
    shippingAmount: string;
    memo: string;
    itemPlaceholder: string;
    qtyPlaceholder: string;
    pricePlaceholder: string;
    memoPlaceholder: string;
    pdfPreview: string;
    printExport: string;
    downloadPdf: string;
    saveInvoice?: string;
    subtotal: string;
    discount: string;
    tax: string;
    shipping: string;
    total: string;
    invoice: string;
    issued: string;
    due: string;
    fromLabel: string;
    toLabel: string;
    itemHeader: string;
    amountHeader: string;
    memoLabel: string;
    messages: MessageStrings;
  };
  seoContent: {
    eyebrow: string;
    heading: string;
    intro: string[];
    sections: SeoSection[];
  };
  faq: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
  };
  faqItems: FaqItem[];
  footer: {
    description: string;
    company: string;
    resources: string;
    aboutUs: string;
    contactUs: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    sections: ContentSection[];
    contact: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    email: string;
    feedback: string;
    response: string;
    emailSub: string;
    feedbackSub: string;
    responseSub: string;
    sendMessage: string;
    formHint: string;
    name: string;
    emailLabel: string;
    message: string;
    send: string;
    openingMail: string;
  };
  terms: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lastUpdated: string;
    sections: ContentSection[];
    contact: string;
    contactUs: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lastUpdated: string;
    sections: ContentSection[];
    contact: string;
    reachOut: string;
  };
  thankYou: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    generateAnother: string;
    backHome: string;
  };
  savedInvoices?: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    statsInvoices: string;
    statsPaid: string;
    statsUnpaid: string;
    statsDraft: string;
    statsTotal: string;
    searchPlaceholder: string;
    sortNewest: string;
    sortOldest: string;
    sortAmountHigh: string;
    sortAmountLow: string;
    selectAll: string;
    deleteSelected: string;
    exportAll: string;
    emptyTitle: string;
    emptyIntro: string;
    createFirst: string;
    noMatches: string;
    clearSearch: string;
    edit: string;
    download: string;
    duplicate: string;
    delete: string;
    statusLabel: string;
    statusDraft: string;
    statusPaid: string;
    statusUnpaid: string;
    itemCountLabel: string;
    dueLabel: string;
    clientLabel: string;
    noClient: string;
    savedOn: string;
    updatedOn: string;
    backHome: string;
    confirmDelete: string;
    confirmDeleteMany: string;
    toastDeleted: string;
    toastDeletedMany: string;
    toastDuplicated: string;
    toastBackupExported: string;
    toastPreparingPdf: string;
    toastPdfReady: string;
    invoicesWord: string;
    actionLabel: string;
  };
}
