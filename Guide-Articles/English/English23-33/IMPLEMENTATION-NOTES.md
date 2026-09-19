# Implementation notes — 10 new /guides/ articles

## Files

| File | URL |
|---|---|
| `proforma-invoice-guide.html` | `/guides/proforma-invoice-guide/` |
| `credit-note-invoice-corrections.html` | `/guides/credit-note-invoice-corrections/` |
| `invoice-vs-receipt-vs-purchase-order.html` | `/guides/invoice-vs-receipt-vs-purchase-order/` |
| `purchase-order-invoice-matching.html` | `/guides/purchase-order-invoice-matching/` |
| `e-invoicing-formats-compliance.html` | `/guides/e-invoicing-formats-compliance/` |
| `invoice-payment-methods-fees.html` | `/guides/invoice-payment-methods-fees/` |
| `early-payment-discounts-late-fees.html` | `/guides/early-payment-discounts-late-fees/` |
| `invoice-disputes-short-payments.html` | `/guides/invoice-disputes-short-payments/` |
| `invoice-record-retention-audit-trail.html` | `/guides/invoice-record-retention-audit-trail/` |
| `invoice-fraud-prevention.html` | `/guides/invoice-fraud-prevention/` |

Each file has two parts: a `<head>` block (meta + three JSON-LD scripts) and an `<article>` body. Drop them into your existing guide layout — no nav/footer chrome is included, since your template already supplies it.

All 10 validate as JSON. Every one carries `Article` + `BreadcrumbList` + `FAQPage` schema and 5 visible FAQs that match the JSON-LD word for word (Google requires the answer text to be visible on the page).

## Fix this first: the OG image bug

Every page on the site currently uses `og-image.svg`. **SVG is not a supported Open Graph image format** on Facebook, LinkedIn, WhatsApp, Slack or X — your link previews are rendering without images everywhere. The new files point to:

```
/images/og/{slug}.png     — 1200 × 630, PNG
```

You'll need to generate those 10 PNGs. If per-article images aren't feasible right now, point them all at a single 1200×630 PNG fallback — that's still a large improvement over the current SVG.

## Add ItemList schema to the hub

The `/guides/` page has no structured data at all. Add this (extend to all 28 guides):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Invoice guides",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://best-invoicegenerator.com/guides/invoice-checklist/", "name": "Invoice checklist: 9 details to confirm before you send" },
    { "@type": "ListItem", "position": 2, "url": "https://best-invoicegenerator.com/guides/payment-terms/", "name": "Invoice payment terms: choose a clear due-date policy" },
    { "@type": "ListItem", "position": 3, "url": "https://best-invoicegenerator.com/guides/proforma-invoice-guide/", "name": "Proforma invoice: what it is and when to send one" }
  ]
}
</script>
```

## Other fixes from the audit

- **Trailing slashes.** The hub links to `/guides/`, the footer links to `/guides`. Pick one, 301 the other. All new files use the trailing-slash form.
- **Nav inconsistency.** FAQ appears in article nav but not hub nav.
- **Read times.** `/payment-terms/` is ~450 words labelled "6 min read". Either expand the older guides or correct the labels — inflated read times plus thin content is a bad combination on commercial queries.
- **Backfill `Article` + `FAQPage` schema onto the existing 18 guides.** Highest-ROI remaining work after shipping these.

## Multi-language reuse

- All translatable copy sits inside `<article>` and the meta block. Nothing is hardcoded in the schema structure.
- Per locale, swap: `og:locale`, `hreflang`, `canonical`, JSON-LD `inLanguage`, and the `<title>`/description.
- Add reciprocal `hreflang` across all locales plus `x-default` — currently missing sitewide.
- Numbers in worked examples are deliberately written without currency symbols so they localise cleanly.
- **`invoice-payment-methods-fees`** — localise the payment rails (ACH / SEPA / UPI / Faster Payments) rather than translating them literally.
- **`e-invoicing-formats-compliance`** is the highest-value page to localise, since mandates are country-specific. It's deliberately written without dates or country deadlines so it doesn't go stale — if you want country specifics, put them on a separately maintained page and link out.

## Editorial guardrails baked in

Three articles touch areas where wrong specifics create liability, so they state principles and direct readers to verify locally rather than quoting numbers that are only correct in one market:

- **Retention periods** (`invoice-record-retention-audit-trail`) — no "keep for 7 years" claim. Please don't add one.
- **Late payment interest** (`early-payment-discounts-late-fees`) — no statutory rates quoted.
- **E-invoicing mandates** (`e-invoicing-formats-compliance`) — no deadlines quoted.

`invoice-fraud-prevention` is written defensively throughout: it describes how to recognise and prevent fraud, never how to carry it out.

## Word counts (article body, including visible FAQs)

Eight land in the 1,250–1,550 range. `proforma-invoice-guide` (~2,090) and `credit-note-invoice-corrections` (~2,025) run longer because both carry worked examples with step sequences — trim the examples if you want them tighter to spec.
