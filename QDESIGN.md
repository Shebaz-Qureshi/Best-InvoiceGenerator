# Best Invoice Generator - Product & Interface Direction

## North star
Create the fastest trustworthy route from a completed piece of work to a professional invoice. The product should feel like a precise work tool: calm, compact, and confident, with no account requirement for the core job.

## Competitor observations
The competitor currently exposes useful fundamentals: invoice history, currency, taxes, shipping, discounts, document templates, language controls, related document types, and download. Its editor also exposes many repeated item inputs in a long vertical form. That confirms which billing fundamentals matter, but it creates an opportunity for a more guided, less overwhelming workflow.

This project does not reuse the competitor's visual hierarchy, markup, copy, or layout. Its distinctive design is a dark product workspace wrapped around a light, print-ready invoice document.

## Design language
- Near-black zinc interface by default, a deliberately paired light workspace, white invoice paper, muted borders, and one customer-selected accent color. The user can switch modes, and their choice persists locally.
- Geometric 1px borders, small radii, compact controls, and no decorative gradients or visual noise.
- Strong type hierarchy: short active-voice labels, compact uppercase eyebrows, and a single focused action per area.
- The form and live document are always adjacent on wide screens, then flow naturally in one column on mobile.

## Interaction principles
- Each edit updates the document immediately; totals use `Intl.NumberFormat` for the selected currency.
- Save an automatic local draft after a brief pause and restore it on the next visit. Explicit saved invoices remain separate from the working draft.
- Keep pricing adjustments understandable: discount, tax, and flat shipping are separate and visibly itemized in the final total.
- Use native controls and semantic elements before custom interaction patterns. Maintain visible keyboard focus, real labels, large touch targets, reduced-motion support, and a skip link.
- A destructive start-over action asks for confirmation and clears the auto-saved draft only when confirmed.

## Built & next opportunities

### Included now
- Local saved history and automatic draft restoration
- Instant preview with tax, discount, flat shipping, currency, template, logo, and accent customisation
- Print-to-PDF, prefilled email, and self-contained share draft link
- Responsive two-column workspace and SEO/FAQ content

### Recommended next
1. **Reusable contacts and item catalogue:** save common clients and services locally for a one-click new invoice.
2. **Quote, credit note, and purchase order modes:** use the same editor and document renderer with purposeful terminology, rather than separate fragmented forms.
3. **Payment status timeline:** add draft, sent, viewed, paid, and overdue labels with an optional due-date reminder.
4. **Tax presets:** provide optional presets (for example GST or VAT) that users can edit and verify, instead of assuming tax rules.
5. **Privacy-preserving sync:** encrypted account sync as an opt-in layer, while retaining local-first use for simple invoices.

## Implementation standards
- Astro page data stays server-rendered where possible; small browser interactions remain in a single client script.
- Tailwind 4 is configured through `@tailwindcss/vite` and imported from the global stylesheet.
- Use scoped component styles for future isolated UI components; reserve global CSS for tokens, shared form controls, print rules, and accessibility behavior.
- Every interactive control must have visible focus and a semantic label; dynamic statuses announce changes politely.

## Guide library direction
- The homepage stays a product workspace. It gives only enough context to help someone create an invoice, then points readers to `/guides/` for learning.
- The guide hub is organized around a billing decision—checking an invoice, choosing payment terms, numbering documents, or moving from quote to payment—instead of imitating a broad competitor-style content catalogue.
- Each article uses the same editorial contract: a named editorial team, an explicit review date, a worked scenario, an original CSS-native diagram with a text caption, a direct tool link, and links to two related guides.
- FAQs appear only when a guide has a small number of persistent, decision-blocking questions. They are intentionally absent from explanatory guides where a checklist answers the reader more directly.
- Diagrams are built in HTML rather than supplied as decorative images, so they remain sharp, fast, responsive, and readable by assistive technology.
