# Best Invoice Generator — Design direction

## Intent
Best Invoice Generator is a calm, local-first workspace for turning billing details into a polished invoice without an account wall. It draws on Vercel's *principles* of monochrome precision, deliberate spacing, and crisp typography, not on any competitor's layout or visual assets.

## Product decisions
- **One continuous form, a live document beside it:** people enter billing data on the left and get immediate visual confirmation on the right. This avoids the dense, repeated input rows and delayed output visible in the competitor's generator.
- **Progressive structure:** Details, Items, Brand, and Export make the page easier to scan while avoiding a multi-step wizard that interrupts fast creation.
- **Local by default:** saves go to browser storage; no account is needed for the core workflow. Saved data is explicitly described as local and private.
- **Useful default content:** example line items make calculations and the result legible on first load. Starting a new invoice requires confirmation.
- **Export clarity:** PDF uses the browser's print-to-PDF flow, email prepares a contextual message, and sharing copies a self-contained draft URL.

## Visual system
- A near-black zinc workspace with a single user-selectable accent color. The white invoice surface remains intentionally bright, making the finished document easy to inspect and print.
- Compact 7–14px radii, 1px borders, restrained 13–14px interface text, and small uppercase labels create a practical editorial hierarchy.
- System font stack makes the experience fast and native across devices; no remote fonts are required.
- The invoice preview is intentionally paper-like, but the editor is not designed as a copy of any existing invoice tool.

## Responsive and accessible behavior
- The two-column editor switches to a single vertical flow on smaller screens; inputs retain large enough touch targets and tables scroll rather than collapse data.
- Semantic labels, fieldsets, legends, live status updates, keyboard-focus styling, labelled icon-only controls, and a native dialog support assistive technologies.
- Color is never the sole means of conveying state; status messages use text and accessible contrast.

## Customization scope
The user can add a logo, select one of three invoice treatments, set an accent color, choose from common currencies, and change invoice copy. Currency values use `Intl.NumberFormat` rather than hand-built symbols.

## Educational content
- Educational material is separated from the invoice editor into an English guide library at `/guides/`, leaving the homepage concise and task-first.
- Guide articles use the same neutral, high-contrast Vercel-inspired editorial system as the product: restrained panels, compact metadata, clear headings, and no borrowed competitor UI.
- Every guide carries author/editor attribution, a reviewed date, original worked examples, an accessible HTML diagram, a related-tool action, and closely related reading. FAQs are conditional, never filler.
