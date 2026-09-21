import { guides, type Guide } from './guides';

const jaTitles: Record<string, string> = {
  'invoice-checklist': '請求書チェックリスト：送付前に確認すべき9項目',
  'payment-terms': '請求書の支払条件：明確な支払期日の決め方',
  'invoice-numbering': '請求書番号の付け方：わかりやすい管理ルール',
  'quote-vs-invoice': '見積書と請求書の違い：承認から入金まで',
  'freelance-billing-essentials': 'フリーランスの請求書作成：基本ガイド',
  'invoice-generator-software-guide': '請求書作成ソフトの選び方',
  'ai-invoice-automation': '請求書業務の自動化：活用できる場面と確認事項',
  'mobile-invoicing-apps': 'モバイル請求書作成：外出先からの発行と送付',
  'invoice-templates-branding': '請求書テンプレートとブランディング',
  'overdue-invoice-recovery': '支払遅延の請求書：丁寧な督促と回収の進め方',
  'international-multi-currency-invoicing': '国際請求書と複数通貨での請求',
  'pdf-invoice-generation': 'PDF請求書の作成と送付前の確認',
  'small-business-tax-invoicing': '小規模事業者の請求書と税金表示',
  'contractor-milestone-billing': '請負業のマイルストーン請求',
  'consultant-hourly-retainer-invoicing': 'コンサルタントの請求：時間・リテーナー・業務範囲',
  'recurring-subscription-invoicing': '定期請求書を整理して管理する方法',
  'ecommerce-product-invoicing': 'EC事業の請求書：商品・送料・注文情報',
  'agency-subcontractor-billing': '代理店と外注先の請求管理',
  'how-to-write-an-invoice': '請求書の書き方：実務に役立つ手順',
  'invoice-vs-receipt': '請求書と領収書の違い',
  'deposit-invoice-guide': '前受金の請求書：手付金を明確に請求する方法',
  'proforma-invoice-guide': 'プロフォーマインボイスとは：使い方と正式請求書との違い',
  'invoice-email-templates': '請求書メール：使いやすい文例と送付のポイント',
  'credit-note-invoice-corrections': 'クレジットノートと請求書の訂正',
  'vat-invoice-requirements': '消費税・付加価値税の請求書要件',
  'invoice-vs-receipt-vs-purchase-order': '請求書・領収書・発注書の役割の違い',
  'purchase-order-invoice-matching': '発注書と請求書の照合方法',
  'e-invoicing-formats-compliance': '電子請求書：形式とコンプライアンス',
  'invoice-payment-methods-fees': '請求書の支払方法と手数料',
  'early-payment-discounts-late-fees': '早期支払割引と遅延料金の扱い',
  'invoice-disputes-short-payments': '請求書の異議と不足入金への対応',
  'invoice-record-retention-audit-trail': '請求書の保存と監査証跡',
  'invoice-fraud-prevention': '請求書詐欺を防ぐための基本',
  'accounts-receivable-aging-cash-flow': '売掛金の年齢管理とキャッシュフロー',
  'client-billing-onboarding': '顧客請求のオンボーディング',
  'deposits-advance-payments': '前受金・前払い金を最終請求書に反映する方法',
  'invoice-email-delivery': '請求書をメールで確実に届ける方法',
  'invoice-line-item-descriptions': '請求書の明細をわかりやすく書く方法',
  'invoicing-without-registered-business': '法人登記なしで請求書を作成する際の基本',
  'multilingual-invoices': '多言語の請求書をわかりやすく作る方法',
  'rebilling-expenses-disbursements': '経費・立替金を顧客に再請求する方法',
  'trades-field-service-invoicing': '現場サービス・職人向けの請求書作成',
  'withholding-tax-on-invoices': '請求書における源泉徴収税の扱い',
};

function buildJapaneseGuide(guide: Guide): Guide {
  const title = jaTitles[guide.slug] ?? guide.title;
  const summary = `「${title}」について、請求内容を明確にし、確認・送付・入金管理を進めるための実践的なポイントを解説します。`;
  return {
    slug: guide.slug, title, description: summary, category: '請求書ガイド',
    readingTime: guide.readingTime.replace('min read', '分で読めます'), reviewed: '2026年9月21日',
    author: 'Best Invoice Generator 編集部', editor: 'Best Invoice Generator 編集部', summary,
    image: guide.image ? { ...guide.image, alt: `「${title}」の解説イラスト` } : undefined,
    intro: [`このガイドでは、${title}を日本語でわかりやすく説明します。正確な請求書を作成し、相手が迷わず確認・承認・支払いできるようにするための考え方をまとめました。`, 'ここで紹介する内容は一般的な実務上のヒントです。契約内容、業種、取引先の手続き、適用される法令に合わせて調整してください。'],
    example: { label: '実例', title: `${title}の実務例`, body: 'ある小規模事業者がサービス提供後に請求書を送付する場面を考えます。請求書には固有の番号、確認しやすい明細、明確な支払期日、支払方法を記載します。', rows: [['請求書番号', '支払時に取引先が参照できる一意の番号を記載します。'], ['明細', '商品・サービス・対象期間を具体的に示します。'], ['支払期日', '相対的な期限だけでなく、具体的な日付を表示します。'], ['請求金額', '通貨、税金、値引きや調整額を分けて表示します。']] },
    diagram: { title: `${title}の基本的な流れ`, caption: '簡潔で一貫した流れにすると、請求書は確認しやすく、承認と支払いも進めやすくなります。', steps: ['情報と参照番号を準備する', '合意した内容を明細にする', '金額と支払期日を確認する', '送付後に入金を管理する'] },
    sections: [
      { heading: '最初に確認する情報', paragraphs: ['請求書を発行する前に、取引先名、請求先担当者、提供した商品やサービス、プロジェクトまたは発注書の参照番号を確認しましょう。情報の不足は、内容が正しい請求書でも処理を止める原因になります。', '契約書、発注書、承認済みの見積書、作業範囲の変更がある場合は、関係する参照情報を請求書の近くに記載します。受け取る側が請求の理由を素早く確認できます。'], checklist: ['自社情報と取引先情報を確認する。', '検索しやすい一意の参照番号を使う。', '合意内容と金額が一致しているか確認する。', '支払期日と支払方法を見つけやすく表示する。'] },
      { heading: '合意内容を確認しやすい形にする', paragraphs: ['取引先が明細の意味を推測する必要がないようにしましょう。具体的な説明、対象期間、必要に応じた明細ごとの金額を示すと、確認と承認がスムーズになります。', '税金、値引き、立替経費、すでに受け取った前払い金を合計額に埋め込まないでください。調整項目を明確に分けることで、経理担当者が追加の問い合わせなしで金額を確認できます。'] },
      { heading: '記録を残し、計画的にフォローする', paragraphs: ['送付後は、請求書、元となる合意書、送付記録、入金記録をまとめて保管します。未入金分を確認する日を決め、期日を過ぎた場合は請求書番号と支払期日を添えた簡潔で丁寧な連絡を行いましょう。', 'このガイドは一般的な情報であり、法律、税務、会計の助言ではありません。国や地域に固有の要件については、専門家または管轄機関に確認してください。'], checklist: ['送付日を記録する。', '請求書と根拠資料を一緒に保管する。', '未入金額を期日ごとに確認する。', '督促は丁寧かつ明確に、参照番号を添えて送る。'] },
    ],
    faq: [
      { question: `${title}で特に重要なことは何ですか？`, answer: '取引先が追加の確認をせずに内容を理解できることです。正しい当事者情報、明確な明細、固有の参照番号、金額、支払期日、支払方法を揃えましょう。' },
      { question: '送付前にもう一度確認すべきですか？', answer: 'はい。取引先情報、日付、明細、合計額、支払情報を短時間で確認するだけで、処理遅延や後からの訂正を大幅に減らせます。' },
    ],
    related: guide.related,
  };
}

export const guidesJa = guides.map(buildJapaneseGuide);
export const getGuideJa = (slug: string) => guidesJa.find((guide) => guide.slug === slug);
